
// Zur Demonstration
let stars = document.getElementsByClassName('itz-bookmark');
for ( let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('click', function($event) {
        let bookmark = $event.currentTarget;
        if (bookmark.className.match(new RegExp('(\\s|^)' + 'itz-bookmark-selected' + '(\\s|$)'))) {
            bookmark.className = bookmark.className.replace(" itz-bookmark-selected", "");
        } else {
            bookmark.className += " itz-bookmark-selected";
        }
    })
}

// Tabset
$(function () {
    var tabs = $(".itz-tabset");

    // For each individual tab DIV, set class and aria-hidden attribute, and hide it
    $(tabs).find("> div").attr({
        "class": "itz-tabPanel flex-grow-1",
        "aria-hidden": "true"
    }).hide();

    // Get the list of tab links
    var tabsList = tabs.find("ul:first").attr({
        "class": "itz-tabsList",
    });

    // For each item in the tabs list...
    $(tabsList).find("li > a").each(
        function (a) {
            var tab = $(this);

            // Create a unique id using the tab link's href
            var tabId = "tab-" + tab.attr("href").slice(1);

            // Assign tab id and aria-selected attribute to the tab control, but do not remove the href
            tab.parent().attr({
                "id": tabId,
                "aria-selected": "false",
                "role": "tab"
            });

            // Assign aria attribute to the relevant tab panel
            $(tabs).find(".itz-tabPanel").eq(a).attr("aria-labelledby", tabId);

            // Set the click event for each tab link
            tab.click(
                function (e) {
                    var tabPanel;

                    // Prevent default click event
                    e.preventDefault();

                    // Change state of previously selected tabList item
                    $(tabsList).find("> li.itz-current").removeClass("itz-current").attr("aria-selected", "false");

                    // Hide previously selected tabPanel
                    $(tabs).find(".itz-tabPanel:visible").attr("aria-hidden", "true").hide();

                    // Show newly selected tabPanel
                    tabPanel = $(tabs).find(".itz-tabPanel").eq(tab.parent().index());
                    tabPanel.attr("aria-hidden", "false").show();

                    // Set state of newly selected tab list item
                    tab.parent().attr("aria-selected", "true").addClass("itz-current");

                    // Set focus to the first heading in the newly revealed tab content
                    tabPanel.children("h2").attr("tabindex", -1).focus();
                }
            );
        }
    );


    // Show the first tabPanel
    $(tabs).find(".itz-tabPanel:first").attr("aria-hidden", "false").show();

    // Set state for the first tabsList li
    $(tabsList).find("li:first").addClass("itz-current").attr({
        "aria-selected": "true",
        "tabindex": "0"
    });
});