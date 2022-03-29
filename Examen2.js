function ejecuta(){

	nom=document.f_rfc.nom.value;
	ap=document.f_rfc.ap.value;
	am=document.f_rfc.am.value;
	fec=document.f_rfc.fec.value;

if (nom.length==0) {
	alert("Error. Debes escribir tu Nombre");
	document.f_rfc.nom.style.background="red";
}
else{
	if (ap.length==0) {
		alert("Error. Debes escribir tu Apellido Paterno");
		document.f_rfc.ap.style.background="red";

	}
	else{
		if (am.length==0) {
			alert("Error. Debes escribir tu Apellido Materno");
			document.f_rfc.am.style.background="red";

		}
		else{
			if (fec.length==0) {
				alert("Error. Indica tu Fecha de Nacimiento");
				document.f_rfc.fec.style.background="red";

			}	
			else{
				nom=nom.toLowerCase();
				ap=ap.toLowerCase();
				am=am.toLowerCase();
				dominio="@empresa.com.mx"


				cem=nom.charAt(0)+ap+am.charAt(0)+dominio;

				cem=cem.replaceAll("ñ","n");

				cem=cem.replaceAll(" ","_");

				cem=cem.replaceAll("á","a");
				cem=cem.replaceAll("é","e");
				cem=cem.replaceAll("í","i");
				cem=cem.replaceAll("ó","o");
				cem=cem.replaceAll("ú","u");
				cem=cem.replaceAll("ü","u");

					document.f_rfc.salida.value=cem;


				anio=fec.substr(2,2);
				mes=fec.substr(5,2);
				dia=fec.substr(8,2);
				fecha=dia+mes+anio
					document.f_rfc.contraseña.value=fecha;				
			}
		}
	}
}
	
}

function campo_v1(){
document.f_rfc.nom.style.background="#00CED1";
}
function campo_v2(){
document.f_rfc.ap.style.background="#00CED1";
}
function campo_v3(){
document.f_rfc.am.style.background="#00CED1";
}
function campo_v4(){
document.f_rfc.fec.style.background="#00CED1";
}

/*
nom=nom.toLowerCase();
				ap=ap.toLowerCase();
				am=am.toLowerCase();
				dominio="@empresa.com.mx"
				
				
				cem=nom.charAt(0)+ap+am.charAt(0)+dominio;
				
				cem=cem.replaceAll("ñ","n");

				cem=cem.replaceAll(" ","_");

				cem=cem.replaceAll("á","a");
				cem=cem.replaceAll("é","e");
				cem=cem.replaceAll("í","i");
				cem=cem.replaceAll("ó","o");
				cem=cem.replaceAll("ú","u");
				cem=cem.replaceAll("ü","u");
				
					document.f_rfc.salida.value=cem;

				
				anio=fec.substr(2,2);
				mes=fec.substr(5,2);
				dia=fec.substr(8,2);
				fecha=dia+mes+anio
					document.f_rfc.contraseña.value=fecha;
					*/

/*
function ejecuta(){
	nom=document.f_rfc.nom.value;
	ap=document.f_rfc.ap.value;
	am=document.f_rfc.am.value;
	fec=document.f_rfc.fec.value;

	nom=nom.toLowerCase();
	ap=ap.toLowerCase();
	am=am.toLowerCase();
	dominio="@empresa.com.mx"
	
	
	cem=nom.charAt(0)+ap+am.charAt(0)+dominio;
	
	cem=cem.replaceAll("ñ","n");

	cem=cem.replaceAll(" ","_");

	cem=cem.replaceAll("á","a");
	cem=cem.replaceAll("é","e");
	cem=cem.replaceAll("í","i");
	cem=cem.replaceAll("ó","o");
	cem=cem.replaceAll("ú","u");
	cem=cem.replaceAll("ü","u");
	
		document.f_rfc.salida.value=cem;

	
	anio=fec.substr(2,2);
	mes=fec.substr(5,2);
	dia=fec.substr(8,2);
	fecha=dia+mes+anio
		document.f_rfc.contraseña.value=fecha;
}
*/