// added by williamhu

		$("document").ready(function()
			{
					var url      = window.location.href;

						setInterval(function()
							{
								var newurl      = window.location.href; 
								//console.log(newurl);
									if(newurl!=url)
										{
											url = newurl;
	
												$( ".fb-send" ).attr("data-href",url);
	
															//FB.XFBML.parse();
															//FB.XFBML.parse(document.getElementsByClassName('fb-send'));
				
						// setTimeout(function(){ },500);
	
	myfunction(url);
	
		}
							},500);

						setTimeout(function()
							{
								//$( "<h2 style='margin-top: 16px;'>Share with Friends on Facebook</h2>" ).insertBefore( "#subscribe-button" );
								$( '<div class="facebookshare" style="margin: 15px;"><div id="fb-root"></div> <script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.10&appId=249907115176420"; fjs.parentNode.insertBefore(js, fjs); }(document, "script", "facebook-jssdk"));</script><div class="fb-send" data-href="'+url+'"></div></div>' ).insertAfter("#count");
								//FB.XFBML.parse();
							},1000);

function myfunction(url)
{
	console.log(url);
	var res = url.split("=");
	
	var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
	if(videoid != null) {
	 
	 if(res[1] == videoid[1])
	 {
	 	location.reload();
	 }
	 //url = videoid[1];
	 //$( ".fb-send" ).attr("data-href",url);
	  }
}						



});

// added by rahulitjec + williamhu
