




window.onload = function() {
    let lvlBar = document.querySelectorAll('.level-bar-inner');
    let arr = [];
    for(let i = 0; i < lvlBar.length; i++) {
        lvlBar[i].style.width = '0px'; 
         arr.push(lvlBar[i]);
    }
    setTimeout(function() {
        arr[0].style.width = '362px'
        arr[0].style.transition = '2s'
    }, 800)

    setTimeout(function() {
        arr[1].style.width = '260px'
        arr[1].style.transition = '2s'
    }, 1600)

    setTimeout(function() {
        arr[2].style.width = '310px'
        arr[2].style.transition = '2s'
    }, 2400)
}


/* Bootstrap Tooltip for Skillset */
$('.level-label').tooltip();
    
    
/* jQuery RSS - https://github.com/sdepold/jquery-rss */

$("#rss-feeds").rss(

    //Change this to your own rss feeds
    "http://feeds.feedburner.com/TechCrunch/startups",
    
    {
    // how many entries do you want?
    // default: 4
    // valid values: any integer
    limit: 3,
    
    // the effect, which is used to let the entries appear
    // default: 'show'
    // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
    effect: 'slideFastSynced',
    
    // outer template for the html transformation
    // default: "<ul>{entries}</ul>"
    // valid values: any string
    layoutTemplate: "<div class='item'>{entries}</div>",
    
    // inner template for each entry
    // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
    // valid values: any string
    entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
    
    }
);

/* Github Calendar - https://github.com/IonicaBizau/github-calendar */
GitHubCalendar("#github-graph", "IonicaBizau");


/* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
GitHubActivity.feed({ username: "caseyscarborough", selector: "#ghfeed" });