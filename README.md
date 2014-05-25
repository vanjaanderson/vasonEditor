VasonEditor - a jQuery html editor plugin
=============================================================
This is my examination assignment in course "Javascript" in springterm 2014, on Blekinge Tekniska Högskola (Blekinge Institute of Technology), Sweden.

Requirements
------------
This plugin works with all browsers that can handle HTML5 LocalStorage feature.

Instructions for use
--------------------

1. Download and unzip the [vasonEditor](http://github.com/vanjaanderson/vasonEditor) package from GitHub.

2. Put files and directories in your website directory.

3. In your index-file, copy all necessary links and paste them inside the head.
	<pre>
&lt;link rel='stylesheet' type='text/css' href='style/vasonEditor.css' />
&lt;link rel='apple-touch-icon' href='img/apple-touch-icon.png' />
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


###Features in vasonEditor
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
![Image](img/buttons/bg32.jpg) <sup>`Background color.`</sup>  
![Image](img/buttons/txt32.jpg) <sup>`Text color.`</sup>  
![Image](img/buttons/hcolor32.jpg) <sup>`Heading color.`</sup>  
![Image](img/buttons/quote32.jpg) <sup>`Blockquoting.`</sup>  
![Image](img/buttons/link32.jpg) <sup>`Insert link.`</sup>  
![Image](img/buttons/image32.jpg) <sup>`Insert image and image caption.`</sup>  

To-Do
-----
* More functions to use.
* Possibility to enable / disable functions.
* Use with SQLite or MySQL databases.

Change Log
----------------
* v1.0    - First release of vasonEditor | 2014-05-24