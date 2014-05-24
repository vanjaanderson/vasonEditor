(function($) {
  $.fn.vasonEditor = function() {
    // Create some DOM
    $('title').html('Vason Editor');
    $('<form id="main"></form>').appendTo('body');
    $('<div id="panel"></div>').prependTo('form#main');
    $('<div id="toppanel"></div>').prependTo('form#main');

    // Fill form element
    $('<label></label>').html('Rubrik').appendTo('form#main');
    $('<input id="heading" type="text" />').appendTo('form#main');

    $('<label></label>').html('Innehåll').appendTo('form#main');
    $('<textarea id="content" class="textbox"></textarea>').appendTo('form#main');

    $('<div id="contentdiv" class="textbox"></div>').appendTo('form#main');

    $('<a id="design" href="javascript:designMode()">Förhandsvisa</a>').prependTo('#toppanel');
    $('<input id="save" type="submit" value="Spara" onclick="javascript:saveLS()" />').prependTo('#toppanel');

    // Create dialog form for links
    $('<form id="overlay"></form>').appendTo('body');
    $('<label></label>').html('Adress till länk').appendTo('form#overlay');
    $('<input id="url" type="url" value="http://vanjaanderson.com" />').appendTo('form#overlay');

    $('<a href="#" id="close" class="close">stäng</a>').appendTo('#overlay');
    $('<button id="saveurl" class="save" onclick="saveUrl()">Spara</button>').appendTo('#overlay');

    // Create dialog form for images
    $('<form id="imgoverlay"></form>').appendTo('body');
    $('<label></label>').html('Namn på bild (img/pic/...)').appendTo('form#imgoverlay');
    $('<input id="insertimg" type="text" value="catandmice.jpg" />').appendTo('form#imgoverlay');
    $('<label></label>').html('Bildtext').appendTo('form#imgoverlay');
    $('<input id="insertcaption" type="text" value="" />').appendTo('form#imgoverlay');

    $('<a href="#" id="close" class="close">stäng</a>').appendTo('#imgoverlay');
    $('<button id="saveimg" class="save" onclick="saveImage()">Spara</button>').appendTo('#imgoverlay');

    // Buttons in #panel
    $('#panel').append('<img id="bold"     class="hover" src="img/buttons/bold32.jpg"     alt="bold text"         title="Fet text"          onclick="getSel(\'[b]\',\'[/b]\')" />');
    $('#panel').append('<img id="italic"   class="hover" src="img/buttons/italic32.jpg"   alt="kursiv text"       title="Kursiv text"       onclick="getSel(\'[i]\',\'[/i]\')" />');
    $('#panel').append('<img id="h2"       class="hover" src="img/buttons/H2_32.jpg"      alt="rubrik 2"          title="Rubrik 2"          onclick="getSel(\'[h2]\',\'[/h2]\')" />');
    $('#panel').append('<img id="h3"       class="hover" src="img/buttons/H3_32.jpg"      alt="rubrik 3"          title="Rubrik 3"          onclick="getSel(\'[h3]\',\'[/h3]\')" />');
    $('#panel').append('<img id="ul"       class="hover" src="img/buttons/ul32.jpg"       alt="punktlista"        title="Punktlista\nMarkera listpunkter\nmed minus (-)"        onclick="getSel(\'[ul]\',\'[/ul]\')" />');
    $('#panel').append('<img id="ol"       class="hover" src="img/buttons/ol32.jpg"       alt="nummerlista"       title="Nummerlista\nMarkera listpunkter\nmed minus (-)"       onclick="getSel(\'[ol]\',\'[/ol]\')" />');
    $('#panel').append('<img id="left"     class="hover" src="img/buttons/left32.jpg"     alt="vänsterjusterat"   title="Vänsterjusterat"   onclick="adjustText(\'left\')" />');
    $('#panel').append('<img id="center"   class="hover" src="img/buttons/center32.jpg"   alt="centrerat"         title="Centrerat"         onclick="adjustText(\'center\')" />');
    $('#panel').append('<img id="right"    class="hover" src="img/buttons/right32.jpg"    alt="högerjusterat"     title="Högerjusterat"     onclick="adjustText(\'right\')" />');
    $('#panel').append('<img id="justify"  class="hover" src="img/buttons/justify32.jpg"  alt="marginaljusterat"  title="Marginaljusterat"  onclick="adjustText(\'justify\')" />');
    $('#panel').append('<img id="sup"      class="hover" src="img/buttons/sup32.jpg"      alt="superscript"       title="Upphöjt tecken"    onclick="getSel(\'[sup]\',\'[/sup]\')" />');
    $('#panel').append('<img id="sub"      class="hover" src="img/buttons/sub32.jpg"      alt="subscript"     	  title="Nedsänkt tecken"   onclick="getSel(\'[sub]\',\'[/sub]\')" />');
    // Color buttons opens swatches palettes, see getColors() (functions.js)
    $('#panel').append('<img id="bgColor"  class="hover" src="img/buttons/bg32.jpg"       alt="bg color"          title="Bakgrundsfärg" />');
    $('#panel').append('<img id="txtColor" class="hover" src="img/buttons/txt32.jpg"      alt="text color"        title="Textfärg"  />');
    $('#panel').append('<img id="hColor"   class="hover" src="img/buttons/hcolor32.jpg"   alt="heading color"     title="Rubrikfärg" />');
    $('#panel').append('<img id="quote"    class="hover" src="img/buttons/quote32.jpg"    alt="blockquote"        title="Citat"             onclick="getSel(\'[blockquote]\',\'[/blockquote]\')" />');
    $('#panel').append('<img id="link"     class="hover" src="img/buttons/link32.jpg"     alt="link"              title="Infoga länk" />');
    $('#panel').append('<img id="image"    class="hover" src="img/buttons/image32.jpg"    alt="insert image"      title="Infoga bild" />');
      
    // Use function changeImgOnHover on elements with class hover (=button images)
    $('.hover').changeImgOnHover();

    // Create DOM for swatch tables (functions.js)
    showSwatches();
    
    // Hide and show swatch tables when hovering bg color and txt color buttons (functions.js)
    toggleSwatches();

    // Append close links and button in tables
    $('<tr></td><td colspan="4" class="close"><a href="#">stäng</a></td><td class="img"><img src="img/buttons/bg16.jpg" /></td></tr>').appendTo('#swatchesBg');
    $('<tr></td><td colspan="4" class="close"><a href="#">stäng</a></td><td class="img"><img src="img/buttons/txt16.jpg" /></td></tr>').appendTo('#swatchesTxt');
    $('<tr></td><td colspan="4" class="close"><a href="#">stäng</a></td><td class="img"><img src="img/buttons/hcolor16.jpg" /></tr>').appendTo('#swatchesH');
    
    // Close tables when clicking link and url form when clicking button
    $('.close').click(function() {
      $('#swatchesBg').hide();
      $('#swatchesTxt').hide();
      $('#swatchesH').hide();
      $('#overlay').hide();
      $('#imgoverlay').hide();
    });

    // Insert selected text into input link text
    $("#link").click(function() {
      var selected = insertUrl($("#content"));

      getSel('[a href="#"]','[/a]');

      $('#overlay').show();
    });

    // Insert selected text into input image text
    $("#image").click(function() {
      var selected = insertImage($("#content"));

      getSel('[img src="@','"][caption="§" /]');

      $('#imgoverlay').show();
    });

    // Get colors from swatches palettes (functions.js)
    getColors();
  };
}) (jQuery);


