const data = [
    {
          "name" : "Alfreds Futterkiste",
        "contry" : "Germany",
    },
    {
        "name" : "Berg sna",
        "contry" : "sweaden",
    },
    {
        "name" : "Island trading",
        "contry" : "UK",
    },
    {
        "name" : "konig ess",
        "contry" : "Germany",
    },
    {
        "name" : "laug bacch",
        "contry" : "canada",
    },
    {
        "name" : "maggi alim",
        "contry" : "italy",
    },
    {
        "name" : "north/south",
        "contry" : "uk",
    },
    {
        name : "paris special",
        "contry" : "farance",
    }

]

/* <table id="tab">
    <tr id="trowh">
        <th id="td1">Name</th>
        <th id="td2">Contry</th>
    </tr>
    <tr id="trow">
        <td id="td1" >Alfreds Futterkiste</td>
        <td id="td2">Germany</td>
    </tr> */

   const all = (data) => {
    let str = "";
   data.forEach(element => {
        str += `<tr id="trow">
        <td id="td1" >${element.name}</td>
        <td id="td2">${element.contry}</td>
    </tr>`
   });

   const a = document.getElementById("tab");
    a.innerHTML = str;


   }

    all(data);


    let b =  document.getElementById("a1");
   b.addEventListener("keyup" , (e) => 
   {
    let char = e.target.value.toLowerCase();
    const ans = data.filter((item) =>     item.name
                                        .toLowerCase().
                                      includes(char)
    )

     console.log(ans);
            
       all(ans);

   });

