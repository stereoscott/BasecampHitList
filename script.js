var items_wrapper = document.getElementsByClassName('items_wrapper');
for (var i=0; i<items_wrapper.length; i++) {
  var items = items_wrapper[i].getElementsByClassName('item');
  
  for (var i=0; i<items.length; i++) {
    var itemDetails = getItemDetails(items[i]);
    
    var newLink = createLink(itemDetails);

    var nubbin = document.getElementById('item_'+itemDetails.id+'_nubbin');
    
    var editLinks = nubbin.getElementsByClassName('edit_button');
    
    if (editLinks[0]) {
      editLinks[0].parentNode.insertBefore(newLink, editLinks[0]);
    }
  }
  
}


function getItemDetails(item)
{
  var itemDetails = {
    'id' : false,
    'description' : false
  };
  
  var id = item.id.replace('show_item_', '');
  
  itemDetails.id = id;
  
  var descriptionElement = document.getElementById('item_wrap_'+id);
  
  if (descriptionElement) {
    itemDetails.description = descriptionElement.innerHTML;
  }
  
  return itemDetails;
}

function createLink(itemDetails)
{
  var url = document.URL;
  var newLink = document.createElement('a');
  newLink.setAttribute('href', 'thehitlist:///inbox/tasks?method=POST&title='+itemDetails.description+'&url='+url);
  newLink.textContent = 'HL'
  
  return newLink;
}

/*
var editLinks;

editLinks = document.getElementsByClassName('edit_button');

for (var i=0; i<editLinks.length; i++) {
  
  var newLink = document.createElement('a');
  newLink.setAttribute('href', 'thehitlist:///inbox/tasks?method=POST&title=Do something crazy&notes=Testing The Hit List safari extension&url=stereointeractive.com/blog');
  newLink.textContent = 'HL'
  
}*/