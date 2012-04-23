# AGMLightBox

## What is it?

I created a light box solution that basically accepts a string of html, and will put it into lightbox popup. I created this one, as 
while there are many great ones out there, I found most of them were targeted towards image galleries. If that's what you need,
then I suggest checking out FancyBox or another alternative.

Presently you can create the lightbox in the center of the person's screen, you can create a modal overlay, 
so the background is faded out. You can also specify if you wish the box to position based on the mouse position.

## Examples

You can look at the example.html file included, but the basic setup is as follows:

    <script src="jquery-1.7.2.min.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript" src="agmlightbox.js"></script>
    <script type="text/javascript">
      $.fn.ready(function() {
        $.create_overlay();
        $.light_box('<h1>Hi everybody!</h1>');
      });
    </script>

The light_box function accepts a separate parameter, which is a hash of options.

Here are the options:

<table>
  <tr>
    <th>Field</th>
    <th>Description</th>
    <th>Value</th>
  </tr>
  <tr>
    <td>styles</td>
    <td>Styles hash to use. It will use the following defaults unless you explicitly overwrite each one.</td>
    <td>
        {
          'z-index':'9000',
          'width':'450px',
          'position':'absolute',
          'background-color':'#fff',
          'padding':'20px 25px',
          'border':'1px solid black'
        }
    </td>
  </tr>
  <tr>
    <td>Cursor</td>
    <td>Pass the value of true if you wish to position the box based on the cursor position. Must also pass 'e'</td>
    <td></td>
  </tr>
  <tr>
    <td>e</td>
    <td>This needs to be an object with the properties clientX and clientY. This object is provided through jQuery events
      such as click(). View example2 to see the syntax.
    </td>
    <td></td>
  </tr>
</table>