var num=5;

            var add_Line=()=>{

			var tb=document.getElementById("tb");
			var tr=document.createElement("tr");
    
            var td1=document.createElement("td");
			td1.innerText="Activity"+String(num);
			var td2=document.createElement("td");
			td2.innerText="A"+String(num);
			var td3=document.createElement("td");
			td3.innerHTML='<input id="ipn"'+num+'  name="w" value=""/>';
			var td4=document.createElement("td");
			td4.innerHTML='<input id="g'+num+'" name="g" value="" onchange="getResult('+num+',0)"/> / <input id="gg'+num+'" name="gg" value="" onchange="getResult('+num+',1)"/>';
			var td5=document.createElement("td");
			td5.id="res"+num;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
			tr.appendChild(td4);
			tr.appendChild(td5);
            tb.appendChild(tr);
            num+=1;
            }
			
			var getResult=(index, flag)=>{
				var num1 = document.getElementById("g"+index).value;
				var num2 = document.getElementById("gg"+index).value;
				var res = document.getElementById("res"+index);
				var result = 0;
				if(flag==0){
					if(num2!=""){
						result = parseFloat(num1)/parseFloat(num2)*100;
						res.innerText= result +"%";
						return;
					}else{
					}
				}
				if(flag==1){
					if(num1==""){
						alert("被除数不能为空！");
						return;
						}else if(num2==0){
							alert("除数不能为0");
							return;
							}else{
								result = parseFloat(num1)/parseFloat(num2)*100;
								res.innerText= result +"%";
							}
						}
				}
				
				var meanBtn=()=>{
					var firstNum = document.getElementsByName("g");
					var secondNum = document.getElementsByName("gg");
					var showDiv = document.getElementById("showDiv");
					var sum =0;
					var len = 0;
					var result = 0;
					var index = 1;
					for(var i=0; i< firstNum.length; i++){
						if((firstNum[i].value=="" &&secondNum[i].value!="") || (firstNum[i].value!="" &&secondNum[i].value=="")|| (firstNum[i].value=="" &&secondNum[i].value=="")){
							index++;
							continue;
						}else{
							sum = sum + parseFloat(document.getElementById("res"+index).innerText);
							index++;
							len++;
						}
					}
					result = sum/len;
					showDiv.innerText=result+"%";
				}
			
            var weightBtn=()=>{
				var weights = document.getElementsByName("w");
				var firstNum = document.getElementsByName("g");
				var secondNum = document.getElementsByName("gg");
				var showDiv = document.getElementById("showDiv");
				var count = 0;
				var sum = 0;
				for(var i=0; i<weights.length; i++){
					if(weights[i].value==""){
						continue;
					}else if(firstNum[i].value=="" || secondNum.value==""){	
						continue;
					}else{
						var nowp = parseFloat(document.getElementById("res"+(parseInt(i)+1)).innerText);
						console.log(nowp);
						sum = sum + nowp* parseFloat(weights[i].value);
						count = count + parseFloat(weights[i].value);
					}
				}
				showDiv.innerText=sum/count+"%";
			} 
			
			