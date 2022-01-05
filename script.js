
//variable initialization 
let tbody = document.getElementById('tbody');
let str ;

toDoDetail();

function toDoDetail() {
    url = 'https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json';
    fetch(url).then((response) =>{
        return response.json();
    }).then((data) =>{
     
        str = '';
        let a=0;
        for(let k of data){
            a =k.id;
            str +=`
            <tr class="main">
            <th>
            <!-- Button trigger modal -->
<button type="button" class="btn " data-toggle="modal" data-target="#user${k.id}">
  ${k.first_name}
</button>

<!-- Modal -->
<div class="modal fade" id="user${a}" data-backdrop="static" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">USER</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <ul class="list-group">
      <li class="list-group-item disabled " aria-disabled="true">User Detail</li>
      <li class="list-group-item">First Name - ${k.first_name}</li>
      <li class="list-group-item">Last Name - ${k.last_name}</li>
      <li class="list-group-item">Age - ${k.age}</li>
      <li class="list-group-item">Email - ${k.email}</li>
      <li class="list-group-item">Website - <a href="${k.web}" target="_blank">${k.web}</a></li>
    </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
     
      </div>
    </div>
  </div>
</div>
            </th>
            <td>${k.last_name}</td>
            <td>${k.age}</td>
            <td>${k.email} </td>
            <td><a href="${k.web}" target="_blank">${k.web}</a> </td>
          </tr>
            
            `
        }
      tbody.innerHTML = str;  
  let main = document.querySelectorAll('.main');
  let inputBtn = document.getElementById('inputBtn');
  
  inputBtn.addEventListener('input', (e) =>{
      e.preventDefault();
      
      Array.from(main).forEach((element) =>{
         
          if(element.children[0].children[0].innerHTML.toLowerCase().includes(inputBtn.value.toLowerCase())||element.children[1].innerHTML.toLowerCase().includes(inputBtn.value.toLowerCase())){
                      element.style.display="";
          }
          else{
            element.style.display="none";
          }
      })
  })
     
      })
      
    
}


