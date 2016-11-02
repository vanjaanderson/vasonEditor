VasonEditor - a jQuery html editor plugin
=============================================================
This is my examination assignment in course "Javascript" in springterm 2014, on Blekinge Tekniska Högskola (Blekinge Institute of Technology), Sweden.

Working Demo
------------
Take a glance at my charming [VasonEditor](http://vanjaswebb.se/en/vasoneditor).

Requirements
------------
This plugin works with all browsers that can handle HTML5 LocalStorage feature.

Why use this plugin?
--------------------
You can easily use this plugin in all your websites. It looks and works like an editor created for content management systems as WordPress, Joomla or Drupal, but is far more easy to use!

Just follow the easy steps for installation and use. Also look at the fancy features described in the bottom. Have fun!

Instructions for use
--------------------

1. Download and unzip the [vasonEditor](http://github.com/vanjaanderson/vasonEditor) package from GitHub.

2. Put files and directories in your website directory.

3. In your index-file, copy all necessary links and paste them inside the head.
	<pre>
&lt;link rel='stylesheet' type='text/css' href='style/vasonEditor.css' />
&lt;script src="http://code.jquery.com/jquery-latest.min.js">&lt;/script>
&lt;script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1/jquery-ui.min.js">&lt;/script>
&lt;script src="http://modernizr.com/downloads/modernizr-latest.js">&lt;/script>
&lt;script src="script/vasonEditor_functions.js">&lt;/script>
&lt;script src="script/vasonEditor_main.js">&lt;/script>
</pre>

4. Insert `vasonEditor` anywhere in your webpage. The editor will be placed on the exact spot where you put the code.
	<pre>
&lt;div id="vasonEditor">
	&lt;script type="text/javascript">
		$(document).ready( function() {
			$('#vasonEditor').vasonEditor();
		});
	&lt;/script>
&lt;/div>
</pre>

Features in vasonEditor
-----------------------
&bull; `Code mode, for creating or editing text.`  
&bull; `View mode, for viewing result.`  
![Image](img/buttons/bold32.jpg) <sup>`Make text bold.`</sup>  
![Image](img/buttons/italic32.jpg) <sup>`Make text italic.`</sup>  
![Image](img/buttons/H2_32.jpg) <sup>`Use header 2.`</sup>  
![Image](img/buttons/H3_32.jpg) <sup>`Use header 3.`</sup>  
![Image](img/buttons/ul32.jpg) <sup>`Bullet list.`</sup>  
![Image](img/buttons/ol32.jpg) <sup>`Numbered list.`</sup>  
![Image](img/buttons/left32.jpg) <sup>`All content left-justified.`</sup>  
![Image](img/buttons/center32.jpg) <sup>`All content centered.`</sup>  
![Image](img/buttons/right32.jpg) <sup>`All content right-justified.`</sup>  
![Image](img/buttons/justify32.jpg) <sup>`All content margin justified.`</sup>  
![Image](img/buttons/sup32.jpg) <sup>`Superscript.`</sup>  
![Image](img/buttons/sub32.jpg) <sup>`Subscript.`</sup>  
![Image](img/buttons/bg32.jpg) <sup>`Background color, pick from swatches.`</sup>  
![Image](img/buttons/txt32.jpg) <sup>`Text color, pick from swatches.`</sup>  
![Image](img/buttons/hcolor32.jpg) <sup>`Heading color, pick from swatches.`</sup>  
![Image](img/buttons/quote32.jpg) <sup>`Blockquoting.`</sup>  
![Image](img/buttons/link32.jpg) <sup>`Insert link.`</sup>  
![Image](img/buttons/image32.jpg) <sup>`Insert image and image caption.`</sup>  

Edit color swatches
-------------------
To edit the color swatches, open the `vasonEditor_functions.js` in script directory. Change colors, on lines 209&mdash;212. Find colors or color codes to use on [http://www.w3schools.com/html/html_colornames.asp](http://www.w3schools.com/html/html_colornames.asp).
<pre style='margin-left:0px'>
var swatches = [
  {"col1":"<span style='color: red'>white</span>","col2":"<span style='color: red'>mistyrose</span>","col3":"<span style='color: red'>lightcyan</span>","col4":"<span style='color: red'>honeydew"</span>,"col5":"<span style='color: red'>lightyellow</span>"},
  {"col1":"<span style='color: red'>lightgray</span>","col2":"<span style='color: red'>lightpink</span>","col3":"<span style='color: red'>lightskyblue</span>","col4":"<span style='color: red'>palegreen</span>","col5":"<span style='color: red'>yellow</span>"},
  {"col1":"<span style='color: red'>gray</span>","col2":"<span style='color: red'>indianred</span>","col3":"<span style='color: red'>dodgerblue</span>","col4":"<span style='color: red'>limegreen</span>","col5":"<span style='color: red'>gold</span>"},
  {"col1":"<span style='color: red'>black</span>","col2":"<span style='color: red'>maroon</span>","col3":"<span style='color: red'>blue</span>","col4":"<span style='color: red'>green</span>","col5":"<span style='color: red'>darkorange</span>"}
];
</pre>

To-Do
-----
* More functions to use.
* Possibility to enable / disable functions.
* Use with SQLite or MySQL databases.

Change Log
----------------
* v1.0    - First release of vasonEditor | 2014-05-24
* v1.1	  - Minor changes in instructions (README.md) | 2014-05-29
