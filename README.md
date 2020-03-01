# AnnotationCounter
Chrome extension to count IDs of videos annotated on macula.eecs.umich.edu

To install the extension, either clone this repository or download the containing folder (you'll need a folder containing the .json and .js file). In Chrome, navigate to chrome://extensions and flip the "Developer Mode" switch (upper right). Then, click the "Load Unpacked" button that appears and select the folder where the extension files are stored. "Annotation Counter" should appear in your list of extensions. The extension should be enabled by default, but if you use Incognito Mode to annotate, you'll need to go to the "Details" section and "Allow In Incognito" so that it can track your annotations!

When you first navigate to macula.eecs.umich.edu, you should receive an alert dialog, "Beginning counting IDs."  (If you do not, something's wrong!). From there, you can annotate as normal, the extension will track the ID of each video that you view (including videos that you do not annotate...make sure disable the extension if you're viewing videos that have already been annotated.

Once you're done annotating, search "annotation-counter-ids" (so that it appears in the page URL) and you'll receive an alert dialog with the list of video IDs that you have annotated.  It's best practice to save the IDs to a text file after each session (and don't clear window.localStorage...that's where they're stored!)

Note that removing the extension from Chrome may cause the list of IDs to be lost.
