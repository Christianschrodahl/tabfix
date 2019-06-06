function activeTab(evt, rocketName) {
  var i, tabContent, tablinks;
  tabContent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" activeTab", "");
  }
  document.getElementById(rocketName).style.display = "block";
  evt.currentTarget.className += " activeTab";
  
  parent.location.hash = rocketName;

}


//open tab by dedault
 //   document.getElementById("default").click();
 
