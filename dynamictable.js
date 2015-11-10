/* creating dynamic table)*/
function addTable() {
                        var tableDiv=document.getElementById('dynamictable');
                        var table= document.createElement('table');
                        var m=document.getElementById('rows-in-table').value;
                        var n=document.getElementById('columns-in-table').value;
                        var row,cell;
                        /*checking the rows and columns*/
                        if((m=="")||(n==""))
                        {
                          alert("enter the values for rows and columns in table");
                        }
                        else
                        {
                          for(var i=0;i<m;i++)
                          {
                              row=document.createElement('tr');
                              for(var j=0;j<n;j++)
                              {
                                cell=document.createElement('td');
                                cell.innerHTML= i+j+1;
                                row.appendChild(cell);
                              }
                              table.appendChild(row);
                            }
                            tableDiv.appendChild(table);
                          }
                    }
