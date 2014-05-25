// Run init function on page load
window.onload = init;

function init() {
  // Initial text in textarea
  initial = 'Do lists by highlighting the content of your choice, choose type of list from the panel and write a minus in front of each post.\n\n[ul]list object\n-list object\n-list object[/ul]\n\n[ol]list object\n-list object\n-list object[/ol]\n\n[blockquote]When I went to school, they asked me what I wanted to be when I grew up. I wrote down &rdquo;Happy&rdquo;. They told me I didn&rsquo;t understand the assignment and I told them they didn&rsquo;t understand life.\n&mdash; John Lennon[/blockquote]\n\nCheck link here, by highlighting and choose link in panel.';
  // Get saved values from LocalStorage (if any)
  getLS();
  // Autosave every 5 minutes
  window.setInterval(saveLS, 30000);
  // Check LocalStorage with Modernizr
  if (Modernizr.localstorage) {
    // Do nothing but use LocalStorage!
  } else {
    // Show feedback
    $('body').prepend("<p style='color:red'>Tyvärr, du har en för gammal webbläsare för att kunna använda min editor!</p>");
  }
}

// Fetch values from Local Storage (if any)
function getLS() {
  // Check heading content
  if(localStorage.headingContent) {
    document.getElementById('heading').value = localStorage.headingContent;
  } else if(localStorage.headingContent == 'undefined') {
    document.getElementById('heading').value = 'Example of content';
  } else {
    document.getElementById('heading').value = 'Example of content';
  }
  // Check textarea content
  if(localStorage.textContent) {
    document.getElementById('content').value = localStorage.textContent;
  } else if(localStorage.textContent == 'undefined') {
    document.getElementById('content').value = initial;
  } else {
    document.getElementById('content').value = initial;
  }
  // Check bg color value
  if(localStorage.bgColor) {
    document.getElementById('contentdiv').style.backgroundColor = localStorage.bgColor;
  } else if(localStorage.bgColor == 'undefined') {
    document.getElementById('contentdiv').style.backgroundColor = 'white';
  } else {
    document.getElementById('contentdiv').style.backgroundColor = 'white';
  }
  // Check text color value
  if(localStorage.textColor) {
    document.getElementById('contentdiv').style.color = localStorage.textColor;
  } else if(localStorage.textColor == 'undefined') {
    document.getElementById('contentdiv').style.color = 'black';
  } else {
    document.getElementById('contentdiv').style.color = 'black';
  }
  // Check text align value
  if(localStorage.textAlign) {
    document.getElementById('contentdiv').style.textAlign = localStorage.textAlign;
  } else if(localStorage.textAlign == 'undefined') {
    document.getElementById('contentdiv').style.textAlign = 'left';
  } else {
    document.getElementById('contentdiv').style.textAlign = 'left';
  }
}

// Save to LocalStorage
function saveLS() {
  localStorage.headingContent = document.getElementById('heading').value;
  localStorage.textContent = document.getElementById('content').value;
  // Save background color, see row 284
  // Save text color, see row 291
  // Save heading color, see row 293
  // Save text alignment, see row 344

} 

(function($) {
  $.fn.changeImgOnHover = function() {    
    $('.hover').each(function() {
      // Get filename in src attribute, minus extension
      var imgName = $(this).attr('src').slice(0,-4);
      // Get files extension
      var extName = $(this).attr('src').split('.').pop();
      // Name of hover-img
      var hoverImg = imgName + '_hover.' + extName;
      // Name of default image
      var origImg = imgName + '.' + extName;

      $(this).mouseover(function() {
        $(this).attr('src', hoverImg);
      });
      $(this).mouseout(function() {
        $(this).attr('src', origImg);
      });
    });
  };
}) (jQuery);

function designMode() {
  //location.reload();
  // Close tables
  $('#swatchesBg').hide();
  $('#swatchesTxt').hide();
  $('#swatchesH').hide();
  $('#overlay').hide();
  $('#imgoverlay').hide();

  // Mirror content and values from #content
  var text = document.getElementById('content').value;
  var heading = document.getElementById('heading').value;
  var bgC = document.getElementById('contentdiv').style.backgroundColor;
  var hC = localStorage.headingColor;
  var textC = document.getElementById('contentdiv').style.color;
      
  // Replace textarea bracket code with real html code for the design mode
  // g = global search (match all)
  // i = ignore case
  // n = newline
  text = text.replace(/\</gi, "<");
  text = text.replace(/\>/gi, ">"); 
  // Exchange double newlines for </p><p>
  text = text.replace(/(\n\n)/gi, "</p><p>");
  text = text.replace(/\n/gi, "<br />");  
  // Basic BBCodes.
  text = text.replace(/\[b\]/gi, "<strong>");
  text = text.replace(/\[\/b\]/gi, "</strong>");     
  text = text.replace(/\[i\]/gi, "<em>");
  text = text.replace(/\[\/i\]/gi, "</em>");
  text = text.replace(/\[h2\]/gi, "<h2>");
  text = text.replace(/\[\/h2\]/gi, "</h2><p>");
  text = text.replace(/\[h3\]/gi, "<h3>");
  text = text.replace(/\[\/h3\]/gi, "</h3><p>");
  // Exchange - or digit to a list bullet
  text = text.replace(/-/gi, "<li>");
  // unordered list
  text = text.replace(/\[ul\]/gi, "<ul><li>");
  text = text.replace(/\[\/ul\]/gi, "</li></ul>");
  // ordered list
  text = text.replace(/\[ol\]/gi, "<ol><li>");
  text = text.replace(/\[\/ol\]/gi, "</li></ol>");
  // Superscript and subscript
  text = text.replace(/\[sup\]/gi, "<sup>");
  text = text.replace(/\[\/sup\]/gi, "</sup>");
  text = text.replace(/\[sub\]/gi, "<sub>");
  text = text.replace(/\[\/sub\]/gi, "</sub>");
  // Blockquote
  text = text.replace(/\[blockquote\]/gi, "<blockquote>");
  text = text.replace(/\[\/blockquote\]/gi, "</blockquote>");
  // Anchor
  text = text.replace(/\[a href=/gi, "<a href=");
  text = text.replace(/\#\"\]/gi, "\#\">");
  text = text.replace(/\[\/a\]/gi, "</a>");
  // Image
  text = text.replace(/\[img src=/gi, "<figure><img src=");
  text = text.replace(/\@/gi, "\@");
  // Figcaption
  text = text.replace(/\]\[caption=/gi, " /><figcaption>");
  text = text.replace(/\§/gi, "\§");
  text = text.replace(/\/]/gi, "</figcaption></figure>");

      
  // Create HTML and CSS output
  $('#contentdiv').html('<p>' + text + '</p>');
  $('#contentdiv').prepend('<h1>' + heading + '</h1>');
  $('#contentdiv').css('background-color', bgC);
  $('#contentdiv').css('color', textC);
  
  // Same color on all type of headings
  $('#contentdiv h1').css('color', hC);
  $('#contentdiv h2').css('color', hC);
  $('#contentdiv h3').css('color', hC);
  $('#contentdiv h4').css('color', hC);
  $('#contentdiv h5').css('color', hC);
  $('#contentdiv h6').css('color', hC);

  // Remove labels and heading input
  $('label').hide();
  $('.hover').hide();
  $('#heading').hide();
  $('#content').hide();
  $('#contentdiv').show();

  // Change link src
  $('#design').html('Redigera');
  $('#design').attr('href', 'javascript:editMode()');
}

function editMode() {
  location.reload();
  //saveLS();
  var text = localStorage.textContent;
  var heading = localStorage.headingContent;

  $('#content').focus();

  $('#content').html(text);
  $('#heading').val(heading);

  // Change link src
  $('#design').html('Förhandsvisa');
  $('#design').attr('href', 'javascript:designMode()');
  $('label').show();
  $('.hover').show();
  $('#heading').show();
  $('#content').show();
  $('#contentdiv').hide();
}

function showSwatches() {
  var swatches = [
    { "col1":  "white",     "col2": "mistyrose",  "col3": "lightcyan",    "col4": "honeydew",   "col5": "lightyellow"  },
    { "col1":  "lightgray", "col2": "lightpink",  "col3": "lightskyblue", "col4": "palegreen",  "col5": "yellow" },
    { "col1":  "gray",      "col2": "indianred",  "col3": "dodgerblue",   "col4": "limegreen",  "col5": "gold" },
    { "col1":  "black",     "col2": "maroon",     "col3": "blue",         "col4": "green",      "col5": "darkorange" }
  ];

  // Create some DOM for swatches tables
  $('<table id="swatchesBg"></table>').appendTo('#panel');
  $('<table id="swatchesTxt"></table>').appendTo('#panel');
  $('<table id="swatchesH"></table>').appendTo('#panel');

  var tblBg = $('#swatchesBg'),
  tblTxt = $('#swatchesTxt'),
  tblH = $('#swatchesH'),
  column = ["col1", "col2", "col3", "col4", "col5"];
  // Bg swatches 
  $.each(swatches, function(i, nurs) {
    var tr = $('<tr>');
    $.each(column, function(i, id) {
      $('<td>').css('background-color', nurs[id]).attr('id', nurs[id]).appendTo(tr);
    }); 
    tblBg.append(tr);
  });
  // Text swatches
  $.each(swatches, function(i, nurs) {
    var tr = $('<tr>');
    $.each(column, function(i, id) {
      $('<td>').css('background-color', nurs[id]).attr('id', nurs[id]).appendTo(tr);
    }); 
    tblTxt.append(tr);
  });
  // Heading swatches
  $.each(swatches, function(i, nurs) {
    var tr = $('<tr>');
    $.each(column, function(i, id) {
      $('<td>').css('background-color', nurs[id]).attr('id', nurs[id]).appendTo(tr);
    }); 
    tblH.append(tr);
  });
};

function toggleSwatches() {
  // Hide and show swatch tables 
  $('#bgColor').mouseover(function() {
    $('#swatchesTxt').hide();
    $('#swatchesH').hide();
    $('#swatchesBg').show();
    $('#swatchesBg').css('left', '424px');
  });
  $('#txtColor').mouseover(function() {
    $('#swatchesBg').hide();
    $('#swatchesH').hide();
    $('#swatchesTxt').show();
    $('#swatchesTxt').css('left', '458px');
  });
  $('#hColor').mouseover(function() {
    $('#swatchesBg').hide();
    $('#swatchesH').show();
    $('#swatchesTxt').hide();
    $('#swatchesH').css('left', '492px');
  });
  // Hide tables from all buttons
  $('#bold, #italic, #h2, #h3, #ul, #ol, #left, #center, #right, #justify, #sup, #sub, #quote, #link, #image').mouseover(function() {
    $('#swatchesBg').hide();
    $('#swatchesH').hide();
    $('#swatchesTxt').hide();
  });
}

function getColors() {
  // Change bg color by clicking a swatch
  $('#swatchesBg td').click(function() {
    var color = $(this).attr('id');
    $('#content').css('backgroundColor', color);
    $('#contentdiv').css('backgroundColor', color);
    localStorage.bgColor = color;
  })
  // Change text color by clicking a swatch
  $('#swatchesTxt td').click(function() {
    var color = $(this).attr('id');
    $('#content').css('color', color);
    $('#contentdiv').css('color', color);
    localStorage.textColor = color;
  })
  // Save heading color to LS by clicking a swatch
  $('#swatchesH td').click(function() {
    var color = $(this).attr('id');
    localStorage.headingColor = color;
  })
  // Link colors
  $('#linkcolor td').click(function() {
    var color = $(this).attr('id');
    localStorage.linkColor = color;
  })
  $('#hovercolor td').click(function() {
    var color = $(this).attr('id');
    localStorage.hoverColor = color;
  })
  $('#visitcolor td').click(function() {
    var color = $(this).attr('id');
    localStorage.visitColor = color;
  })
}

// A simple text editor 
// http://www.dreamincode.net/forums/topic/246337-a-simple-text-editor-in-html-javascript-and-a-tiny-bit-of-css/
function getSel(val1, val2) {
  // Get the text area
  textArea = document.getElementById('content');
  //textArea = document.getElementById('linktext');
      
  // IE specific code.
  if( -1 != navigator.userAgent.indexOf ("MSIE") ) { 
        
    var range = document.selection.createRange();
    var stored_range = range.duplicate();
        
    if(stored_range.length > 0) {
      stored_range.moveToElementText(textArea);
      stored_range.setEndPoint('EndToEnd', range);
      textArea.selectionStart = stored_range.text.length - range.text.length;
      textArea.selectionEnd = textArea.selectionStart + range.text.length;
    }
    if(localStorage.textContent) {
      textArea.value = localStorage.textContent;
    }
  }
  // Check if there is a selection
  if (typeof(textArea.selectionStart) != "undefined") {
    // Split the text in three pieces - the selection, and what comes before and after
    var begin = textArea.value.substr(0, textArea.selectionStart);
    var selection = textArea.value.substr(textArea.selectionStart, textArea.selectionEnd - textArea.selectionStart);
    var end = textArea.value.substr(textArea.selectionEnd);
        
    // Insert the tags between the three pieces of text
    textArea.value = begin + val1 + selection + val2 + end;
    // Number of characters in text
    textlen = (textArea.value).length;
    // Set cursor position at the end of text - length of val2
    cursorPos = textlen - val2.length;

    // Set cursor position
    setCursorPos(textArea, cursorPos);
  } 
}

function adjustText(value) {
  var element = document.getElementById('contentdiv');
  element.style.textAlign = value;
  // Save value to LS
  localStorage.textAlign = value;
}

// Set cursor (caret position) 
// http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
function setCursorPos(el, pos) {
  if(el.setSelectionRange) {
    el.focus();
    el.setSelectionRange(pos, pos);
  }
  else if (el.createTextRange) {
    var range = el.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

// Fetch url from highlighted text to input field
function insertUrl($sel) {
  var value = $sel.val();
  var sel = $sel.get(0);
  return $sel.val().substring(sel.selectionStart, sel.selectionEnd);
}

function saveUrl() {
  saveLS();
  var linkUrl = $('#url').val();

  var text = document.getElementById('content').value;
  text = text.replace(/\#/gi, linkUrl);
  // Save changes to LS
  localStorage.textContent = text;
  text = localStorage.textContent;

  $('#overlay').hide();

  location.reload();
}

// Fetch url from highlighted text to input field
function insertImage($sel) {
  var value = $sel.val();
  var sel = $sel.get(0);
  return $sel.val().substring(sel.selectionStart, sel.selectionEnd);
}

function saveImage() {
  saveLS();
  var imgName = 'img/pic/' + $('#insertimg').val();
  var caption = $('#insertcaption').val();

  var text = document.getElementById('content').value;
  text = text.replace(/\@/gi, imgName);
  text = text.replace(/\"§\"/gi, caption);
  // Save changes to LS
  localStorage.textContent = text;
  text = localStorage.textContent;

  $('#imgoverlay').hide();

  location.reload();
}

