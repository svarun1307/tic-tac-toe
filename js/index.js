
var player1='x';
var player2='o';
var dowehaveawinner="dr";
var box=[];
var sign=[];
var starterturn='';
var player1score=0;
var player2score=0;
var clicks=0;
$("document").ready(function(){
	
	var g1=sessionStorage.getItem("player1");
	var g2=sessionStorage.getItem("player2");
	var x1=sessionStorage.getItem("player1totals");
	var x2=sessionStorage.getItem("player2totals");
	
	if(x1!= null)
	{
		$(".score1").html(x1);
	}
	else
	{
		$(".score1").html("0");
	}
	if(x2!= null)
	{
		$(".score2").html(x2);
	}
	else
	{
		$(".score2").html("0");
	}
	if(g1 == null || g2 == null)
	{
		document.getElementById("g1").click();
	}	

});

Array.prototype.allValuesSame = function() 
{

    for(var i = 1; i < this.length; i++)
    {
        if(this[i] !== this[0])
            return false;
    }

    return true;
}

function juscheck()
{
	var j1=document.getElementById("sr1").checked;
	var j2=document.getElementById("sr2").checked;
	var j3=document.getElementById("sr3").checked;
	var j4=document.getElementById("sr4").checked;
	if((j1 || j2 ) && (j3 || j4))
	{
		if(j1)
		{
			player1='x';
			player2='o';
			sessionStorage.setItem("player1", "x");
			sessionStorage.setItem("player2", "o");
		}
		else
		{
			player1='o';
			player2='x';
			sessionStorage.setItem("player1", "o");
			sessionStorage.setItem("player2", "x");
		}
		$(".p1ss").show();
		$("#closem").click();
	}
	
}


function puttheimage(f)
{

	var y=f.match(/\d$/);
	if(box[y-1]!="all")
	{
		if(starterturn=='x')
		{
			/*if(player1=='x')
			{
				$(".p1ss").show();
				$(".p2ss").hide();
			}
			else
			{
				$(".p1ss").hide();
				$(".p2ss").show();
			}*/
			
			var h=$(".p1ss").is(':visible');
			if(h)
			{
				$(".p2ss").show();
				$(".p1ss").hide();
			}
			else
			{
				$(".p2ss").hide();
				$(".p1ss").show();
			}
			document.getElementById(f).style.backgroundImage = "url('images/Untitled3.png')";
			clicks++;
			starterturn='o';
			box[(y-1)]="all";
			sign[y]="x";
			if(y=="1")
			{
				if((sign[2]=="x" && sign[3]=="x") || (sign[4]=="x" && sign[7]=="x") || (sign[5]=="x" && sign[9]=="x") )
				{
					dowehaveawinner='y';
				}
			}
			if(y=="2")
			{
				if((sign[1]=="x" && sign[3]=="x") || (sign[5]=="x" && sign[8]=="x") )
				{
					dowehaveawinner='y';
				}
			}
			if(y=="3")
			{
				if((sign[1]=="x" && sign[2]=="x") || (sign[5]=="x" && sign[7]=="x") || (sign[6]=="x" && sign[9]=="x") )
				{
					dowehaveawinner='y';
				}
			}
			if(y=="4")
			{
				if((sign[1]=="x" && sign[7]=="x") || (sign[5]=="x" && sign[6]=="x"))
				{
					dowehaveawinner='y';
				}
			}
			if(y=="5")
			{
				if((sign[1]=="x" && sign[9]=="x") || (sign[3]=="x" && sign[7]=="x") || (sign[4]=="x" && sign[6]=="x") || (sign[6]=="x" && sign[4]=="x"))
				{
					dowehaveawinner='y';
				}
			}
			if(y=="6")
			{
				if((sign[3]=="x" && sign[9]=="x") || (sign[4]=="x" && sign[5]=="x"))
				{
					dowehaveawinner='y';
				}
			}
			if(y=="7")
			{
				if((sign[1]=="x" && sign[4]=="x") || (sign[5]=="x" && sign[3]=="x") || (sign[8]=="x" && sign[9]=="x"))
				{
					dowehaveawinner='y';
				}
			}
			if(y=="8")
			{
				if((sign[2]=="x" && sign[5]=="x") || (sign[7]=="x" && sign[9]=="x"))
				{
					dowehaveawinner='y';
				}
			}
			if(y=="9")
			{
				if((sign[1]=="x" && sign[5]=="x") || (sign[3]=="x" && sign[6]=="x") || (sign[7]=="x" && sign[8]=="x"))
				{
					dowehaveawinner='y';
				}
			}
			
			if(dowehaveawinner=='y')
			{
				if(player1=='x')
				{
					$(".won1").show();
					$(".won2").hide();
					$('.won1').delay(3000).fadeOut('slow');
					dowehaveawinner="dr";
					box=[];
					sign=[];
					//starterturn='x';
					for(var n=1;n<=9;n++)
					{
						document.getElementById("d"+n).style.backgroundImage = "url('images/white.jpg')";
					}
					$(".p1ss").hide();
					$(".p2ss").show();
					starterturn='o';
					player1score++;
					$(".score1").html(player1score);
					$(".score2").html(player2score);
					sessionStorage.setItem("player1totals",player1score);
				}
				else
				{
					//alert("Player 1 is a winner here!!!");
					$(".won1").hide();
					$(".won2").show();
					$('.won2').delay(3000).fadeOut('slow');
					dowehaveawinner="dr";
					box=[];
					sign=[];
					starterturn='x';
					for(var n=1;n<=9;n++)
					{
						document.getElementById("d"+n).style.backgroundImage = "url('images/white.jpg')";
					}
					$(".p1ss").show();
					$(".p2ss").hide();
					starterturn='o';
					player2score++;
					$(".score1").html(player1score);
					$(".score2").html(player2score);
					//console.log(player1score);
					sessionStorage.setItem("player1totals",player2score);
				
				}
				
			}

			var allsame1 = box.allValuesSame();
		
			if(allsame1 && box.length==9)
			{
				//alert("draw");
				$(".de").show();
				$(".won1").hide();
				$(".won2").hide();
				$('.de').delay(3000).fadeOut('slow');
					dowehaveawinner="dr";
					box=[];
					sign=[];
	
					for(var n=1;n<=9;n++)
					{
						document.getElementById("d"+n).style.backgroundImage = "url('images/white.jpg')";
					}
					
					//alert(starterturn);
			}
		}
		else
		{
			/*if(player1=='o')
			{
					$(".p2ss").show();
					$(".p1ss").hide();
			}
			else
			{
				$(".p2ss").hide();
				$(".p1ss").show();
			}*/
			
			var h=$(".p1ss").is(':visible');
			if(h)
			{
				$(".p2ss").show();
				$(".p1ss").hide();
			}
			else
			{
				$(".p2ss").hide();
				$(".p1ss").show();
			}
			document.getElementById(f).style.backgroundImage = "url('images/Untitled-3.png')";
			clicks++;
			starterturn='x';
			box[(y-1)]="all";
			sign[y]="o";
			if(y=="1")
			{
				if((sign[2]=="o" && sign[3]=="o") || (sign[4]=="o" && sign[7]=="o") || (sign[5]=="o" && sign[9]=="o") )
				{
					//alert('222oh yeah1!');
					dowehaveawinner='y';
				}
			}
			if(y=="2")
			{
				if((sign[1]=="o" && sign[3]=="o") || (sign[5]=="o" && sign[8]=="o") )
				{
					//alert('22oh yeah2!');
					dowehaveawinner='y';
				}
			}
			if(y=="3")
			{
				if((sign[1]=="o" && sign[2]=="o") || (sign[5]=="o" && sign[7]=="o") || (sign[6]=="o" && sign[9]=="o") )
				{
					//alert('222oh yeah3!');
					dowehaveawinner='y';
				}
			}
			if(y=="4")
			{
				if((sign[1]=="o" && sign[7]=="o") || (sign[5]=="o" && sign[6]=="o"))
				{
					//alert('22oh yeah21!');
					dowehaveawinner='y';
				}
			}
			if(y=="5")
			{
				if((sign[1]=="o" && sign[9]=="o") || (sign[3]=="o" && sign[7]=="o") || (sign[4]=="o" && sign[6]=="o") || (sign[6]=="o" && sign[4]=="o"))
				{
					//alert('22oh yeah22!');
					dowehaveawinner='y';
				}
			}
			if(y=="6")
			{
				if((sign[3]=="o" && sign[9]=="o") || (sign[4]=="o" && sign[5]=="o"))
				{
					//alert('22oh yeah23!');
					dowehaveawinner='y';
				}
			}
			if(y=="7")
			{
				if((sign[1]=="o" && sign[4]=="o") || (sign[5]=="o" && sign[3]=="o") || (sign[8]=="o" && sign[9]=="o"))
				{
					//alert('22oh yeah31!');
					dowehaveawinner='y';
				}
			}
			if(y=="8")
			{
				if((sign[2]=="o" && sign[5]=="o") || (sign[7]=="o" && sign[9]=="o"))
				{
					//alert('22oh yeah32!');
					dowehaveawinner='y';
				}
			}
			if(y=="9")
			{
				if((sign[1]=="o" && sign[5]=="o") || (sign[3]=="o" && sign[6]=="o") || (sign[7]=="o" && sign[8]=="o"))
				{
					//alert('22oh yeah33!');
					dowehaveawinner='y';
				}
			}
			if(dowehaveawinner=='y')
			{
				//alert("Player 2 is the winner here!!!");
				//location.reload();
		
				if(player1=='o')
				{
					$(".won2").hide();
					$(".won1").show();
					//setTimeout(function(){ $(".won2").hide(); }, 3000);
					$('.won1').delay(3000).fadeOut('slow');
					dowehaveawinner="dr";
					box=[];
					sign=[];
	
					for(var n=1;n<=9;n++)
					{
						document.getElementById("d"+n).style.backgroundImage = "url('images/white.jpg')";
					}
					$(".p1ss").hide();
					$(".p2ss").show();
					starterturn='x';
					player1score++;
					//$(".score2").html(player2score);
					$(".score1").html(player1score);
					$(".score2").html(player2score);
					//console.log(player2score);
					sessionStorage.setItem("player1totals",player1score);
						
				}
				else
				{
					
				
					$(".won2").show();
					$(".won1").hide();
					//setTimeout(function(){ $(".won2").hide(); }, 3000);
					$('.won2').delay(3000).fadeOut('slow');
					dowehaveawinner="dr";
					box=[];
					sign=[];
					
					for(var n=1;n<=9;n++)
					{
						document.getElementById("d"+n).style.backgroundImage = "url('images/white.jpg')";
					}
					$(".p1ss").show();
					$(".p2ss").hide();
					starterturn='x';
					player2score++;
					//$(".score2").html(player2score);
					$(".score1").html(player1score);
					$(".score2").html(player2score);
					//console.log(player2score);
					sessionStorage.setItem("player2totals",player2score);
				
				}
				
				
			}

			var allsame2 = box.allValuesSame();
			if(allsame2 && box.length==9)
			{
				//alert("draw");
				$(".de").show();
				$(".won1").hide();
				$(".won2").hide();
				$('.de').delay(3000).fadeOut('slow');
					dowehaveawinner="dr";
					box=[];
					sign=[];
	
					for(var n=1;n<=9;n++)
					{
						document.getElementById("d"+n).style.backgroundImage = "url('images/white.jpg')";
					}
					//alert(starterturn);
			}
		}
	}
}


function playsel()
{
	var h=document.getElementsByName('e1');
	for (i = 0; i < document.getElementsByName('e1').length; i++) 
	{
		if (document.getElementsByName('e1')[i].checked) 
		{
			
			if(document.getElementsByName('e1')[i].value=="p1x")
			{
				document.getElementById("sr4").checked=true;
				starterturn='x';
			}
			else
			{
				document.getElementById("sr3").checked=true;
				
			}
		}
	}
}

function playsel2()
{
	var h=document.getElementsByName('e2');
	for (i = 0; i < document.getElementsByName('e2').length; i++) 
	{
		if (document.getElementsByName('e2')[i].checked) 
		{
			
			if(document.getElementsByName('e2')[i].value=="p2x")
			{
				document.getElementById("sr1").checked=false;
				document.getElementById("sr2").checked=false;			
				document.getElementById("sr2").checked=true;
				starterturn='o';
			}
			else
			{
				document.getElementById("sr1").checked=false;
				document.getElementById("sr2").checked=false;
				document.getElementById("sr1").checked=true;
				starterturn='x';
			}
		}
	}
}
