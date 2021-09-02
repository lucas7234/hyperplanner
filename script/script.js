var namelist = [];
var urllist = [];
var timelist = [];
var diffresult;

function check(){
	var required = document.querySelector("#name input");
	var warning = document.querySelector("#name small");
	warning.style.display = "none";
	if (required.value != ""){
		add();
	}
	else{
		warning.style.display = "inline-block";
		required.focus()
	}
}

function updatelist(){
	var list=""
	var title = document.querySelector("title")
	for (var i=0; i<namelist.length; i++){
		list += "<div class='plan' id='plan"+i+"'>"
		list +=  "<h4>"+namelist[i]+"</h4><a href='"+urllist[i]+"' target='_blank'>"+urllist[i]+"</a>"
		if (timelist[i]!="NaN NaN"){
			list+="<p>Start at "+timelist[i]+"</p>"
		}
		list+="<br><button id='"+i+"' onclick='console.log(this.id); deletelist(this.id)'>Delete this plan</button></div>"
	}
	document.querySelector("main article #planlist").innerHTML = list
	if (namelist.length>1){title.innerHTML = `Hyper Online Planner - ${namelist.length} Plans Remaining`}
	else if (namelist.length==1){title.innerHTML = `Hyper Online Planner - 1 Plan Remaining`}
	else if (namelist.length==0){title.innerHTML = `Hyper Online Planner`}
}

function add(){
	var name = document.querySelector("#name input");
	var url = document.querySelector("#url input");
	var time = document.querySelector("#time input");
	
	var date = time.value[0]+time.value[1]+time.value[2]+time.value[3]+time.value[4]+time.value[5]+time.value[6]+time.value[7]+time.value[8]+time.value[9]
	var time1 = time.value[11]+time.value[12]+time.value[13]+time.value[14]+time.value[15]
	
  
	
	namelist.push(name.value)
	urllist.push(url.value)
	/*if (time.value==""){*/timelist.push(date+" "+time1)/*}*/
	//else{ timelist.push(date+" "+time1+"<br><p>"+diffresult+"</p>")}
	
	updatelist()
	
	name.value = ""
	url.value = ""
	time.value = ""
	name.focus()
}

function deletelist(id){
	console.log("id")
	var deleteid = id
	var delbutton = document.querySelector("[id='"+ id +"']")
	var article = document.querySelector("[id='plan"+ id+"']")
	if (delbutton.innerHTML == "Delete this plan"){
		delbutton.innerHTML = "Undelete this plan"
		document.getElementById("plan"+ id).style.textDecoration = "line-through"
		namelist.splice(deleteid, 1)
		urllist.splice(deleteid, 1)
		timelist.splice(deleteid, 1)
		updatelist()
	}
	else{
		delbutton.innerHTML = "Delete this plan"
		document.getElementById("plan"+ id).style.textDecoration = "none"
	}
}

function lefttime(){
	const xmasDay = new Date(document.querySelector("#time input").value);
	const currDay = new Date();

	let diff = xmasDay - currDay;
	const diffDays = Math.floor((xmasDay.getTime() - currDay.getTime()) / (1000 * 60 * 60 * 24));
	diff -= diffDays * (1000 * 60 * 60 * 24);
	const diffHours = Math.floor(diff / (1000 * 60 * 60));
	diff -= diffHours * (1000 * 60 * 60);
	const diffMin = Math.floor(diff / (1000 * 60));
	diff -= diffMin * (1000 * 60);
	const diffSec = Math.floor(diff / 1000);

	diffresult = `${diffDays < 10 ? `0${diffDays}` : diffDays} days ${diffHours < 10 ? `0${diffHours}` : diffHours} hours ${diffMin < 10 ? `0${diffMin}` : diffMin} minutes ${diffSec < 10 ? `0${diffSec}` : diffSec} seconds left`
	setTimeout(lefttime, 1000)
}

function currenttime(){
	var timenode = document.createTextNode("Current Time: "+new Date())
	document.getElementById("current").appendChild(timenode)
}

function test(){
	
	alert('hello');console.log(this)
}
