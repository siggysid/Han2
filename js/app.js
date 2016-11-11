function loadHanData(url){
	var JSONData = "";
	$.getJSON(url)
		.done(function(response){
			JSONData = response;   
			console.log("success");
			var tableResults = "";
			$.each(response,function(i,rep){
				var cDate = new Date(rep.dCreatedDate);
				
				if(rep.sProductCategory== "Select"){
					var tableResults = $("#select");
				}else if(rep.sProductCategory== "Orthopedic & Spine"){				
					var tableResults = $("#orth");
				}
				
				tableResults.append("<tr> "+
										"<td>"+rep.sProductDesc+ "</td>"+		
										"<td>"+cDate.toString('MMMM d, yyyy')+ "</td>"+	
										"<td>"+rep.sManufacturer+"</td>"+											
										"<td>"+rep.nProductID+"</td>"+											
										"<td>"+rep.sMPN+"</td>"+											
										"<td>"+rep.sGTIN+"</td>"+											
										"<td>"+rep.sUNSPSC+"</td>"+
										"<td>"+rep.nQtyTypeQty+ " of " +rep.sQtyType+"</td>"+		
										"<td>"+rep.mValue+"</td>"																				
										);
				tableResults = "";					
			});
			
		})
	
}