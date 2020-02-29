# AnnotationCounter
Chrome extension to count IDs of videos annotated on macula.eecs.umich.edu

Make sure to enable "Allow in Incognito" if that's where you're annotating videos.

When you first navigate to macula.eecs.umich.edu, you should receive an alert dialog, "Beginning counting IDs"

Once you're done annotating, search "annotation-counter-ids" (so that it appears in the page URL) and you'll receive an alert dialog with the list of video IDs that you have annotated.

It's probably good to save the IDs after each session (and don't clear window.localStorage...that's where they're stored!)
