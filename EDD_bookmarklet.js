 /**
  * Bookmarklet by Aaron Melocik
  * https://github.com/SterlingVix
  **/
 var customPastableInput = '<div class="modal-container" style="box-sizing: border-box; margin: 1em; background-color: white; width: calc(100% - 2em); position: fixed; top: 0px; padding: 0.25em; border-radius: 1em; text-align: center;"> <p style="text-align: center; font-size: 1.5em;">Paste spreadsheet data here (must contain 12 cells):</p> <textarea name="spreadsheet_data" class="input-paste-area" style="width: 90%; height: 2em; margin: 0px 5%;"></textarea> <br /> <div style="width: 100%"> <button id="custom-populate-button" style="margin: 1em auto; font-size: 1.5em;">Populate Now</button> </div> </div> ';
 window.newDiv = document.createElement('div');
 window.newDiv.innerHTML = customPastableInput;
 document.body.appendChild(window.newDiv);
 window.setTimeout(function () {
     var populateButton = document.querySelector('button#custom-populate-button');
     populateButton.addEventListener('click', function (event) {
         var pageInputs = document.querySelectorAll('input.TextBox');
         var textInputArea = document.querySelector('textarea.input-paste-area');
         var finalTextArea = document.querySelector('textarea.TextBox');
         var pastedData = textInputArea.value;
         var inputArray = [];
         for (var i = 0; i < pageInputs.length; i++) {
             inputArray.push(pageInputs[i]);
         }
         inputArray.push(finalTextArea);
         var rows = pastedData.split("\n");
         for (var y in rows) {
             var cells = rows[y].split("\t");
             if (cells.length !== 12) {
                 window.alert('Warning! Not enough input data to copy! Ensure there are 12 cells of input data.');
                 continue;
             }
             if (inputArray.length !== 12) {
                 window.alert('Warning! Not all input fields have been captured! This is a problem with the program.');
                 continue;
             }
             for (var i = 0; i < inputArray.length; i++) {
                 var thisData = cells[i];
                 inputArray[i].value = cells[i];
             }
         } /* end for (data in rows) */
         document.body.removeChild(window.newDiv);
     }); /* end populate button click handler */
 }, 400);
