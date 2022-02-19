var after='';

function fetchmemes(){
	color();
	
	if(document.getElementById('memes')){
		document.getElementById('memes').remove();
	}
	
	let parentdiv=document.createELement('div');
	parentdiv.id='memes'
	fetch('https://www.reddit.com/r/memes.json?after=${after}')
		.then(response=>response.json())
		.then(body=>{
		after=body.data.after
		for(let index=0;index<body.data.children.length;index++){
			if(body.data.children[index].data.post_hint=='image'){
				let div=document.createELement('div');
				let h4=document.createELement('h4');
				let image=document.createELement('img');
				image.src=body.data.children[index].data.url_overriden_by_dest;
				h4.textContent=body.data.children[index].data.title;
				div.appendChild(h4);
				div.appendChild(image);
				parentdiv.appendChild(div);
				
			}
		}
		document.body.appendChild(parentdiv);
	})
}
