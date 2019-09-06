
		var J_Emp = '{"name":"ABC","age":"20","sal":"20000"}';
	
		var J_obj = JSON.parse(J_Emp);
		
		document.getElementById("d1").innerHTML= J_obj.name;
		
		console.log("test");
