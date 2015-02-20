module.exports = (function(){

	function Cpta(nombre){
		if(!(this instanceof Cpta))
			return(new Cpta(nombre));

		nombre = nombre || 0;
		var pEnt = 0,
			pDec = 0,
			cPta = "0.00";

		if(nombre.e){
			pEnt = parseInt(nombre.e, 10) || 0;
			if(nombre.d){
				pDec = parseInt(nombre.d, 10) || 0;
				if(pDec<10){
					cPta = separator(pEnt)+".0"+pDec;
				}else{
					pDec = parseInt(pDec.toString().substring(0, 2), 10);
					cPta = separator(pEnt)+"."+pDec;
				};
			}else{
				cPta = separator(pEnt)+".00";
			};
		}else
			if(nombre.d){
				pDec = parseInt(nombre.d, 10) || 0;
				if(pDec<10){
					cPta = "0.0"+pDec;
				}else{
					pDec = parseInt(pDec.toString().substring(0, 2), 10);
					cPta = "0."+pDec;
				};
			}else{
				var nStr = nombre.toString(),
					pVir = nStr.indexOf(".");
				if(pVir<0){
					pEnt = parseInt(nStr, 10) || 0;
					cPta = separator(pEnt)+".00";
				}else{
					pEnt = parseInt(nStr.substring(0, pVir), 10) || 0;
					var pDecStr = nStr.substring(pVir+1).replace(/[^0-9]/g, "0");
					switch(pDecStr.length){
						case 0:
							cPta = separator(pEnt)+".00";
							break;
						case 1:
							pDec = parseInt(pDecStr, 10)*10 || 0;
							cPta = separator(pEnt)+"."+pDec;
							break;
						default:
							var d = pDecStr.substring(0, 2);
							pDec = parseInt(d, 10);
							if(pDec<10)
								cPta = separator(pEnt)+".0"+pDec;
							else
								cPta = separator(pEnt)+"."+pDec;
							break;
					};
				};
			};
		this.e = pEnt;
		this.d = pDec;
		this.c = cPta;
	};

	Cpta.prototype.toString = function(){
		return(this.c);
	};

	Cpta.prototype.add = function(n){
		var nombre = n || 0;
		if(!(n instanceof Cpta))
			nombre = new Cpta(n);
		var somme = sign(this.e)*(Math.abs(this.e*100)+this.d) + sign(nombre.e)*(Math.abs(nombre.e*100)+nombre.d);
		return(new Cpta(somme/100));
	};

	function separator(n){
		var numberstring = "",
			ent = n.toString();
		for(var i=0, l=ent.length; i<l; i++){
            if(i%3 == 0 && i!=0)
                numberstring = " "+numberstring;
            numberstring = ent[l-i-1] + numberstring;
        };
        return(numberstring);
	};

	function sign(n){
		return(n<0 ? -1 : 1);
	}

	return(Cpta);

})();

