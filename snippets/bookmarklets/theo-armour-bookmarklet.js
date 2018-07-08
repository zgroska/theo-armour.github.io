
var divTooToo = divTooToo || undefined;

init();

function init() {

	if ( !divTooToo ) {

		divTooToo = document.body.appendChild( document.createElement( 'div' ) );
		divTooToo.style.cssText =
			'background-color: white; border: 1px solid red; max-width: 350px; opacity: 0.85; ' +
			' padding: 10px; position: fixed; right: 30px; top: 20px; z-index:100000; ';

	}

	divTooToo.innerHTML =

`

	<a href="https://theo-armour.github.io/snippets/bookmarklets/theo-armour-bookmarklet.html" title="on server" >theo armour bookmarklet</a>
	/
	<a href="file:///D:/Dropbox/Public/git-repos/theo-armour.github.io/snippets/bookmarklets/theo-armour-bookmarklet.html" >local</a>

	<p>
		<a href="javascript:(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='https://rawgit.com/mrdoob/stats.js/master/build/stats.min.js';document.head.appendChild(script);})()" title="Mr.doob's" >stat.js</a>
		<br>
		<a href="
		javascript:(function(){var script=document.createElement('script');script.type='text/javascript';script.src='https://cdn.rawgit.com/zz85/zz85-bookmarklets/master/js/ThreeInspector.js';document.body.appendChild(script);})()
		">zz85 three.js inspector</a>
	</p>

	<hr>

	<p><a href="https://theo-armour.github.io/snippets/bookmarklets/mozilla-text-editor.html" target="_blank">text edit</a></p>

	<p><a href="javascript:(function(){document.body.contentEditable = true;})()" >make content editable</a></p>

	<p><a href='javascript:(function(){window.open("http://jkirchartz.com/demos/HTML5notepad.html","HTML5 notepad");})()' >jkirchartz html5 notepad</a></p>

	<p><a href='javascript:(function(){window.open("jkirchartz-demos/HTML5notepad.html","HTML5 notepad");})()' >html5 notepad local</a></p>

	<p><a href="javascript:(function(){window.open('http://validator.w3.org/check?uri='+window.location);})()" >Validate with validator.w3.org</a></p>

	<p><a href="javascript:(function(){window.open('data:text/html, <html contenteditable style=padding:10%; ></html>')})()" >open new editable page</a></p>

	<hr>

	<p>
		<a href="javascript:(function() {
			function se(d) {
				return d.selection ? d.selection.createRange().text : d.getSelection()
			}
			s = se(document);
			for (i=0; i<frames.length && !s; i++) s = se(frames[i].document);
			if (!s || s=='') s = prompt('Enter%20search%20terms%20for%20Wikipedia','');
			open('http://en.wikipedia.org' + (s ? '/w/index.php?title=Special:Search&search=' + encodeURIComponent(s) : '')).focus();
			})();" >search wikipedia</a>

	</p>
	<p>
		<a href='javascript:(function(){
			var e=[],t=document.getElementsByTagName("a"),n=t.length,r=window.open("","win","width=300,height=300");
			for(;n>0;n--){var i=t[n-1].getAttribute("href");t[n-1]!=null&amp;&amp;i!=null&amp;&amp;i.charAt(0)==="h"&amp;
			&amp;i.indexOf(window.location.hostname)==-1&amp;
			&amp;e.push("<li><a href="+i+">"+i+"</a></li>")}r.document.open("text/html","replace"),r.document.write("<h1>Links Found:</h1><ul>"+e.join("")+"</ul>")})()
		'>Get all external Links</a>
	</p>

	<p>
		<a href="
			javascript:t='';c=new%20Array('00','33','66','99','CC','FF');for(i=0;i<6;i++){t+='<table%20width=100%>';for(j=0;j<6;j++){t+='<tr>';for(k=0;k<6;k++){L=c[i]+c[j]+c[k];t+='<td%20bgcolor='+L+'>'+L}t+='</tr>'}t+='</table>'};with(document){write(t);void(close())}
		">216 colors</a>
	</p>


	<p>
		<a href="
		javascript:function C(v){return '<td>'+v+'</td><td>'+((v>>4).toString(16)+(v&15).toString(16)).toUpperCase()+'</td><td bgcolor=DDDDDD>&'+'#'+v+';
		</td>';}
		var c=4,b=Math.ceil(224/c),a='<table border=0><tr>';for(j=0;j<c;j++){a+='<td>DEC</td><td>HEX</td><td>ASC</td>';}a+='</tr>';
		for(i=33;i<33+b;i++){a+='<tr>';
		for(j=0;j<c;j++){t=i+(j*b);
			if(t<=255)a+=C(t);}a+='</tr>';}a+='</table>';var W=open('','','width=500,height=600,left=0,top=0,resizable,scrollbars');
			void(W.document.write(a));
			">ascii table</a>
	</p>

	<p>
		<a href="
		javascript:inp=document.body.appendChild(document.createElement('input'));inp.value='thikkng';inp.select();document.execCommand('copy');delete inp;
		">do it</a>
	</p>
	<hr>

	<p>
		<a href="file:///C:/" title="copy links/paste&go/or use local" >C:/</a> - <a href="file:///D:/" title="copy links/paste&go/or use local" >D:/</a><br>
		<a href="https://github.com/theo-armour/theo-armour.github.io/edit/master/snippets/bookmarklets/theo-armour-bookmarklet.js" target="_blank">theo-armour-bookmarklet.js</a><br>
		<a href="file:///D:/Dropbox/Public/git-repos/theo-armour.github.io/snippets/bookmarks/" target="_blank">bookmarks</a><br>
		<a href="https://github.com/theo-armour/theo-armour.github.io/edit/master/snippets/bookmarks/food.md" target="_blank" >food.md</a><br>

		<a href="https://github.com/theo-armour/qdata/blob/master/README.md" target="_blank">qdata</a>
	</p>


`;


}

