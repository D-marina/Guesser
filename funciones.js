function furula()
{
  alert("Vamos bien");
}

function pesosColumnas(m)
{
	var n1 = m.length;
	var n2 = m[0].length;
	var pesos = [];
	var i=0;
	var j=0;
	for(i=1;i<n2;i++)
	{
		var suma = 0;
		for(j=1;j<n1;j++)
		{
			suma += m[j][i];
		}
		pesos.push(suma);
	}
	return pesos;
}

function elegirPregunta(m)
{
	var n1 = m.length;
	var vMedio = n1/2;
	var pesos = pesosColumnas(m);
	var dif = [];
	var i=0;
	for(i=0;i<pesos.length;i++)
	{
		dif.push(Math.abs(pesos[i]-vMedio));
	}
	var minimo = Math.min.apply(Math,dif);
	return dif.indexOf(minimo);
}

function Interaccion(preguntas,indice)
{
	return prompt(preguntas[indice]);
}

function QuitarElemento(v,i0)
{
	var w = [];
	var i=0;
	for(i=0;i<v.length;i++)
	{
		if(i!=i0)
		{
			w.push(v[i]);
		}
	}
	return w;
}

function RecortarMatriz(matriz,indice,respuesta)
{
	m = [];
	var i=0;
	for(i=0;i<matriz.length;i++)
	{
		if(matriz[i][indice+1] == respuesta)
		{
			m.push(QuitarElemento(matriz[i],indice+1));
		}
	}
	return m;
}

function Akinator(preguntas,matriz)
{
	var preg = preguntas;
	var m = matriz;
	//var k = 100;
	var indice;
	var respuesta;
	while(m.length > 1 && k>0)
	{
	//	console.log("m: "+m);
		var indice = elegirPregunta(m);
	//	console.log(indice);
		respuesta = Interaccion(preg,indice);
		m = RecortarMatriz(m,indice,respuesta);
		preg = QuitarElemento(preg,indice);
	//	k--;
	}
	//console.log("longitud: "+m.length);
	//console.log("M00: "+m[0]);
	return(m[0][0]);
}
