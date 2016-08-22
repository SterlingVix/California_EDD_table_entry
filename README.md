# California EDD table entry

## UPDATE 8/22/2016

Of course, within 2 weeks of pushing this repo it looks like the EDD has updated their interface, making this temporarily obsolete.

If it seems useful I will update this repo and remove this notice. If you actually want me to push ahead on this, please message me with the request to work on this, and I'll try to move it up the queue. Thanks!

## Original README.md:

You're between jobs. I've been there. If you're lucky enough to live in California, you may have access to Unemployment Insurance through California's Employment Development Department, here:

[California EDD UI Online][eddui]

But maybe you've noticed that certifying for benefits using their online form requires a frankly painful amount of cutting and pasting:

![EDD UI Work Search form pic](https://raw.githubusercontent.com/SterlingVix/California_EDD_table_entry/master/EDD_form.jpg)

So this is a **bookmarklet** to allow for easier line entry on this form. A **bookmarklet** is a discrete snippet of code (JavaScript) that lives in your bookmarks bar. You can execute it on a website - any website! - by clicking the bookmark link in the bookmark bar. Instead of navigating you to a new page it will simply execute the code on the current page.

## Usage Instructions
**First**: create the bookmarklet. You can do this by either:
1. Manually creating a bookmarklet using the JavaScript in [EDD_bookmarklet.js][eddbookmarkletjs] or
2. Pasting [the code][eddbookmarkletjs] into a bookmarklet-generating site, like [Mr. Cole's Bookmarklet Creator][bookmarkletcreator].

**Second**: track your job search details in a spreadsheet (like Excel or Google Sheets). You're probably already doing this. **However:** Be sure that you have exactly 12 cells, similar to the following:

    Submit Date	Company	Address1	Address2	City	Zip-5	Zip-4	Title of contact	First Name	Last Name	Type of work	Results

**Third**: Log in to your EDD UI Online portal and go to "Certify Benefits"

**Finally**: at each "Work Search Record" page:
1. Click the bookmarklet from your bookmarks bar
2. Copy the current line from your spreadsheet
3. Paste it into the popup at the top of the "Work Search Record" page
4. Click the "Populate Now" button to populate the fields on the page
 

## Anything else?
Not really, though you will have to manually update the state if you're looking out of state, and select the appropriate option for the "*Do you have any additional work search records to report?*" radio buttons at the bottom of the page.

I hope this helps you reduce your stress during your job search, and good luck! Please feel free to reach out if you encounter any problems with the bookmarklet, or, if you use GitHub, to contribute code fixes.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job)
   [eddui]: <https://ccr.edd.ca.gov/CCR/Pages/Public/ExternalUser/UIOnline.aspx?UserCultureInfo=en-US>
   [eddbookmarkletjs]: <https://raw.githubusercontent.com/SterlingVix/California_EDD_table_entry/master/EDD_bookmarklet.js>
   [bookmarkletcreator]: <http://mrcoles.com/bookmarklet/>
