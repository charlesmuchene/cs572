The read and delivered file was an MPEG-4 video file of size 1.12GB hosted locally on my machine.

The following were my observations:
(The referenced memory consumption snapshots can be found in the containing folder)

- readSync 
This method reads the large file synchronously.

It took about 3-7 seconds to render the video on the browser page.
For 1 tab, Node had 7 threads and consumed 1.04GB of memory.
For 3 tabs, Node still had 7 threads but consumed a whooping 3.11GB of memory!

- readAsync
This method reads the large file asynchronously with a callback attached.

It took about the same time as the readSync to start playing the video on the browser.
For 1 tab, Node had 11 threads and consumed 1.04GB of memory.
For 3 tabs, Node still had 11 threads but consumed 3.12GB of memory!

- readStream
This method streams the large file and streams it to the response write stream.

The video almost played immediately after loading the page.
For 1 tab, Node had 11 threads and consumed 23.5MB of memory!
For 3 tabs, Node still had 11 threads but consumed 12.2MB of memory!

My conclusion is that streaming I/O allows a system to manage resources efficiently.