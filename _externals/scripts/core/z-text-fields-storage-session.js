//local storage for Upper textarea
function rescuefieldvalues1(idarray){
	for (var i=0; i<idarray.length; i++){
		var el=document.getElementById(idarray[i])
		if (!/(text)/.test(el.type))
			continue
		if (el.addBehavior && !window.localStorage){
			el.style.behavior='url(#default#userData)'
			el.load("userentereddata1")
		}
		var persisteddata=(window.localStorage)? localStorage[idarray[i]+'data'] : (el.addBehavior)? el.getAttribute('dataattr1') : null
		if (persisteddata)
			el.value=persisteddata
		el.onkeyup=function(){
			if (window.localStorage)
				localStorage[this.id+'data']=this.value
			else if (this.addBehavior){
				this.setAttribute("dataattr1", this.value)
				this.save("userentereddata1")
			}
		}
	}
}

//local storage for Lower textarea
function rescuefieldvalues3(idarray){
	for (var i=0; i<idarray.length; i++){
		var el=document.getElementById(idarray[i])
		if (!/(text)/.test(el.type))
			continue
		if (el.addBehavior && !window.localStorage){
			el.style.behavior='url(#default#userData)'
			el.load("userentereddata3")
		}
		var persisteddata=(window.localStorage)? localStorage[idarray[i]+'data'] : (el.addBehavior)? el.getAttribute('dataattr3') : null
		if (persisteddata)
			el.value=persisteddata
		el.onkeyup=function(){
			if (window.localStorage)
				localStorage[this.id+'data']=this.value
			else if (this.addBehavior){
				this.setAttribute("dataattr3", this.value)
				this.save("userentereddata3")
			}
		}
	}
}

//local storage for Note 1
function rescuefieldvalues101(idarray){
	for (var i=0; i<idarray.length; i++){
		var el=document.getElementById(idarray[i])
		if (!/(text)/.test(el.type))
			continue
		if (el.addBehavior && !window.localStorage){
			el.style.behavior='url(#default#userData)'
			el.load("userentereddata101")
		}
		var persisteddata=(window.localStorage)? localStorage[idarray[i]+'data'] : (el.addBehavior)? el.getAttribute('dataattr101') : null
		if (persisteddata)
			el.value=persisteddata
		el.onkeyup=function(){
			if (window.localStorage)
				localStorage[this.id+'data']=this.value
			else if (this.addBehavior){
				this.setAttribute("dataattr101", this.value)
				this.save("userentereddata101")
			}
		}
	}
}

//local storage for Note 2
function rescuefieldvalues102(idarray){
	for (var i=0; i<idarray.length; i++){
		var el=document.getElementById(idarray[i])
		if (!/(text)/.test(el.type))
			continue
		if (el.addBehavior && !window.localStorage){
			el.style.behavior='url(#default#userData)'
			el.load("userentereddata102")
		}
		var persisteddata=(window.localStorage)? localStorage[idarray[i]+'data'] : (el.addBehavior)? el.getAttribute('dataattr102') : null
		if (persisteddata)
			el.value=persisteddata
		el.onkeyup=function(){
			if (window.localStorage)
				localStorage[this.id+'data']=this.value
			else if (this.addBehavior){
				this.setAttribute("dataattr102", this.value)
				this.save("userentereddata102")
			}
		}
	}
}

//local storage for Note 3
function rescuefieldvalues103(idarray){
	for (var i=0; i<idarray.length; i++){
		var el=document.getElementById(idarray[i])
		if (!/(text)/.test(el.type))
			continue
		if (el.addBehavior && !window.localStorage){
			el.style.behavior='url(#default#userData)'
			el.load("userentereddata103")
		}
		var persisteddata=(window.localStorage)? localStorage[idarray[i]+'data'] : (el.addBehavior)? el.getAttribute('dataattr103') : null
		if (persisteddata)
			el.value=persisteddata
		el.onkeyup=function(){
			if (window.localStorage)
				localStorage[this.id+'data']=this.value
			else if (this.addBehavior){
				this.setAttribute("dataattr103", this.value)
				this.save("userentereddata103")
			}
		}
	}
}