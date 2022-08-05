vizmap = [

   {selector: "node", css: {
      "shape": "ellipse",
      "text-valign":"center",
      "text-halign":"center",
      "content": "data(id)",
      "border-width": "3px",
      "background-color": "white",
      "border-color":"black",
      "width": "80px",
      "height": "80px",
      "font-size":"18px"}},

   {selector:"node:selected", css: {
       "text-valign":"center",
       "text-halign":"center",
       "border-color": "black",
       "content": "data(id)",
       "border-width": "3px",
       "overlay-opacity": 0.2,
       "overlay-color": "gray"
       }},
       
  {selector:"edge[edgeType]", css: {
      "line-style":"solid",
      "line-color": "mapData(distance, 0, 2.5, black, blue)",
      'target-arrow-color': "mapData(distance, 0, 2.5, black, blue)",
      'target-arrow-shape': 'triangle',
      "width": "5px",
      'curve-style': 'bezier',
      'haystack-radius': 0.5
       }},
     
    {selector:"edge[edgeType >= 0.1 ]", css: {
       "line-style":"solid",
      "line-color": "black",
      'target-arrow-color': "black",
      'target-arrow-shape': 'triangle',
      "width": "5px",
      'curve-style': 'bezier',
      'haystack-radius': 0.5
       }},
       
      {selector:"edge[edgeType >= 1.0 ]", css: {
       "line-style":"solid",
      "line-color": "blue",
      'target-arrow-color': "blue",
      'target-arrow-shape': 'triangle',
      "width": "5px",
      'curve-style': 'bezier',
      'haystack-radius': 0.5
       }},
       
      {selector:"edge[edgeType >= 2.0 ]", css: {
      "line-style":"solid",
      "line-color": "red",
      'target-arrow-color': "red",
      'target-arrow-shape': 'triangle',
      "width": "5px",
      'curve-style': 'bezier',
      'haystack-radius': 0.5
       }},
       
       
 /*******
    {selector:"edge[edgeType = 0.2 ]", css: {
       "line-style":"solid",
      "line-color": "#blue",
      'target-arrow-color': "blue",
      'target-arrow-shape': 'triangle',
      "width": "5px",
      'curve-style': 'bezier',
      'haystack-radius': 0.5
       }},   

  {selector:"edge[edgeType = NA]", css: {
      "line-style":"solid",
      "line-color": "white",
      'target-arrow-color': "white",
      'target-arrow-shape': 'triangle',
      "width": "0.1px",
      'curve-style': 'bezier',
      'haystack-radius': 0.5
       }},
*****/
 
   ];
