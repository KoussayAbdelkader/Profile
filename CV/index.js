// For Skills


  fetch('http://localhost:3000/skills')
  .then(response => response.json())
  .then(json => {
      var RH = document.getElementById('RH');
      var OriginalContent = `
                                
                            <h5>Skills<span class="color-heading pull-right">Percentage%</span></h5>
                            <div class="progress">
                            <div class="progress-bar bg-color-base" role="progressbar" data-width="Percentage"></div>
                            </div>
                            
                         `;

       for(var i=0;i<json.length;i++)
       {
          var MyContent = document.createElement('div');
          var CustomisedContent = OriginalContent;
          CustomisedContent = CustomisedContent.replace('Skills',json[i].Skills);
          CustomisedContent = CustomisedContent.replace('Percentage',json[i].Percentage);
          CustomisedContent = CustomisedContent.replace('Percentage',json[i].Percentage);
         // MyContent.className='progress-box'
          MyContent.innerHTML = CustomisedContent;
          RH.appendChild(MyContent);
      }
      $('.progress').each(function() {
        $(this).appear(function() {
            $(this).animate({
                opacity: 1,
                left: "0px"
            }, 800);
            var w = $(this).find(".progress-bar").attr("data-width");
            var h = $(this).find(".progress-bar").attr("data-height");
            $(this).find(".progress-bar").animate({
                width: w + "%",
                height: h + "%"
            }, 100, "linear");
        });
    });
  })


  // For Project

  fetch('http://localhost:3000/project')
  .then(response => response.json())
  .then(json => {
      var RH = document.getElementById('PR');
      var OriginalContent = `
                          <div>
                          <div class="margin-b-20">
                              <div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s">
                                  <img class="img-responsive" src="image" alt="Latest Products Image">
                              </div>
                          </div>
                          <h4><a href="#">project</a> <span class="text-uppercase margin-l-20"></span></h4>
                          <p>description</p>
                          <a class="link" href="#">Read More</a>
                      </div>
                    `;

       for(var i=0;i<json.length;i++)
       {
          var MyContent = document.createElement('div');
          var CustomisedContent = OriginalContent;
          CustomisedContent = CustomisedContent.replace('project',json[i].project);
          CustomisedContent = CustomisedContent.replace('description',json[i].description);
          CustomisedContent = CustomisedContent.replace('image',json[i].image);
          MyContent.className='col-sm-4 sm-margin-b-50'
          MyContent.innerHTML = CustomisedContent;
          RH.appendChild(MyContent);
      }
  })