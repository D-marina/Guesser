<!doctype>
<html>
<head>
<h1>AkinUCA</h1>
</head>
<body>
<?php

	// Cargamos las bibliotecas
	require 'vendor/autoload.php';
	use PhpOffice\PhpSpreadsheet\Spreadsheet;
	use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

	// Cargamos el Excel
	$reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
	$spreadsheet = $reader->load("./datos.xlsx");

	// Cargamos las preguntas
	$preguntas = array();
	for($i=2; $i<=63; $i++)
	{
		$celda = $spreadsheet->getActiveSheet()->getCellByColumnAndRow($i, 1)->getValue();
		$preguntas[] =$celda;
	}

	// Cargamos la matriz
	$matriz = array();
	for($j=2;$j<=30;$j++)
	{
		$aux = array();
		for($i=1; $i<=63; $i++)
		{
			$celda = $spreadsheet->getActiveSheet()->getCellByColumnAndRow($i, $j)->getValue();
			$aux[] = $celda;
		}
		$aux;
		$matriz[] = $aux;
	}

//echo json_encode( $matriz );
?>

<div id="heroe">

</div>

<script src="funciones.js"></script>
<script type="text/javascript">

// Paso la matriz a JS
var matriz = <?php echo json_encode( $matriz ) ?>;
// Paso las preguntas a JS
var preguntas = <?php echo json_encode( $preguntas ) ?>;
var heroe = Akinator(preguntas,matriz);
console.log(heroe);
document.getElementById("heroe").innerHTML = "La planta malita tiene "+ heroe;
</script>
</body>
</html>
