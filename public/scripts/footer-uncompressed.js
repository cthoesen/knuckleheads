//FOOTER VERSION NUMBER
console.log('FOOTER SCRIPT LAST UPDATED 9-04-22');
//////////////////////////////////////////////////////////////////////////////////////////////////
//     SCRIPTS INCLUDED IN FOOTER JS FILE
//////////////////////////////////////////////////////////////////////////////////////////////////
// GLOBAL FOOTER BASE
//////////////////////////////////////////////////////////////////////////////////////////////////
// MODULE EXPAND AND COLLAPSE  https://www.mflscripts.com/mfl-apps/moduleExpand/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
// MFL LIVE SCORING  https://www.mflscripts.com/mfl-apps/scoreboard/replace-mflScoring/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
// STANDINGS SETTINGS  https://www.mflscripts.com/mfl-apps/standingSettings/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
// Popup Addon  https://www.mflscripts.com/mfl-apps/popups/addon/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
// Notification Slide Down  https://www.mflscripts.com/mfl-apps/popups/notfications/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
// Rosters Script  https://www.mflscripts.com/mfl-apps/rosters/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
// History Script  https://www.mflscripts.com/mfl-apps/history/integrated/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
// IR REPORT SCRIPT  https://www.mflscripts.com/mfl-apps/injuredReserve/IRreport/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
// DICE ROLL SCRIPT  https://www.mflscripts.com/mfl-apps/diceRoll/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
// BACKUP AND RESTORE HPMS
//////////////////////////////////////////////////////////////////////////////////////////////////
// EDIT HPMS
//////////////////////////////////////////////////////////////////////////////////////////////////
// PLAYER ICONS SCRIPT FOR HABMANS SITES
//////////////////////////////////////////////////////////////////////////////////////////////////
// Remove MFL Ads - Live scoring page ads
//////////////////////////////////////////////////////////////////////////////////////////////////
// bodyScrollLock
//////////////////////////////////////////////////////////////////////////////////////////////////

if (load_moduleExpand_script === undefined) var load_moduleExpand_script = true;
if (load_replace_mflScoring_h2h === undefined) var load_replace_mflScoring_h2h = true;
if (load_standingSettings_script === undefined) var load_standingSettings_script = true;
if (load_popupAddon_script === undefined) var load_popupAddon_script = true;
if (load_notification_script === undefined) var load_notification_script = true;
if (load_rosters_script === undefined) var load_rosters_script = false;
if (load_history_script === undefined) var load_history_script = false;
if (load_irReport_script === undefined) var load_irReport_script = false;
if (load_diceRoll_script === undefined) var load_diceRoll_script = false;
if (load_playerIcons === undefined) var load_playerIcons = false;
if (ShowDropFilters === undefined) var ShowDropFilters = false;

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// GLOBAL FOOTER BASE
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

// Remove div.mobile-wrap inline style
jQuery('.mobile-wrap').removeAttr('style');

// Remove empty container
jQuery('blockquote:empty').remove();

// Wrap all container reports with div.mobile-wrap
jQuery('#container-wrap table.report,blockquote,#body_options_05 table[align="center"]:last,#body_new_predraft form[name="new_predraft"],#body_edit_my_links #container-wrap form table,#body_options_84 form table,#body_trade_offer #container-wrap table,#container-wrap td.two_column_layout table').not('#options_45 #container-wrap table.report').wrap('<div class="mobile-wrap"></div>');
jQuery('#container-wrap .mobile-wrap td.two_column_layout').parents('table').unwrap();
jQuery('#container-wrap td.two_column_layout .mobile-wrap .mobile-wrap table').unwrap();
jQuery('#body_options_166 #container-wrap').wrapInner('<div class="mobile-wrap"></div>');

// Message Board Page Adjustments
if ($('#body_board_show #withmenus').length === 0) {
	jQuery('#body_board_show #container-wrap').wrapInner('<div class="mobile-wrap"><table class="report addCaption" cellspacing="1" align="center"><tbody><tr><td></td></tr></tbody></table></div>');
} else {
	jQuery('#body_board_show #withmenus').wrapInner('<div class="mobile-wrap"><table class="report addCaption" cellspacing="1" align="center"><tbody><tr><td></td></tr></tbody></table></div>');
}
jQuery('#body_board_show #container-wrap .addCaption').prepend('<caption><span>Message Board Topics</span></caption>');
jQuery('#body_board_show table span.nav').appendTo('#body_board_show #container-wrap .addCaption caption:first');
jQuery('#body_board_show table th.messageboardbar').eq(1).remove();
jQuery('#body_board_show table caption').eq(1).remove();

// Message Board - Replace MFL quote - reply and edit images with input buttons to match rest of site
jQuery('a img[alt="Reply to post"]').replaceWith('<input type="button" value="Reply" style="margin:0;padding:0.063rem 0.188rem">');
jQuery('a img[alt="Reply to post with quote"]').replaceWith('<input type="button" value="Quote" style="margin:0;padding:0.063rem 0.188rem">');
jQuery('a img[alt="Edit post"]').replaceWith('<input type="button" value="Edit" style="margin:0;padding:0.063rem 0.188rem">');

// Message Board - replace prev , next , back to images with font awesome
jQuery('#body_board_show caption span.nav + span.nav').remove();
jQuery('#body_board_show caption span.nav a img[title="Go to previous topic"]').replaceWith('<i class="fa-regular fa-circle-arrow-left" aria-hidden="true" title="Go to previous topic" style="font-size:0.875rem;vertical-align:text-top;width:0.875rem;height:0.875rem;cursor:pointer"></i>');
jQuery('#body_board_show caption span.nav a img[title="Go to next topic"]').replaceWith('<i class="fa-regular fa-circle-arrow-right" aria-hidden="true" title="Go to next topic" style="font-size:0.875rem;vertical-align:text-top;width:0.875rem;height:0.875rem;cursor:pointer"></i>');
jQuery('#body_board_show caption span.nav a img[title="Go up a level"]').replaceWith('<i class="fa-regular fa-circle-arrow-right" aria-hidden="true" title="Return to Previous Page" style="font-size:0.875rem;vertical-align:text-top;width:0.875rem;height:0.875rem;cursor:pointer"></i>');


// Message Board - replace old message and unread message MFL images to images with font awesome
jQuery('#body_board_show td a img[title="Old/Read"]').replaceWith('<img src="https://www.mflscripts.com/ImageDirectory/script-images/newsOld.svg" title="Read Message" style="vertical-align:middle;cursor:pointer;height:0.625rem;vertical-align:unset;">');
jQuery('#body_board_show td a img[title="New/Unread"]').replaceWith('<img src="https://www.mflscripts.com/ImageDirectory/script-images/newsNew.svg" title="Unread Message" style="vertical-align:middle;cursor:pointer;height:0.75rem;vertical-align:unset;">');
jQuery('#body_board_show td a img[title="Old/Unread"]').replaceWith('<img src="https://www.mflscripts.com/ImageDirectory/script-images/newsNone.svg" title="Old Unread Message" style="vertical-align:middle;cursor:pointer;height:0.625rem;vertical-align:unset;">');


// other report adjustments
jQuery('#body_options_80 #container-wrap ol').wrap('<div class="mobile-wrap"><table class="report addCaption" cellspacing="1" align="center"><tbody><tr><td></td></tr></tbody></table></div>');
jQuery('#body_options_66 #container-wrap form').wrap('<div class="mobile-wrap"><table class="report addCaption" cellspacing="1" align="center"><tbody><tr><td></td></tr></tbody></table></div>');

// Unwrap nested div.mobile-wrap
jQuery('#body_options_113 #container-wrap .mobile-wrap .mobile-wrap').unwrap();
jQuery('#container-wrap .mobile-wrap .mobile-wrap table,#body_options_05 .mobile-wrap .mobile-wrap table[align="center"]:last').unwrap();

// Add mobile-view class to all dual table column td cells
jQuery('#container-wrap td.two_column_layout').addClass('mobile-view');
jQuery('#body_player #container-wrap td[width="33%"],#body_player #container-wrap td[width="67%"]').addClass('mobile-view');

// Wrap forms div.mobile-wrap to style same as reports containers
jQuery("#body_options_71 #container-wrap form table").parents("form").wrap('<div class="mobile-wrap form-wrapper"></div>');
jQuery('#body_csetup_hmpgmsg #container-wrap form,#body_add_drop #container-wrap table[width="100%"]').wrap('<div class="mobile-wrap form-wrapper"></div>');
jQuery('#body_csetup_hmpgmsg #container-wrap form .mobile-wrap table').unwrap();

// wrap and adjust homepage message forms to look like table reports
jQuery('#csetup_hmpgmsg .mobile-wrap.form-wrapper form').closest('.mobile-wrap.form-wrapper').wrapInner('<table class="report addCaption" cellspacing="1" align="center"><tbody><tr><td></td></tr></tbody></table>');
jQuery('#csetup_hmpgmsg .addCaption b').wrap('<caption><span></span></caption>');
jQuery('#csetup_hmpgmsg .addCaption b').contents().unwrap();
jQuery('#csetup_hmpgmsg .addCaption').prepend(jQuery('form caption'));
//change homepage message caption text
jQuery('#csetup_hmpgmsg .addCaption caption span').text('Enter Custom Home Page Message (HPM)');

// Remove captions on outer table that dont need to be there
jQuery('#options_06 td.two_column_layout,#options_169 td.two_column_layout,#options_22 td.two_column_layout').closest('table').addClass('caption-remove');
jQuery('.caption-remove > caption').remove();

// Add span to captions the are missing it
jQuery('table caption:not(:has(span))').wrapInner('<span></span>');

//Update standings acronyms
jQuery('th.divpct').text('Div %');
jQuery('th.all_play_wlt').text('All-Play');
jQuery('th.h2hpct').text('%');

//turn hints into new style
jQuery('div.mobile-wrap .reportnavigation:contains("Hint:")').removeClass().addClass('alert alert-info-table').wrap('<div style="text-align:center"></div>');
jQuery('td.hint').removeClass().addClass('tdalert tdalert-info-table').wrapInner('<span></span>');
jQuery('body .reportnavigation:contains("Hint:")').removeClass().addClass('alert alert-info-body');
jQuery('.reportnavigation:contains("Top FAQ:")').removeClass().addClass('alert alert-info-body');
jQuery('.reportnavigation:contains("Weekly NFL Injury Status is in this color.")').hide();

//give outer tables no border spacing
jQuery('.mobile-wrap').parents('table').addClass('no-borderspacing');

//add class to H3 outside of table body
jQuery('h3').addClass('h3-menu');
jQuery('.mobile-wrap h3').removeClass('h3-menu');

jQuery('.reportnavigation:contains("Show Rosters For Week:")').removeClass().addClass('weekly-navbar week_optionsbox');
jQuery('.reportnavigation:contains("Go To  Week:")').removeClass().addClass('weekly-navbar week_optionsbox');
jQuery('#body_pro_schedule .reportnavigation:contains("Go To Team")').removeClass().addClass('weekly-navbar week_optionsbox pro_team');
jQuery('.reportnavigation:contains("Power Rank As Of Week:")').removeClass().addClass('weekly-navbar week_optionsbox');
jQuery('.reportnavigation:contains("Franchise Setup:")').removeClass().addClass('weekly-navbar fran_options');
jQuery('.reportnavigation:contains("Standings As Of Week:")').removeClass().addClass('weekly-navbar week_optionsbox');
jQuery('.reportnavigation:contains("Go To Week:")').removeClass().addClass('weekly-navbar week_optionsbox');
jQuery('.reportnavigation:contains("Submit Lineup For Week:")').removeClass().addClass('weekly-navbar week_optionsbox');
jQuery('.reportnavigation:contains("Edit Newsletter for Week:")').removeClass().addClass('weekly-navbar week_optionsbox');
jQuery('.reportnavigation:contains("Go To Draft Round:")').removeClass().addClass('weekly-navbar week_optionsbox');
jQuery('.reportnavigation:contains("Go To Team:")').removeClass().addClass('weekly-navbar1');
jQuery('.reportnavigation:contains("Select A Category:")').removeClass().addClass('weekly-navbar week_optionsbox').wrap('<div style="text-align:center"></div>');
jQuery('.weekly-navbar.week_optionsbox .reportnavigationheader').text('SELECT WEEK: ');
jQuery('.weekly-navbar.week_optionsbox.pro_team .reportnavigationheader').text('SELECT TEAM: ');
jQuery('#body_site_news .weekly-navbar.week_optionsbox .reportnavigationheader').text('SELECT : ');
jQuery("#body_options_236 #container-wrap div > form").addClass("reportform");

//add mobile dropdown menu created from weekly-navbar
jQuery(".weekly-navbar.week_optionsbox").each(function () {
	var tempHTML = '';
	$(this).children().each(function () {
		if ($(this).hasClass("reportnavigationheader")) {
			// skip
		} else if ($(this).hasClass("currentweek")) {
			tempHTML += '<option selected="selected">' + $(this).html() + '</option>';
		} else {
			tempHTML += '<option value="' + $(this).attr("href") + '">' + $(this).html() + '</option>';
		}
	});
	if ($('#body_pro_schedule .week_optionsbox.pro_team').length) {
		$(this).before('<span class="weekly-navbar-mobile pro_team">SELECT TEAM: <select onchange="location.href=this.value">' + tempHTML + '</select></span>');
		$('head').append('<style>#body_pro_schedule span.weekly-navbar.week_optionsbox.pro_team{display:none!important}#body_pro_schedule span.weekly-navbar-mobile.pro_team{display:block!important}</style>');
	} else if ($('#body_site_news').length) {
		$(this).before('<span class="weekly-navbar-mobile">SELECT: <select onchange="location.href=this.value">' + tempHTML + '</select></span>');
	} else {
		$(this).before('<span class="weekly-navbar-mobile">SELECT WEEK: <select onchange="location.href=this.value">' + tempHTML + '</select></span>');
	}
	tempHTML = null;
});


jQuery(".weekly-navbar.fran_options").each(function () {
	var tempHTML = '';
	$(this).children().each(function () {
		if ($(this).hasClass("reportnavigationheader")) {
			// skip
		} else if ($(this).hasClass("currentweek")) {
			tempHTML += '<option selected="selected">' + $(this).html() + '</option>';
		} else {
			tempHTML += '<option value="' + $(this).attr("href") + '">' + $(this).html() + '</option>';
		}
	});
	$(this).before('<span class="weekly-navbar-mobile">FRANCHISE SETUP: <select onchange="location.href=this.value">' + tempHTML + '</select></span>');
	tempHTML = null;
});

//add mobile dropdown menu created from weekly-navbar to NFL Schedule - Team page
jQuery(".weekly-navbar1").each(function () {
	var tempHTML = '';
	$(this).children().each(function () {
		if ($(this).hasClass("reportnavigationheader")) {
			// skip
		} else if ($(this).hasClass("currentweek")) {
			tempHTML += '<option selected="selected">' + $(this).html() + '</option>';
		} else {
			tempHTML += '<option value="' + $(this).attr("href") + '">' + $(this).html() + '</option>';
		}
	});
	$(this).before('<span class="weekly-navbar-mobile1">SELECT WEEK: <select onchange="location.href=this.value">' + tempHTML + '</select></span>');
	tempHTML = null;
});

//add mobile dropdown menu for homepage message h3 links
jQuery("#csetup_hmpgmsg #container-wrap h3:contains('Edit Message'),#message #container-wrap h3:contains('Edit Message')").each(function () {
	var hpmText = $(this).html().split("|");
	var hpmCurrent = parseInt(location.href.substring(location.href.indexOf("&SEQNO=") + 7, location.href.length));
	if (isNaN(hpmCurrent)) hpmCurrent = 1;
	var tempHTML = '';
	var hpmCount = 1;
	$(this).find("a").each(function () {
		if (hpmCount === hpmCurrent && hpmCount !== 1 && !document.getElementById("message")) {
			tempHTML += '<option selected="selected">' + hpmText[hpmCurrent - 1].replace("Edit Message: ", "") + '</option>';
			hpmCount++;
		}
		tempHTML += '<option value="' + $(this).attr("href") + '">' + $(this).text() + '</option>';
		hpmCount++;
	});
	if (hpmCurrent === 20) tempHTML += '<option selected="selected">' + hpmText[hpmCurrent - 1] + '</option>';
	$(this).before('<span class="weekly-navbar-mobile">Edit Message: <select onchange="location.href=this.value">' + tempHTML + '</select></span>');
	hpmText = null;
	hpmCurrent = null;
	hpmCount = null;
	tempHTML = null;
});

//add mobile dropdown menu for franchise team h3 links
jQuery("#container-wrap h3.h3-menu:contains('Main')").each(function () {
	var hpmText = $(this).html().split("|");
	var tempHTML = '';
	for (var i = 0; i < hpmText.length; i++) {
		if (hpmText[i].indexOf("href") === -1)
			if (i === 0)
				tempHTML += '<option selected="selected">Main</option>';
			else
				tempHTML += '<option selected="selected">' + hpmText[i] + '</option>';
		else
			tempHTML += '<option value="' + hpmText[i].substring(hpmText[i].indexOf("href=") + 6, hpmText[i].indexOf(">") - 1) + '">' + hpmText[i].substring(hpmText[i].indexOf(">") + 1, hpmText[i].indexOf("</a")) + '</option>';
	}
	$(this).before('<span class="weekly-navbar-mobile">' + hpmText[0].substring(0, hpmText[0].indexOf(":")) + ': <select onchange="location.href=this.value">' + tempHTML + '</select></span>');
	hpmText = null;
	tempHTML = null;
});

//add mobile dropdown menu for hsubmenu links
jQuery("#hsubmenu #hsubmenuitems").each(function () {
	var tempHTML = '';
	$(this).find("li").each(function () {
		if (location.href.substring(location.href.indexOf(".com") + 4, location.href.length) === $(this).find("a").attr("href")) var thisSelected = ' selected="selected"';
		else var thisSelected = '';
		tempHTML += '<option value="' + $(this).find("a").attr("href") + '"' + thisSelected + '>' + $(this).find("a").text() + '</option>';
	});
	$(this).before('<span class="weekly-navbar-mobile"><select onchange="location.href=this.value"><option value="#">- Quick Links -</option>' + tempHTML + '</select></span>');
	tempHTML = null;
});

//add mobile dropdown menu for player profile pages
jQuery("#container-wrap h3.h3-menu:contains('Status'):contains('In'):contains('All'):contains('My'):contains('Leagues')").each(function () {
	var hpmText = $(this).html().split("|");
	var tempHTML = '';
	for (var i = 0; i < hpmText.length; i++) {
		if (hpmText[i].indexOf("href") === -1)
			if (i === 0)
				tempHTML += '<option selected="selected">Profile</option>';
			else
				tempHTML += '<option selected="selected">' + hpmText[i] + '</option>';
		else
			tempHTML += '<option value="' + hpmText[i].substring(hpmText[i].indexOf("href=") + 6, hpmText[i].indexOf(">") - 1) + '">' + hpmText[i].substring(hpmText[i].indexOf(">") + 1, hpmText[i].indexOf("</a")) + '</option>';
	}
	$(this).before('<span class="weekly-navbar-mobile">' + hpmText[0].substring(0, hpmText[0].indexOf(":")) + ': <select onchange="location.href=this.value">' + tempHTML + '</select></span>');
	hpmText = null;
	tempHTML = null;
});

//remove all empty - white space and html character in weekly navbars
try {
	jQuery(".weekly-navbar").html(jQuery(".weekly-navbar").html().replace(/&nbsp;/g, "").replace(/\|/g, ""))
} catch (er) {};

//remove empty td's on add/drop page
jQuery('#body_options_43 td').filter(function () {
	var html = $(this).html();
	if (html === '' || html === ' ')
		return true;
}).remove();

//remove empty td's on draft page
jQuery('#body_options_52 td[colspan="3"] table > td').filter(function () {
	var html2 = $(this).html();
	if (html2 === '' || html2 === ' ')
		return true;
}).addClass('empty');

//rename some longer captions
jQuery('#message_board_summary caption span').text('Message Board Summary');
jQuery('#owner_activity caption span').text('Owner Activity');
jQuery('#next_weeks_fantasy_schedule caption span').text('H2H Matchups');
jQuery('#last_weeks_fantasy_results caption span').text('H2H Results');
jQuery('#fantasy_recap caption span').text('Game Of The Week Recap');
jQuery('#fantasy_preview caption span').text('Game Of The Week Preview');
jQuery('#avg_draft_time caption span').text('Avg Draft Time');

//add class to player bio main table
jQuery('#body_player #container-wrap table').eq(0).addClass('playerBio-Table');

// add class to hide or show modules for desktop and mobile
var HideModuleMobile = "#fakedivname"; // show modules on mobile but hide on desktop
var HideModuleDesktop = "#fakedivname"; // show modules on desktop but hide on mobiles
jQuery('#home ' + HideModuleMobile).parent().addClass('desktop-Hide');
jQuery('#home ' + HideModuleDesktop).parent().addClass('mobile-Hide');

//replace league chat image
jQuery(document).ready(function () {
	$('#league_chat caption span img').replaceWith('<i class="fa-regular fa-comments" aria-hidden="true"></i>');
});

//fix playoff brackets to add blank tr on top and bottom
jQuery('#playoff1 .oddtablerow:first').clone().addClass('lastrow').insertAfter('#playoff1 tr:last');
jQuery('#playoff2 .oddtablerow:first').clone().addClass('lastrow').insertAfter('#playoff2 tr:last');
jQuery('#playoff3 .oddtablerow:first').clone().addClass('lastrow').insertAfter('#playoff3 tr:last');
jQuery('#playoff4 .oddtablerow:first').clone().addClass('lastrow').insertAfter('#playoff4 tr:last');
jQuery('#playoff5 .oddtablerow:first').clone().addClass('lastrow').insertAfter('#playoff5 tr:last');
jQuery('#playoff6 .oddtablerow:first').clone().addClass('lastrow').insertAfter('#playoff6 tr:last');
jQuery('#playoff7 .oddtablerow:first').clone().addClass('lastrow').insertAfter('#playoff7 tr:last');
jQuery('#playoff8 .oddtablerow:first').clone().addClass('lastrow').insertAfter('#playoff8 tr:last');

jQuery('#playoff1 .oddtablerow.lastrow a,#playoff2 .oddtablerow.lastrow a,#playoff3 .oddtablerow.lastrow a,#playoff4 .oddtablerow.lastrow a,#playoff5 .oddtablerow.lastrow a,#playoff6 .oddtablerow.lastrow a,#playoff7 .oddtablerow.lastrow a,#playoff8 .oddtablerow.lastrow a').remove();

// ADD CLASSES TO ADD-DROP TABLES
jQuery('#body_add_drop caption:contains("Current Waiver Claims for")').parent('table').addClass('table1');
jQuery('#body_add_drop caption:contains("Add/Drop For")').parent('table').addClass('table2');
jQuery('#body_add_drop .table2 table caption:contains("Add")').parent('table').addClass('table2-sub1');
jQuery('#body_add_drop .table2 table caption:contains("Drop")').parent('table').addClass('table2-sub2');
jQuery('#body_add_drop b:contains("To Add:")').closest('table').addClass('table3');
jQuery('#body_add_drop table caption:contains("Roster"):contains("Limits")').closest('table').addClass('table4');
jQuery('#body_add_drop table caption:contains("Transaction"):contains("Limits")').closest('table').addClass('table5');
jQuery('#body_add_drop .table1').parent('div').addClass('resize');

jQuery('#body_add_drop .table2-sub1 td:contains("Locked Player")').addClass('locked-warning').css('text-align', 'left');
jQuery('#body_add_drop .table2').find('#add_filt_nfl').closest('td').addClass('add-sorting');

jQuery('#body_add_drop .table2-sub1 tr:first-of-type th,#body_add_drop .table2-sub2 tr:first-of-type th').replaceWith(function () {
	return $("<td />", {
		html: $(this).html()
	});
});

// ADD CLASSES TABLE HEADERS FOR ADD AND DROP TABLE BOXES
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Name")').closest('tr').addClass('head-th');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Name")').closest('td').addClass('waiv-name');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Team")').closest('td').addClass('waiv-team');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Pos")').closest('td').addClass('waiv-pos');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Bye")').closest('td').addClass('waiv-bye');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Salary")').closest('td').addClass('waiv-salary');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Pts")').closest('td').addClass('waiv-pts');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Proj")').closest('td').addClass('waiv-proj');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td:contains("Inj")').closest('td').addClass('waiv-inj');
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').find('td a:contains("Opp")').closest('td').addClass('waiv-opp');

// Last TD - add scroll to it and redo colspan
var Colnum = 0;
$('.table2-sub2 tr.head-th td').each(function () {
	if ($(this).attr('colspan')) {
		Colnum += +$(this).attr('colspan');
	} else {
		Colnum++;
	}
});

if (jQuery('tr.head-th td:last-of-type[width="20px"],#body_add_drop .table2-sub1 tr.head-th td:last-of-type,#body_add_drop .table2-sub2 tr.head-th td:last-of-type').length) {
	$('tr.head-th td:last-of-type[width="20px"],#body_add_drop .table2-sub1 tr.head-th td:last-of-type,#body_add_drop .table2-sub2 tr.head-th td:last-of-type').addClass('scroll-spacer');
}

jQuery('.table2-sub2 td.waiv-proj.scroll-spacer').removeClass('scroll-spacer');

if (!$('.table2-sub2 tr.head-th td:last-of-type').hasClass("scroll-spacer")) {
	$('<td width="1.25rem" class="scroll-spacer"></td>').insertAfter('.table2-sub2 tr.head-th td:last-of-type');
	$('.table2-sub2 tr.head-th+tr>td[colspan]').attr('colspan', Colnum + 1);
	$('.table2-sub2 div').css("cssText", "overflow-y: scroll");
}

// ADD MOBILE VIEW CLASS TO TDs FOR ADD AND DROP SELECT BOXES
jQuery('#body_add_drop .table2-sub1,#body_add_drop .table2-sub2').parent('td').addClass('mobile-view');
// RENAME CAPTION TEXT
jQuery('#body_add_drop .table1 caption span').text('Current Waiver Claims');
jQuery('#body_add_drop .table2 caption span').text('Select Players to Add/Drop');
jQuery('#body_add_drop .table4 caption span').text('Roster Limits');
jQuery('#body_add_drop .table5 caption span').text('Transaction Limits');
jQuery('#body_add_drop .table2-sub1 caption span').text('Add Player');
jQuery('#body_add_drop .table2-sub2 caption span').text('Drop Player');

//jQuery('#body_add_drop .table2-sub2 .head-th').remove();
jQuery('#body_add_drop .table3').parent('td').addClass('table3-td');
jQuery('#body_add_drop .table3-td + td').remove();
jQuery('#body_add_drop .table3-td').attr('colspan', 4);
jQuery('#body_add_drop table.table3 tr:last-of-type td[colspan]').attr('colspan', 3).addClass('adddrop-lasttd');
jQuery('#body_add_drop .adddrop-lasttd').prev().remove();
jQuery('#body_add_drop .adddrop-lasttd').next().remove();
$('#body_add_drop #add_drop_submit').closest('td').addClass('aDbtn').attr('colspan', '3');
$('#body_add_drop td.aDbtn').prev('td').remove();
$('#body_add_drop td.aDbtn').next('td').remove();
$('#body_add_drop .report.table4').closest('td').addClass('inputTD').attr('colspan', '3');
$('#body_add_drop .report.table5').closest('td').addClass('transTD').attr('colspan', '3');
$('#body_add_drop td.inputTD').parent().after('<tr class="aDappendHere"></tr>');
$('#body_add_drop td.transTD').appendTo('tr.aDappendHere');
if ($('#body_add_drop .aDappendHere').is(':empty')) {
	$('#body_add_drop .aDappendHere').remove()
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	$('head').append('<style>td.add-sorting{text-align:center;}td.add-sorting input[type="text"]{width:auto}</style>');
} else {
	if (document.getElementById("body_add_drop")) {
		function hideAllFilters(toggleThis) {
			if (toggleThis === undefined) {
				jQuery('#custom-filter-name').hide();
				jQuery('#custom-filter-nfl').hide();
				jQuery('#custom-filter-pos').hide();
			} else {
				if (toggleThis === "#custom-filter-name") {
					jQuery('#custom-filter-name').toggle();
					jQuery('#custom-filter-nfl').hide();
					jQuery('#custom-filter-pos').hide();
				}
				if (toggleThis === "#custom-filter-nfl") {
					jQuery('#custom-filter-name').hide();
					jQuery('#custom-filter-nfl').toggle();
					jQuery('#custom-filter-pos').hide();
				}
				if (toggleThis === "#custom-filter-pos") {
					jQuery('#custom-filter-name').hide();
					jQuery('#custom-filter-nfl').hide();
					jQuery('#custom-filter-pos').toggle();
				}
			}
		}
		//MOVE FILTERS TO HEADER
		nameFilter = '<div id="custom-filter-name" style="display:none; overflow:visible!important;padding:0.188rem;background:var(--accent,#B82601);border-radius: 0.188rem; position:absolute; min-width:auto; left:-2.188rem; top:-2.125rem; z-index:1;width:6.625rem!important">' + jQuery('#add_filt_name').clone().wrap('<p>').parent().html() + '</div>';
		nflFilter = '<div id="custom-filter-nfl" style="display:none; overflow:visible!important;padding:0.188rem;background:var(--accent,#B82601);border-radius: 0.188rem; position:absolute; min-width:auto; left:-3.313rem; top:-2.125rem; z-index:1;width:6.625rem!important">' + jQuery('#add_filt_nfl').clone().wrap('<p>').parent().html() + '</div>';
		posFilter = '<div id="custom-filter-pos" style="display:none; overflow:visible!important;padding:0.188rem;background:var(--accent,#B82601);border-radius: 0.188rem; position:absolute; min-width:auto; left:-3.313rem; top:-2.125rem; z-index:1;width:6.625rem!important">' + jQuery('#add_filt_pos').clone().wrap('<p>').parent().html() + '</div>';
		nflFilter = nflFilter.replace("picker_filter('add')", "picker_filter('add');hideAllFilters()");
		posFilter = posFilter.replace("picker_filter('add')", "picker_filter('add');hideAllFilters()");
		jQuery('#body_add_drop .table2-sub1 tr.head-th td.waiv-name').append('<span style="position:relative">' + nameFilter + '<span style="padding-left:0.375rem;cursor:pointer"><i class="fa-regular fa-magnifying-glass" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-name\')"></i></span></span>');
		jQuery('#body_add_drop .table2-sub1 tr.head-th td.waiv-team').append('<span style="position:relative">' + nflFilter + '<span style="padding-left:0.188rem;cursor:pointer"><i class="fa-regular fa-filter" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-nfl\' )"></i></span></span>');
		jQuery('#body_add_drop .table2-sub1 tr.head-th td.waiv-pos').append('<span style="position:relative">' + posFilter + '<span style="padding-left:0.188rem;cursor:pointer"><i class="fa-regular fa-filter" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-pos\' )"></i></span></span>');
		jQuery('#body_add_drop .table2-sub1 td:contains("Filter by")').html("");
		//jQuery('#body_add_drop .table2-sub1 td:contains("Locked Player")').html('* Locked Player (<a href="locked_players?L='+league_id+'" target="_blank">See Details</a>)');
	}
}

// ADD CLASSES TO ADD-DROP FIRST TABLE
jQuery('#waiver_request_list').addClass('waiver-settings');
jQuery('#waiver_request_list:has(td.points)').removeClass('waiver-settings').addClass('bbid-settings');
jQuery('#waiver_request_list td:first-child:contains("1")').closest('table').addClass('has-rounds');

// ADD CLASS TO TH
jQuery('#waiver_request_list th:contains("Group"),#waiver_request_list th:contains("Round")').addClass('round');
jQuery('#waiver_request_list th:contains("Add")').addClass('add-player');
jQuery('#waiver_request_list th:contains("Drop")').addClass('drop-player');
jQuery('#waiver_request_list th:contains("Bid Amount")').addClass('bid-amount');
jQuery('#waiver_request_list th:contains("Action")').addClass('action');

// ADD CLASS TO TD
jQuery('#waiver_request_list td[rowspan]').parent().addClass('hasrowspan filtertr');
jQuery('#waiver_request_list tr.oddtablerow.hasrowspan').nextUntil('.eventablerow').addClass('sub-hasrowspan filtertr');
jQuery('#waiver_request_list tr.eventablerow.hasrowspan').nextUntil('.oddtablerow').addClass('sub-hasrowspan filtertr');
jQuery('#waiver_request_list tr.eventablerow:not(.filtertr),#waiver_request_list tr.oddtablerow:not(.filtertr)').addClass('norowspan');
jQuery('#waiver_request_list td:first-child:contains("1"),#waiver_request_list td:first-child:contains("2"),#waiver_request_list td:first-child:contains("3"),#waiver_request_list td:first-child:contains("4"),#waiver_request_list td:first-child:contains("5"),#waiver_request_list td:first-child:contains("6"),#waiver_request_list td:first-child:contains("7"),#waiver_request_list td:first-child:contains("8")').addClass('round');
jQuery('#body_add_drop #waiver_request_list td a[href*="player?"]').closest('td').addClass('add-player');
jQuery('#body_add_drop #waiver_request_list td.add-player + td.add-player').removeClass().addClass('drop-player');
jQuery('#waiver_request_list td.points').addClass('bid-amount');
jQuery('#waiver_request_list td:contains("Delete")').addClass('action');

// ADD HOVER ATTRIBUTES TO FONT ICONS FOR MOVEUP MOVEDOWN DELETE EDIT AND COPY
jQuery('#body_add_drop #waiver_request_list td.action a[href*="DOWN"]').attr('title', 'Move Player Down');
jQuery('#body_add_drop #waiver_request_list td.action a[href*="UP"]').attr('title', 'Move Player Up');
jQuery('#body_add_drop #waiver_request_list td.action a[href*="DELETE"]').attr('title', 'Delete This Player Request');
jQuery('#body_add_drop #waiver_request_list td.action a[href*="COPY"]').attr('title', 'Copy Group To Next Round');
jQuery('#body_add_drop #waiver_request_list td.action a[href*="&ROUND"]').attr('title', 'Edit Waivers Selections');

var thCount = 0;
var timeEnteredCol = -1;
jQuery('#body_add_drop #waiver_request_list tr th').each(function () {
	if ($(this).text() === "Time Entered") timeEnteredCol = thCount;
	thCount++;
});
jQuery('#body_add_drop #waiver_request_list tr th:eq(' + (timeEnteredCol + 1) + ')').remove();
jQuery('#body_add_drop #waiver_request_list tr th:eq(' + timeEnteredCol + ')').remove();
var addDropRowCount = 0;
jQuery('#body_add_drop #waiver_request_list tr').each(function () {
	if ($(this).find('td').length > timeEnteredCol) {
		var tr_rows = $(this).find('td:eq(0)').attr('rowspan');
		var tr_timestamp = $(this).find('td:eq(' + timeEnteredCol + ')').text();
		var tr_comments = $(this).find('td:eq(' + (timeEnteredCol + 1) + ')').text();
		if ($(this).hasClass("eventablerow")) var addDropTableRow = "eventablerow";
		else var addDropTableRow = "oddtablerow"
		$(this).find('td:eq(' + (timeEnteredCol + 1) + ')').remove();
		$(this).find('td:eq(' + timeEnteredCol + ')').remove();
		if (tr_rows === undefined) {
			$(this).find('td:eq(0)').attr('rowspan', '3');
			jQuery('#body_add_drop #waiver_request_list tr:eq(' + addDropRowCount + ')').after('<tr class="' + addDropTableRow + '"><td colspan="' + timeEnteredCol + '" class="time-cell"><span class="warning">Time Entered: </span>' + tr_timestamp + '</td></tr><tr class="' + addDropTableRow + '"><td colspan="' + timeEnteredCol + '" class="comments-cell"><span class="warning">Comments: </span><span class="comment-span">' + tr_comments + '</span></td></tr>)');
		} else {
			$(this).find('td:eq(0)').attr('rowspan', parseInt(tr_rows) + 2);
			jQuery('#body_add_drop #waiver_request_list tr:eq(' + (addDropRowCount - 1 + parseInt(tr_rows)) + ')').after('<tr class="' + addDropTableRow + '"><td colspan="' + timeEnteredCol + '" class="time-cell"><span class="warning">Time Entered: </span>' + tr_timestamp + '</td></tr><tr class="' + addDropTableRow + '"><td colspan="' + timeEnteredCol + '" class="comments-cell"><span class="warning">Comments: </span><span class="comment-span">' + tr_comments + '</span></td></tr>)');
		}
		addDropRowCount++;
		addDropRowCount++;
	}
	addDropRowCount++;
});

jQuery('#waiver_request_list .comment-span:empty').parent().remove();
jQuery('#waiver_request_list tr').removeClass('sub-hasrowspan filtertr hasrowspan norowspan');


// MAKE A PICK DRAFT PAGE CHANGES

// Add Class to main draft table


jQuery('#body_options_52 .mobile-wrap,#body_new_predraft .mobile-wrap').find('span:contains("Pre-Draft Selections For"),span:contains("Your Turn To Draft")').parents('.mobile-wrap').addClass('custom-draft');

// Remove unneeded extra caption and h3
jQuery('#body_options_52 span.reportnavigation,#body_options_52 h3:contains("Waiting For:"),#body_options_52 h3:contains("On Deck:"),#body_options_52 h3:contains("To Greatly Speed"),#body_options_52 caption:contains("is on the clock"),#body_options_52 div.warning:contains("To Greatly Speed"),#body_options_52 .custom-draft br').remove();
jQuery('.custom-draft form table:first').hide();

// Create new html for draft pages
jQuery('.mobile-wrap.custom-draft form:first').append('<table class="make-pick-table"><caption class="make-pick-title" style="text-align:center"></caption><tbody><tr><td class="mobile-view leftS"></td><td class="draft-blankTD" style="padding:0.313rem;float:left;width:100%"></td><td class="mobile-view rightS"></td></tr></tbody></table><table><tbody><tr class="blockquotes"><td></td></tr></tbody></table>');

// Main table caption
jQuery('.mobile-wrap.custom-draft').find('span:contains("Pre-Draft Selections For"),span:contains("Your Turn To Draft")').appendTo('.make-pick-table caption');
jQuery('.mobile-wrap.custom-draft').find('span:contains("Your Turn To Draft")').text("Your Turn To Draft. Select Below");

// Left side option select player list table
jQuery('.mobile-wrap.custom-draft table caption span:contains("Player")').closest('table').appendTo('.mobile-view.leftS');
jQuery('.mobile-view.leftS table table').wrap('<div class="draft-overflow" style="max-height:16.375rem;overflow-x:auto"></div>');
jQuery('.mobile-view.leftS div > div.draft-overflow').unwrap();
jQuery('.custom-draft .mobile-view > table').width('');
jQuery('.mobile-view.leftS caption span:contains("Pre-Draft")').closest('table').addClass('has-buttons-left');
jQuery('.mobile-view.leftS caption span:contains("Draft")').closest('table').addClass('has-buttons-left');


// 8-24-20 MIKE CHANGED TO REMOVE COLSPAN ON TD ADJUST COL AND ADD THAT CLASS NAME
jQuery('.has-buttons-left tbody').append('<tr><td class="adjust_col" align="center"><input name="add_to_list" value="Add Player To Que" onclick="addToList(\'destination_list\',\'sel_pid\', \'sel_name\');" type="button"></td></tr>');


jQuery('#body_new_predraft .has-buttons-left tbody').append('<tr><td class="adjust_col" align="center"><input name="previous_round" value="Add All From Previous Round" onclick="copy_previous_round();" type="button"></td></tr>');

// 8-24-20 MIKE ADDED TO COUNT TH AND GET COLSPAN FOR BUTTON UNDER SCROLL TABLE TO MATCH UP

jQuery('.custom-draft:contains("Your Turn To Draft. Select Below")').find('td.adjust_col').remove();

jQuery('.has-buttons-left tr:first-of-type th').replaceWith(function () {
	return $("<td />", {
		html: $(this).html()
	});
});

jQuery('#body_new_predraft .mobile-wrap caption').find('span:contains("Saved Round")').closest('.mobile-wrap').addClass('custom-draft-rounds');

jQuery('.mobile-view.leftS').find('td a:contains("Name")').closest('tr').addClass('head-th');
jQuery('.mobile-view.leftS tr.head-th').find('td a:contains("ADP")').text('ADP');
jQuery('.mobile-view.leftS tr.head-th').find('td a:contains("My Rank")').text('#');
jQuery('.mobile-view.leftS tr.head-th').find('td:contains("Projections")').text('Proj');
jQuery('.mobile-view.leftS tr.head-th td:last-of-type').addClass('scroll-spacer');

// ADD CLASSES TABLE HEADERS FOR MAKE A DRAFT PICK TABLE BOXES
jQuery('.make-pick-table').find('td a:contains("Name")').closest('tr').addClass('head-th');
jQuery('.make-pick-table tr.head-th').find('td a:contains("#")').closest('td').addClass('my_ranks');
jQuery('.make-pick-table tr.head-th').find('td a:contains("Name")').closest('td').addClass('waiv-name');
jQuery('.make-pick-table tr.head-th').find('td a:contains("Team")').closest('td').addClass('waiv-team');
jQuery('.make-pick-table tr.head-th').find('td a:contains("Pos")').closest('td').addClass('waiv-pos');
jQuery('.make-pick-table tr.head-th').find('td a:contains("Bye")').closest('td').addClass('waiv-bye');
jQuery('.make-pick-table tr.head-th').find('td a:contains("Salary")').closest('td').addClass('waiv-salary');
jQuery('.make-pick-table tr.head-th').find('td a:contains("Pts")').closest('td').addClass('waiv-pts');
jQuery('.make-pick-table tr.head-th').find('td a:contains("Proj")').closest('td').addClass('waiv-proj');
jQuery('.make-pick-table tr.head-th').find('td:contains("Inj")').closest('td').addClass('waiv-inj');
jQuery('.make-pick-table tr.head-th').find('td:contains("Rank")').closest('td').addClass('waiv-rank');
jQuery('.make-pick-table tr.head-th').find('td:contains("ADP")').closest('td').addClass('waiv-adp');

jQuery('.has-buttons-left .my_ranks').closest('table').addClass('has_my_ranks');
//jQuery('.make-pick-table .my_ranks').remove();

jQuery(document).ready(function () {
	//jQuery('.has_my_ranks .pickerbox td:first-of-type').remove();
	//jQuery('.has_my_ranks .draft-overflow').closest('td').attr('colspan',colCount);

	jQuery(".has_my_ranks .head-th td span select").on('change', function () {
		//$('.has_my_ranks .pickerbox td:first-of-type').remove();
	});

	jQuery('.has_my_ranks #picker_filt_name').on('input', function () {
		//$('.has_my_ranks .pickerbox td:first-of-type').remove();
	});
});

jQuery(".has_my_ranks .head-th a").click(function () {
	//$('.has_my_ranks .pickerbox td:first-of-type').remove();
});

var colCount = 0;
jQuery('.has-buttons-left tr.head-th td').each(function () {
	if ($(this).attr('colspan')) {
		colCount += +$(this).attr('colspan');
	} else {
		colCount++;
	}
});
jQuery('td.adjust_col').attr('colspan', colCount);


jQuery('.make-pick-table').find('#picker_filt_nfl').closest('td').addClass('add-sorting');

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	$('head').append('<style>td.add-sorting{text-align:center;}td.add-sorting input[type="text"]{width:auto}</style>');
} else {
	if (document.querySelectorAll("body_options_52, body_new_predraft")) {
		function hideAllFilters(toggleThis) {
			if (toggleThis === undefined) {
				//jQuery('#custom-filter-name').hide();
				//jQuery('#custom-filter-nfl').hide();
				//jQuery('#custom-filter-pos').hide();
			} else {
				if (toggleThis === "#custom-filter-name") {
					jQuery('#custom-filter-name').toggle();
					jQuery('#custom-filter-nfl').hide();
					jQuery('#custom-filter-pos').hide();
				}
				if (toggleThis === "#custom-filter-nfl") {
					jQuery('#custom-filter-name').hide();
					jQuery('#custom-filter-nfl').toggle();
					jQuery('#custom-filter-pos').hide();
				}
				if (toggleThis === "#custom-filter-pos") {
					jQuery('#custom-filter-name').hide();
					jQuery('#custom-filter-nfl').hide();
					jQuery('#custom-filter-pos').toggle();
				}
			}
		}
		//MOVE FILTERS TO HEADER
		nameFilter = '<div id="custom-filter-name" style="display:none; overflow:visible!important;padding:0.188rem;background:var(--accent,#B82601);border-radius: 0.188rem; position:absolute; min-width:auto; left:-2.188rem; top:-2.125rem; z-index:1;width:6.625rem!important">' + jQuery('#picker_filt_name').clone().wrap('<p>').parent().html() + '</div>';
		nflFilter = '<div id="custom-filter-nfl" style="display:none; overflow:visible!important;padding:0.188rem;background:var(--accent,#B82601);border-radius: 0.188rem; position:absolute; min-width:auto; left:-3.313rem; top:-2.125rem; z-index:1;width:6.625rem!important">' + jQuery('#picker_filt_nfl').clone().wrap('<p>').parent().html() + '</div>';
		posFilter = '<div id="custom-filter-pos" style="display:none; overflow:visible!important;padding:0.188rem;background:var(--accent,#B82601);border-radius: 0.188rem; position:absolute; min-width:auto; left:-3.313rem; top:-2.125rem; z-index:1;width:6.625rem!important">' + jQuery('#picker_filt_pos').clone().wrap('<p>').parent().html() + '</div>';
		nflFilter = nflFilter.replace("picker_filter('picker')", "picker_filter('picker');hideAllFilters()");
		posFilter = posFilter.replace("picker_filter('picker')", "picker_filter('picker');hideAllFilters()");
		jQuery('.make-pick-table tr.head-th td.waiv-name').append('<span style="position:relative">' + nameFilter + '<span style="padding-left:0.375rem;cursor:pointer"><i class="fa-regular fa-magnifying-glass" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-name\')"></i></span></span>');
		jQuery('.make-pick-table tr.head-th td.waiv-team').append('<span style="position:relative">' + nflFilter + '<span style="padding-left:0.188rem;cursor:pointer"><i class="fa-regular fa-filter" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-nfl\' )"></i></span></span>');
		jQuery('.make-pick-table tr.head-th td.waiv-pos').append('<span style="position:relative">' + posFilter + '<span style="padding-left:0.188rem;cursor:pointer"><i class="fa-regular fa-filter" aria-hidden="true" onclick="hideAllFilters(\'#custom-filter-pos\' )"></i></span></span>');
		jQuery('#body_options_52 .table2-sub1 td:contains("Filter by"),#body_new_predraft .table2-sub1 td:contains("Filter by")').html("");
	}
	jQuery(document).mouseup(function (e) {
		var container = $("#custom-filter-nfl,#custom-filter-pos,#custom-filter-name");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			container.hide();
		}
	});
	jQuery('head').append('<style>#custom-filter-nfl select,#custom-filter-pos select,#custom-filter-name input{border-radius:0.188rem;width:6.25rem!important;display:block;margin:0 auto;padding:0.063rem;font-style:normal;text-decoration:none;outline:none}</style>');
	jQuery('.mobile-view.leftS').find('tr:contains("Filter by:")').remove();
}


$('#body_options_52 form input[name="add_to_list"]').first().remove();
$('#body_options_52 form input[name="remove_from_list"]').first().remove();
$('#body_options_52 form input[name="move_up"]').first().remove();
$('#body_options_52 form input[name="move_down"]').first().remove();


// Right side option player drop list - optional message box
jQuery('.mobile-wrap.custom-draft table span:contains("Players Queued")').closest('table').appendTo('.mobile-view.rightS');
jQuery('.mobile-wrap.custom-draft p:contains("Player to draft:")').closest('td').addClass('create-table');
jQuery('.create-table').appendTo('.mobile-view.rightS').wrap('<table class="player-to-draft"><tbody><tr />');
jQuery('<caption><span></span></caption>').insertBefore('.player-to-draft tbody');
jQuery('.player-to-draft p:first').appendTo('.player-to-draft caption span');
jQuery('.player-to-draft caption span p span').unwrap();
jQuery('.player-to-draft #sel_name').text('No Player Selected');
jQuery('.mobile-view.rightS span:contains("Players Queued For Selection")').closest('table').addClass('has-buttons-right');
jQuery('.has-buttons-right tbody').append('<tr><td align="center"><input name="remove_from_list" value="Remove From Que" onclick="removeListItem();" type="button"><input name="move_up" value="&#9650;" onclick="moveItem(true);" type="button"><input name="move_down" value="&#9660;" onclick="moveItem(false);" type="button"></td></tr>');
jQuery('.has-buttons-right tbody').prepend('<tr><th style="padding: 0.125rem 0">Sortable Draft Que List</th></tr>');
jQuery('<table><tbody><tr><td align="center"><input style="margin-bottom:0" name="continue" value="Save These Picks And Continue" onclick="selectAllItems();" type="submit"></td></tr></tbody></table>').insertAfter($('.has-buttons-right').parents('.make-pick-table'));

// Hint and blockquote place in new table
jQuery('.mobile-wrap.custom-draft').find('td[colspan="3"] b:contains("Not sure what to do")').closest('td').wrapInner('<span class="alert alert-info-table"></span>');
jQuery('.alert b:contains("Not sure what to do")').parent().addClass('toggle-hint');
jQuery('.alert b:contains("Not sure what to do")').html('<span class="reportnavigationheader">Help:</span>Not sure what to do? Click for instructions').addClass('toggle-hint');
jQuery('.toggle-hint ol').hide();
jQuery('.toggle-hint b').on("click", function () {
	$('.toggle-hint ol').slideToggle();
});
jQuery('.mobile-wrap.custom-draft').find('span.alert-info-table').appendTo('tr.blockquotes td');

// Report form button go to different round
jQuery('.custom-draft .reportform:contains("Or, you may go immediately to:")').insertAfter('.custom-draft');

// Click my rank on load
jQuery('.mobile-view.leftS .head-th').find('a:first').trigger('click');

// COMMISSIONER LOAD AND UNLOAD ROSTERS
// Add Class to main load player table
jQuery('#body_options_27 .mobile-wrap').find('span:contains("Select Players To Add")').parents('.mobile-wrap').addClass('custom-loadplayer');

// Create new html for draft pages
jQuery('#body_options_27 #container-wrap form:first').append('<div class="mobile-wrap"><table class="custom-loadplayer-table"><caption class="custom-loadplayer-title"></caption><tbody><tr><td class="mobile-view leftSL"></td><td class="draft-blankTD" style="padding:0.313rem;float:left;width:100%"></td><td class="mobile-view rightSL"></td></tr></tbody></table><table><tbody><tr class="blockquotes"><td></td></tr><tr class="enter-player"><td style="text-align:center;padding:0.625rem"></td></tr></tbody></table></div>');

// Main table caption
jQuery('.custom-loadplayer > table > caption > span').appendTo('.custom-loadplayer-table caption');

// Left side option select player list table
jQuery('.custom-loadplayer table span:contains("Select Players To")').closest('table').appendTo('.mobile-view.leftSL');
jQuery('.mobile-view.leftSL table table').wrap('<div class="draft-overflow" style="max-height:16.375rem;overflow-x:auto"></div>');
jQuery('.mobile-view.leftSL div > div.draft-overflow').unwrap();
jQuery('.mobile-view.leftSL span:contains("Select Players To Add")').closest('table').addClass('has-buttons-leftL');
jQuery('.has-buttons-leftL').width('');
jQuery('.has-buttons-leftL tbody').append('<tr><td colspan="7" align="center"><input name="add_to_list" value="Add Player" onclick="addToList(\'destination_list\',\'sel_pid\', \'sel_name\');" type="button"></td></tr>');
jQuery('.mobile-view.leftSL').find('td a:contains("Name")').closest('tr').addClass('head-th');
jQuery('.mobile-view.leftSL').find('td:contains("Projections")').text('Proj');
jQuery('.mobile-view.leftSL tr.head-th td:last-of-type').addClass('scroll-spacer');
jQuery('.mobile-view.leftSL').find('tr:contains("Filter by:")').remove();

// Right side current roster
jQuery('.custom-loadplayer table span:contains("Current Roster")').closest('table').appendTo('.mobile-view.rightSL');
jQuery('.mobile-view.rightSL span:contains("Current Roster")').closest('table').addClass('has-buttons-rightL');
jQuery('.has-buttons-rightL tbody').append('<tr><td align="center"><input name="remove_from_list" value="Remove Player" onclick="removeListItem();" type="button"></td></tr>');
jQuery('.has-buttons-rightL tbody').prepend('<tr><th style="padding: 0.125rem 0">Team Roster</th></tr>');
jQuery('<table><tbody><tr><td align="center"><input value="Load/Unload Roster" onclick="selectAllItems();" type="submit"></td></tr></tbody></table>').insertAfter($('.has-buttons-rightL').parents('.custom-loadplayer-table'));

// Hint and blockquote place in new table
jQuery('.custom-loadplayer').find('span.alert-info-table').appendTo('tr.blockquotes td');
jQuery('#body_options_27 td:has(textarea)').contents().appendTo('tr.enter-player td');

// Click my rank on load
jQuery('.mobile-view.leftSL .head-th').find('a:first').trigger('click');


// TRADES PAGE
jQuery('#body_options_05 .mobile-wrap').find('span:contains("Pending Trades")').parents('.mobile-wrap').addClass('tradesTable');
jQuery('.tradesTable').find('a:contains("Compare Players")').remove();
jQuery('.tradesTable tr.newposition').removeClass('newposition');
jQuery('.tradesTable').find('tr:contains("Offered To Others")').addClass('offered-by-me');
jQuery('.tradesTable').find('tr:contains("Offered To You")').addClass('offered-to-me');
jQuery('.tradesTable').find('tr:contains("Offering Franchise")').addClass('column-heads');
jQuery('.tradesTable tr').has('ul').addClass('trade-offer');
jQuery('.tradesTable tr.oddtablerow').removeClass('oddtablerow');
jQuery('.tradesTable tr.eventablerow').removeClass('eventablerow');
jQuery('.tradesTable tr').has('.warning').addClass('warningTR no-trades');
jQuery('.tradesTable .no-trades').prevUntil('.trade-offer').addClass('no-trades');
jQuery('.tradesTable .trade-offer td:nth-child(1),.tradesTable .column-heads th:nth-child(1)').addClass('franchise-offered-by');
jQuery('.tradesTable .trade-offer td:nth-child(2),.tradesTable .column-heads th:nth-child(2)').addClass('players-offered-by');
jQuery('.tradesTable .trade-offer td:nth-child(3),.tradesTable .column-heads th:nth-child(3)').addClass('franchise-offered-to');
jQuery('.tradesTable .trade-offer td:nth-child(4),.tradesTable .column-heads th:nth-child(4)').addClass('players-offered-to');
jQuery('.tradesTable .trade-offer td:nth-child(5),.tradesTable .column-heads th:nth-child(5)').addClass('expires-by');
jQuery('.tradesTable .trade-offer td:nth-child(6),.tradesTable .column-heads th:nth-child(6)').addClass('comments-to');
jQuery('.tradesTable .trade-offer td:nth-child(7),.tradesTable .column-heads th:nth-child(7)').addClass('actions-by');

jQuery(".tradesTable .offered-by-me").each(function () {
	$(this).nextUntil(".offered-to-me").addBack().wrapAll("<table class='offeredbymeTable'><tbody>");
});
jQuery(".tradesTable .offered-to-me").each(function () {
	$(this).nextUntil(".tradesTable tbody").addBack().wrapAll("<table class='offeredtomeTable'><tbody>");
});
jQuery(".trade-offer .franchise-offered-by").each(function () {
	$(this).nextUntil(".franchise-offered-to").addBack().wrapAll("<div class='offerer' />");
});
jQuery(".trade-offer .franchise-offered-to").each(function () {
	$(this).nextUntil(".expires-by").addBack().wrapAll("<div class='offeree' />");
});
jQuery(".trade-offer + tr").after('<tr class="divide-trades"><td colspan="20" style="padding:0;margin:0;border:0"></td></tr>');
jQuery('.offeredbymeTable td.comments-to').each(function () {
	if ($(this).text().length > 1) $(this).wrapInner('<span class="comments-disabled" />');
	else $(this).wrapInner('<span class="comments-disabled">No Comments</span>');
});
var tradeOffer = 0;
jQuery('.offeredtomeTable td.comments-to').each(function () {
	if ($(this).text().length > 2) {
		$(this).contents().eq(0).wrap('<span class="comments-disabled" />');
		$(this).find('.comments-disabled').after('<span class="comments-to-textarea">Leave Comment :</span>');
	} else {
		$(this).prepend('<span class="comments-disabled">No Comments</span><span class="comments-to-textarea">Leave Comment :</span>');
	}
	$(this).find("textarea").addClass("comments-textarea").attr("onchange", "$('#comments-response-" + tradeOffer + "').val(this.value)");
	tradeOffer++;
});
jQuery(".offeredtomeTable .trade-offer").each(function () {
	$(this).find(".actions-by").append('<div class="actions-expired"><b>Expires On:</b> ' + $(this).find(".expires-by").html().replace(year, "").replace(":00 ", " ") + '</div>');
});
jQuery(".offeredbymeTable .trade-offer").each(function () {
	$(this).find(".actions-by").append('<span class="actions-expired" style="display:block"><b>Expires On:</b> ' + $(this).find(".expires-by").html().replace(year, "").replace(":00 ", " ") + '</span>');
});

var pendingTrades = new Array();
jQuery(".offeredtomeTable input[name=PENDING]").each(function () {
	pendingTrades.push($(this).val());
});
var pendingFranchises = new Array();
jQuery(".offeredtomeTable input[name=FRANCHISE_ID]").each(function () {
	pendingFranchises.push($(this).val());
});
var tradeOffer = 0;

jQuery(".offeredtomeTable .trade-offer .actions-by").each(function () {
	$(this).html('<form class="cus-trades-form" action="trade_response" method="post"><input type="hidden" name="LEAGUE_ID" value="' + league_id + '"/><input type="hidden" name="FRANCHISE_ID" value="' + pendingFranchises[tradeOffer] + '"/><input type="hidden" name="PENDING" value="' + pendingTrades[tradeOffer] + '"/><input type="hidden" name="COMMENTS" id="comments-response-' + tradeOffer + '" value=""/>' + $(this).html() + '</form>');
	tradeOffer++;
});


// MIKE ADDED TO MOVE RESPOND TRADE OFFER BUTTONS INTO THE FORMS
jQuery('.offeredtomeTable tr:has(input[type="submit"])').each(function () {
	$(this).prev().find('.cus-trades-form').append(this);
});
jQuery('.offeredtomeTable .cus-trades-form input[type="submit"]').unwrap();
jQuery('.offeredtomeTable .cus-trades-form td').remove();
jQuery('.offeredtomeTable .cus-trades-form input[type="submit"]').unwrap();

//jQuery(".offeredbymeTable .trade-offer + tr").remove();


// Bottom tables to trade from one team to another , make mobile friendly
jQuery('#body_options_05 .no-borderspacing').prepend('<tr class="trade-toggle-mobile" style="text-align:center"><td><input id="tradeShowOther" value="Display Other Team" type="button"><input id="tradeShowMyTeam" value="Display My Team" type="button"></td></tr>');
jQuery('#body_options_05 td[valign="top"] table.report').addClass('trade-twocolumn-table');

// add class to parent div.mobile of the 2 columns tables for trade
jQuery('.trade-twocolumn-table').parents('td').addClass('div-wrap-trade-table');

// add class to each of the 2 column trade tables
jQuery('.div-wrap-trade-table:first').addClass('firstTable');
jQuery('.div-wrap-trade-table:last').addClass('lastTable');

// add class to all table td and th to use later in script to decipher custom contract year and status
jQuery('.trade-twocolumn-table th,.trade-twocolumn-table td').addClass('trade-class');

// add class to table column th and td  - checkbox and trade?
jQuery('.trade-twocolumn-table').find('th:contains("Trade?")').removeClass().addClass('trade-box');
jQuery('.trade-twocolumn-table td').has('input[type="checkbox"]').removeClass().addClass('trade-box');
// change th text from trade? to trade
jQuery('.trade-twocolumn-table th.trade-box').html('<i class="fa-regular fa-check" aria-hidden="true"></i>');

// add class table column th and td - players names
jQuery('.trade-twocolumn-table').find('th:contains("Player")').removeClass().addClass('trade-player');
jQuery('.trade-twocolumn-table td').has('a[class*="position"]').removeClass().addClass('trade-player');
// change th text from player to player name
jQuery('.trade-twocolumn-table th.trade-player').text('Player Name');

// add class to second table column th - salary - the td already has this class added
jQuery('.trade-twocolumn-table').find('th:contains("Salary")').removeClass().addClass('salary');
jQuery('.trade-twocolumn-table td.salary').removeClass().addClass('salary');

// add class to table column th  - bye week - td already has this class
jQuery('.trade-twocolumn-table').find('th:contains("Bye")').removeClass().addClass('week');
jQuery('.trade-twocolumn-table td.week').removeClass().addClass('week');

// add class to table column th  - ytd points - td already has this class
jQuery('.trade-twocolumn-table').find('th:contains("YTD Pts")').removeClass().addClass('points');
jQuery('.trade-twocolumn-table td.points').removeClass().addClass('points');
// change th text from "year"YTD Pts to YTD Pts
jQuery('.trade-twocolumn-table th.points').text('YTD Pts');

// add class to table td that has future draft pick and span it across all td cells
jQuery('.trade-twocolumn-table .trade-box + td:contains("Draft Pick")').removeClass().addClass('draftpickTD');
jQuery('.trade-twocolumn-table .draftpickTD').attr("colspan", "7");

// add class to table column th and td  - for blind bidding input and text td
jQuery('.trade-twocolumn-table').find('td:contains("Blind Bidding Dollars")').removeClass().addClass('trade-bbid-text');
jQuery('.trade-twocolumn-table td').has('input[type="text"]').removeClass().addClass('trade-bbid-amt');
jQuery('.trade-bbid-amt').wrapInner('<span />');

contentsLeft = jQuery('.firstTable .trade-bbid-text').contents();
jQuery('.firstTable .trade-bbid-amt').append(contentsLeft);
contentsRight = jQuery('.lastTable .trade-bbid-text').contents();
jQuery('.lastTable .trade-bbid-amt').append(contentsRight);
jQuery('.trade-twocolumn-table td.trade-bbid-text').remove();
jQuery('.trade-twocolumn-table .trade-bbid-amt').attr("colspan", "7");


if (jQuery('.trade-twocolumn-table').has('td.contractyear')) {
	jQuery('.firstTable th.trade-class').eq(0).removeClass().addClass('contractyear');
	jQuery('.lastTable th.trade-class').eq(0).removeClass().addClass('contractyear');
	jQuery('.trade-twocolumn-table td.contractyear').removeClass('trade-class');
}
if (jQuery('.trade-twocolumn-table').has('td.contractstatus')) {
	jQuery('.firstTable th.trade-class').eq(0).removeClass().addClass('contractstatus');
	jQuery('.lastTable th.trade-class').eq(0).removeClass().addClass('contractstatus');
	jQuery('.trade-twocolumn-table td.contractstatus').removeClass('trade-class');
}


jQuery('#tradeShowOther').on("click", function () {
	$('.div-wrap-trade-table.firstTable').hide();
	$('#tradeShowOther').hide();
	$('.div-wrap-trade-table.lastTable').show();
	$('#tradeShowMyTeam').show();
});
jQuery('#tradeShowMyTeam').on("click", function () {
	$('.div-wrap-trade-table.lastTable').hide();
	$('#tradeShowMyTeam').hide();
	$('.div-wrap-trade-table.firstTable').show();
	$('#tradeShowOther').show();
});

if ($('td.firstTable caption.withfranchiseicon').length === 1) {
	var leftName = $('td.firstTable caption img').attr('alt')
} else {
	var leftName = $('td.firstTable caption a').text();
}

if ($('td.lastTable caption.withfranchiseicon').length === 1) {
	var rightName = $('td.lastTable caption img').attr('alt')
} else {
	var rightName = $('td.lastTable caption a').text();
}

$('#tradeShowMyTeam').val('Show: ' + leftName);
$('#tradeShowOther').val('Show: ' + rightName);


// FORMAT STATS PAGES
function expandPlayer(thisPosition, thisPlayer, expand) {
	if (expand) {
		jQuery("#expandTotal_" + thisPosition + "_" + thisPlayer).hide();
		jQuery("#expandAvg_" + thisPosition + "_" + thisPlayer).hide();
		jQuery("#collapseTotal_" + thisPosition + "_" + thisPlayer).show();
		jQuery("#collapseAvg_" + thisPosition + "_" + thisPlayer).show();
		jQuery(".nflStatsWeekRow_" + thisPosition + "_" + thisPlayer).show();
	} else {
		jQuery("#expandTotal_" + thisPosition + "_" + thisPlayer).show();
		jQuery("#expandAvg_" + thisPosition + "_" + thisPlayer).show();
		jQuery("#collapseTotal_" + thisPosition + "_" + thisPlayer).hide();
		jQuery("#collapseAvg_" + thisPosition + "_" + thisPlayer).hide();
		jQuery(".nflStatsWeekRow_" + thisPosition + "_" + thisPlayer).hide();
	}
}

function doNFLTotal(isTotal) {
	if (isTotal) {
		jQuery("#nflTotalInactive").hide();
		jQuery("#nflAvgInactive").show();
		jQuery("#nflTotalActive").show();
		jQuery("#nflAvgActive").hide();
		jQuery(".nflStatsTotalRow").show();
		jQuery(".nflStatsAvgRow").hide();
	} else {
		jQuery("#nflTotalInactive").show();
		jQuery("#nflAvgInactive").hide();
		jQuery("#nflTotalActive").hide();
		jQuery("#nflAvgActive").show();
		jQuery(".nflStatsTotalRow").hide();
		jQuery(".nflStatsAvgRow").show();
	}
}

function applyStat(thisStat, decimal) {
	if (thisStat === "-")
		return thisStat;
	else if (isNaN(parseFloat(thisStat)))
		if (decimal)
			return "0.0";
		else
			return 0;
	else
		return thisStat;
}

function shortenHeader(thisHeader) {
	if (thisHeader === "Targets") return "<span title='" + thisHeader + "'>Tgt</span>";
	if (thisHeader === "Pass Interceptions Thrown") return "<span title='" + thisHeader + "'>Int</span>";
	if (thisHeader === "Receptions") return "<span title='" + thisHeader + "'>Rcpt</span>";
	var isRush = false,
		isRec = false;
	if (thisHeader.indexOf("Rush") > -1) isRush = true;
	if (thisHeader.indexOf("Receiving") > -1) isRec = true;

	var newHeader = thisHeader.toUpperCase();
	newHeader = newHeader.replace("EXTRA", "X");
	newHeader = newHeader.replace("NUMBER OF", "#");
	newHeader = newHeader.replace("(", "( ");
	newHeader = newHeader.replace(")", " )");
	var headerSplit = newHeader.split(" ");
	var newHeader = "";
	for (var i = 0; i < headerSplit.length; i++) {
		newHeader += headerSplit[i].substring(0, 1);
	}
	if (isRush) newHeader = newHeader.replace("R", "Run");
	if (isRec) newHeader = newHeader.replace("R", "Rec");
	return "<span title='" + thisHeader + "'>" + newHeader + "</span>";
}

function getNFLScheduleReformat(thisTeam) {
	var nflScheduleReformat = new Array();
	for (var i = 1; i < AllGamesCount; i++) {
		scheduleData = reportNflSchedule_ar["w_" + i]
		var teamFound = false;
		try {
			for (var m = 0; m < scheduleData.nflSchedule.matchup.length; m++) {
				if (scheduleData.nflSchedule.matchup[m].team[0].id === thisTeam) {
					nflScheduleReformat[i] = thisTeam + " " + scheduleData.nflSchedule.matchup[m].team[0].score + " at " + scheduleData.nflSchedule.matchup[m].team[1].score + " " + scheduleData.nflSchedule.matchup[m].team[1].id;
					teamFound = true;
					break;
				}
				if (scheduleData.nflSchedule.matchup[m].team[1].id === thisTeam) {
					nflScheduleReformat[i] = thisTeam + " " + scheduleData.nflSchedule.matchup[m].team[1].score + " vs " + scheduleData.nflSchedule.matchup[m].team[0].score + " " + scheduleData.nflSchedule.matchup[m].team[0].id;
					teamFound = true;
					break;
				}
			}
		} catch (er) {}
		if (!teamFound) nflScheduleReformat[i] = "bye";
	}
	//console.log(nflScheduleReformat)
	return nflScheduleReformat;
}

function doNFLStatsTable(thisTable, nflScheduleArray) {
	try {
		var tableCaptionHTML = thisTable.find("caption").html();
		var thisPosition = thisTable.find("caption span").html();
		var tableRows = new Array();
		var weekRow = new Array();
		//EACH TABLE HAS ONE ROW OF TH WITH WEEK INFORMATION
		thisTable.find("tr:eq(0) th").each(function () {
			weekRow[weekRow.length] = jQuery(this).html();
		});
		//EACH TABLE HAS NEW PLAYER BEGIN WHERE COLSPAN ATTRIBUTE EXISTS
		var currPlayer = 0;
		var currRow = 0;
		var rowCount = 0;
		thisTable.find("tr").each(function () {
			if (rowCount > 0) { // we want to ignore first row
				if (jQuery(this).find("th").length > 0) { // NEW PLAYER SETUP
					currPlayer = tableRows.length;
					if (jQuery(this).find("th").html().indexOf("<img") > 0)
						tableRows[currPlayer] = ({
							"name": jQuery(this).find("th").html().substring(0, jQuery(this).find("th").html().indexOf("<img")),
							"hasInjury": false,
							"playerRows": new Array()
						});
					else
						tableRows[currPlayer] = ({
							"name": jQuery(this).find("th").html(),
							"hasInjury": false,
							"playerRows": new Array()
						});
				} else {
					if (jQuery(this).find("td:eq(0)").html() === "Injury Status") tableRows[currPlayer].hasInjury = true;
					currRow = tableRows[currPlayer].playerRows.length;
					tableRows[currPlayer].playerRows[currRow] = new Array();
					var currCol = 0;
					jQuery(this).find("td").each(function () {
						tableRows[currPlayer].playerRows[currRow][currCol] = jQuery(this).html();
						currCol++;
					});
				}
			}
			rowCount++;
		});
		var newTableContent = "";
		if (document.getElementById("body_nfl_team_stats"))
			if (tableRows[0].hasInjury) var statsLastRow = tableRows[0].playerRows.length - 1;
			else var statsLastRow = tableRows[0].playerRows.length;
		else
		if (tableRows[0].hasInjury) var statsLastRow = tableRows[0].playerRows.length - 2;
		else var statsLastRow = tableRows[0].playerRows.length - 1;

		newTableContent += "<caption>" + tableCaptionHTML + "</caption><tbody>";
		//HEADER ROW
		newTableContent += "<tr><th>Player</th><th>Week</th>";
		if (tableRows[0].hasInjury) newTableContent += "<th>Injury</th>";
		for (var i = 0; i < statsLastRow; i++) {
			newTableContent += "<th style='text-align:center'>" + shortenHeader(tableRows[0].playerRows[i][0]) + "</th>";
		}
		newTableContent += "</tr>";
		for (var p = 0; p < tableRows.length; p++) {
			//TOTALS ROW (2ND LAST COLUMN)
			newTableContent += '<tr class="oddtablerow nflStatsTotalRow"><td><span id="expandTotal_' + thisPosition + '_' + p + '" onclick="expandPlayer(\'' + thisPosition + '\',\'' + p + '\',true)"></span><span id="collapseTotal_' + thisPosition + '_' + p + '" style="display:none" onclick="expandPlayer(\'' + thisPosition + '\',\'' + p + '\',false)"></span><span class="plus-toggle-stats"><span class="toggle-btn"></span></span>' + tableRows[p].name + '</td><td style="text-align:center">Total</td>';
			if (tableRows[p].hasInjury) newTableContent += "<td style='text-align:center'></td>";
			for (var i = 0; i < statsLastRow; i++) {
				if (!(tableRows[0].hasInjury && i === (tableRows[0].playerRows.length - 1))) newTableContent += "<td class='points' style='text-align:center'>" + applyStat(tableRows[p].playerRows[i][tableRows[p].playerRows[i].length - 2], false) + "</td>";
			}
			newTableContent += "</tr>";
			//AVG ROW (LAST COLUMN)
			newTableContent += '<tr class="oddtablerow nflStatsAvgRow"><td><span id="expandAvg_' + thisPosition + '_' + p + '" onclick="expandPlayer(\'' + thisPosition + '\',\'' + p + '\',true)"></span><span id="collapseAvg_' + thisPosition + '_' + p + '" style="display:none" onclick="expandPlayer(\'' + thisPosition + '\',\'' + p + '\',false)"></span><span class="plus-toggle-stats"><span class="toggle-btn"></span></span>' + tableRows[p].name + '</td><td style="text-align:center">Avg</td>';
			if (tableRows[p].hasInjury) newTableContent += "<td style='text-align:center'></td>";
			for (var i = 0; i < statsLastRow; i++) {
				if (!(tableRows[0].hasInjury && i === (tableRows[0].playerRows.length - 1))) newTableContent += "<td class='points' style='text-align:center'>" + applyStat(tableRows[p].playerRows[i][tableRows[p].playerRows[i].length - 1], true) + "</td>";
			}
			newTableContent += "</tr>";
			//WEEKS
			for (w = 1; w < tableRows[p].playerRows[0].length - 2; w++) {
				if (document.getElementById("body_nfl_team_stats"))
					newTableContent += "<tr class='eventablerow nflStatsWeekRow nflStatsWeekRow_" + thisPosition + "_" + p + "' style='display:none'><td style='text-align:right'>" + nflScheduleArray[w] + "</td><td style='text-align:center'>" + w + "</td>";
				else
					newTableContent += "<tr class='eventablerow nflStatsWeekRow nflStatsWeekRow_" + thisPosition + "_" + p + "' style='display:none'><td style='text-align:right'>" + tableRows[p].playerRows[tableRows[p].playerRows.length - 1][w] + "</td><td style='text-align:center'>" + w + "</td>";
				for (var i = 0; i < statsLastRow; i++) {
					if (tableRows[p].hasInjury && i === 0) {
						if (document.getElementById("body_nfl_team_stats"))
							newTableContent += "<td style='text-align:center'>" + tableRows[p].playerRows[tableRows[p].playerRows.length - 1][w] + "</td>";
						else
							newTableContent += "<td style='text-align:center'>" + tableRows[p].playerRows[tableRows[p].playerRows.length - 2][w] + "</td>";
					}
					if (!(tableRows[0].hasInjury && i === (tableRows[0].playerRows.length - 1))) newTableContent += "<td class='points' style='text-align:center'>" + applyStat(tableRows[p].playerRows[i][w], false) + "</td>";
				}
				newTableContent += "</tr>";
			}
		}
		newTableContent += "</tbody>";
		thisTable.html(newTableContent);
		if (!reformattedStatsFound) thisTable.closest("div").before("<div class='display_links' style='text-align:center;margin:0.625rem 0'><h3 style='display:inline;margin:0;padding:0;vertical-align:middle;font-weight:300'>Display: </h3><span id='nflTotalInactive' style='display:none'><a href='#total' onclick='doNFLTotal(true)'>Total</a></span><span id='nflTotalActive'><a>Total</a></span> | <span id='nflAvgInactive'><a href='#avg' onclick='doNFLTotal(false)'>Avg</a></span><span id='nflAvgActive' style='display:none'><a>Avg</a></span></div>");
		reformattedStatsFound = true;
		jQuery(".nflStatsAvgRow").hide();
	} catch (er) {}
}

function doMFL_reformatStatsPage() {
	var nflScheduleTemp = getNFLScheduleReformat(jQuery("select[name='TEAM'] option:selected").text());
	jQuery("body").find("table.report").each(function () {
		doNFLStatsTable(jQuery(this), nflScheduleTemp);
	});
	nflScheduleTemp = null;
}
if ((document.getElementById('body_nfl_team_stats') || document.getElementById('body_options_138')) && location.href.indexOf("#DEFAULT") === -1) {
	var reformattedStatsFound = false;
	doMFL_reformatStatsPage()
}

// Trade Response Page - for commissioners if commish uses the "Perform Trade"
jQuery('#body_trade_offer b:contains("Gave Up")').parents('table').addClass('offer-table');
jQuery('.offer-table').unwrap();
jQuery('#body_trade_offer table.offer-table').after('<table class="two_column_layout no-borderspacing offer-table-moved"></caption><tbody><tr><td class="two_column_layout mobile-view" valign="top"><div class="mobile-wrap"><table class="leftS" align="center"><caption style="text-align:center"><span></span></caption><tbody><tr><th>Gave Up</th></tr><tr><td class="gave-player oddtablerow" style="text-align:center"></td></tr><tr><th style="text-align:left">New Roster</th></tr><tr><td class="new-roster oddtablerow"></td></tr></tbody></table></div></td><td class="two_column_layout mobile-view" valign="top"><div class="mobile-wrap"><table class="rightS" align="center"><caption style="text-align:center"><span></span></caption><tbody><tr><th>Gave Up</th></tr><tr><td class="gave-player oddtablerow" style="text-align:center"></td></tr><tr><th style="text-align:left">New Roster</th></tr><tr><td class="new-roster oddtablerow"></td></tr></tbody></table></div></td></tr></tbody></table>');
jQuery('#body_trade_offer .offer-table h3 a:eq(0)').appendTo('.offer-table-moved .leftS caption span');
jQuery('#body_trade_offer .offer-table h3 a:eq(0)').appendTo('.offer-table-moved .rightS caption span');
jQuery('#body_trade_offer .offer-table tr:nth-child(1) > td:nth-child(1)').contents().appendTo('.offer-table-moved .leftS td.gave-player');
jQuery('#body_trade_offer .offer-table tr:nth-child(1) > td:nth-child(2)').contents().appendTo('.offer-table-moved .rightS td.gave-player');
jQuery('.offer-table-moved .gave-player h3,.offer-table-moved .leftS .gave-player br:first,.offer-table-moved .rightS .gave-player br:first').remove();
jQuery('#body_trade_offer .offer-table tr:nth-child(2) > td:nth-child(1)').contents().appendTo('.offer-table-moved .leftS td.new-roster');
jQuery('#body_trade_offer .offer-table tr:nth-child(2) > td:nth-child(2)').contents().appendTo('.offer-table-moved .rightS td.new-roster');
jQuery('#body_trade_offer .offer-table').remove();
jQuery('#body_trade_offer b:contains("Gave Up")').remove();
jQuery('#body_trade_offer .new-roster h3').remove();

// Trade Response Page - for commissioners and owners who "Reject Trade" , "Accept Trade" , "Revoke Trade"
jQuery('#body_trade_response .h3-menu:contains("Trade Rejected")').parent('#container-wrap').addClass('rejected-page trade-form-page');
jQuery('#body_trade_response .h3-menu:contains("Trade Accepted")').parent('#container-wrap').addClass('accepted-page trade-form-page');
jQuery('#body_trade_response .h3-menu:contains("Trade Revoked")').parent('#container-wrap').addClass('revoked-page trade-form-page');
jQuery('#body_trade_response .h3-menu:contains("The commissioner has been notified")').parent('#container-wrap').addClass('notify-commish trade-form-page');
jQuery('#body_trade_response .h3-menu:contains("allowing owners to approve or reject this trade")').parent('#container-wrap').addClass('notify-poll trade-form-page');

jQuery('#body_trade_response .trade-form-page .h3-menu:first').remove();
jQuery('#body_trade_response .trade-form-page .h3-menu + br').remove();
jQuery('#body_trade_response .trade-form-page .h3-menu').after('<div class="mobile-wrap"><table class="tradesubmit-table"><caption><span>You Have Rejected This Trade</span></caption><tbody><tr><th style="text-align:left">Trade Proposed By</th><th style="text-align:left">Trade Proposed To</th></tr><tr><td class="team-proposedby" style="vertical-align:top;width:50%"></td><td class="team-proposedto" style="vertical-align:top;width:50%"></td></tr></tbody></table></div>');
jQuery('#body_trade_response .accepted-page .tradesubmit-table caption span').text('You Have Accepted This Trade');
jQuery('#body_trade_response .revoked-page .tradesubmit-table caption span').text('You Have Revoked This Trade');
jQuery('#body_trade_response .notify-commish .tradesubmit-table caption span').text('You Have Accepted This Trade');
jQuery('#body_trade_response .notify-poll .tradesubmit-table caption span').text('You Have Accepted This Trade');


jQuery('#body_trade_response .trade-form-page ul:eq(0)').contents().appendTo('td.team-proposedby');
jQuery('#body_trade_response .trade-form-page ul:eq(1)').contents().appendTo('td.team-proposedto');
jQuery('#body_trade_response td.team-proposedto li,#body_trade_response td.team-proposedby li').css('list-style', 'none');

jQuery('#body_trade_response .trade-form-page td.team-proposedto b,#body_trade_response .trade-form-page td.team-proposedby b,#body_trade_response .trade-form-page .tradesubmit-table br').remove();
//jQuery('#body_trade_response .trade-form-page .tradesubmit-table td a').css("display" , "block");
//jQuery('#body_trade_response .trade-form-page .tradesubmit-table td a').css("padding" , "0.188rem 0");
jQuery('#body_trade_response .trade-form-page .mobile-wrap').nextUntil("div").remove();

jQuery('#body_trade_response .notify-poll .h3-menu').after('<h3 class="h3-menu">A new poll has been created allowing owners to approve or reject this trade.</h3>');
jQuery('#body_trade_response .notify-commish .h3-menu').after('<h3 class="h3-menu">This trades requires commissioner approval.</h3>');


// Trade Offer Page - Propose A Trade Submission Page
jQuery('#body_trade_offer .h3-menu:contains("Trade Proposal to")').parent('#container-wrap').addClass('trade-proposal-form');
jQuery('#body_trade_offer div.mobile-wrap table.report').addClass("remove-table");
jQuery('#body_trade_offer .trade-proposal-form .h3-menu:first,#body_trade_offer .trade-proposal-form .h3-menu:last,#body_trade_offer .trade-proposal-form br').remove();
jQuery('#body_trade_offer .trade-proposal-form .h3-menu:last a').css("display", "block");
jQuery('#body_trade_offer .trade-proposal-form .h3-menu:first').after('<div class="mobile-wrap"><table class="tradesubmit-table"><caption><span>You Have Offered This Trade</span></caption><tbody><tr><th style="text-align:left">Trade Proposed By</th><th style="text-align:left">Trade Proposed To</th></tr><tr><td class="team-proposedby" style="vertical-align:top;width:50%"></td><td class="team-proposedto" style="vertical-align:top;width:50%"></td></tr><tr><td colspan="2" style="border:0;box-shadow:none;padding:0.625rem"></td></tr><tr><td colspan="2" class="trade-expires-by" style="text-align:center"></td></tr></tbody></table></div>');
jQuery('#body_trade_offer .trade-proposal-form ul li:eq(0)').contents().appendTo('td.team-proposedby');
jQuery('#body_trade_offer .trade-proposal-form ul li:eq(1)').contents().appendTo('td.team-proposedto');
jQuery('#body_trade_offer .trade-proposal-form .tradesubmit-table td a').css("display", "block");
jQuery('#body_trade_offer .trade-proposal-form .tradesubmit-table td a').css("padding", "0.188rem 0");
jQuery('#body_trade_offer .remove-table caption,#body_trade_offer .remove-table a,#body_trade_offer .remove-table ul').remove();
jQuery('#body_trade_offer .remove-table td').contents().appendTo('td.trade-expires-by');

try {
	jQuery("#body_trade_offer .trade-proposal-form td.team-proposedto").html(jQuery("#body_trade_offer .trade-proposal-form td.team-proposedto").html().replace(/for/ig, ""));
	jQuery("#body_trade_offer .trade-proposal-form td.team-proposedby").html(jQuery("#body_trade_offer .trade-proposal-form td.team-proposedby").html().replace(/will give/ig, ""));
	jQuery("#body_trade_offer .trade-proposal-form td.team-proposedto").html(jQuery("#body_trade_offer .trade-proposal-form td.team-proposedto").html().replace(/To/ig, ""));
	jQuery('#body_trade_offer td.trade-expires-by').html($('#body_trade_offer td.trade-expires-by').html().replace('proposed a trade with', ''));
	jQuery('#body_trade_offer td.trade-expires-by').html($('#body_trade_offer td.trade-expires-by').html().replace(':', ''));
} catch (er) {}
jQuery('#body_trade_offer .remove-table').parents('.mobile-wrap').remove();

// Homepage Messages setup page
jQuery('<table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Available Modules</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input name="add_to_list" value="Add To List" onclick="add();" type="button"></td></tr><tr><td class="preview-modules"></td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Currently Used Modules</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input name="remove_from_list" value="Remove From List" onclick="removeListItem();" type="button"><input name="move_up" value="&#9650;" onclick="moveItem(true);" type="button"><input name="move_down" value="&#9660;" onclick="moveItem(false);" type="button"></td></tr></tbody></table></div></td></tr></tbody></table>').insertBefore('#options_71 form table');
jQuery('#options_71 form table #source_list').appendTo('#options_71 .leftV td.selectbox');
jQuery('#options_71 form table #destination_list').appendTo('#options_71 .rightV td.selectbox');
jQuery('#options_71 form table a[href*="javascript:void(0);"]').appendTo('#options_71 td.preview-modules');
jQuery('#options_71 form table + table').remove();

// My Draft List page
jQuery('#options_129 form[name="my_draft_list"]:has(select)').addClass('preselections');
jQuery('<div class="reportform"><span class="sorting-players">Sort By:<span></span></span><span class="position-players">Show Only:<span></span></span></div><table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Available Players</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:18.75rem;overflow:auto"></div></td></tr><tr><td><input name="add_to_list" value="Add Player" onclick="addToList(\'destination_list\',\'sel_pid\', \'sel_name\');" type="button"></td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Draft List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input name="remove_from_list" value="Remove From List" onclick="removeListItem();" type="button"><input name="move_up" value="&#9650;" onclick="moveItem(true);" type="button"><input name="move_down" value="&#9660;" onclick="moveItem(false);" type="button"><input style="display:block;margin:0 auto" type="button" name="remove_all_from_list" value="Remove All From List" onclick="remove_all();"></td></tr></tbody></table></div></td></tr><tr><td colspan="2"><p class="form_buttons"><input name="save" type="submit" value="Save My Draft List" onclick="selectAllItems();"></p></td></tr></tbody></table>').insertBefore('#options_129 form.preselections .mobile-wrap');
jQuery('#options_129 form.preselections table #picker').appendTo('#options_129 .leftV td.selectbox div');
jQuery('#options_129 form.preselections table #destination_list').appendTo('#options_129 .rightV td.selectbox');
jQuery('#options_129 form.preselections table #picker_filt_nfl').appendTo('#options_129 .sorting-players span');
jQuery('#options_129 form.preselections table #picker_filt_pos').appendTo('#options_129 .position-players span');
jQuery('#options_129 form.preselections table + div.mobile-wrap').hide();
jQuery('#options_129 div.mobile-wrap .report').find('th:contains("Player")').addClass('th-playername');
jQuery('#options_129 div.mobile-wrap .report tr td:has(a)').addClass('td-playername');
jQuery('#options_129 form.preselections table #picker td[width="175px"]').css('text-align', 'left');
jQuery("#options_129 .leftV td.selectbox div").prepend('<table id="sticky_filters"><tbody><tr><th width="10.938rem" style="text-align:left"><a href="#picker_top" onclick="sort_picker(\'name\',\'fsrank\',\'picker\')">Name</a></th><th width="2.188rem" style="text-align:center"><a href="#picker_top" onclick="sort_picker(\'nfl_team\',\'fsrank\',\'picker\')">Team</a></th><th width="1.563rem" style="text-align:center"><a href="#picker_top" onclick="sort_picker(\'pos\',\'fsrank\',\'picker\')">Pos</a></th><th width="1.563rem" style="text-align:center"><a href="#picker_top" onclick="sort_picker(\'bye_week\',\'fsrank\',\'picker\')">Bye</a></th><th width="1.25rem" style="text-align:center">Inj</th><th width="2.5rem" style="text-align:center"><a href="#picker_top" onclick="sort_picker(\'adp\',\'fsrank\',\'picker\')">ADP</a></th><th width="2rem" style="text-align:center"><a href="#picker_top" onclick="sort_picker(\'projpts\',\'fsrank\',\'picker\')">Proj</a></th></tr></tbody></table>');

// Select Draft Rounds
jQuery('<table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Available Franchises</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td style="text-align:center"><input name="add_to_list" value="Add To List" onclick="addListItem();" type="button"></td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Round Draft Order</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td style="text-align:center"><input name="remove_from_list" value="Remove From List" onclick="removeListItem();" type="button"><input name="move_up" value="&#9650;" onclick="moveItem(true);" type="button"><input name="move_down" value="&#9660;" onclick="moveItem(false);" type="button"></td></tr></tbody></table></div></td></tr></tbody></table>').insertBefore('#options_91 form table');
jQuery('#options_91 form table #source_list').css('width', '100%').appendTo('#options_91 .leftV td.selectbox');
jQuery('#options_91 form table #destination_list').css('width', '100%').appendTo('#options_91 .rightV td.selectbox');
jQuery('#options_91 form table + table').remove();

// Commish Load and Unload Rosters Page
jQuery('#body_csetup_loadrost #container-wrap form').addClass('load-rosters');
jQuery('<table class="two_column_layout no-borderspacing" align="center"><caption class="loadteamowner">Team: </caption><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Select Players to Add</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:18.75rem;overflow:auto"></div></td></div></tr><tr><td class="AddtoBtn"></td></tr><tr><td class="addsearch">Player Search</td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Roster</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input type="button" name="remove_from_list" value="Remove From Roster" onclick="removeListItem();"><input name="move_up" value="&#9650;" onclick="moveItem(true);" type="button"><input name="move_down" value="&#9660;" onclick="moveItem(false);" type="button"></td></tr></tbody></table></div></td></tr><tr><td colspan="2" class="tdalert tdalert-info-table"><span style="width:100%;margin:0;margin-bottom:0.625rem"><b>Hint:</b> Cant find a player on this list?  You can <a href="player_search?L=' + league_id + '" target="_blank">search our player database</a> to try to find him.</span></td></tr></tbody></table><table class="report" cellspacing="1" align="center"><tbody><tr><td class="loadtextarea"><div class="mobile-wrap">Or, you may copy and paste player names here, one player name per line</div><p class="form_buttons"><input type="submit" value="Load/Unload Roster" onclick="selectAllItems();"></p></td></tr></tbody></table>').insertBefore('#body_csetup_loadrost form.load-rosters .mobile-wrap');
jQuery('#body_csetup_loadrost form table.report caption span').eq(2).appendTo('#body_csetup_loadrost caption.loadteamowner');
jQuery('#body_csetup_loadrost form input[name="add_to_list"]').val('Add to Roster');
jQuery('#body_csetup_loadrost form.load-rosters textarea').appendTo('#body_csetup_loadrost td.loadtextarea div');
jQuery('#body_csetup_loadrost form.load-rosters #picker_filt_name').appendTo('#body_csetup_loadrost td.addsearch');
jQuery('#body_csetup_loadrost form.load-rosters table #picker').appendTo('#body_csetup_loadrost .leftV td.selectbox div');
jQuery('#body_csetup_loadrost form.load-rosters table #destination_list').appendTo('#body_csetup_loadrost .rightV td.selectbox');
jQuery('#body_csetup_loadrost form.load-rosters input[name="add_to_list"]').appendTo('#body_csetup_loadrost .leftV td.AddtoBtn');
jQuery('#body_csetup_loadrost form.load-rosters table + div.mobile-wrap').hide();
jQuery('head').append('<style>.style-input{border:0.063rem solid #eee;border-radius:0.188rem;padding:0.125rem;background:#fff}.weekly-navbar-mobile1{text-align:center;display:block}.weekly-navbar1{display:none}#body_csetup_loadrost div.mobile-wrap .report td, #body_csetup_loadrost form.load-rosters td{text-align:center}#body_csetup_loadrost form.load-rosters td[width="175px"]{text-align:left}#body_csetup_loadrost #container-wrap .report td select{max-height:18.75rem;vertical-align:middle}#body_csetup_loadrost .two_column_layout .mobile-wrap select{width:100%}#body_csetup_loadrost td.loadtextarea textarea{width:90%;margin:0.125rem auto;margin-top:0.313rem}#body_options_233 #container-wrap div.mobile-wrap .report textarea{width:100%}</style>');

// Commish Cant Cut List
try {
	jQuery('#body_csetup_cantcut #container-wrap form').addClass('cant-cutlists');
	jQuery('<br><table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Add Players To Can&apos;t Cut List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:18.75rem;overflow:auto"></div></td></div></tr><tr><td class="AddtoBtn"></td></tr><tr><td class="addsearch">Player Search</td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Can&apos;t Cut List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input type="button" name="remove_from_list" value="Remove From List" onclick="removeListItem();"></td></tr></tbody></table></div><tr><td colspan="2"><p class="form_buttons"><input name="SUBMIT" type="submit" value="Save Can&apos;t Cut List" onclick="selectAllItems();"></p></td></tr></tbody></table>').insertBefore('#body_csetup_cantcut form.cant-cutlists .mobile-wrap');
	jQuery('#body_csetup_cantcut form input[name="add_to_list"]').val('Add to List');
	jQuery('#body_csetup_cantcut form.cant-cutlists #picker_filt_name').appendTo('#body_csetup_cantcut td.addsearch');
	jQuery('#body_csetup_cantcut form.cant-cutlists table #picker').appendTo('#body_csetup_cantcut .leftV td.selectbox div');
	jQuery('#body_csetup_cantcut form.cant-cutlists table #destination_list').appendTo('#body_csetup_cantcut .rightV td.selectbox');
	jQuery('#body_csetup_cantcut form.cant-cutlists input[name="add_to_list"]').appendTo('#body_csetup_cantcut .leftV td.AddtoBtn');
	jQuery('#body_csetup_cantcut form.cant-cutlists table + div.mobile-wrap').hide();
	jQuery('head').append('<style>#body_csetup_cantcut div.mobile-wrap .report td, #body_csetup_cantcut form.cant-cutlists td{text-align:center}#body_csetup_cantcut form.cant-cutlists td[width="175px"]{text-align:left}#body_csetup_cantcut #container-wrap .report td select{max-height:18.75rem;vertical-align:middle}#body_csetup_cantcut .two_column_layout .mobile-wrap select{width:100%}</style>');

} catch (er) {}

// Commish Cant Add List
try {
	jQuery('#body_csetup_cantadd #container-wrap form').addClass('cant-addlists');
	jQuery('<br><table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Add Players To Can&apos;t Add List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:18.75rem;overflow:auto"></div></td></div></tr><tr><td class="AddtoBtn"></td></tr><tr><td class="addsearch">Player Search</td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Can&apos;t Add List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input type="button" name="remove_from_list" value="Remove From List" onclick="removeListItem();"></td></tr></tbody></table></div><tr><td colspan="2"><p class="form_buttons"><input name="SUBMIT" type="submit" value="Save Can&apos;t Add List" onclick="selectAllItems();"></p></td></tr></tbody></table>').insertBefore('#body_csetup_cantadd form.cant-addlists .mobile-wrap');
	jQuery('#body_csetup_cantadd form input[name="add_to_list"]').val('Add to List');
	jQuery('#body_csetup_cantadd form.cant-addlists #picker_filt_name').appendTo('#body_csetup_cantadd td.addsearch');
	jQuery('#body_csetup_cantadd form.cant-addlists table #picker').appendTo('#body_csetup_cantadd .leftV td.selectbox div');
	jQuery('#body_csetup_cantadd form.cant-addlists table #destination_list').appendTo('#body_csetup_cantadd .rightV td.selectbox');
	jQuery('#body_csetup_cantadd form.cant-addlists input[name="add_to_list"]').appendTo('#body_csetup_cantadd .leftV td.AddtoBtn');
	jQuery('#body_csetup_cantadd form.cant-addlists table + div.mobile-wrap').hide();
	jQuery('head').append('<style>#body_csetup_cantadd div.mobile-wrap .report td, #body_csetup_cantadd form.cant-addlists td{text-align:center}#body_csetup_cantadd form.cant-addlists td[width="175px"]{text-align:left}#body_csetup_cantadd #container-wrap .report td select{max-height:18.75rem;vertical-align:middle}#body_csetup_cantadd .two_column_layout .mobile-wrap select{width:100%}</style>');
} catch (er) {}

// My Watch List
try {
	jQuery('#options_178 form[action="options"]').addClass('preselections');
	jQuery('<div class="reportform"><span class="sorting-players">Sort By:<span></span></span><span class="position-players">Show Only:<span></span></span></div><table class="two_column_layout no-borderspacing" align="center"><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Add To Watch List</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:18.75rem;overflow:auto"></div></td></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Import Watch List</span></caption><tbody><tr><th>Copy From Another League</th></tr><tr><td vaign="top">Year of League To Copy From:<select size="1" name="COPY_YEAR" id="COPY_YEAR"><option value="2019">2019</option><option value="2020" selected="selected">2020</option><option value="2021" selected="selected">2021</option></select><br>League ID To Copy From:<input name="COPY_LEAGUE" id="COPY_LEAGUE" size="6" maxlength="5" type="text"><br><span class="alert alert-info-table"><span class="reportnavigationheader">Hint:</span> When copying players from another league, these players will be added to the current players on this leagues list.</span></td></tr></tbody></table></div></td></tr><tr><td colspan="2"><p class="form_buttons"><input name="submit" value="Add To My Watch List" type="submit"></p></td></tr></tbody></table>').appendTo('#options_178 form.preselections');
	jQuery('#options_178 form.preselections table #picker').appendTo('#options_178 .leftV td.selectbox div');
	jQuery('#options_178 form.preselections table #picker_filt_nfl').appendTo('#options_178 .sorting-players span');
	jQuery('#options_178 form.preselections table #picker_filt_pos').appendTo('#options_178 .position-players span');
	jQuery('#options_178 form.preselections table #picker td[width="175px"]').css('text-align', 'left');
	jQuery('#options_178 form span:contains("Or You May Copy")').closest('table').remove();
	jQuery('#options_178 table span:contains("My Watch List")').closest('table').addClass('watch-table');
	jQuery('#options_178 .watch-table tr td:nth-child(1),#options_178 .watch-table tr th:nth-child(1)').css('text-align', 'left');
	jQuery('#options_178 .watch-table tr td:nth-child(2),#options_178 .watch-table tr th:nth-child(2)').css('text-align', 'left');
	jQuery('#options_178 .watch-table tr td:nth-child(3),#options_178 .watch-table tr th:nth-child(3)').css('text-align', 'center');
	jQuery('#options_178 .watch-table tr td:nth-child(4),#options_178 .watch-table tr th:nth-child(4)').css('text-align', 'center');
	jQuery('#options_178 form > table:first').hide();
	jQuery('#options_178 .watch-table tr td:contains("Delete")').addClass('action');
	jQuery('#options_178 .watch-table tr td.action a[href*="move"]').attr('title', 'Move Player Up');
	jQuery('#options_178 .watch-table tr td.action a[href*="delete"]').attr('title', 'Remove From Watch List');
	jQuery('head').append('<style>#options_178 .watch-table tr td.action a,#options_178 .watch-table tr td.action{font-size:0;text-decoration:none}#options_178 .watch-table tr td.action a:before{font-family:"Font Awesome 6 Pro";font-size:0.875rem;padding:0 0.188rem;font-size: 0.875rem}#options_178 .watch-table tr td.action a[href*="move"]:before{content:\"\\f077\"}#options_178 .watch-table tr td.action a[href*="delete"]:before{content: \"\\f014\"}</style>');
} catch (er) {}

// Drop Players Page
if(!ShowDropFilters){
try {
	jQuery('#body_options_257 #container-wrap form').addClass('dropplayer-list');
	jQuery('#body_options_257 #container-wrap form caption:first').addClass('clonecap');
	jQuery('<br><table class="two_column_layout no-borderspacing" align="center"><caption class="dropcap"></caption><tbody><tr><td class="two_column_layout mobile-view leftV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Current Roster</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"><div class="style-input" style="max-height:18.75rem;overflow:auto"></div></td></div></tr><tr><td class="AddtoBtn"></td></tr><tr></tr></tbody></table></div></td><td class="two_column_layout mobile-view rightV" valign="top"><div class="mobile-wrap"><table class="report" cellspacing="1" align="center"><caption><span>Players To Drop</span></caption><tbody><tr><th>Make A Selection</th></tr><tr><td class="selectbox"></td></tr><tr><td><input type="button" name="remove_from_list" value="Remove From List" onclick="removeListItem();"></td></tr></tbody></table></div><tr><td colspan="2"><p class="form_buttons"><input name="SUBMIT" value="Drop Players" onclick="selectAllItems();" type="submit"></p></td></tr></tbody></table>').insertBefore('#body_options_257 form.dropplayer-list .mobile-wrap');
	jQuery('#body_options_257 form input[name="add_to_list"]').val('Add to List');
	jQuery('#body_options_257 .clonecap span').appendTo('#body_options_257 .dropcap');
	jQuery('#body_options_257 form.dropplayer-list #picker_filt_name').appendTo('#body_options_257 td.addsearch');
	jQuery('#body_options_257 form.dropplayer-list table #picker').appendTo('#body_options_257 .leftV td.selectbox div');
	jQuery('#body_options_257 form.dropplayer-list table #destination_list').appendTo('#body_options_257 .rightV td.selectbox');
	jQuery('#body_options_257 form.dropplayer-list input[name="add_to_list"]').appendTo('#body_options_257 .leftV td.AddtoBtn');
	jQuery('#body_options_257 form.dropplayer-list table + div.mobile-wrap').hide();
	jQuery('head').append('<style>#body_options_257 div.mobile-wrap .report td, #body_options_257 form.dropplayer-list td{text-align:center}#body_options_257 form.dropplayer-list td[width="175px"]{text-align:left}#body_options_257 #container-wrap .report td select{max-height:16.875rem;vertical-align:middle}#body_options_257 .two_column_layout .mobile-wrap select{width:100%}</style>');
} catch (er) {}
}

// Add FA class to top players reports
jQuery('#body_top .report td.status:contains("Free Agent"),#options_236 .report td:contains("Free Agent"),#options_08 .report td.status:contains("Free Agent")').addClass('is-freeagent');

// SVG ICONS JS FOR BROWSER SUPPORT - OLD - DONT NEED WITH NEW LOAD AND CACHE FILE IN HEADER
//!function(e,n,t,o){o&&e.addEventListener("DOMContentLoaded",function(){[].forEach.call(e.querySelectorAll("use"),function(n){var o=n.parentNode,r=n.getAttribute("xlink:href").split("#"),a=r[0],l=r[1],s=t[a]=t[a]||new XMLHttpRequest;s.s||(s.s=[],s.open("GET",a),s.onload=function(){var n=e.createElement("x"),t=s.s;n.innerHTML=s.responseText,s.onload=function(){t.splice(0).map(function(e){var t=n.querySelector("#"+e[2]);t&&e[0].replaceChild(t.cloneNode(!0),e[1])})},s.onload()},s.send()),s.s.push([o,n,l]),s.responseText&&s.onload()})})}(document,navigator,{},/Trident\/[567]\b/.test(navigator.userAgent));

// Monthly Calendar
jQuery('head').append('<style>#body_add_drop table.table3 input[name="BBID_AMT"]{width:4.5rem;min-width:auto}#body_add_drop table td table.table3 td{width:50%}.cal-event-desc li:before{content:\"\\e0b3\";font-family:"Font Awesome 6 Pro";display:inline-block;width:1rem}.cal-wrap{display:none}#calendar{width:100%;display:grid;grid-template-columns:repeat(7,1fr)}#calendar tr,#calendar tbody{grid-column:1 / -1;display:grid;grid-template-columns:repeat(7,1fr);width:100%}#calendar caption{grid-column:1 / -1;margin-bottom:3.75rem}#calendar td,#calendar th{box-sizing:border-box}#calendar .weekdays th{text-align:center;text-transform:uppercase}#calendar td{display:flex;flex-direction:column}#calendar .day{position:relative}#calendar .month_header{position:relative;font-size:20pt}#calendar .month_header th{position:absolute;left:0;right:0;font-size:2rem;top:-3.25rem;line-height:2.5rem}#calendar .month_header th a{position:absolute;text-decoration:none;font-size:0;color:transparent}#calendar .month_header th a[title="Previous Month"]{left:1.25rem}#calendar .month_header th a[title="Next Month"]{right:1.25rem}#calendar .month_header th a[title="Next Month"]:before,#calendar .month_header th a[title="Previous Month"]:before{font-family:"Font Awesome 6 Pro";position:absolute;top:0;font-size:1.875rem;cursor:pointer}#calendar .month_header th a[title="Next Month"]:before{content:\"\\f054\";right:-0.625rem}#calendar .month_header th a[title="Previous Month"]:before{content:\"\\f053\";left:-0.625rem}#calendar .date{text-align:center;margin-bottom:0.313rem;width:1.875rem;height:1.875rem;line-height:1.875rem;border-radius:50%;flex:0 0 auto;align-self:flex-end;font-weight:700}#calendar .date a{position:absolute;left:0.125rem;top:0.125rem}.cal-event{flex:0 0 auto;font-size:0.813rem;text-decoration:none;margin:0.125rem 0}.cal-event-desc{padding:0.125rem}#calendar td{border-style:solid;border-left-width:0.063rem;border-bottom-width:0.063rem;border-top:0;border-right-width:0}@media(max-width: 48em){.cal-wrap{display:block}.scoll-div{height:21.875rem}#calendar .weekdays,#calendar .other-month{display:none}#calendar,#calendar tr,#calendar tbody{grid-template-columns:1fr}#calendar tr{grid-column:1 / 2}#calendar .date{align-self:flex-start}#calendar .date a{right:0.125rem;left:auto}#calendar td.first-td{border-style:solid;border-top-width:0.063rem}#calendar td{border-right-width:0.063rem}}</style>');
jQuery('#monthly_calendar').attr('id', 'calendar');
jQuery('#calendar').parent('div').addClass('scoll-div');
jQuery('#calendar .day_of_week_header').attr('class', 'weekdays');
jQuery('#calendar .weekdays th').attr('scope', 'col');
jQuery('#calendar tr.oddtablerow,#calendar tr.eventablerow').removeClass('eventablerow').addClass('dayrows oddtablerow');
if ($('#calendar .dayrows td').hasClass('today')) {
	$('#calendar .dayrows td').addClass('other-month');
} else {
	$('#calendar .dayrows td').attr('class', 'other-month');
}
jQuery('#calendar .dayrows td.other-month:has(div.calendarday)').removeClass('other-month').addClass('day');
jQuery('#calendar td.day:first').addClass('first-td');
jQuery('#calendar td.day').removeAttr('valign');
jQuery('#calendar div.calendarday').addClass('date');
jQuery('#calendar .day ul li').wrap('<div class="cal-event"><div class="cal-event-desc"></div></div>');
jQuery('#calendar .day .cal-event').unwrap();
jQuery('#calendar .day .cal-event-desc li').css('list-style', 'none');

jQuery('#calendar .date').html(function (i, html) {
	return html.replace(/&nbsp;/g, '');
});
jQuery('#calendar .month_header th:last-of-type').remove();
jQuery('#calendar .month_header th').html(function (i, currHtml) {
	return currHtml
		.replace('Jan', 'JANUARY')
		.replace('Feb', 'FEBRUARY')
		.replace('Mar', 'MARCH')
		.replace('Apr', 'APRIL')
		.replace('May', 'MAY')
		.replace('Jun', 'JUNE')
		.replace('Jul', 'JULY')
		.replace('Aug', 'AUGUST')
		.replace('Sep', 'SEPTEMBER')
		.replace('Oct', 'OCTOBER')
		.replace('Nov', 'NOVEMBER')
		.replace('Dec', 'DECEMBER');
});
// If used, below code places "No Events Today" on all days of monthly calendar without an event
/*jQuery('#calendar .day:not(:has(div.cal-event))').each(function (index) {
	$(this).append('<div class="cal-event"><div class="cal-event-desc" style="font-style:italic"><li style="list-style:none">No Events Today</li></div></div>');
});*/
jQuery('.calendarday.date a').html('<i class="fa-regular fa-square-plus" aria-hidden="true"></i>');
jQuery('#body_options_123 h3.h3-menu').remove();

// Monthly Calendar Todays Event Table Calendar
fetch(`${baseURLDynamic}/${year}/options?L=${league_id}&O=123`)
	.then(response => response.text())
	.then(data => {
		jQuery('#monthly_events ul li').wrap('<div class="cal-event"><div class="cal-event-desc"></div></div>');
		jQuery('<div class="mobile-wrap cal-wrap"><table class="report" id="monthly_events" align="center" cellspacing="1"><caption><span>Todays Calendar Events</span></caption><tbody><tr class="oddtablerow"><td class="cal_append"></td></tr></tbody></table></div>').insertBefore(jQuery('#calendar').closest('div.mobile-wrap'));
		jQuery(data).find('#monthly_calendar td.today ul').appendTo('#monthly_events td.cal_append');
		jQuery('#monthly_events ul li').wrap('<div class="cal-event"><div class="cal-event-desc"></div></div>');
		jQuery('#monthly_events .cal-event').unwrap();
		jQuery('#monthly_events .cal-event-desc li').css('list-style', 'none');
		jQuery("#monthly_events .cal_append:empty").append('<div class="cal-event"><div class="cal-event-desc" style="font-style:italic"><li style="list-style:none">No Events Today</li></div></div>');
		jQuery('#calendar,#monthly_calendar').css('visibility', 'visible');
		jQuery('.cal-event li a[title|="Delete This Calendar Event"]').parent('li').addClass('remove_char');
		jQuery('.remove_char').each(function (index, value) {
			var char_rep = $(this),
				result = char_rep.html().replace(/\(|\)/g, '');
			char_rep.html(result);
		});
		jQuery('.cal-event-desc .remove_char a').html('<i style="color:#da3636" class="fa-regular fa-circle-xmark" aria-hidden="true"></i>');
	})
	.catch(error => {
		console.error('Error:', error);
	});

// HORIZONTAL SCROLL FIXED FIRST COLUMN TABLES
jQuery('#body_options_236 .nocaption,#body_top .nocaption,#body_options_08 .nocaption').prepend('<caption><span>Top Players</span></caption>').removeClass('nocaption');

function doTableScrollShadow() {
	var totalWidth = jQuery(".hz-table-wrap").width();
	var tableWidth = jQuery(".hz-main-table").width();
	var fixedWidth = jQuery(".fixed-side").width();
	//jQuery(".hz-main-table").parent().scroll(function (event) {
	jQuery(".hz-main-table").parent().on('scroll', function (event) {
		var elemPos = $(".hz-main-table").position();
		var scrollPos = $(".hz-table-wrap").scrollLeft();
		var elementWidth = $(".hz-clone").width();
		// MAX LEFT -> REMOVE LEFT SHADOW
		if (elemPos.left > 8)
			$(".fixed-side").addClass("hz-hide-shadow");
		else
			$(".fixed-side").removeClass("hz-hide-shadow");
		// MAX RIGHT -> REMOVE RIGHT SHADOW
		if ((scrollPos + totalWidth) >= (elementWidth - 2))
			$(".shadow-right").addClass("hz-hide-shadow");
		else
			$(".shadow-right").removeClass("hz-hide-shadow");
	});
}

jQuery('#body_depth_chart #depth_chart').has('caption span:contains("NFL Depth Chart")').attr("id", "depth_chart_grid");


function doTableScroll(which, target_id) {
	if (!document.getElementById(target_id)) return false;
	jQuery('#' + target_id + ' div.mobile-wrap table:first').addClass('hz-main-table').wrap('<div class="hz-table-wrap">');
	switch (which) {
		case 0:
		case 3:
			jQuery('#' + target_id + ' div.mobile-wrap .hz-table-wrap').closest('div.mobile-wrap').addClass('hz-table-scroll');
			jQuery('#' + target_id + ' div.mobile-wrap table tr:first').wrap('<thead></thead>');
			jQuery('#' + target_id + ' div.mobile-wrap table tr:first th:first').addClass('fixed-side hz-hide-shadow');
			jQuery('#' + target_id + ' div.mobile-wrap table thead').nextUntil('table').wrapAll('<tbody>');
			jQuery('#' + target_id + ' div.mobile-wrap table thead').unwrap();
			jQuery('#' + target_id + ' .hz-table-scroll tbody td:first-of-type').wrapInner('<th class="fixed-side hz-hide-shadow"></th>');
			jQuery('#' + target_id + ' tbody .fixed-side').unwrap();
			jQuery('#' + target_id + ' div.mobile-wrap table tbody th.lh_overall_franchise').addClass('fixed-side hz-hide-shadow');
			break;
		case 1:
			jQuery('#' + target_id + ' div.mobile-wrap table tr.weeklypointtotals').remove();
			jQuery('#' + target_id + ' div.mobile-wrap .hz-table-wrap').closest('div.mobile-wrap').addClass('hz-table-scroll fx-dbl-tbl');
			jQuery('#' + target_id + ' div.mobile-wrap table tr:first').wrap('<thead></thead>');
			jQuery('#' + target_id + ' div.mobile-wrap table tr:first th:first').addClass('fixed-side fx-dbl hz-hide-shadow');
			jQuery('#' + target_id + ' div.mobile-wrap table thead').nextUntil('table').wrapAll('<tbody>');
			jQuery('#' + target_id + ' div.mobile-wrap table thead').unwrap();
			jQuery('#' + target_id + ' .hz-table-scroll tbody td:first-of-type').wrapInner('<th class="fixed-side fx-dbl hz-hide-shadow"></th>');
			jQuery('#' + target_id + ' tbody .fixed-side').unwrap();
			jQuery('#' + target_id + ' div.mobile-wrap table .player').each(function () {
				$(this).prev("th").append(this);
			});
			jQuery(".fixed-side").find(".player").contents().unwrap();
			break;
		case 2:
			jQuery('#' + target_id + ' div.mobile-wrap .hz-table-wrap').closest('div.mobile-wrap').addClass('hz-table-scroll fx-dbl-tbl');
			jQuery('#' + target_id + ' div.mobile-wrap table tr:first').wrap('<thead></thead>');
			jQuery('#' + target_id + ' div.mobile-wrap table tbody tr th:first-of-type').addClass('fixed-side fx-dbl hz-hide-shadow');
			jQuery('#' + target_id + ' div.mobile-wrap table thead').nextUntil('table').wrapAll('<tbody>');
			jQuery('#' + target_id + ' div.mobile-wrap table thead').unwrap();
			break;
	}

	jQuery('#' + target_id + ' .hz-main-table').clone(true).appendTo('#' + target_id + ' .hz-table-scroll').addClass('hz-clone');
	jQuery(".hz-clone").each(function () {
		$(this).clone(true).appendTo($(this).parent()).addClass('hz_table_remove');
	});
	jQuery('.hz-clone td+td:last-of-type,.hz-clone th+th:last-of-type').addClass('shadow-right hz-hide-shadow');
	jQuery('.hz_table_remove tbody,.hz_table_remove thead').html('');

	//DETECT SCROLL 
	jQuery(document).ready(function () {
		doTableScrollShadow();
	});
}

if ($(window).width() < 890) {
	doTableScroll(1, "body_options_08");
	doTableScroll(1, "body_options_236");
	doTableScroll(1, "body_top");
	doTableScroll(0, "body_options_31");
}
doTableScroll(0, "body_options_170");
doTableScroll(0, "body_options_93");
doTableScroll(2, "depth_chart_grid");
doTableScroll(0, "body_options_171");

jQuery('th.fixed-side').has('img.lh_franchise_img , img.franchiseicon').addClass('has-ficon');
jQuery('#body_options_170 .report.hz-main-table.hz-clone td').html('<select><option>None</option></select>');
jQuery('#body_options_93 .report.hz-main-table.hz-clone td').html('<input type="checkbox">');

jQuery('head').append('<style>.hz-table-scroll{position:relative;overflow:hidden;white-space:nowrap}.hz-table-wrap{width:100%;overflow:auto}.hz-table-scroll table{padding-bottom:0.625rem;width:100%;margin:auto;border-collapse:separate;border-spacing:0}.hz-main-table caption,.hz-main-table .fixed-side,.hz-clone th,.hz-clone td{visibility:hidden}.hz_table_remove{padding:0;margin:0;background:none;box-shadow:none;border:0;background-image:none}.hz-clone.hz_table_remove caption,.hz-clone .fixed-side{visibility:visible;pointer-events:auto}.fixed-side{width:6.25rem;padding:0.188rem 0.313rem}.fixed-side img.franchiseicon{max-width:6.25rem;min-width:auto!important}.hz-clone{position:absolute;top:0.625rem;left:0.625rem;pointer-events:none}.fixed-side .franchiseicon,.fixed-side a{max-width:none;height:auto}.fixed-side.fx-dbl{text-align:left;width:0.063rem}.fixed-side a{display:inline}.hz-table-scroll thead th.fixed-side{text-align:center!important}.fixed-side+td,.fixed-side+th{padding-left:0.375rem}#body_options_93 .hz-main-table tbody tr:first-of-type th{font-size:0.688rem}#body_options_93 .hz-main-table thead th{white-space:normal;min-width:6.25rem}#depth_chart_grid thead th,#depth_chart_grid tbody tr:first-of-type th{text-align:left!important}#depth_chart_grid .report.hz-main-table td:nth-child(2){text-align:left}.mobile-wrap.hz-table-scroll{overflow:hidden}.fixed-side{position:sticky}.hz-hide-shadow:after{background-image:none!important}#options_236 th.fixed-side a,#options_08 th.fixed-side a,#body_top th.fixed-side a{padding-left:0.188rem}#options_236 thead .fixed-side,#options_08 thead .fixed-side,#body_top thead .fixed-side{text-align:left!important}.hz-main-table tbody th.fixed-side{text-align:left}.hz-main-table tbody tr.average th.fixed-side{text-align:center}#body_options_93 .hz-main-table tbody tr:first-of-type th.fixed-side{text-align:center}.shadow-right{position:sticky;right:0;visibility:visible}.shadow-right:after{content:"";position:absolute;top:0;width:1.25rem;height:100%;visibility:visible;background:none;right:0;background-image:linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,.3))}.hz_table_remove_shadow .shadow-right.hz-hide-shadow:after{display:none}.fixed-side:after{content:"";position:absolute;top:0;width:1.25rem;height:100%}.hz-clone .fixed-side:after{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0));right:-1.25rem}.hz-main-table tbody th.fixed-side.has-ficon{text-align:center}</style>');

jQuery('#depth_chart').has('th:contains("Status")').addClass('depth_chart_page');
jQuery('.depth_chart_page th:contains("Depth")').addClass('depth');
jQuery('.depth_chart_page th:contains("Status")').addClass('status');

jQuery('#body_options_84 #container-wrap select').css('width', '50%');
jQuery('#body_options_84 #container-wrap div.mobile-wrap td,#body_options_145 div.mobile-wrap td,#body_options_83 div.mobile-wrap td,#body_options_168 div.mobile-wrap td').css({
	'width': '50%',
	'text-align': 'center'
});

// BOX SCORES NOT ALL PLAY SO DONT ALLOW WHOLE BOX TO POPUP WITH EMPTY DETAILS
jQuery("#MFLBoxWrapper table.MFLGameTable").removeAttr("onclick title");

//trades page - hide show offer to and offer from table if blank or has content
jQuery('#body_options_05 div.mobile-wrap:first table').has('tr.newposition').parent().addClass('filter-div-show');
jQuery('#body_options_05 div.mobile-wrap:first').not('.filter-div-show').html('<h3>You have no trade offers to or from</h3>');
jQuery('#body_options_05 div.mobile-wrap.filter-div-show table').has('tr.newposition').addClass('filter-table-show');
jQuery('#body_options_05 div.mobile-wrap.filter-div-show table:first').not('.filter-table-show').html('<table><caption><span>TRADES OFFERED BY YOU (NONE)</span></caption></table>');
jQuery('#body_options_05 div.mobile-wrap.filter-div-show table:last').not('.filter-table-show').html('<table><caption><span>TRADES OFFERED TO YOU (NONE)</span></caption></table>');

//commissioner delete transactions page - hide or show table if empty of has conent
jQuery('#body_options_67 div.mobile-wrap:first table').has('tr.oddtablerow').parent().addClass('filter-div-show');
jQuery('#body_options_67 div.mobile-wrap:first').not('.filter-div-show').html('<h3>There are no transactions to delete</h3>');

//commissioner delete transactions page - hide or show table if empty of has conent
jQuery('#body_options_03 div.mobile-wrap:first table').has('tr.oddtablerow').parent().addClass('filter-div-show');
jQuery('#body_options_03 div.mobile-wrap:first').not('.filter-div-show').html('<h3>There are no transactions</h3>');

//Added 8-26-20 for home page message about draft
jQuery('#body_home h2.warning:contains("Your Draft Is Scheduled To Start Shortly")').wrap('<span class="alert alert-info-body draft_warning" style="text-align:center"></span>');
jQuery('#body_home span.draft_warning h2').contents().unwrap();

//Added 9-1-20 for injured reserve page
jQuery('#body_options_18 .report.nocaption').find('th:contains("Deactivate To IR")').text("Deactivate");
jQuery('#body_options_18 .report.nocaption').find('th:contains("Activate From IR?")').text("Activate");
jQuery('#body_options_18 .report.nocaption').find('th:contains("Drop From Roster?")').text("Drop");
jQuery('#body_options_18 .report.nocaption td.inputfield').find('.warning:contains("Can not be deactivated")').text("Not-Eligible");
jQuery('#body_options_18 .report.nocaption').find('th:contains("Starter?")').text("Starter");
jQuery('#body_options_18 .report.nocaption td').find('span.warning:contains("Questionable")').text("Q");
jQuery('#body_options_18 .report.nocaption td').find('span.warning:contains("Doubtful")').text("D");
jQuery('#body_options_18 .report.nocaption td').find('span.warning:contains("Out")').text("O");

//Added 8-28-21 for content league lineups
if (document.getElementById('contest_lineup')) {
	jQuery('#contest_lineup .mobile-wrap:has(form)').addClass('contest-wrap');
	jQuery('#contest_lineup .contest-wrap').before('<div class="mobile-wrap requirements-table" style="max-width:25rem"></div>');
	jQuery('#body_contest_lineup table b:contains("League requirements")').closest('table').addClass('requirements');
	jQuery('#body_contest_lineup .requirements').appendTo('#body_contest_lineup .requirements-table');
	jQuery('#body_contest_lineup table.requirements tr:first-child').remove();
	jQuery('#body_contest_lineup table.requirements').append('<caption><span style="white-space:nowrap">League Requirements</span></caption>');
	jQuery('#body_contest_lineup table.requirements tr:first td').each(function () {
		$(this).replaceWith('<th>' + $(this).text() + '</th>');
	});
	jQuery('head').append('<style>#body_contest_lineup table.requirements td{text-align:center}#body_contest_lineup table.requirements td:first-of-type{text-align:left}#body_contest_lineup .current-roster select{width:100%}#body_contest_lineup .contest_table br{display:none}#body_contest_lineup #picker_filt_name{width:auto}#body_contest_lineup  td.mobile-view.select-player > table > tbody > tr:nth-child(2) td{text-align:center}#contest_lineup #sticky_filters th:first-of-type{text-align:left}</style>');
	jQuery('#body_contest_lineup form .pickerbox').wrap('<div class="draft-overflow" style="max-height:16.375rem;overflow-x:auto"></div>');
	jQuery('#body_contest_lineup form>table').addClass('contest_table');
	jQuery('table.contest_table>tbody>tr:nth-child(1)>td').remove();
	jQuery('#body_contest_lineup .contest_table table:eq(0)').css('width', '100%').wrap('<td class="mobile-view select-player"></td>');
	jQuery('#body_contest_lineup .contest_table table:eq(2)').remove();
	jQuery('#body_contest_lineup .contest_table table:eq(2)').wrap('<td class="mobile-view current-roster"></td>');
	jQuery('#body_contest_lineup .mobile-view.current-roster').before('<td class="draft-blankTD" style="padding:0.313rem;float:left;width:100%"></td>');
	jQuery('#contest_lineup td.mobile-view.select-player > table > tbody > tr:nth-child(1)').wrap('<table id="sticky_filters"><tbody>');
	jQuery('#contest_lineup #sticky_filters').insertBefore($('#contest_lineup .draft-overflow #picker'));
	jQuery('#contest_lineup #sticky_filters th:last-of-type').remove();
	jQuery("#contest_lineup div.mobile-wrap.contest-wrap > form > table > tbody > tr:nth-child(2)").appendTo('#contest_lineup .contest-wrap form').wrap('<table class="append_contest"><tbody>');
	jQuery("#contest_lineup div.mobile-wrap.contest-wrap > form > table > tbody > tr:nth-child(2)").appendTo('#contest_lineup .contest-wrap form').wrap('<table class="append_contest"><tbody>');
	jQuery("#contest_lineup div.mobile-wrap.contest-wrap > form > table > tbody > tr:nth-child(2)").appendTo('#contest_lineup .contest-wrap form').wrap('<table class="append_contest"><tbody>');
	jQuery('.append_contest td').html(function (i, html) {
		return html.replace(/&nbsp;/g, '');
	});
	jQuery('.append_contest td').each(function () {
		if ($(this).html() == "") {
			$(this).remove();
		}
	});
	jQuery('<tr><td colspan="10" align=center><input type="button" name="add_to_list" value="Add To Roster" onclick="addToList(\'destination_list\',\'sel_pid\',\'sel_name\');update_info();"</td></tr>').appendTo('.select-player>table');
	jQuery('<tr><td colspan="10" align=center><input type="button" name="remove_from_list" value="Remove From Roster" onclick="removeListItem();update_info();"</td></tr>').appendTo('.current-roster>table');
}

//Added 8-29-21 for auction draft page
if (document.getElementById('options_43')) {
	jQuery('head').append('<style>#body_options_43 .form2 table td,#body_options_43 .form2 table th{text-align:left}#body_options_43 .form2 table th:nth-child(2),#body_options_43 .form2 table td:nth-child(2),#body_options_43 .form2 table th:nth-child(3),#body_options_43 .form2 table td:nth-child(3),#body_options_43 .form2 table td:last-child,#body_options_43 .form2 table th:last-child{text-align:center}#body_options_43 .form2 table td[colspan="3"]{text-align:right}#body_options_43 .no_auction>table>tbody>tr>td:nth-child(1),.no_auction>table>tbody>tr>td:nth-child(3),#body_options_43 .no_auction>table>tbody>tr>td:nth-child(5){display:none}#body_options_43 .no_auction>table>tbody>tr>td{float:left;width:100%;}#body_options_43 .form3>div>table>tbody>tr>td:nth-child(1),#body_options_43 .form3>div>table>tbody>tr>td:nth-child(3),#body_options_43 .form3>div>table>tbody>tr>td:nth-child(5),#body_options_43 .form3>div>table>tbody>tr>td:nth-child(7),#body_options_43 .form3>div>table>tbody>tr>td:nth-child(4) table caption{display:none}#body_options_43 .no_auction>table>tbody>tr>td{float:left;width:100%}#body_options_43 .form3>div>table{text-align:center}#body_options_43 .form3>div>table>tbody>tr>td{padding:0;display:inline-block}#body_options_43 .form3>div>table>tbody>tr>td:nth-child(2){width:49%}#body_options_43 .form3>div>table>tbody>tr>td:nth-child(4){width:49%;margin-left:1%}#body_options_43 .form3>div>table>tbody>tr>td:nth-child(4) table{width:100%!important}#body_options_43 .form3>div>table>tbody>tr>td:nth-child(6){width:100%;display:block}#body_options_43 #sticky_filters th:last-child{display:none}#body_options_43 #sticky_filters th{text-align:center!important}#body_options_43 #sticky_filters th:first-child{text-align:left!important}#body_options_43 .pickerbox td{text-align:center!important}#body_options_43 .pickerbox td:first-child{text-align:left!important}#body_options_43 .form3>div>table>tbody>tr>td:nth-child(4) table td{text-align:center}#body_options_43 .style-input{border-radius:0;padding:0}@media only screen and (max-width: 48em){#body_options_43 .form3>div>table>tbody>tr>td:nth-child(2){width:100%}#body_options_43 .form3>div>table>tbody>tr>td:nth-child(4){width:100%;margin-left:0}.form3 input#picker_filt_name{width:auto}}</style>');
	jQuery('#body_options_43 #container-wrap form:eq(0)').addClass('form1');
	jQuery('#body_options_43 #container-wrap form:eq(1)').addClass('form2');
	jQuery('#body_options_43 #container-wrap form:eq(2)').addClass('form3');
	jQuery('#body_options_43 #container-wrap .form2+div.mobile-wrap').addClass('no_auction');
	jQuery('#body_options_43 #container-wrap .form2 table').prepend('<caption><span>Current Auctions</span></caption>');
	jQuery('#body_options_43 .form3>div>table>tbody>tr>td:nth-child(4) table div').addClass('style-input');
	jQuery('#body_options_43 .form3 .style-input').css('border', '');
	jQuery('#body_options_43 form.form3 > div > table > tbody > tr > td:nth-child(4) > table > tbody > tr:nth-child(1)').wrap('<table id="sticky_filters"><tbody>');
	jQuery('#body_options_43 #sticky_filters').insertBefore($('#body_options_43 .style-input #picker'));
	jQuery('#sticky_filters th').find('a[onclick="sort_picker(\'fsrank\',\'fsrank\',\'picker\')"]').trigger('click');
}

if (document.getElementById('auction_bid')) {
	jQuery('head').append('<style>#body_auction_bid #container-wrap table.report td,#body_auction_bid #container-wrap table.report th{text-align:center}#body_auction_bid #container-wrap table.report td:first-child,#body_auction_bid #container-wrap table.report th:first-child{text-align:left}</style>');
}

if (document.getElementById('options_127')) {
	jQuery('head').append('<style>#body_options_127 form[action="delete_auctions"] table th,#body_options_127 form[action="delete_auctions"] table td,#body_options_43 .form2 table td{text-align:left}#body_options_127 form[action="delete_auctions"] table th:nth-child(2),#body_options_127 form[action="delete_auctions"] table td:nth-child(2),#body_options_127 form[action="delete_auctions"] table th:nth-child(3),#body_options_127 form[action="delete_auctions"] table td:nth-child(3),#body_options_127 form[action="delete_auctions"] table td:last-child,#body_options_127 form[action="delete_auctions"] table th:last-child{text-align:center}</style>');
}

//Added 6-10-22 for add roster - load roster page
if (document.getElementById('body_options_256')) {
	$('head').append('<style>#body_options_256 .current-roster select{width:100%}#body_options_256 .adds_table br{display:none}#body_options_256 #picker_filt_name{width:auto}#body_options_256 td.mobile-view.select-player > table > tbody > tr:nth-child(2) td{text-align:center}#options_256 #sticky_filters th:first-of-type{text-align:left}</style>');
	$('#options_256 form[action*="load_rosters"]').wrap('<div class="mobile-wrap adds-wrap"></div>');
	$('#options_256 form[action*="load_rosters"] div.mobile-wrap table:eq(0)').addClass('adds_table');
	$('#options_256 form[action*="load_rosters"] div.mobile-wrap table:eq(0)').unwrap();
	$('#options_256 form[action*="load_rosters"] .pickerbox').unwrap();
	$('#options_256 form[action*="load_rosters"] .pickerbox').wrap('<div class="draft-overflow" style="max-height:16.375rem;overflow-x:auto"></div>');
	$('#options_256 form[action*="load_rosters"] .adds_table tr:eq(0) > td').each(function () {
		if ($(this).html() == "&nbsp;") {
			$(this).remove();
		}
	});
	$('#options_256 form[action*="load_rosters"] .adds_table tr:eq(0) > td:eq(1)').replaceWith('<td class="draft-blankTD" style="padding:0.313rem;float:left;width:100%"></td>');
	$('#body_options_256 .adds_table td:eq(0)').addClass('mobile-view select-player');
	$('#body_options_256 .adds_table td:eq(0) table').css('width', '100%');
	$('#body_options_256 .adds_table tr:eq(0) > td:eq(2)').addClass('mobile-view current-roster');
	$('#options_256 td.mobile-view.select-player > table > tbody > tr:nth-child(1)').wrap('<table id="sticky_filters"><tbody>');
	$('#options_256 #sticky_filters').insertBefore($('#options_256 .draft-overflow #picker'));
	$('#options_256 #sticky_filters th:last-of-type').remove();
	$("#options_256 div.mobile-wrap.adds-wrap > form > table > tbody > tr:nth-child(2)").appendTo('#options_256 .adds-wrap form').wrap('<table class="append_adds"><tbody>');
	$("#options_256 div.mobile-wrap.adds-wrap > form > table > tbody > tr:nth-child(2)").appendTo('#options_256 .adds-wrap form').wrap('<table class="append_adds"><tbody>');
	$("#options_256 div.mobile-wrap.adds-wrap > form > table > tbody > tr:nth-child(2)").appendTo('#options_256 .adds-wrap form').wrap('<table class="append_adds"><tbody>');
	$('.append_adds td').html(function (i, html) {
		return html.replace(/&nbsp;/g, '');
	});
	$('.append_adds td').each(function () {
		if ($(this).html() == "") {
			$(this).remove();
		}
	});
	$('<tr><td colspan="10" align=center><input type="button" name="add_to_list" value="Add To Roster" onclick="addToList(\'destination_list\',\'sel_pid\',\'sel_name\')"</td></tr>').appendTo('.select-player>table');
	$('<tr><td colspan="10" align=center><input type="button" name="remove_from_list" value="Remove From Roster" onclick="removeListItem()"</td></tr>').appendTo('.current-roster>table');
}

//Added 9-2-20 for draft preferences page
jQuery('#body_csetup_draftpref .mobile-wrap table td:last-of-type').remove();

//Added 11-20-20 for message board page
$('img[src="https://www.myfantasyleague.com/smilies/smile.gif"]').attr("src", "https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/smile.png");
$('img[src="https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/smile.png"]').prop('title', 'Smile');

$('img[src="https://www.myfantasyleague.com/smilies/sad.gif"]').attr("src", "https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/worried.png");
$('img[src="https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/worried.png"]').prop('title', 'Sad');

$('img[src="https://www.myfantasyleague.com/smilies/wink.gif"]').attr("src", "https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/smirk.png");
$('img[src="https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/smirk.png"]').prop('title', 'Smirk');

$('img[src="https://www.myfantasyleague.com/smilies/ohmy.gif"]').attr("src", "https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/open_mouth.png");
$('img[src="https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/open_mouth.png"]').prop('title', 'Say What?');

$('img[src="https://www.myfantasyleague.com/smilies/tongue.gif"]').attr("src", "https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/stuck_out_tongue.png");
$('img[src="https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/stuck_out_tongue.png"]').prop('title', 'Suck it!');

$('img[src="https://www.myfantasyleague.com/smilies/mad.gif"]').attr("src", "https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/rage.png");
$('img[src="https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/rage.png"]').prop('title', 'Angry');

$('img[src="https://www.myfantasyleague.com/smilies/blink.gif"]').attr("src", "https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/astonished.png");
$('img[src="https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/rage.png"]').prop('title', 'Blink');

$('img[src="https://www.myfantasyleague.com/smilies/unsure.gif"]').attr("src", "https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/confused.png");
$('img[src="https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/confused.png"]').prop('title', 'Unsure');

$('img[src="https://www.myfantasyleague.com/smilies/huh.gif"]').attr("src", "https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/expressionless.png");
$('img[src="https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/expressionless.png"]').prop('title', 'Huh ?');

$('img[src="https://www.myfantasyleague.com/smilies/biggrin.gif"]').attr("src", "https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/scream.png");
$('img[src="https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/scream.png"]').prop('title', 'Scream');

$('img[src="https://www.myfantasyleague.com/smilies/laugh.gif"]').attr("src", "https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/sweat_smile.png");
$('img[src="https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/sweat_smile.png"]').prop('title', 'LOL');

$('img[src="https://www.myfantasyleague.com/smilies/cool.gif"]').attr("src", "https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/sunglasses.png");
$('img[src="https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/sunglasses.png"]').prop('title', 'Cool');

$('img[src="https://www.myfantasyleague.com/smilies/rolleyes.gif"]').attr("src", "https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/innocent.png");
$('img[src="https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/innocent.png"]').prop('title', 'Roll Eyes');

$('img[src="https://www.myfantasyleague.com/smilies/ph34r.gif"]').attr("src", "https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/mask.png");
$('img[src="https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/mask.png"]').prop('title', 'Mask');

$('img[src="https://www.myfantasyleague.com/smilies/dry.gif"]').attr("src", "https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/neckbeard.png");
$('img[src="https://www.mflscripts.com/ImageDirectory/script-images/chat-icons/neckbeard.png"]').prop('title', 'Nerd');

//////////////////////////////////////////////////////////////////////////////////////////////////////
// MESSAGE BOARD POST: REMOVE LOCK IMAGE AND PREPEND FONT-AWESOME LOCK;  APPEND FONT-AWESOME PIN
//////////////////////////////////////////////////////////////////////////////////////////////////////
if (document.getElementById("body_board_show")) {
	$(".topiclist tr").each(function () {
		$(this).find("td:eq(0) a img[title|='Locked']").each(function () {
			$(this).closest("td").prepend("<i class='fa-sharp fa-regular fa-lock-keyhole' title='Locked!'></i>");
			$(this).remove();
		});
		$(this).find("td:eq(0) b").each(function () {
			$(this).closest("td").prepend("<i class='fa-regular fa-thumbtack' style='padding-right:0.125rem' title='Pinned!'></i>");
		});
	});
}

// added 9-20-21 to remove some items on the fantasy preview page options page 207
jQuery('#body_options_207 tr[id*="preview_"]').each(function () {
	$(this).nextUntil('tr[id*="preview_"]').addBack().wrapAll('<div class="mobile-wrap" style="position:relative"><table class="previews_table"><tbody>');
});
jQuery('#body_options_177 tr[id*="recap_"]').each(function () {
	$(this).nextUntil('tr[id*="recap_"]').addBack().wrapAll('<div class="mobile-wrap" style="position:relative"><table class="previews_table"><tbody>');
});
jQuery('#body_options_207 tr[id*="preview_"]').each(function () {
	var $caption_row = $(this).closest('tbody');
	$(this).insertBefore($caption_row);
});
jQuery('#body_options_177 tr[id*="recap_"]').each(function () {
	var $caption_row = $(this).closest('tbody');
	$(this).insertBefore($caption_row);
});
jQuery('#body_options_207 tr[id*="preview_"]').each(function () {
	$(this).wrapInner('<caption><span>');
});
jQuery('#body_options_177 tr[id*="recap_"]').each(function () {
	$(this).wrapInner('<caption><span>');
});
jQuery('.previews_table caption').each(function () {
	$(this).unwrap();
});
jQuery('.previews_table caption span h3').each(function () {
	$(this).unwrap();
});
jQuery('.previews_table caption span h3').each(function () {
	$(this).children().unwrap();
});
jQuery('.previews_table').each(function () {
	$(this).append('<tr class="oddtablerow match_tables"></tr>');
});
$("td.recap_preview_players").each(function () {
	$(this).closest(".previews_table").find('.match_tables').append(this);
});
jQuery('.match_tables table').each(function () {
	$(this).unwrap();
});
jQuery('.previews_table tbody').each(function () {
	$(this).hide();
});
jQuery('.previews_table caption').each(function () {
	$(this).append('<input class="preview_caps-btn" type="button" value="View" style="position:absolute;top:0.25rem;right:0.25rem;padding:0.188rem">');
});
var toggle_previews = function () {
	$('body').on('click', '.preview_caps-btn', function () {
		$(this).parents("table.previews_table").find("tbody").toggle();

		if ($(this).val() == "View") {
			$(this).val("Hide");
			//play_int();
		} else {
			$(this).val("View");
			//play_pause();
		}

	});
}
$(document).ready(toggle_previews);

jQuery("head").append('<style>table.previews_table table{width:auto}.matchup_chart{display:none}#body_options_207 #container-wrap > div.mobile-wrap,#body_options_177 #container-wrap > div.mobile-wrap{background:unset;border:unset;box-shadow:unset;margin:unset;padding:unset;border-radius:unset}.previews_table p{white-space:unset!important}.previews_table caption{white-space:nowrap;text-align:center}#body_options_207 div[class*="franTeam_"],#body_options_207 a[class*="franPlayer_"]:before,#body_options_177 div[class*="franTeam_"],#body_options_177 a[class*="franPlayer_"]:before{display:none!important}#body_options_207 a[class*="franPlayer_"],#body_options_177 a[class*="franPlayer_"]{padding-left:0!important}table.previews_table > tbody > tr:nth-child(1) > table.report.nocaption{width:100%;margin:1.25rem 0;max-width:37.875rem;margin:0 auto;margin-top:1.25rem;margin-bottom:1.25rem}tr.match_tables{text-align:center}tr.match_tables table{width:48%;display:inline-table;max-width:18.75rem}tr.match_tables table:first-child{margin-right:0.188rem}tr.match_tables table:last-child{margin-left:0.188rem}tr.match_tables table .player{text-align:left}#body_options_207 tr.match_tables table .points{text-align:center}.previews_table{width:100%}.previews_table p .franchiseicon{margin:0.313rem 0.125rem}.previews_table caption .franchiseicon{margin:0.313rem 0}@media only screen and (max-width: 37.5em){.previews_table > caption > span a{display: block}#body_options_177 .articlepicturetable,#body_options_207 .articlepicturetable{display:none}}</style>');


jQuery("#body_options_177 table.previews_table table.report.nocaption,#body_options_207 table.previews_table table.report.nocaption").each(function () {
	if ($(this).find("td:contains('No Current Video')").length > 1) {
		$(this).closest('table').remove();
	}
});

$(document).ready(function () {
	$('#myfantasyleague_tabs #league_chat tr:eq(0) th:eq(0)').append('<a href="' + baseURLStatic + '/' + year + '/home/' + league_id + '?MODULE=LEAGUE_CHAT" onclick="openChatWindow(this); return false;" target="_blank"><i style="margin-left:0.313rem" class="fa-regular fa-comments" aria-hidden="true"></i></a>');
});

$('#body_options_93 .form_buttons').before('<span class="warning" style="display:block;text-align:center">DO NOT ENABLE ABILITIES FOR OWNERS CUSTOMIZE HOME PAGE !! IT WILL MESS UP LAYOUT AND STYLE WHEN USING CUSTOM TEMPLATE.</span>');

$('#body_processed_waivers table.report').has('th:contains("Round (or Group)")').addClass('hasGroups');


if (typeof franchise_id !== 'undefined') {
	if (franchise_id !== '0000') {
		$('#body_options_08 table.report tr,#body_options_236 table.report tr,#body_top table.report tr,#top_adds tr,#top_drops tr,#top_starters tr,#body_options_117 table.report tr').each(function () {
			var freeAgents = $(this).find('a[href*="add_drop"]').closest('tr');
			var otherFranchise = $(this).find('a[href*="O=05"]').closest('tr');
			$(freeAgents).addClass('freeagent');
			if ($(this).find('a[href*="player"]').length > 0 && $(this).find('a[href*="add_drop"]').length === 0 && $(this).find('a[href*="O=05"]').length === 0) {
				$(this).addClass('myfranchise')
			}
		});
	}
}


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// MODULE EXAND AND COLLAPSE  https://www.mflscripts.com/mfl-apps/moduleExpand/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
if ((load_moduleExpand_script) && ($('#body_home').length)) {
	//console.log("MODULE EXAND AND COLLAPSE SCRIPT LAST UPDATED 09-12-21");
	if (MFLEnableMedia === undefined) var MFLEnableMedia = true;
	if (MFLRememberModuleStates === undefined) var MFLRememberModuleStates = true;
	var collapse_counter = 0;

	if (document.getElementById("body_home") && location.href.indexOf("MODULE=MESSAGE") === -1 && location.href.indexOf("/message") === -1 && location.href.indexOf("SEQNO=") === -1) jQuery('head').append('<style>#home caption span a{position:relative}span.custom_collapse:before,span.custom_expand:before{content:"";position:absolute;width:100%;height:1.875rem;left:0;visibility:visible}span.custom_collapse:before,span.custom_expand:before{z-index:1}span.plus-toggle{position:absolute;margin-top:0.625rem;width:1.375rem;right:0.5rem}.plus-toggle span::before,.plus-toggle span::after{content:"";display:block;position:absolute;width:.2rem;border-radius:1.4rem;height:1rem;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transition:all .3s ease;transition:all .3s ease;z-index:0}.plus-toggle span::after{width:1rem;height:.2rem}.custom_expand[style="display:none"] + span + .plus-toggle span::after{-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:0}.custom_expand[style="display:none"] + span + .plus-toggle span::before{-webkit-transform:rotate(90deg);transform:rotate(90deg);width:.25rem}#collapseLink.collapseLink,#expandLink.expandLink{z-index:1}.plus-toggle-main{right:0.313rem;position:absolute;width:1.625rem;height:1.625rem;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);background:#fff;border-radius:50%}.toggle-btn-main::before,.toggle-btn-main::after{content:"";display:block;position:absolute;width:.2rem;border-radius:1.4rem;height:1rem;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transition:all .3s ease;transition:all .3s ease;z-index:0}.toggle-btn-main::after{width:1rem;height:.2rem}#expandLink[style*="display:none"] + .plus-toggle-main span::after{-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:0}#expandLink[style*="display:none"] + .plus-toggle-main span::before{-webkit-transform:rotate(90deg);transform:rotate(90deg);width:.25rem}</style>');


	function doCustomCollapseAll(isCollapse) {
		//collapse/expand custom tabs
		var counter = 0;
		jQuery("body #myfantasyleague_tabs").each(function () {
			if (isCollapse) {
				jQuery(this).find(".toggle_tabs:eq(0)").attr("style", "display:none");
				jQuery(this).find("tbody:eq(0)").attr("style", "display:none");
				if (MFLRememberModuleStates) localStorage.setItem('moduleCollapse_' + counter + '_' + league_id, 'true');
			} else {
				jQuery(this).find(".toggle_tabs:eq(0)").removeAttr("style");
				jQuery(this).find("tbody:eq(0)").removeAttr("style");
				if (MFLRememberModuleStates) localStorage.removeItem('moduleCollapse_' + counter + '_' + league_id)
			}
			counter++;
		});
		//collapse/expand remaining modules except those nested in #myfantasyleague_tabs
		jQuery(".mobile-wrap table.homepagemodule.report").each(function () {
			if (jQuery(this).parent().attr("id") === undefined && jQuery(this).parent().parent().attr("class") !== "homepagetabcontent") {
				if (isCollapse) {
					jQuery(this).find("tbody:eq(0)").attr("style", "display:none");
					if (MFLRememberModuleStates) localStorage.setItem('moduleCollapse_' + counter + '_' + league_id, 'true');
				} else {
					jQuery(this).find("tbody:eq(0)").removeAttr("style");
					if (MFLRememberModuleStates) localStorage.removeItem('moduleCollapse_' + counter + '_' + league_id);
				}
				counter++;
			}
		});
		if (isCollapse) {
			jQuery(".custom_expand").each(function () {
				jQuery(this).removeAttr("style")
			});
			jQuery(".custom_collapse").each(function () {
				jQuery(this).attr("style", "display:none")
			});
		} else {
			jQuery(".custom_expand").each(function () {
				jQuery(this).attr("style", "display:none")
			});
			jQuery(".custom_collapse").each(function () {
				jQuery(this).removeAttr("style")
			});
		}
	}

	function doAppendIcon() {
		if ($('.all-module-expand-collapse').length < 1) {
			if (MFLEnableMedia) jQuery("head").append("<style>@media only screen and (max-width:48em) {.plus-toggle-main{right:3.25rem;top:1.406rem;}#expandLink,#collapseLink{ right:2.5rem!important;height:2.813rem!important}} label[for='sub100'] + #homepagetabs{padding-right:2.5rem;padding-right:2.500rem} @media only screen and (max-width:48em) { label[for='sub100'] + #homepagetabs{padding-right:0}}</style>");
			var collapseStyle = 'display:inline';
			var expandStyle = 'display:none';
			if (MFLRememberModuleStates)
				if (localStorage.getItem('moduleExpandAll_' + league_id) === 'true') {
					collapseStyle = 'display:none';
					expandStyle = 'display:inline';
				}
			jQuery("#tab1").parent().append("<span class='all-module-expand-collapse'><a title='Collapse Tabs' id='collapseLink' class='collapseLink' style='cursor:pointer;position:absolute;top:0;right: 0;width:3.125rem;width:3.125rem;height:100%;text-align:center;" + collapseStyle + ";'  onclick='doCustomCollapseAll(true);jQuery(\"#expandLink\").attr(\"style\",\"cursor: pointer;position: absolute;top:0;right:0;width:3.125rem;width:3.125rem;height: 100%;text-align: center;display:inline\");jQuery(\".collapseLink\").attr(\"style\",\"cursor: pointer;position: absolute;top:0;right: 0;width:3.125rem;width:3.125rem;height: 100%;text-align: center;display:none\");localStorage.setItem(\"moduleExpandAll_" + league_id + "\",\"true\");'></a><a title='Expand Tabs' id='expandLink' class='expandLink' style='cursor:pointer;position: absolute;top:0;right:0;width:3.125rem;width:3.125rem;height:100%;text-align:center;" + expandStyle + ";' onclick='doCustomCollapseAll(false);jQuery(\"#expandLink\").attr(\"style\",\"cursor: pointer;position: absolute;top:0;right:0;width:3.125rem;width:3.125rem;height:100%;text-align:center;display:none\");jQuery(\".collapseLink\").attr(\"style\",\"cursor: pointer;position:absolute;top:0;right:0;width:3.125rem;width:3.125rem;height:100%;text-align:center;display:inline\");localStorage.removeItem(\"moduleExpandAll_" + league_id + "\");'></a><span class='plus-toggle-main'><span class='toggle-btn-main'></span></span></span>");
		}
	}

	function doCustomCollapseHPM(autoCollapse) {
		//collapse all custom tabs and append own expand/collapse
		if (autoCollapse) {
			var collapseStyle = 'display:none';
			var expandStyle = '';
		} else {
			var collapseStyle = '';
			var expandStyle = 'display:none';
		}
		jQuery("body #myfantasyleague_tabs").each(function () {
			if (!$(this).find("span").hasClass("module_expand")) {
				if (autoCollapse) {
					jQuery(this).find(".toggle_tabs:eq(0)").attr("style", "display:none");
					jQuery(this).find("tbody:eq(0)").attr("style", "display:none");
				}
				jQuery(this).find("caption").prepend('<span title="Expand Report" style="' + expandStyle + '" class="module_expand custom_expand"   id="myExpand_' + collapse_counter + '"   onclick="jQuery(\'#myExpand_' + collapse_counter + '\').parents(\'#myfantasyleague_tabs\').find(\'.toggle_tabs:eq(0)\').removeAttr(\'style\');jQuery(\'#myExpand_' + collapse_counter + '\').parents(\'table.homepagemodule\').find(\'tbody:eq(0)\').removeAttr(\'style\');jQuery(\'#myExpand_' + collapse_counter + '\').attr(\'style\',\'display:none\'); jQuery(\'#myCollapse_' + collapse_counter + '\').removeAttr(\'style\');localStorage.removeItem(\'moduleCollapse_' + collapse_counter + '_' + league_id + '\');"></span><span title="Collapse Report" style="' + collapseStyle + '" class="module_expand custom_collapse" id="myCollapse_' + collapse_counter + '" onclick="jQuery(\'#myCollapse_' + collapse_counter + '\').parents(\'#myfantasyleague_tabs\').find(\'.toggle_tabs:eq(0)\').attr(\'style\',\'display:none\');jQuery(\'#myCollapse_' + collapse_counter + '\').parents(\'table.homepagemodule\').find(\'tbody:eq(0)\').attr(\'style\',\'display:none\');jQuery(\'#myExpand_' + collapse_counter + '\').removeAttr(\'style\');jQuery(\'#myCollapse_' + collapse_counter + '\').attr(\'style\',\'display:none\');localStorage.setItem(\'moduleCollapse_' + collapse_counter + '_' + league_id + '\',\'true\');"></span><span class="plus-toggle"><span class="toggle-btn"></span></span>');
				collapse_counter++;
			}
		});
		//collapse remaining modules except those nested in #myfantasyleague_tabs and append own expand/collapse
		jQuery(".mobile-wrap table.homepagemodule.report").each(function () {
			if (jQuery(this).parent().attr("id") === undefined && jQuery(this).parent().parent().attr("class") !== "homepagetabcontent") {
				if (!$(this).find("span").hasClass("module_expand")) {
					if (autoCollapse) jQuery(this).find("tbody:eq(0)").attr("style", "display:none");
					jQuery(this).find("caption").prepend('<span title="Expand Report" style="' + expandStyle + '" class="module_expand custom_expand"   id="myExpand_' + collapse_counter + '"   onclick="jQuery(\'#myExpand_' + collapse_counter + '\').parents(\'table.homepagemodule\').find(\'tbody:eq(0)\').removeAttr(\'style\');jQuery(\'#myExpand_' + collapse_counter + '\').attr(\'style\',\'display:none\'); jQuery(\'#myCollapse_' + collapse_counter + '\').removeAttr(\'style\');localStorage.removeItem(\'moduleCollapse_' + collapse_counter + '_' + league_id + '\');"></span><span title="Collapse Report" style="' + collapseStyle + '" class="module_expand custom_collapse" id="myCollapse_' + collapse_counter + '" onclick="jQuery(\'#myCollapse_' + collapse_counter + '\').parents(\'table.homepagemodule\').find(\'tbody:eq(0)\').attr(\'style\',\'display:none\');jQuery(\'#myExpand_' + collapse_counter + '\').removeAttr(\'style\');jQuery(\'#myCollapse_' + collapse_counter + '\').attr(\'style\',\'display:none\'); localStorage.setItem(\'moduleCollapse_' + collapse_counter + '_' + league_id + '\',\'true\');"></span><span class="plus-toggle"><span class="toggle-btn"></span></span>');
					collapse_counter++;
				}
			}
		});
		if (MFLRememberModuleStates) doCollapseModuleStates();
		doAppendIcon();
	}

	function doCollapseModuleStates() {
		var counter = 0;
		jQuery("body #myfantasyleague_tabs").each(function () {
			if (localStorage.getItem('moduleCollapse_' + counter + '_' + league_id) === 'true') {
				jQuery(this).find(".toggle_tabs:eq(0)").attr("style", "display:none");
				jQuery(this).find("tbody:eq(0)").attr("style", "display:none");
				jQuery('#myExpand_' + counter).removeAttr('style');
				jQuery('#myCollapse_' + counter).attr('style', 'display:none');
			}
			counter++;
		});
		jQuery(".mobile-wrap table.homepagemodule.report").each(function () {
			if (jQuery(this).parent().attr("id") === undefined && jQuery(this).parent().parent().attr("class") !== "homepagetabcontent") {
				if (localStorage.getItem('moduleCollapse_' + counter + '_' + league_id) === 'true') {
					jQuery(this).find("tbody:eq(0)").attr("style", "display:none");
					jQuery('#myExpand_' + counter).removeAttr('style');
					jQuery('#myCollapse_' + counter).attr('style', 'display:none');
				}
				counter++;
			}
		});
	}
	jQuery('.toggle-btn').text('');

	setTimeout(function () {
		jQuery('.toggle-btn').text('');
	}, 1000);
	jQuery('#waiver_request_list').addClass('homepagemodule');
	jQuery('.playoffbracket.homepagemodule').addClass('report');
	jQuery('#waiver_request_list caption span').html('Current Waiver Claims');
	if (moduleExpand === undefined) var moduleExpand = "No";
	if (moduleExpand === 'No' && document.getElementById("body_home") && location.href.indexOf("MODULE=MESSAGE") === -1 && location.href.indexOf("/message") === -1 && location.href.indexOf("SEQNO=") === -1) doCustomCollapseHPM(false);
	setTimeout(function () {
		if (moduleExpand === undefined) var moduleExpand = "No";
		if (moduleExpand === 'No' && document.getElementById("body_home") && location.href.indexOf("MODULE=MESSAGE") === -1 && location.href.indexOf("/message") === -1 && location.href.indexOf("SEQNO=") === -1) doCustomCollapseHPM(false);
	}, 10);
	setTimeout(function () {
		let searchParams = new URLSearchParams(window.location.search);
		let urlModule = searchParams.has('MODULE');
		let urlSeq = searchParams.has('SEQNO');
		if (urlSeq || urlModule) {
			$('head').append('<style>.mobile-wrap{position:relative}</style>');
			doAppendIcon();
		}
	}, 20);
	setTimeout(function () {
		let searchParams = new URLSearchParams(window.location.search);
		let urlModule = searchParams.has('MODULE');
		let urlSeq = searchParams.has('SEQNO');
		if (urlSeq || urlModule) {
			$('head').append('<style>.mobile-wrap{position:relative}</style>');
			doAppendIcon();
		}
	}, 100);


} // END MODULE EXAND AND COLLAPSE


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// MFL LIVE SCORING  https://www.mflscripts.com/mfl-apps/scoreboard/replace-mflScoring/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


if ((load_replace_mflScoring_h2h) && ($('#body_ajax_ls').length)) {
	if ($('script[src*="mfl_live_scoring.js"]').length === 0 || liveScoringWeek === 0) {
		console.log("Live Scoring JS File Not Present Or LiveScoring Has Not Started");
		$("#body_ajax_ls #marquee_home, #body_ajax_ls #marquee_away").show();
		$('#container-wrap').html('<h2 class="warning">Live Scoring Will Start 24 Hours Prior To Kickoff Of First Game Of The Week</h2>');
	} else {
		////////////////////////////////////////////////////////////////////
		//                    CONSOLE LOG SCRIPT DATE                     //
		////////////////////////////////////////////////////////////////////
		console.log("REPLACE MFL SCORING SCRIPT LAST UPDATED 12-10-21");


		////////////////////////////////////////////////////////////////////
		//                          SET GLOBAR VAR                        //
		////////////////////////////////////////////////////////////////////
		var ls_ticker_speed = 200;
		var ls_away_id;
		var ls_home_id;
		var ls_pace_tracker = new Array();
		if (ls_scoreboardName === undefined) var ls_scoreboardName = "Live Scoring";
		if (showTeamName === undefined) var showTeamName = true;
		if (showTeamIcon === undefined) var showTeamIcon = true;
		if (ls_includeProjections === undefined) var ls_includeProjections = true;
		if (ls_includeInjuryStatus === undefined) var ls_includeInjuryStatus = true;
		if (ls_loader === undefined) var ls_loader = false;
		if (ls_excludeIR === undefined) var ls_excludeIR = false;
		if (ls_excludeTaxi === undefined) var ls_excludeTaxi = false;
		if (ls_orig_proj_when_final === undefined) var ls_orig_proj_when_final = false;
		if (ls_box_abbrev_name_icon === undefined) var ls_box_abbrev_name_icon = 2;
		if (ls_popup_abbrev_name_icon === undefined) var ls_popup_abbrev_name_icon = 0;
		if (ls_popup_status === undefined) var ls_popup_status = false;
		if (ls_hide_bye_teams === undefined) var ls_hide_bye_teams = false;
		if (ls_show_win_probability === undefined) var ls_show_win_probability = false;
		if (isAllPlay) var ls_show_win_probability = false;
		if (ls_is_live_week === undefined) var ls_is_live_week = true;
		if (largeLeagueSB === undefined) var largeLeagueSB = false;
		if (BreakRows === undefined) var BreakRows = 1; // DEFAULT TO FALSE ONLY USED FOR ALL PLAY AND PLAYOFF LEAGUES TO MAKE 2ND ROW OF MATCHUPS
		if (fixedWidthBox === undefined) var fixedWidthBox = false; // DEFAULT TO FALSE ONLY USED FOR ALL PLAY AND PLAYOFF LEAGUES TO FIX BOX WIDTHS
		if (setBoxWidth === undefined) var setBoxWidth = "150"; // DEFAULT TO FAULT ONLY USED FOR ALL PLAY AND PLAYOFF LEAGUES TO MAKE 2ND ROW OF MATCHUPS
		var ls_onSwitch = false;
		if (ls_commish_id === undefined) var ls_commish_id = "0001";
		var ls_trigger_run = 1;
		var ls_global_allplay;
		var ls_target_franchise = "";
		if (typeof franchise_id !== "undefined") {
			if (franchise_id === "0000")
				ls_target_franchise = ls_commish_id;
			else
				ls_target_franchise = franchise_id;
		} // end SET GLOBAR VAR


		////////////////////////////////////////////////////////////////////
		//               RUN THESE FUNCTIONS ON PAGE LOAD                 //
		////////////////////////////////////////////////////////////////////

		////////////////////////////////////////////////////////////////////
		//            SET VAR FOR LIVE OR PREVIOUS WEEK                   //
		////////////////////////////////////////////////////////////////////
		if (typeof ls_liveScoringWeekCheck !== "undefined") {
			if (location.href.indexOf("W=") === -1) {
				if (liveScoringWeek < 1) var _liveScoringWeek = 1;
				else var _liveScoringWeek = liveScoringWeek;
			} else
				var _liveScoringWeek = parseInt(location.href.substr(location.href.indexOf("W=") + 2, 2));
			if (liveScoringWeek !== _liveScoringWeek) ls_is_live_week = false;
		} // end SET VAR FOR LIVE OR PREVIOUS WEEK


		////////////////////////////////////////////////////////////////////
		//                    RUN SCOREBOARD FUNCTIONS                    //
		////////////////////////////////////////////////////////////////////
		var seasonNotAvailable = $('#body_ajax_ls h3.warning:contains("Scoring"):contains("Not"):contains("Available")');
		var seasonNotAvailablePay = $('#body_ajax_ls h3.warning:contains("league"):contains("not"):contains("paid")');
		if ($(seasonNotAvailablePay).length) {
			$('<h3 id="ls_error" class="warning h3-menu" style="max-width:31.25rem;visibility:visible;margin:0 auto"><span style="font-size:1.75rem;display:block;text-align:center">Live Scoring has failed to load.</span><br><span style="font-size:1.25rem;display:block;text-align:center">Scoring not available for unpaid leagues</span></h3>').insertBefore(seasonNotAvailablePay);
			$(seasonNotAvailablePay).remove();
		} else if (($(seasonNotAvailable).length) || (liveScoringWeek < 1 || liveScoringWeek > 23)) {
			$('<h3 id="ls_error" class="warning h3-menu" style="max-width:31.25rem;visibility:visible;margin:0 auto"><span style="font-size:1.75rem;display:block;text-align:center">Live Scoring has failed to load.</span><br><span style="font-size:1.25rem;display:block;text-align:center">There are several reasons why this may happen.</span><br><span style="font-size:0.875rem;display:block;text-align:left">1. The regular season has not started (MFL starts live scoring 24 hours prior to kickeoff of Week 1 games)</span><span style="font-size:0.875rem;display:block;text-align:left;padding-top:0.313rem">2. This is a playoff league and the playoff week has not started (MFL starts live scoring 24 hours prior to kickoff of first playoff game)</span><span style="font-size:0.875rem;display:block;text-align:left;padding-top:0.313rem">3. NFL Season has ended. (MFL disables scoring once the season has ended)</span><span style="font-size:0.875rem;display:block;text-align:left;padding-top:0.625rem">Please contact your commissioner or see the MFL support thread link located below if you feel the scoreboard has not loaded for some other reason <br><br><span style="display:block;text-align:center;padding:0.625rem 0 1.25rem 0;"><a href="http://forums.myfantasyleague.com/forums/index.php?showtopic=38170" target="_blank">Support</a></span></span></h3>').insertBefore(seasonNotAvailable);
			$(seasonNotAvailable).remove();
		} else {
			try {
				ls_player[""] = new LSPlayer("", "Blank", "QB", "FA", "QB");
			} catch (error) {};
			ls_setup_html();
			ls_append_css();
			if (typeof ls_liveScoringWeekCheck !== "undefined") {
				ls_navbar()
			}
			if (triggerLiveScoring_ran === undefined) var triggerLiveScoring_ran = false;
			if (triggerLiveScoring_count === undefined) var triggerLiveScoring_count = 0;
			if (largeLeagueSB) {
				if (liveScoringListener === undefined) var liveScoringListener = setInterval("liveScoringListenerCheck()", 1000);
			} else {
				if (liveScoringListener === undefined) var liveScoringListener = setInterval("liveScoringListenerCheck()", 100);
			}
			ls_error_check();
		} // end RUN SCOREBOARD FUNCTIONS


		////////////////////////////////////////////////////////////////////
		// LOADING CIRCLE AND ERROR MESSAGE && TRIGGER CLICK SWITCH GAME  //
		////////////////////////////////////////////////////////////////////
		function ls_error_check() {
			$('<div class="ls_loading_message" style="visibility:visible"><div id="MFLPlayerPopupLoading" style="top:auto;position:relative;transform:none"><center>Loading Live Scoreboard . . .<br><br><div class="MFLPlayerPopupLoader"></div></center></div></div>').insertBefore('#myNavigationHolder');

			if (ls_loader) {
				//do nothing
			} else {
				$('.ls_loading_message #MFLPlayerPopupLoading').remove();
			}

			var ls_has_triggered = false; // set global var when game is triggered click - then wait and hide spinner
			var listenerCleared = false; // liveScoringListener has timed out - show error message
			var errorMsgCk = setInterval(function () {
				if (ls_trigger_run === 126 || ls_trigger_run === 212) {
					show_game();
					setTimeout(() => {
						ls_reorder_ls_games();
						setTimeout(() => {
							if (!ls_is_live_week) {
								$('#other_games div[id*="og_"]:visible:first').trigger('click');
							}
							if (ls_hide_bye_teams) {
								if ($('#other_games .current_matchup').is(":hidden")) {
									$('#other_games div[id*="og_"]:visible:first').trigger('click');
									//console.log("Bye week team hidden with current class")
								}
							}
							ls_has_triggered = true;
						}, 10);
					}, 50);
					clearInterval(errorMsgCk, listenerCk);
				}
			}, 50);

			var errorClassCk = setInterval(function () {
				if (ls_has_triggered) {
					$('.ls_loading_message,#ls_error').remove();
					$('head').append('<style>#body_ajax_ls #myNavigationHolder,#body_ajax_ls #ls_setting_drop,#body_ajax_ls table[style="margin-top: 0.313rem"],#body_ajax_ls table[style*="margin-top: 0.313rem"],#body_ajax_ls #ls_mfl_notes,#body_ajax_ls #ls_ticker_tab_id,#body_ajax_ls table[style*="margin-top: 0.313rem"] + div.mobile-wrap,#body_ajax_ls table[style="margin-top: 0.313rem"] + div.mobile-wrap{visibility:visible!important}</style>');
					if (!$('div[id*="og_"]').is(':visible')) {
						$('.ls-outer-table').replaceWith('<h3 class="warning" style="font-size:1.25rem;padding:1.25rem 0;visibility:visible">There are no fantasy matchups this week or all teams on bye</h3>');
						$('#ls_ticker_tab_id,#ls_mfl_notes,.settings-mobile-wrap').remove();
					}
					clearInterval(errorClassCk, listenerCk);
				}
			}, 10);

			var listenerCk = setInterval(function () {
				if (listenerCleared) {
					$('.ls_loading_message').removeClass('ls_loading_message').addClass('ls_loading_message_offseason');
					$('.ls_loading_message_offseason').replaceWith('<h3 id="ls_error" class="warning h3-menu" style="max-width:31.25rem;visibility:visible;margin:0 auto"><span style="font-size:1.75rem;display:block;text-align:center">Live Scoring has failed to load.</span><br><span style="font-size:1.25rem;display:block;text-align:center">There are 2 different reasons why this has happened.</span><br><span style="font-size:0.875rem;display:block;text-align:left">1. You have accessed this page during the offseason. MFL does not display Live Scores after the season has ended or up to 24 hours before kickoff of week 1 games.</span><br><span style="font-size:0.875rem;display:block;text-align:left">2. The scoring has failed to load for some other reason. Please contact your commissioner or see the MFL support thread located <a href="http://forums.myfantasyleague.com/forums/index.php?showtopic=38170" target="_blank">HERE</a></span></h3>');
					clearInterval(errorMsgCk, errorClassCk, listenerCk);
				}
			}, 100); // end LOADING CIRCLE AND ERROR MESSAGE && TRIGGER CLICK SWITCH GAME
		} // end ls_error_check


		////////////////////////////////////////////////////////////////////
		//                 REMOVE ADS ON SCORING PAGE                     //
		////////////////////////////////////////////////////////////////////
		$('div[id*="usmg_ad"],#ajax_ls div[style="margin-bottom:5px;"]').remove();
		$('[src="/ads/ad-live_scoring_js.html"]').remove();
		googletag = null;

		// Deftect mobile devices and remove custom scrollbar css that add heights on mobiles
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			var style = document.createElement('style');
			document.head.appendChild(style);
			style.sheet.insertRule('::-webkit-scrollbar{display:none}');
		} // end REMOVE ADS ON SCORING PAGE	


		////////////////////////////////////////////////////////////////////
		//      LIST ALL FUNCTIONS IN THIS SCRIPT IN ORDER WRITTEN        //
		////////////////////////////////////////////////////////////////////

		// ls_reorder_ls_games
		// ls_append_css
		// ls_hide_projections(checkbox)	
		// ls_hide_nfl_boxscore(checkbox)
		// ls_get_player_projection(pid)
		// ls_hideProbability
		// ls_update_projections
		// ls_parse_injuries
		// ls_check_if_bye
		// ls_check_if_final
		// ls_format_score
		// ls_removeIR
		// ls_removeTaxi
		// switch_game
		// ls_after_update_scores
		// ls_navbar
		// ls_update_nfl_records
		// ls_update_nfl_schedule
		// ls_update_weekly_results_allplay
		// ls_update_weekly_results
		// ls_update_week
		// ls_create_players_roster
		// ls_nfl_stats_popup_setup
		// ls_nfl_stats_popup
		// ls_update_nfl_box
		// ls_create_nfl_box
		// ls_explain_points
		// triggerLiveScoring
		// liveScoringListenerCheck
		// ls_setup_html
		// update_scores - rewrite mfl function
		// init_marquee - rewrite mfl function
		// update_game_status - rewrite mfl function
		// update_class_by_class - rewrite mfl function
		// build_other_games - rewrite mfl function
		// ls_get_icon_abbrev
		// build_one_team - rewrite mfl function


		////////////////////////////////////////////////////////////////////
		//              FUNCTION - ls_reorder_ls_games                    //
		////////////////////////////////////////////////////////////////////
		function ls_reorder_ls_games() {
			if (ls_vert_og) {
				// validate that ls_target_franchise is scheduled
				for (var i = 0; i < ls_games.length; i++) {
					if (ls_games[i] === ls_target_franchise) ls_global_allplay = ls_target_franchise;
				}
				// if not assigned then assigned to first franchise
				if (ls_global_allplay === undefined) ls_global_allplay = ls_games[0];
				var new_ls_games = [];
				switch_game(ls_global_allplay, '');
			} else {
				var new_ls_games = [];
				//ADD TARGET FRANCHISE TO BEGINNING
				for (var i = 0; i < 3; i++) {
					for (var j = 0; j < ls_games.length; j++) {
						switch (i) {
							case 0:
								if (ls_games[j].split(",")[0] !== "BYE" && ls_games[j].split(",")[0] !== "AVG" && ls_games[j].split(",")[1] !== "BYE" && ls_games[j].split(",")[1] !== "AVG") {
									if (ls_target_franchise === ls_games[j].split(",")[0] || ls_target_franchise === ls_games[j].split(",")[1])
										new_ls_games.push(ls_games[j]);
								}
								break;
							case 1:
								if (ls_games[j].split(",")[0] === "AVG" || ls_games[j].split(",")[1] === "AVG") {
									if (ls_target_franchise === ls_games[j].split(",")[0] || ls_target_franchise === ls_games[j].split(",")[1])
										if (ls_games[j].split(",")[1] === "AVG") //IF HOME IS AVG THEN SWAP
											new_ls_games.push(ls_games[j].split(",")[1] + "," + ls_games[j].split(",")[0]);
										else
											new_ls_games.push(ls_games[j]);
								}
								break;
							case 2:
								if (ls_games[j].split(",")[0] === "BYE" || ls_games[j].split(",")[1] === "BYE") {
									if (ls_target_franchise === ls_games[j].split(",")[0] || ls_target_franchise === ls_games[j].split(",")[1])
										if (ls_games[j].split(",")[1] === "BYE") //IF HOME IS BYE THEN SWAP
											new_ls_games.push(ls_games[j].split(",")[1] + "," + ls_games[j].split(",")[0]);
										else
											new_ls_games.push(ls_games[j]);
								}
								break;
						}
					}
				}
				//ADD REMAINING FRANCHISES
				for (var i = 0; i < 3; i++) {
					for (var j = 0; j < ls_games.length; j++) {
						switch (i) {
							case 0:
								if (ls_games[j].split(",")[0] !== "BYE" && ls_games[j].split(",")[0] !== "AVG" && ls_games[j].split(",")[1] !== "BYE" && ls_games[j].split(",")[1] !== "AVG") {
									if (ls_target_franchise !== ls_games[j].split(",")[0] && ls_target_franchise !== ls_games[j].split(",")[1])
										new_ls_games.push(ls_games[j]);
								}
								break;
							case 1:
								if (ls_games[j].split(",")[0] === "AVG" || ls_games[j].split(",")[1] === "AVG") {
									if (ls_target_franchise !== ls_games[j].split(",")[0] && ls_target_franchise !== ls_games[j].split(",")[1])
										if (ls_games[j].split(",")[1] === "AVG") //IF HOME IS AVG THEN SWAP
											new_ls_games.push(ls_games[j].split(",")[1] + "," + ls_games[j].split(",")[0]);
										else
											new_ls_games.push(ls_games[j]);
								}
								break;
							case 2:
								if (ls_games[j].split(",")[0] === "BYE" || ls_games[j].split(",")[1] === "BYE") {
									if (ls_target_franchise !== ls_games[j].split(",")[0] && ls_target_franchise !== ls_games[j].split(",")[1])
										if (ls_games[j].split(",")[1] === "BYE") //IF HOME IS BYE THEN SWAP
											new_ls_games.push(ls_games[j].split(",")[1] + "," + ls_games[j].split(",")[0]);
										else
											new_ls_games.push(ls_games[j]);
								}
								break;
						}
					}
				}
				ls_games = new_ls_games;
				new_ls_games = null;
				switch_game(ls_games[0].split(",")[1], ls_games[0].split(",")[0]);
				//console.log("ls_reorder_ls_games")
			}
		} // end ls_reorder_ls_games


		////////////////////////////////////////////////////////////////////
		//                   FUNCTION - ls_append_css                     //
		////////////////////////////////////////////////////////////////////
		function ls_append_css() {
			$('head').append('<style>.LS_MainScoreboard .ls_team_name{white-space:nowrap}.ls_other_game .ls_og_full_name,.LS_MainScoreboard .ls_team_name{overflow:hidden;text-overflow:ellipsis}.ls-outer-table td.ls_game_info br{display:none}.ls-outer-table td.ls_game_info br + br{display:block}td.ls_projections span:empty:before{content:"0"}.ls-matchup caption span{max-width:unset!important;display:unset!important}.ls_player_stats div:empty:before{content:"- stats - "}.ls_allplay_final{width:0.625rem;text-align:right;padding-left:0.188rem}.wp_bar div{border-radius:0.5rem;}#TeamWinPctRow td{padding:0.188rem}#winprob_away{float:right;text-align:right;padding: 0 0.188rem;min-width: 1.563rem;min-width: fit-content;}#winprob_home{float:left;text-align:left;padding: 0 0.188rem;min-width: 1.563rem;min-width: fit-content;}h3#ls_error{max-width:37.5rem;margin:0 auto;background:red;color:#fff;padding:0.625rem;border-radius:0.313rem}h3#ls_error a{background:#fff;color:red;padding:0.063rem 0.313rem;border-radius:0.188rem;text-decoration:none;display:block;width:6.25rem;text-align:center;margin:0 auto;}#body_ajax_ls h4,#body_ajax_ls table[style="margin-top: 0.313rem"],#body_ajax_ls #ls_ticker_tab_id,#body_ajax_ls #ls_ticker_tab_id,#ls_ticker_tab_id + p,#body_ajax_ls #ls_ticker_tab_id + p + p,#body_ajax_ls #ls_ticker_tab_id + p + p + p,#body_ajax_ls #myNavigationHolder,#body_ajax_ls #ls_setting_drop,#body_ajax_ls table[style*="margin-top: 0.313rem"],#body_ajax_ls #ls_mfl_notes,#body_ajax_ls #ls_ticker_tab_id,#body_ajax_ls table[style*="margin-top: 0.313rem"] + div.mobile-wrap,#body_ajax_ls table[style="margin-top: 0.313rem"] + div.mobile-wrap{visibility:hidden!important}#other_games > tbody > tr > td{font-size:0}#other_games div.ls_other_game {margin: 0 0.125rem;font-size:0.813rem}#body_ajax_ls #ls-modal-container.hide-overlay .ls-modal-content{display:none}#body_ajax_ls #other_games td.ls_og_cell{font-size:0.813rem}#body_ajax_ls #nfl_games td.ls_box_possession:after{content:"";background-size:0.75rem 0.75rem;height:0.75rem;width:0.75rem;position:absolute;margin-left:0.313rem;top:50%;transform:translateY(-50%)}#body_ajax_ls #nfl_games td.ls_box_possession.ls_has_ball+td,#body_ajax_ls #nfl_games td.ls_box_possession.ls_in_redzone+td{width:5.625rem}#body_ajax_ls #nfl_games td.ls_box_possession.ls_has_ball,#body_ajax_ls #nfl_games td.ls_box_possession.ls_in_redzone{width:2.625rem}#body_ajax_ls #nfl_games td.ls_box_possession.ls_in_redzone:after{background-image:url(https://www.mflscripts.com/ImageDirectory/script-images/goal-post.svg)}#body_ajax_ls #nfl_games td.ls_box_possession.ls_has_ball:after{background-image:url(https://www.mflscripts.com/ImageDirectory/script-images/football.svg)}#body_ajax_ls #nfl_games div.ls_other_game td{padding:0.063rem 0.125rem}#nfl_games td[style="border:none;"]:last-of-type{padding:0!important}div.ls_team_name{font-size:1.25rem!important;line-height:3.125rem}.ls-modal{display:none;position:fixed;z-index:99999;padding-top:1.875rem;left:0;top:0;width:100%;height:100%;overflow:auto}.ls-modal-content{position:relative;margin:auto;padding:0;width:96%;-webkit-animation-name:animatetop;-webkit-animation-duration:.4s;animation-name:animatetop;animation-duration:.4s;margin-bottom:1.875rem;max-width:25rem;border-radius:0.188rem}#ls-modal-content{max-height:31.25rem;overflow-x:auto}@-webkit-keyframes animatetop{from{top:-18.75rem;opacity:0}to{top:0;opacity:1}}@keyframes animatetop{from{top:-18.75rem;opacity:0}to{top:0;opacity:1}}.ls-modal-header{padding:0.188rem;background:none}.ls-modal-header h2{text-align:left;margin:0;padding:0;padding-left:0.313rem;text-transform:uppercase}.ls-modal-header .close{font-size:1.25rem;font-weight:700;position:absolute;right:0.313rem;top:0.313rem;text-align:center;border-radius:0.188rem;padding:0;height:1.375rem;width:1.375rem;line-height:1.375rem}.ls-modal-header .close:hover,.ls-modal-header .close:focus{text-decoration:none;cursor:pointer}.ls-modal-body{padding:0 0.125rem;font-size:0.813rem;padding-bottom:0.063rem}#ls-modal-content li,#ls-modal-content ul{margin:0;padding:0;list-style:none}#ls-modal-content .ls-popup-position-li{font-weight:700;font-size:0.875rem;padding-left:0.313rem}#ls-modal-content .ls-popup-player-li{position:relative;padding-left:0.5rem}#ls-modal-content .ls-popup-player-li:last-child{border:0}#ls-modal-content .ls-popup-stats{font-style:italic;display:block;font-size:0.688rem;line-height:0.688rem;font-weight:400;padding:0.125rem 0;padding-left:0.188rem;max-width:21.875rem}#ls-modal-content span.ls-popup-points{text-indent:0;display:inline;position:absolute;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);right:0.313rem;font-weight:700;font-size:0.813rem;border:0}.ls-explain-points-total::before{content:"Total Points :";padding-right:0.313rem}.ls-explain-points-li::before{content:"\\f005";font-family:"Font Awesome 6 Pro";padding-right:0.188rem;margin-left:-1.5em}tr[onclick^="ls_nfl_stats_popup_setup"]{cursor:pointer}div.mobile-wrap.ls-boxscore{padding:0 0.625rem;padding-bottom:0.313rem}.ls_scroller{padding:0.625rem 0;padding-bottom:0.313rem;overflow-x:auto;-webkit-overflow-scrolling:touch}#ls-modal-content span.ls-popup-text{font-style:italic;font-weight:700}.ls-popup-text::before,.ls-popup-icon-wrapper::before{content:"-";padding:0 0.125rem}#ls-modal-content img.ls-popup-icon{max-height:1rem;max-width:5rem}#body_ajax_ls table#roster_away,#body_ajax_ls table#roster_home{table-layout:fixed}#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:6.25rem}#body_ajax_ls td.ls_marquee_value{padding-left:0;padding-right:0}#body_ajax_ls .ls-matchup th:last-of-type,#body_ajax_ls .ls-matchup td:last-of-type{width:3.125rem}.ls_other_game .ls_projections{cursor:pointer}.ls_pace_box .ls_projected{display:none}.hide-overlay{background:none!important}@media only screen and (max-width:26.875em){#ls-modal-content .ls-popup-stats{max-width:17.5rem}}@media only screen and (max-width:22.5em){#ls-modal-content .ls-popup-stats{max-width:12.5rem}}@media only screen and (max-width:20em){#ls-modal-content .ls-popup-stats{max-width:11.25rem}}@media only screen and (max-height:37.5em) and (orientation:landscape){#ls-modal-content{max-height:28.75rem}}@media only screen and (max-height:31.25em) and (orientation:landscape){#ls-modal-content{max-height:22.5rem}}@media only screen and (max-height:28.125em) and (orientation:landscape){#ls-modal-content{max-height:19.375rem}}@media only screen and (max-height:25em) and (orientation:landscape){#ls-modal-content{max-height:16.25rem}}@media only screen and (max-height:21.875em) and (orientation:landscape){#ls-modal-content{max-height:13.125rem}}@media only screen and (max-height:18.75em) and (orientation:landscape){#ls-modal-content{max-height:10rem}}@media only screen and (max-height:15.625em) and (orientation:landscape){#ls-modal-content{max-height:6.875rem}}@media only screen and (max-height:12.5em) and (orientation:landscape){#ls-modal-content{max-height:9.375rem}}@media only screen and (max-width:70em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:5rem}}@media only screen and (max-width:60em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:3.75rem}}@media only screen and (max-width:55em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:2.5rem}}@media only screen and (max-width:48em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:8.75rem}}@media only screen and (max-width:33em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:5rem}}@media only screen and (max-width:30em){#body_ajax_ls .ls-matchup td.ls_projections,#body_ajax_ls th.ls_projections{width:2.5rem}}@media only screen and (max-width: 30em){.ls_pace_legend_title{display:block}#body_ajax_ls .ls-has-bye #LS_TopTableHolder .LS_ScoreboardTitle,#body_ajax_ls .ls-has-bye #LS_TopTableHolder .prmin{font-size:0.625rem}}@media only screen and (max-width: 25em){.ls_projected{display:block}}#body_ajax_ls #roster_away .no_stats td,#body_ajax_ls #roster_home .no_stats td{padding-bottom:0}#body_ajax_ls .no_stats div.ls_player_stats{display:none!important}</style>');
			if (isAllPlay) {
				$('head').append('<style>#ls_setting_drop,.ls-outer-table,.ls-outer-table+div.mobile-wrap,.ls-outer-table+table{max-width:50rem;margin:0 auto}#body_ajax_ls div.ls_other_game{min-width:7.5rem}#body_ajax_ls .mobile-wrap.ls-matchup,#LS_TopTableHolder div.mobile-wrap{margin:0 auto;margin-bottom:0.625rem}#body_ajax_ls #other_games td.ls_og_cell{font-size:0.813rem}div.ls_team_name{font-size:20pt}#LS_HomeTeamName,#LS_CenterTop{width:50%}#other_games .ls_other_game tr{height:1.5rem}#other_games th{display:none}@media only screen and (max-width: 54.25em){#LS_TopTableHolder #LS_CenterTop,#LS_TopTableHolder .prmin,#LS_TopTableHolder .LS_ScoreboardTitle{display:table-cell}}@media only screen and (min-width:48.1em){#body_ajax_ls .ls-outer-table{table-layout:fixed}#body_ajax_ls #roster_away caption,#roster_home caption{display:none}}@media only screen and (max-width:40em){#LS_TopTableHolder #LS_CenterTop,#LS_TopTableHolder .prmin,#LS_TopTableHolder .LS_ScoreboardTitle{display:none}#LS_HomeTeamName{width:50%}.LS_MainScoreboard{table-layout:auto!important}}@media only screen and (max-width:28.000em){#LS_HomeScore span{font-size:1.875rem;min-width:1.5rem}}@media only screen and (max-width:22.5em){td.ls_projections,th.ls_projections,#ls_pace_wrapper{display:none!important}}</style>');
			} else {
				$('head').append('<style>#body_ajax_ls .ls_proj_points{visibility:hidden;width:0!important;font-size:0!important;color:transparent;border:0!important;padding:0!important}.ls-has-bye #LS_TopTableHolder div.mobile-wrap,.ls-has-bye .mobile-wrap.ls-matchup{margin:0.625rem auto;margin-top:0}#body_ajax_ls .ls-has-bye .ls_players_table td.mobile-view:last-of-type{display:table-cell!important}#body_ajax_ls .ls-has-bye .ls-bye-hide,#body_ajax_ls .ls-has-bye .ls_players_table td.mobile-view:first-of-type{display:none!important}#body_ajax_ls .ls-has-bye #LS_TopTableHolder div.mobile-wrap,#body_ajax_ls .ls-has-bye .ls_players_table div.mobile-wrap.ls-matchup{max-width:40.625rem}.ls-has-bye #LS_HomeTeamName div{opacity:1!important}@media only screen and (max-width: 48em){.ls_players_table td.mobile-view:last-of-type{display:none}#LS_HomeTeamName div{opacity:.3}}@media only screen and (min-width: 48em){#body_ajax_ls .ls_players_table td.mobile-view:last-of-type,#body_ajax_ls .ls_players_table td.mobile-view:first-of-type{display:table-cell!important}#LS_HomeTeamName div,#LS_AwayTeamName div{opacity:1!important}}@media only screen and (max-width: 54.25em){#body_ajax_ls .ls-has-bye #LS_TopTableHolder .LS_ScoreboardTitle,#body_ajax_ls .ls-has-bye #LS_TopTableHolder .prmin{display:table-cell}}</style>');
			}
			// ADD CSS FOR ALL PLAY - PLAYOFF LEAGUES WITH VAR SETTING
			if (isAllPlay && fixedWidthBox) {
				$("head").append('<style>#body_ajax_ls #other_games div.ls_other_game{width:' + setBoxWidth + (useREM ? "rem" : "px") + '!important;min-width:' + setBoxWidth + (useREM ? "rem" : "px") + '!important}</style>');
			}
			ls_trigger_run = ls_trigger_run + 4;
			//console.log("ls_append_css + 4 " + ls_trigger_run); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_append_css


		////////////////////////////////////////////////////////////////////
		//           FUNCTION - ls_hide_projections(checkbox)             //
		////////////////////////////////////////////////////////////////////
		function ls_hide_projections(checkbox) {
			if (checkbox.checked) {
				$(".ls_projections").attr("style", "display:none");
				localStorage.setItem("ls_includeProjections_" + league_id, "1");
			} else {
				$(".ls_projections").removeAttr("style");
				localStorage.removeItem("ls_includeProjections_" + league_id);
			}
			//console.log("ls_hide_projections"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_hide_projections(checkbox)


		////////////////////////////////////////////////////////////////////
		//           FUNCTION - ls_hide_nfl_boxscore(checkbox)            //
		////////////////////////////////////////////////////////////////////
		function ls_hide_nfl_boxscore(checkbox) {
			if (checkbox.checked) {
				$(".ls-nfl-boxscore").slideToggle('500');
				localStorage.setItem("ls_includeNFLBox_" + league_id, "1");
			} else {
				$(".ls-nfl-boxscore").slideToggle('500');
				localStorage.removeItem("ls_includeNFLBox_" + league_id);
			}
			//console.log("ls_hide_nfl_boxscore"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_hide_nfl_boxscore(checkbox)


		////////////////////////////////////////////////////////////////////
		//              FUNCTION - ls_get_player_projection               //
		////////////////////////////////////////////////////////////////////
		function ls_get_player_projection(pid) {
			try {
				if (ls_nfl_games[ls_player[pid].nfl_team].secs_left === 0)
					if (ls_player[pid] === undefined || isNaN(ls_player[pid].points))
						if (ls_projections['pid_' + pid] === undefined)
							return ({
								"pace": 0,
								"points": 0,
								"projected": 0,
								"formatted": format_points(0),
								"game_sec_remaining": ls_nfl_games[ls_player[pid].nfl_team].secs_left
							});
						else
							return ({
								"pace": 0,
								"points": 0,
								"projected": parseFloat(ls_projections['pid_' + pid]),
								"formatted": format_points(0),
								"game_sec_remaining": ls_nfl_games[ls_player[pid].nfl_team].secs_left
							});
				else
				if (ls_projections['pid_' + pid] === undefined)
					return ({
						"pace": ls_player[pid].points,
						"points": ls_player[pid].points,
						"projected": 0,
						"formatted": format_points(ls_player[pid].points),
						"game_sec_remaining": ls_nfl_games[ls_player[pid].nfl_team].secs_left
					});
				else
					return ({
						"pace": ls_player[pid].points,
						"points": ls_player[pid].points,
						"projected": parseFloat(ls_projections['pid_' + pid]),
						"formatted": format_points(ls_player[pid].points),
						"game_sec_remaining": ls_nfl_games[ls_player[pid].nfl_team].secs_left
					});
				else if (ls_nfl_games[ls_player[pid].nfl_team].secs_left === 3600)
					if (ls_projections['pid_' + pid] === undefined)
						return ({
							"pace": 0,
							"points": 0,
							"projected": 0,
							"formatted": '',
							"game_sec_remaining": ls_nfl_games[ls_player[pid].nfl_team].secs_left
						});
					else
						return ({
							"pace": parseFloat(ls_projections['pid_' + pid]),
							"points": 0,
							"projected": parseFloat(ls_projections['pid_' + pid]),
							"formatted": ls_projections['pid_' + pid],
							"game_sec_remaining": ls_nfl_games[ls_player[pid].nfl_team].secs_left
						});
				else if (ls_projections['pid_' + pid] === undefined)
					return ({
						"pace": ls_player[pid].points,
						"points": (ls_player[pid].points - 0),
						"projected": ls_player[pid].points,
						"formatted": format_points(ls_player[pid].points),
						"game_sec_remaining": ls_nfl_games[ls_player[pid].nfl_team].secs_left
					});
				else
					return ({
						"pace": (ls_player[pid].points + parseFloat(ls_projections['pid_' + pid]) * (ls_nfl_games[ls_player[pid].nfl_team].secs_left / 3600)),
						"points": ls_player[pid].points,
						"projected": parseFloat(ls_projections['pid_' + pid]),
						"formatted": format_points(ls_player[pid].points + parseFloat(ls_projections['pid_' + pid]) * (ls_nfl_games[ls_player[pid].nfl_team].secs_left / 3600)),
						"game_sec_remaining": ls_nfl_games[ls_player[pid].nfl_team].secs_left
					});
			} catch (er) {
				return ({
					"pace": 0,
					"points": 0,
					"projected": 0,
					"formatted": '',
					"game_sec_remaining": 0
				});
			}
			//console.log("ls_get_player_projection"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_get_player_projection


		////////////////////////////////////////////////////////////////////
		//                  FUNCTION - ls_hideProbability                 //
		////////////////////////////////////////////////////////////////////
		//function ls_hideProbability() {
		//if (ls_show_win_probability) {
		//$("#LS_AwayTeamPercent span div,#LS_HomeTeamPercent span div").filter(function () {
		//return ($(this).text() === "100%" || $(this).text() === "0%" || $(this).text() === "NaN%" || $(this).text() === "N/A");
		//}).closest('td').css("display", "none");}
		//console.log("ls_show_win_probability"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		//} // end ls_hideProbability


		////////////////////////////////////////////////////////////////////
		//                  FUNCTION - ls_update_projections              //
		////////////////////////////////////////////////////////////////////
		function ls_update_projections() {
			//LOOP THROUGH ALL THE ROSTERS AND DO PROJECTIONS
			for (var key in ls_rosters) {
				if (ls_rosters.hasOwnProperty(key)) {
					//UPDATE PROJECTIONS FOR STARTERS AND STARTER TOTALS
					var _pace = 0;
					var _proj = 0;
					var _pts = 0;
					var _gsr = 0;
					if (ls_rosters[key].hasOwnProperty("S")) {
						for (var i = 0; i < ls_rosters[key].S.length; i++) {
							var _return_ar = ls_get_player_projection(ls_rosters[key].S[i]);
							_pace += _return_ar.pace;
							_proj += _return_ar.projected;
							_pts += _return_ar.points;
							_gsr += _return_ar.game_sec_remaining;
							if (ls_orig_proj_when_final && _return_ar.game_sec_remaining === 0) {
								$("#ls_pace_pts_" + ls_rosters[key].S[i]).html('<span class="ls_projected" title="Original Projection">' + format_points(parseFloat(_return_ar.projected)) + '</span>');
								if ((_return_ar.pace - _return_ar.projected) < 0)
									$(".pfpts_" + ls_rosters[key].S[i]).addClass('ls_below_projected');
								else if ((_return_ar.pace - _return_ar.projected) > 0)
									$(".pfpts_" + ls_rosters[key].S[i]).addClass('ls_above_projected');
							} else if ((_return_ar.pace - _return_ar.projected) < 0)
								$("#ls_pace_pts_" + ls_rosters[key].S[i]).html('<span class="ls_below_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
							else if ((_return_ar.pace - _return_ar.projected) > 0)
								$("#ls_pace_pts_" + ls_rosters[key].S[i]).html('<span class="ls_above_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
							else
								$("#ls_pace_pts_" + ls_rosters[key].S[i]).html('<span class="ls_at_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
						}
					}
					// UPDATE OTHER GAME PROJECTION TOTALS AND ASSIGN DISPLAYED TEAM TOTALS FOR STARTERS
					ls_pace_tracker["fid_" + key] = ({
						"S": '',
						"NS": '',
						'IR': '',
						'TS': ''
					});
					if (ls_orig_proj_when_final && _gsr === 0) {
						ls_pace_tracker["fid_" + key].S = '<span class="ls_projected" title="Original Projection">' + format_points(_proj) + '</span>';
						if ((_pace - _proj) < 0)
							$(".ogffpts_" + key + ", #ogffpts_" + key).addClass('ls_below_projected');
						else if ((_pace - _proj) > 0)
							$(".ogffpts_" + key + ", #ogffpts_" + key).addClass('ls_above_projected');
					} else if ((_pace - _proj) < 0) {
						ls_pace_tracker["fid_" + key].S = '<span class="ls_below_projected" title="Original Projection: ' + format_points(_proj) + '">' + format_points(_pace) + '</span>';
					} else if ((_pace - _proj) > 0) {
						ls_pace_tracker["fid_" + key].S = '<span class="ls_above_projected" title="Original Projection: ' + format_points(_proj) + '">' + format_points(_pace) + '</span>';
					} else {
						ls_pace_tracker["fid_" + key].S = '<span class="ls_at_projected" title="Original Projection: ' + format_points(_proj) + '">' + format_points(_pace) + '</span>';
					}
					//UPDATE DISPLAYED TEAM TOTALS FOR STARTERS
					$("#ls_pace_" + key + ".ls_projections.ls_projections_S.ffpts_pace_total").html(ls_pace_tracker["fid_" + key].S);
					//UPDATE BOX TEAM TOTALS
					$(".ls_pace_box_" + key).html(ls_pace_tracker["fid_" + key].S);

					//UPDATE PROJECTIONS FOR RESERVES AND RESERVE TOTALS
					var _pace = 0;
					var _proj = 0;
					var _pts = 0;
					var _gsr = 0;
					if (ls_rosters[key].hasOwnProperty("NS")) {
						for (var i = 0; i < ls_rosters[key].NS.length; i++) {
							var _return_ar = ls_get_player_projection(ls_rosters[key].NS[i]);
							_pace += _return_ar.pace;
							_proj += _return_ar.projected;
							_pts += _return_ar.points;
							_gsr += _return_ar.game_sec_remaining;
							if (ls_orig_proj_when_final && _return_ar.game_sec_remaining === 0) {
								$("#ls_pace_pts_" + ls_rosters[key].NS[i]).html('<span class="ls_projected" title="Original Projection">' + format_points(parseFloat(_return_ar.projected)) + '</span>');
								if ((_return_ar.pace - _return_ar.projected) < 0) $(".pfpts_" + ls_rosters[key].NS[i]).addClass('ls_below_projected');
								else if ((_return_ar.pace - _return_ar.projected) > 0) $(".pfpts_" + ls_rosters[key].NS[i]).addClass('ls_above_projected');
							} else if ((_return_ar.pace - _return_ar.projected) < 0)
								$("#ls_pace_pts_" + ls_rosters[key].NS[i]).html('<span class="ls_below_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
							else if ((_return_ar.pace - _return_ar.projected) > 0)
								$("#ls_pace_pts_" + ls_rosters[key].NS[i]).html('<span class="ls_above_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
							else
								$("#ls_pace_pts_" + ls_rosters[key].NS[i]).html('<span class="ls_at_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
						}
					}
					// ASSIGN DISPLAYED TEAM TOTALS FOR NON-STARTERS
					ls_pace_tracker["fid_" + key] = ({
						"S": '',
						"NS": '',
						'IR': '',
						'TS': ''
					});
					if (ls_orig_proj_when_final && _gsr === 0) {
						ls_pace_tracker["fid_" + key].NS = '<span class="ls_projected" title="Original Projection">' + format_points(_proj) + '</span>';
					} else if ((_pace - _proj) < 0) {
						ls_pace_tracker["fid_" + key].NS = '<span class="ls_below_projected" title="Original Projection: ' + format_points(_proj) + '">' + format_points(_pace) + '</span>';
					} else if ((_pace - _proj) > 0) {
						ls_pace_tracker["fid_" + key].NS = '<span class="ls_above_projected" title="Original Projection: ' + format_points(_proj) + '">' + format_points(_pace) + '</span>';
					} else {
						ls_pace_tracker["fid_" + key].NS = '<span class="ls_at_projected" title="Original Projection: ' + format_points(_proj) + '">' + format_points(_pace) + '</span>';
					}
					//UPDATE DISPLAYED TEAM TOTALS FOR NON-STARTERS
					$("#ls_pace_" + key + ".ls_projections.ls_projections_NS.ffpts_pace_total").html(ls_pace_tracker["fid_" + key].NS);

					//UPDATE PROJECTIONS FOR INJURED RESERVE
					var _pace = 0;
					var _proj = 0;
					var _pts = 0;
					var _gsr = 0;
					if (ls_rosters[key].hasOwnProperty("IR")) {
						for (var i = 0; i < ls_rosters[key].IR.length; i++) {
							var _return_ar = ls_get_player_projection(ls_rosters[key].IR[i]);
							_pace += _return_ar.pace;
							_proj += _return_ar.projected;
							_pts += _return_ar.points;
							_gsr += _return_ar.game_sec_remaining;
							if (ls_orig_proj_when_final && _return_ar.game_sec_remaining === 0) {
								$("#ls_pace_pts_" + ls_rosters[key].IR[i]).html('<span class="ls_projected" title="Original Projection">' + format_points(parseFloat(_return_ar.projected)) + '</span>');
								if ((_return_ar.pace - _return_ar.projected) < 0)
									$(".pfpts_" + ls_rosters[key].IR[i]).addClass('ls_below_projected');
								else if ((_return_ar.pace - _return_ar.projected) > 0)
									$(".pfpts_" + ls_rosters[key].IR[i]).addClass('ls_above_projected');
							} else if ((_return_ar.pace - _return_ar.projected) < 0)
								$("#ls_pace_pts_" + ls_rosters[key].IR[i]).html('<span class="ls_below_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
							else if ((_return_ar.pace - _return_ar.projected) > 0)
								$("#ls_pace_pts_" + ls_rosters[key].IR[i]).html('<span class="ls_above_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
							else
								$("#ls_pace_pts_" + ls_rosters[key].IR[i]).html('<span class="ls_at_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
						}
					}
					//UPDATE PROJECTIONS FOR TAXI SQUAD
					var _pace = 0;
					var _proj = 0;
					var _pts = 0;
					var _gsr = 0;
					if (ls_rosters[key].hasOwnProperty("TS")) {
						for (var i = 0; i < ls_rosters[key].TS.length; i++) {
							var _return_ar = ls_get_player_projection(ls_rosters[key].TS[i]);
							_pace += _return_ar.pace;
							_proj += _return_ar.projected;
							_pts += _return_ar.points;
							_gsr += _return_ar.game_sec_remaining;
							if (ls_orig_proj_when_final && _return_ar.game_sec_remaining === 0) {
								$("#ls_pace_pts_" + ls_rosters[key].TS[i]).html('<span class="ls_projected" title="Original Projection">' + format_points(parseFloat(_return_ar.projected)) + '</span>');
								if ((_return_ar.pace - _return_ar.projected) < 0)
									$(".pfpts_" + ls_rosters[key].TS[i]).addClass('ls_below_projected');
								else if ((_return_ar.pace - _return_ar.projected) > 0)
									$(".pfpts_" + ls_rosters[key].TS[i]).addClass('ls_above_projected');
							} else if ((_return_ar.pace - _return_ar.projected) < 0)
								$("#ls_pace_pts_" + ls_rosters[key].TS[i]).html('<span class="ls_below_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
							else if ((_return_ar.pace - _return_ar.projected) > 0)
								$("#ls_pace_pts_" + ls_rosters[key].TS[i]).html('<span class="ls_above_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
							else
								$("#ls_pace_pts_" + ls_rosters[key].TS[i]).html('<span class="ls_at_projected" title="Original Projection: ' + format_points(parseFloat(_return_ar.projected)) + '">' + _return_ar.formatted + '</span>');
						}
					}
				}
			}
			//console.log("ls_update_projections"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_update_projections


		////////////////////////////////////////////////////////////////////
		//                 FUNCTION - ls_parse_projections                //
		////////////////////////////////////////////////////////////////////
		function ls_parse_projections() {
			ls_projections = {};
			if (liveScoringWeek < 1) var _liveScoringWeek = 1;
			else var _liveScoringWeek = liveScoringWeek;
			// WE ARE ONLY CACHING PROJECTED SCORES FOR LIVESCORING WEEK. WE WILL NEED TO READ API FOR PREVIOUS WEEKS
			//WE ARE ONLY CACHING PROJECTED SCORES FOR LIVESCORING WEEK.  WE WILL NEED TO READ API FOR PREVIOUS WEEKS
			var property = "w_" + (_liveScoringWeek)
			if (ls_is_live_week) {
				for (var i = 0; i < reportProjectedScores_ar[property].projectedScores.playerScore.length; i++) {
					if (reportProjectedScores_ar[property].projectedScores.playerScore[i].score.length === 0) ls_projections["pid_" + reportProjectedScores_ar[property].projectedScores.playerScore[i].id] = 0;
					else ls_projections["pid_" + reportProjectedScores_ar[property].projectedScores.playerScore[i].id] = reportProjectedScores_ar[property].projectedScores.playerScore[i].score;
				}
			} else {
				fetch(`${baseURLDynamic}/${year}/export?TYPE=projectedScores&L=${league_id}&W=${_liveScoringWeek}&JSON=1`)
					.then(response => {
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json();
					})
					.then(projectionsData => {
						for (var i = 0; i < projectionsData.projectedScores.playerScore.length; i++) {
							if (projectionsData.projectedScores.playerScore[i].score.length === 0) ls_projections["pid_" + projectionsData.projectedScores.playerScore[i].id] = 0;
							else ls_projections["pid_" + projectionsData.projectedScores.playerScore[i].id] = projectionsData.projectedScores.playerScore[i].score;
						}
					})
					.catch(error => {
						console.error('Error:', error);
					});
			}

			ls_trigger_run += 14;
			//console.log("ls_parse_projections + 14 " + ls_trigger_run); // REMOVE AFTER TESTING - CONSOLE
		} // end ls_parse_projections


		////////////////////////////////////////////////////////////////////
		//                   FUNCTION - ls_parse_injuries                 //
		////////////////////////////////////////////////////////////////////
		function ls_parse_injuries() {
			ls_injuries = new Array();
			for (var i = 0; i < reportInjuries_ar.injuries.injury.length; i++) {
				ls_injuries["pid_" + reportInjuries_ar.injuries.injury[i].id] = ({
					"code": reportInjuries_ar.injuries.injury[i].status.substr(0, 1),
					"status": reportInjuries_ar.injuries.injury[i].status,
					"details": reportInjuries_ar.injuries.injury[i].details
				});
			}
			ls_trigger_run = ls_trigger_run + 17;
			//console.log("ls_parse_injuries + 17 " + ls_trigger_run); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_parse_injuries


		////////////////////////////////////////////////////////////////////
		//                    FUNCTION - ls_check_if_bye                  //
		////////////////////////////////////////////////////////////////////
		function ls_check_if_bye() {
			// if away team is bye then add bye class to main scoreboard to hide for mobile and activate home team
			//if(ls_away_id==='BYE'||ls_away_id==='AVG') {
			if ($('.ls_other_game_avg.current_matchup,.ls_other_game_bye.current_matchup').length) {
				$("#ajax_ls").addClass("ls-has-bye");
				$("#body_ajax_ls .ls-has-bye .ls_players_table td.mobile-view:last-of-type").attr('colspan', 2);
				$("#body_ajax_ls .ls-has-bye #LS_HomeTeamRecord").attr('colspan', 7);
				$("#body_ajax_ls .ls-has-bye #LS_HomeTeamName").attr('colspan', 7);
				$("#body_ajax_ls .ls-has-bye #LS_HomeScore").attr('colspan', 4);
				$("#body_ajax_ls .ls-has-bye #LS_HomeTeamPercent,#body_ajax_ls .ls-has-bye #LS_AwayTeamPercent").hide();
			} else {
				$("#ajax_ls").removeClass("ls-has-bye");
				$("#body_ajax_ls .ls_players_table td.mobile-view:last-of-type").removeAttr('colspan');
				$("#body_ajax_ls #LS_HomeTeamRecord").removeAttr('colspan');
				$("#body_ajax_ls #LS_HomeTeamName").removeAttr('colspan');
				$("#body_ajax_ls #LS_HomeScore").removeAttr('colspan');
				$("#body_ajax_ls #LS_HomeTeamPercent,#body_ajax_ls #LS_AwayTeamPercent").show();
			}
			//console.log("ls_check_if_bye"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_check_if_bye


		////////////////////////////////////////////////////////////////////
		//                   FUNCTION - ls_check_if_final                 //
		////////////////////////////////////////////////////////////////////
		function ls_check_if_final() {
			if (isAllPlay) {
				$('#other_games .ls_other_game div[class^="oggstat"]:contains("F")').closest('td').replaceWith('<td class="ls_allplay_final"><div>(F)</div></td>');
			} else {
				$('div[id*="og_"]').each(function () {
					top_score = Number($(this).find('tr:first-child div[class*="ogffpts_"]').text());
					bottom_score = Number($(this).find('tr:last-child div[class*="ogffpts_"]').text());
					if ($(this).find('div[class^="oggstat"]:contains("F")').length === 2 || $(this).filter('.ls_other_game_avg').find('div[class^="oggstat"]:contains("F")').length === 1) {
						$(this).addClass('ls_box_gameover');
						if (top_score > bottom_score) {
							$(this).find('tr:first-child td:last').replaceWith('<td class="winner_mark" style="border:none;"><div class="oggstat_9999"><i class="fa-regular fa-caret-left" aria-hidden="true"></i></div></td>');
						} else if (bottom_score > top_score) {
							$(this).find('tr:last-child td:last').replaceWith('<td class="winner_mark" style="border:none;"><div class="oggstat_9999"><i class="fa-regular fa-caret-left" aria-hidden="true"></i></div></td>');
						} else if (bottom_score === top_score) {
							$(this).find('tr:first-child td:last,tr:last-child td:last').replaceWith('<td class="tie_mark" style="border:none;"><div>T</div></td>');
						}
					} else {
						if ($(this).filter('.ls_other_game_bye').find('div[class^="oggstat"]:contains("F")').length === 1) {
							$(this).addClass('ls_box_gameover');
							$(this).find('tr:last-child td:last').replaceWith('<td class="winner_mark" style="border:none;"><div class="oggstat_9999"><i class="fa-regular fa-caret-left" aria-hidden="true"></i></div></td>');
						}
					}
				});
			}
			//console.log("ls_check_if_final"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_check_if_final


		////////////////////////////////////////////////////////////////////
		//                    FUNCTION - ls_format_score                  //
		////////////////////////////////////////////////////////////////////
		function ls_format_score() {
			$(".ls_team_points span,.ls_team_points a").contents().unwrap();
			$(".ls_team_points a:empty").remove();
			var min_digits = 8;
			var use_blanks = true; // IF TRUE USE BLANKS ELSE USE ZERO
			var _awayScore = $("#ffpts_away").text();
			var _homeScore = $("#ffpts_home").text();
			var _oldScore = _awayScore;
			for (var i = min_digits; i > _oldScore.length; i--) {
				if (use_blanks) _awayScore = 'x' + _awayScore;
				else _awayScore = '0' + _awayScore;
			}
			var _oldScore = _homeScore;
			for (var i = min_digits; i > _oldScore.length; i--) {
				if (use_blanks) _homeScore = 'x' + _homeScore;
				else _homeScore = '0' + _homeScore;
			}
			var html = '';
			for (var i = 0; i < _awayScore.length; i++) {
				if (_awayScore.substr(i, 1) === "x") html += '<span class="blank ls_num_' + (i + 1) + '"><a></a></span>';
				else html += '<span class="ls_num_' + (i + 1) + '"><a>' + _awayScore.substr(i, 1) + '</a></span>';
			}
			$("#ffpts_away").html(html);
			html = '';
			for (var i = 0; i < _homeScore.length; i++) {
				if (_homeScore.substr(i, 1) === "x") html += '<span class="blank ls_num_' + (i + 1) + '"><a></a></span>';
				else html += '<span class="ls_num_' + (i + 1) + '"><a>' + _homeScore.substr(i, 1) + '</a></span>';
			}
			$("#ffpts_home").html(html);
			//console.log("ls_format_score"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_format_score


		////////////////////////////////////////////////////////////////////
		//                     FUNCTION - ls_removeIR                     //
		////////////////////////////////////////////////////////////////////
		function ls_removeIR() {
			var _irFound = false;
			var _taxiFound = false;
			$("#roster_away tr.ls_nonstarters").each(function () {
				if ($(this).find("th:first-child").text() === "Injured Reserve") _irFound = true;
				if ($(this).find("th:first-child").text() === "Taxi Squad") _taxiFound = true;
				if (_irFound && !_taxiFound) {
					$(this).remove();
				}
			});
			_irFound = false;
			_taxiFound = false;
			$("#roster_home tr.ls_nonstarters").each(function () {
				if ($(this).find("th:first-child").text() === "Injured Reserve") _irFound = true;
				if ($(this).find("th:first-child").text() === "Taxi Squad") _taxiFound = true;
				if (_irFound && !_taxiFound) {
					$(this).remove();
				}
			});
			for (var key in ls_rosters) {
				if (ls_rosters.hasOwnProperty(key)) {
					ls_rosters[key].IR = new Array();
				}
			}
			//console.log("ls_removeIR"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_removeIR


		////////////////////////////////////////////////////////////////////
		//                     FUNCTION - ls_removeTaxi                   //
		////////////////////////////////////////////////////////////////////
		function ls_removeTaxi() {
			var _taxiFound = false;
			$("#roster_away tr.ls_nonstarters").each(function () {
				if ($(this).find("th:first-child").text() === "Taxi Squad") _taxiFound = true;
				if (_taxiFound) {
					$(this).remove();
				}
			});
			_taxiFound = false;
			$("#roster_home tr.ls_nonstarters").each(function () {
				if ($(this).find("th:first-child").text() === "Taxi Squad") _taxiFound = true;
				if (_taxiFound) {
					$(this).remove();
				}
			});
			for (var key in ls_rosters) {
				if (ls_rosters.hasOwnProperty(key)) {
					ls_rosters[key].TS = new Array();
				}
			}
			//console.log("ls_removeTaxi"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_removeTaxi


		////////////////////////////////////////////////////////////////////
		//                     FUNCTION - switch_game                     //
		////////////////////////////////////////////////////////////////////
		// Anything that needs to run again when user clicks the boxscores matchups , place in here , still need to place on page load as well
		function switch_game(home, away) {
			if (isAllPlay) {
				ls_global_allplay = home;
				ls_onSwitch = true;
				ls_update_all = 1;
				ls_home_id = home;
				show_game(ls_home_id);
				update_scores();
			} else {
				ls_onSwitch = true;
				ls_update_all = 1;
				ls_home_id = home;
				ls_away_id = away;
				show_game(ls_home_id, ls_away_id);
				update_scores();
				ls_check_if_bye();
				// Added to give class to free agent players - gameover at all time
				// change text for win probability in H2H leagues only if visible
				if ($("#winprob_home:visible").length && ls_show_win_probability) {
					$("#LS_CenterTop").html("<span class='hometeam ls-bye-hide'>% WIN HOME</span><span class='awayteam ls-bye-hide'>AWAY WIN %</span>" + ls_scoreboardName);
				} else {
					$("#LS_CenterTop").html("<span class='hometeam ls-bye-hide'>HOME</span><span class='awayteam ls-bye-hide'>AWAY</span>" + ls_scoreboardName);
				}
			}
			$("#LS_AwayTeamName,#LS_AwayTeamRecord,#LS_AwayScore").trigger('click');

			//console.log("switch_game"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end switch_game


		////////////////////////////////////////////////////////////////////
		//              FUNCTION - ls_after_update_scores                 //
		////////////////////////////////////////////////////////////////////
		//YOU CAN NOW ADD WHATEVER YOU WANT HERE AND IT WILL RUN IMMEDIATELY AFTER MFLS' update_scores 
		function ls_after_update_scores() {
			$("#LS_AwayTeamPercent div,#LS_HomeTeamPercent div").each(function () {
				var $this = $(this);
				var percWidth = $this.text();
				if (percWidth === "NaN%") {
					$this.text('50%');
					percWidth = '50%'
				}
				number = parseFloat($(this).text());
				if (number < 50)
					$(this).removeClass('greaterthan').addClass('lessthan');
				if (number > 50)
					$(this).removeClass('lessthan').addClass('greaterthan');
				if (number === 50)
					$(this).removeClass('lessthan').addClass('greaterthan');
				$(this).css('width', percWidth);
			});
			ls_format_score();
			ls_update_nfl_box();
			ls_check_if_final();
			if (ls_includeProjections) ls_update_projections(); //update projections for both other games and rosters
			// Prevent updates on previous weeks
			if (!ls_is_live_week) {
				ls_timeout = 0;
				ls_update_all = 1;

				function reset_ls_timer() {
					return false;
				}
			}
			$('.ls_projections.ls_pace_box:contains("NaN"),.ls_projections.ls_pace_box:contains("undefined")').html('<i class="fa-regular fa-spinner fa-spin" style="font-size:0.875rem" title="Wait..As MFL Prepares Games Starting"></i>');
			$('.ls_projections span:contains("undefined"),.ls_projections span:contains("NaN"),.ls_game_info:contains("NaN"),.ls_game_info:contains("undefined")').html('<i class="fa-regular fa-spinner fa-spin" style="font-size:1.375rem" title="Wait..As MFL Prepares Games Starting"></i>');
			//console.log("ls_after_update_scores"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_after_update_scores


		////////////////////////////////////////////////////////////////////
		//                     FUNCTION - ls_navbar                       //
		////////////////////////////////////////////////////////////////////
		function ls_navbar() {
			var html = '';
			html += '<div id="myNavigationHolder" style="margin-top:0.625rem"><span class="weekly-navbar"><span class="reportnavigationheader">Select Week: </span>';

			var ls_start_week = startWeek;
			var ls_end_week = endWeek;

			if (location.href.indexOf("W=") === -1) {
				if (liveScoringWeek < 1) var _liveScoringWeek = 1;
				else var _liveScoringWeek = liveScoringWeek;
			} else
				var _liveScoringWeek = parseInt(location.href.substr(location.href.indexOf("W=") + 2, 2));
			for (var i = ls_start_week; i <= ls_end_week; i++) {
				if (i < liveScoringWeek)
					html += '<a href="#week' + i + '" onclick="location.href=\'' + baseURLDynamic + '/' + year + '/ajax_ls?L=' + league_id + '&W=' + _liveScoringWeek + '&W2=' + i + '\';"> ' + i + ' </a>';
				else if (i === liveScoringWeek)
					html += '<span class="currentweek"> ' + i + ' </span>';
				else if (i <= _liveScoringWeek)
					html += '<a href="#week' + i + '" onclick="location.href=\'' + baseURLDynamic + '/' + year + '/ajax_ls?L=' + league_id + '&W=' + _liveScoringWeek + '&W2=' + i + '\';"> ' + i + ' </a>';
				else
					html += '<a href="#week' + i + '" class="inactive" style="cursor:default"> ' + i + ' </a>';
			}
			html += '</span>';
			html += '<span class="weekly-navbar-mobile">Select Week: ';
			html += '<select size="1" id="ls_scoreboardWeek" onchange="location.href=\'' + baseURLDynamic + '/' + year + '/ajax_ls?L=' + league_id + '&W=' + _liveScoringWeek + '&W2=\'+document.getElementById(\'ls_scoreboardWeek\').value;">';
			for (var i = ls_start_week; i <= ls_end_week; i++) {
				if (i < liveScoringWeek)
					html += '<option value="' + i + '">' + i + '</option>';
				else if (i === liveScoringWeek)
					html += '<option value="' + i + '" selected="selected">' + i + '</option>';
				else if (i <= _liveScoringWeek)
					html += '<option value="' + i + '">' + i + '</option>';
				else
					html += '<option value="' + i + '" disabled="disabled">' + i + '</option>';
			}
			html += '</select>';
			html += '</span>';
			html += '</div>';
			$("#ls_setting_drop").before(html);
			ls_trigger_run = ls_trigger_run + 11;
			//console.log("ls_navbar + 11 " + ls_trigger_run); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_update_nfl_records


		////////////////////////////////////////////////////////////////////
		//               FUNCTION - ls_update_nfl_records                 //
		////////////////////////////////////////////////////////////////////
		var ls_nfl_records = new Array();

		function ls_update_nfl_records() {
			for (var w = 1; w < liveScoringWeek; w++) {
				var nflData = reportNflSchedule_ar["w_" + w];
				for (var i = 0; i < nflData.nflSchedule.matchup.length; i++) {
					if (ls_nfl_records[nflData.nflSchedule.matchup[i].team[0].id] === undefined) ls_nfl_records[nflData.nflSchedule.matchup[i].team[0].id] = ({
						w: 0,
						l: 0,
						t: 0
					});
					if (ls_nfl_records[nflData.nflSchedule.matchup[i].team[1].id] === undefined) ls_nfl_records[nflData.nflSchedule.matchup[i].team[1].id] = ({
						w: 0,
						l: 0,
						t: 0
					});
					if (parseInt(nflData.nflSchedule.matchup[i].team[0].score) > parseInt(nflData.nflSchedule.matchup[i].team[1].score)) {
						ls_nfl_records[nflData.nflSchedule.matchup[i].team[0].id].w += 1;
						ls_nfl_records[nflData.nflSchedule.matchup[i].team[1].id].l += 1;
					} else if (parseInt(nflData.nflSchedule.matchup[i].team[0].score) < parseInt(nflData.nflSchedule.matchup[i].team[1].score)) {
						ls_nfl_records[nflData.nflSchedule.matchup[i].team[0].id].l += 1;
						ls_nfl_records[nflData.nflSchedule.matchup[i].team[1].id].w += 1;
					} else {
						ls_nfl_records[nflData.nflSchedule.matchup[i].team[0].id].t += 1;
						ls_nfl_records[nflData.nflSchedule.matchup[i].team[1].id].t += 1;
					}
				}
				nflData = null;
			}
			ls_trigger_run = ls_trigger_run + 12;
			//console.log("ls_update_nfl_records + 12 " + ls_trigger_run); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_nfl_stats_popup_setup


		////////////////////////////////////////////////////////////////////
		//               FUNCTION - ls_update_nfl_schedule                //
		////////////////////////////////////////////////////////////////////
		function ls_update_nfl_schedule(nflData) {
			for (var i = 0; i < nflData.nflSchedule.matchup.length; i++) {
				ls_nfl_games[nflData.nflSchedule.matchup[i].team[0].id] = [];
				ls_nfl_games[nflData.nflSchedule.matchup[i].team[1].id] = [];
				ls_nfl_games[nflData.nflSchedule.matchup[i].team[0].id].time = parseInt(nflData.nflSchedule.matchup[i].kickoff);
				ls_nfl_games[nflData.nflSchedule.matchup[i].team[0].id].pretty_time = "";
				ls_nfl_games[nflData.nflSchedule.matchup[i].team[0].id].opp = nflData.nflSchedule.matchup[i].team[1].id;
				ls_nfl_games[nflData.nflSchedule.matchup[i].team[0].id].where = 'away';
				ls_nfl_games[nflData.nflSchedule.matchup[i].team[1].id].time = parseInt(nflData.nflSchedule.matchup[i].kickoff);
				ls_nfl_games[nflData.nflSchedule.matchup[i].team[1].id].pretty_time = "";
				ls_nfl_games[nflData.nflSchedule.matchup[i].team[1].id].opp = nflData.nflSchedule.matchup[i].team[0].id;
				ls_nfl_games[nflData.nflSchedule.matchup[i].team[1].id].where = 'home';
			}
			//console.log("ls_update_nfl_schedule"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_update_nfl_schedule


		////////////////////////////////////////////////////////////////////
		//         FUNCTION - ls_update_weekly_results_allplay            //
		////////////////////////////////////////////////////////////////////
		function ls_update_weekly_results_allplay(response) {
			var _homeTeam = "";
			var _missingPlayersMaxLength = 2000;
			var _missingPlayers = [];
			_missingPlayers[0] = '';
			if (response.hasOwnProperty("weeklyResults")) {
				if (response.weeklyResults.hasOwnProperty("franchise")) {
					//THERE MAY BE ONLY ONE FRANCHISE ON BYE SO WE NEED TO CREATE ARRAY
					var franchises = new Array();
					if (response.weeklyResults.hasOwnProperty("id"))
						franchises[0] = response.weeklyResults.franchise;
					else
						franchises = response.weeklyResults.franchise;
					//LOOP THROUGH FRANCHISES
					for (var i = 0; i < franchises.length; i++) {
						if (franchises[i].id !== "BYE") {
							ls_games.push(franchises[i].id);
							if (_homeTeam === "") _homeTeam = franchises[i].id;
							if (typeof franchise_id !== "undefined") {
								if (franchise_id === franchises[i].id) {
									_homeTeam = franchises[i].id;
								}
							}
							ls_rosters[franchises[i].id] = {};
							ls_rosters[franchises[i].id].TS = [];
							ls_rosters[franchises[i].id].IR = [];
							if (ls_best_lineup === 0) {
								ls_rosters[franchises[i].id].S = [];
								ls_rosters[franchises[i].id].NS = [];
							} else {
								ls_rosters[franchises[i].id].R = [];
							}
							try {
								for (var j = 0; j < franchises[i].player.length; j++) {
									switch (franchises[i].player[j].status) {
										case "starter":
											if (ls_best_lineup === 0) ls_rosters[franchises[i].id].S.push(franchises[i].player[j].id);
											else ls_rosters[franchises[i].id].R.push(franchises[i].player[j].id);
											break;
										case "nonstarter":
											if (ls_best_lineup === 0) ls_rosters[franchises[i].id].NS.push(franchises[i].player[j].id);
											else ls_rosters[franchises[i].id].R.push(franchises[i].player[j].id);
											break;
										case "taxisquad": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
											ls_rosters[franchises[i].id].TS.push(franchises[i].player[j].id);
											break;
										case "injuredreserve": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
											ls_rosters[franchises[i].id].IR.push(franchises[i].player[j].id);
											break;
									}
									if (franchises[i].player[j].id !== "")
										if (ls_player[franchises[i].player[j].id] === undefined) {
											if (_missingPlayers[_missingPlayers.length - 1].length > _missingPlayersMaxLength) _missingPlayers.push('');
											_missingPlayers[_missingPlayers.length - 1] += franchises[i].player[j].id + ",";
										}
								}
							} catch (er) {}
						}
					}
				}
			}
			if (_missingPlayers[0] !== "") {
				_missingPlayers.forEach(missingPlayer => {
					const url = `${baseURLDynamic}/${year}/export?TYPE=players&L=${league_id}&PLAYERS=${missingPlayer}&DETAILS=&SINCE&JSON=1&rand=${Math.random()}`;
					fetch(url)
						.then(response => {
							if (!response.ok) {
								throw new Error('Network response was not ok');
							}
							return response.json();
						})
						.then(playerData => {
							try { //MULTIPLE MISSING PLAYERS
								for (var i = 0; i < playerData.players.player.length; i++) {
									ls_player[playerData.players.player[i].id] = new LSPlayer(playerData.players.player[i].id, playerData.players.player[i].name, playerData.players.player[i].position, playerData.players.player[i].team, playerData.players.player[i].position);
								}
							} catch (er) { //ONE MISSING PLAYER
								ls_player[playerData.players.player.id] = new LSPlayer(playerData.players.player.id, playerData.players.player.name, playerData.players.player.position, playerData.players.player.team, playerData.players.player.position);
							}
						})
						.catch(error => {
							console.error('Error:', error);
						});
				});
			}
			ls_trigger_run = ls_trigger_run + 43;
			//console.log("ls_update_weekly_results_allplay + 43 " + ls_trigger_run); // REMOVE AFTER TESTING - CONSOLE 
		} // end ls_update_weekly_results_allplay 


		////////////////////////////////////////////////////////////////////
		//              FUNCTION - ls_update_weekly_results               //
		////////////////////////////////////////////////////////////////////
		function ls_update_weekly_results(response) {
			var _awayTeam = "";
			var _homeTeam = "";
			var _missingPlayersMaxLength = 2000;
			var _missingPlayers = [];
			_missingPlayers[0] = '';
			if (response.hasOwnProperty("weeklyResults")) {
				if (response.weeklyResults.hasOwnProperty("matchup")) {
					//THERE MAY BE ONLY ONE MATCHUP SO WE NEED TO CREATE ARRAY
					var matchups = new Array();
					if (response.weeklyResults.matchup.hasOwnProperty("franchise"))
						matchups[0] = response.weeklyResults.matchup;
					else
						matchups = response.weeklyResults.matchup;
					//LOOP THROUGH MATCHUPS
					for (var i = 0; i < matchups.length; i++) {
						ls_games.push(matchups[i].franchise[0].id + "," + matchups[i].franchise[1].id);
						if (_awayTeam === "") _awayTeam = matchups[i].franchise[0].id;
						if (_homeTeam === "") _homeTeam = matchups[i].franchise[1].id;
						if (typeof franchise_id !== "undefined") {
							if (franchise_id === matchups[i].franchise[0].id || franchise_id === matchups[i].franchise[1].id) {
								_awayTeam = matchups[i].franchise[0].id;
								_homeTeam = matchups[i].franchise[1].id;
							}
						}
						if (matchups[i].franchise[0].id !== "BYE") {
							ls_rosters[matchups[i].franchise[0].id] = {};
							ls_rosters[matchups[i].franchise[0].id].TS = [];
							ls_rosters[matchups[i].franchise[0].id].IR = [];
							if (ls_best_lineup === 0) {
								ls_rosters[matchups[i].franchise[0].id].S = [];
								ls_rosters[matchups[i].franchise[0].id].NS = [];
							} else {
								ls_rosters[matchups[i].franchise[0].id].R = [];
							}
							try {
								for (var j = 0; j < matchups[i].franchise[0].player.length; j++) {
									switch (matchups[i].franchise[0].player[j].status) {
										case "starter":
											if (ls_best_lineup === 0) ls_rosters[matchups[i].franchise[0].id].S.push(matchups[i].franchise[0].player[j].id);
											else ls_rosters[matchups[i].franchise[0].id].R.push(matchups[i].franchise[0].player[j].id);
											break;
										case "nonstarter":
											if (ls_best_lineup === 0) ls_rosters[matchups[i].franchise[0].id].NS.push(matchups[i].franchise[0].player[j].id);
											else ls_rosters[matchups[i].franchise[0].id].R.push(matchups[i].franchise[0].player[j].id);
											break;
										case "taxisquad": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
											ls_rosters[matchups[i].franchise[0].id].TS.push(matchups[i].franchise[0].player[j].id);
											break;
										case "injuredreserve": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
											ls_rosters[matchups[i].franchise[0].id].IR.push(matchups[i].franchise[0].player[j].id);
											break;
									}
									if (matchups[i].franchise[0].player[j].id !== "")
										if (ls_player[matchups[i].franchise[0].player[j].id] === undefined) {
											if (_missingPlayers[_missingPlayers.length - 1].length > _missingPlayersMaxLength) _missingPlayers.push('');
											_missingPlayers[_missingPlayers.length - 1] += matchups[i].franchise[0].player[j].id + ",";
										}
								}
							} catch (er) {}
						}
						if (matchups[i].franchise[1].id !== "BYE") {
							ls_rosters[matchups[i].franchise[1].id] = {};
							ls_rosters[matchups[i].franchise[1].id].TS = [];
							ls_rosters[matchups[i].franchise[1].id].IR = [];
							if (ls_best_lineup === 0) {
								ls_rosters[matchups[i].franchise[1].id].S = [];
								ls_rosters[matchups[i].franchise[1].id].NS = [];
							} else {
								ls_rosters[matchups[i].franchise[1].id].R = [];
							}
							try {
								for (var j = 0; j < matchups[i].franchise[1].player.length; j++) {
									switch (matchups[i].franchise[1].player[j].status) {
										case "starter":
											if (ls_best_lineup === 0) ls_rosters[matchups[i].franchise[1].id].S.push(matchups[i].franchise[1].player[j].id);
											else ls_rosters[matchups[i].franchise[1].id].R.push(matchups[i].franchise[1].player[j].id);
											break;
										case "nonstarter":
											if (ls_best_lineup === 0) ls_rosters[matchups[i].franchise[1].id].NS.push(matchups[i].franchise[1].player[j].id);
											else ls_rosters[matchups[i].franchise[1].id].R.push(matchups[i].franchise[1].player[j].id);
											break;
										case "taxisquad": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
											ls_rosters[matchups[i].franchise[1].id].TS.push(matchups[i].franchise[1].player[j].id);
											break;
										case "injuredreserve": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
											ls_rosters[matchups[i].franchise[1].id].IR.push(matchups[i].franchise[1].player[j].id);
											break;
									}
									if (matchups[i].franchise[1].player[j].id !== "")
										if (ls_player[matchups[i].franchise[1].player[j].id] === undefined) {
											if (_missingPlayers[_missingPlayers.length - 1].length > _missingPlayersMaxLength) _missingPlayers.push('');
											_missingPlayers[_missingPlayers.length - 1] += matchups[i].franchise[1].player[j].id + ",";
										}
								}
							} catch (er) {}
						}
					}
				}
				if (response.weeklyResults.hasOwnProperty("franchise")) {
					//THERE MAY BE ONLY ONE FRANCHISE ON BYE SO WE NEED TO CREATE ARRAY
					var franchises = new Array();
					if (response.weeklyResults.hasOwnProperty("id"))
						franchises[0] = response.weeklyResults.franchise;
					else
						franchises = response.weeklyResults.franchise;
					//LOOP THROUGH FRANCHISES
					for (var i = 0; i < franchises.length; i++) {
						ls_games.push("BYE," + franchises[i].id);
						if (_awayTeam === "") _awayTeam = "BYE";
						if (_homeTeam === "") _homeTeam = franchises[i].id;
						if (typeof franchise_id !== "undefined") {
							if (franchise_id === franchises[i].id) {
								_awayTeam = "BYE";
								_homeTeam = franchises[i].id;
							}
						}
						if (franchises[i].id !== "BYE") {
							ls_rosters[franchises[i].id] = {};
							ls_rosters[franchises[i].id].TS = [];
							ls_rosters[franchises[i].id].IR = [];
							if (ls_best_lineup === 0) {
								ls_rosters[franchises[i].id].S = [];

								ls_rosters[franchises[i].id].NS = [];
							} else {
								ls_rosters[franchises[i].id].R = [];
							}
							try {
								for (var j = 0; j < franchises[i].player.length; j++) {
									switch (franchises[i].player[j].status) {
										case "starter":
											if (ls_best_lineup === 0) ls_rosters[franchises[i].id].S.push(franchises[i].player[j].id);
											else ls_rosters[franchises[i].id].R.push(franchises[i].player[j].id);
											break;
										case "nonstarter":
											if (ls_best_lineup === 0) ls_rosters[franchises[i].id].NS.push(franchises[i].player[j].id);
											else ls_rosters[franchises[i].id].R.push(franchises[i].player[j].id);
											break;
										case "taxisquad": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
											ls_rosters[franchises[i].id].TS.push(franchises[i].player[j].id);
											break;
										case "injuredreserve": //DOESN'T CURRENTLY EXIST IN WEEKLY RESULTS BUT HERE FOR FUTURE
											ls_rosters[franchises[i].id].IR.push(franchises[i].player[j].id);
											break;
									}
									if (franchises[i].player[j].id !== "")
										if (ls_player[franchises[i].player[j].id] === undefined) {
											if (_missingPlayers[_missingPlayers.length - 1].length > _missingPlayersMaxLength) _missingPlayers.push('');
											_missingPlayers[_missingPlayers.length - 1] += franchises[i].player[j].id + ",";
										}
								}
							} catch (er) {}
						}
					}
				}
			}
			//MAKE SURE THAT ALL HISTORICAL GAMES HAVE LS_ROSTERS DEFINED FOR EACH FRANCHISE
			for (var fidKey in franchiseDatabase) {
				if (franchiseDatabase.hasOwnProperty(fidKey) && fidKey !== "fid_0000") {
					if (!ls_rosters.hasOwnProperty(franchiseDatabase[fidKey].id)) {
						ls_rosters[franchiseDatabase[fidKey].id] = {};
						ls_rosters[franchiseDatabase[fidKey].id].TS = [];
						ls_rosters[franchiseDatabase[fidKey].id].IR = [];
						if (ls_best_lineup === 0) {
							ls_rosters[franchiseDatabase[fidKey].id].S = [];
							ls_rosters[franchiseDatabase[fidKey].id].NS = [];
						} else {
							ls_rosters[franchiseDatabase[fidKey].id].R = [];
						}
					}
				}
			}
			if (_missingPlayers[0] !== "") {
				for (var i = 0; i < _missingPlayers.length; i++) {
					fetch(`${baseURLDynamic}/${year}/export?TYPE=players&L=${league_id}&PLAYERS=${_missingPlayers[i]}&DETAILS=&SINCE&JSON=1&rand=${Math.random()}`)
						.then(function (response) {
							if (!response.ok) {
								throw new Error('Network response was not ok');
							}
							return response.json();
						})
						.then(function (playerData) {
							try { //MULTIPLE MISSING PLAYERS
								for (var i = 0; i < playerData.players.player.length; i++) {
									ls_player[playerData.players.player[i].id] = new LSPlayer(playerData.players.player[i].id, playerData.players.player[i].name, playerData.players.player[i].position, playerData.players.player[i].team, playerData.players.player[i].position);
								}
							} catch (er) { //ONE MISSING PLAYER
								ls_player[playerData.players.player.id] = new LSPlayer(playerData.players.player.id, playerData.players.player.name, playerData.players.player.position, playerData.players.player.team, playerData.players.player.position);
							}
						})
						.catch(function (error) {
							console.log('Error:', error.message);
							// Handle the error appropriately
						});
				}
			}
			ls_trigger_run = ls_trigger_run + 43;
			//console.log("ls_update_weekly_results + 43 " + ls_trigger_run); // REMOVE AFTER TESTING - CONSOLE 
		} // end ls_update_weekly_results


		////////////////////////////////////////////////////////////////////
		//                  FUNCTION - ls_update_week                     //
		////////////////////////////////////////////////////////////////////
		function ls_update_week() {
			if (liveScoringWeek < 1) var _liveScoringWeek = 1;
			else var _liveScoringWeek = liveScoringWeek;
			if (isAllPlay) {
				//NEED TO RE-BUILD LS_NFL_GAMES
				ls_nfl_games = [];
				try {
					for (var i = 0; i < reportNflByeWeeks_ar.nflByeWeeks.team.length; i++) {
						ls_nfl_games[reportNflByeWeeks_ar.nflByeWeeks.team[i].id] = [];
						ls_nfl_games[reportNflByeWeeks_ar.nflByeWeeks.team[i].id].time = 0;
						ls_nfl_games[reportNflByeWeeks_ar.nflByeWeeks.team[i].id].opp = "BYE";
					}
				} catch (er) {}

				ls_update_nfl_schedule(reportNflSchedule_ar["w_" + _liveScoringWeek]);

				//NEED TO RE-BUILD LS_GAMES
				ls_games = [];
				ls_rosters = [];
				//WE DO NOT CACHE LIVESCORINGWEEK FOR WEEKLY RESULTS
				if (ls_is_live_week || !reportWeeklyResults_ar.hasOwnProperty("w_" + _liveScoringWeek)) {
					fetch(`${baseURLDynamic}/${year}/export?TYPE=weeklyResults&L=${league_id}&W=${_liveScoringWeek}&DETAILS=1&JSON=1&rand=${Math.random()}`)
						.then(response => {
							if (!response.ok) {
								throw new Error('Network response was not ok');
							}
							return response.json();
						})
						.then(data => {
							ls_update_weekly_results_allplay(data);
						})
						.catch(error => {
							console.error('Error:', error);
						});
				} else {
					ls_update_weekly_results_allplay(reportWeeklyResults_ar["w_" + _liveScoringWeek]);
				}
			} else {
				//NEED TO RE-BUILD LS_NFL_GAMES
				ls_nfl_games = [];
				try {
					for (var i = 0; i < reportNflByeWeeks_ar.nflByeWeeks.team.length; i++) {
						ls_nfl_games[reportNflByeWeeks_ar.nflByeWeeks.team[i].id] = [];
						ls_nfl_games[reportNflByeWeeks_ar.nflByeWeeks.team[i].id].time = 0;
						ls_nfl_games[reportNflByeWeeks_ar.nflByeWeeks.team[i].id].opp = "BYE";
					}
				} catch (er) {}

				ls_update_nfl_schedule(reportNflSchedule_ar["w_" + _liveScoringWeek]);

				//NEED TO RE-BUILD LS_GAMES
				ls_games = [];
				ls_rosters = [];
				//WE DO NOT CACHE LIVESCORINGWEEK FOR WEEKLY RESULTS
				if (ls_is_live_week || !reportWeeklyResults_ar.hasOwnProperty(`w_${_liveScoringWeek}`)) {
					fetch(`${baseURLDynamic}/${year}/export?TYPE=weeklyResults&L=${league_id}&W=${_liveScoringWeek}&DETAILS=1&JSON=1&rand=${Math.random()}`)
						.then(response => {
							if (!response.ok) {
								throw new Error('Network response was not ok');
							}
							return response.json();
						})
						.then(response => {
							ls_update_weekly_results(response);
						})
						.catch(error => {
							console.error('Error:', error);
						});
				} else {
					ls_update_weekly_results(reportWeeklyResults_ar[`w_${_liveScoringWeek}`]);
				}
			}
			// Prevent updates on previous weeks
			if (!ls_is_live_week) {
				ls_timeout = 0;
				ls_update_all = 1;

				function reset_ls_timer() {
					return false;
				}
			}
			ls_create_nfl_box();
			ls_trigger_run = ls_trigger_run + 55;
			//console.log("ls_update_week + 55 " + ls_trigger_run); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_update_week


		////////////////////////////////////////////////////////////////////
		//            FUNCTION - ls_create_players_roster                 //
		////////////////////////////////////////////////////////////////////
		//FUNCTIONS USED IN NFL BOX
		var ls_players_nfl = new Array();
		var ls_players_roster = new Array();

		function ls_create_players_roster() {
			for (var key in ls_rosters) {
				if (ls_rosters.hasOwnProperty(key)) {
					try {
						for (var i = 0; i < ls_rosters[key].S.length; i++) ls_players_roster[ls_rosters[key].S[i]] = ({
							fid: key,
							status: "S",
							title: "Starter"
						});
					} catch (er) {}
					try {
						for (var i = 0; i < ls_rosters[key].NS.length; i++) ls_players_roster[ls_rosters[key].NS[i]] = ({
							fid: key,
							status: "NS",
							title: "Non-Starter"
						});
					} catch (er) {}
					try {
						for (var i = 0; i < ls_rosters[key].IR.length; i++) ls_players_roster[ls_rosters[key].IR[i]] = ({
							fid: key,
							status: "IR",
							title: "Fantasy IR"
						});
					} catch (er) {}
					try {
						for (var i = 0; i < ls_rosters[key].TS.length; i++) ls_players_roster[ls_rosters[key].TS[i]] = ({
							fid: key,
							status: "TS",
							title: "Taxi Squad"
						});
					} catch (er) {}
					try {
						for (var i = 0; i < ls_rosters[key].R.length; i++) ls_players_roster[ls_rosters[key].R[i]] = ({
							fid: key,
							status: "R",
							title: "Reserve"
						});
					} catch (er) {}
				}
			}
			ls_trigger_run = ls_trigger_run + 20;
			//console.log("ls_create_players_roster + 20 " + ls_trigger_run); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_create_players_roster


		////////////////////////////////////////////////////////////////////
		//            FUNCTION - ls_nfl_stats_popup_setup                 //
		////////////////////////////////////////////////////////////////////
		function ls_nfl_stats_popup_setup(nfl) {
			//WE NEED TO HIT PLAYER API TO GET ALL PLAYERS FOR NFL TEAM SINCE MANY ARE UNDEFINED
			if (ls_players_nfl[nfl] === undefined) {
				ls_players_nfl[nfl] = new Array();
				fetch(`${baseURLDynamic}/${year}/export?TYPE=players&L=${league_id}&PLAYERS=&DETAILS=&SINCE&JSON=1&rand=${Math.random()}`)
					.then(function (response) {
						if (response.ok) {
							return response.json();
						} else {
							throw new Error('Network response was not OK');
						}
					})
					.then(function (playerData) {
						for (var i = 0; i < playerData.players.player.length; i++) {
							if (playerData.players.player[i].team === nfl) {
								if (ls_team_pos[playerData.players.player[i].position] !== undefined) {
									ls_players_nfl[nfl][playerData.players.player[i].id] = ({
										"name": playerData.players.player[i].name,
										"position": playerData.players.player[i].position,
										"isTeam": ls_team_pos[playerData.players.player[i].position],
										"isDefense": ls_def_pos[playerData.players.player[i].position]
									});
								}
							}
							if (ls_player[playerData.players.player[i].id] === undefined) ls_player[playerData.players.player[i].id] = new LSPlayer(playerData.players.player[i].id, playerData.players.player[i].name, playerData.players.player[i].position, playerData.players.player[i].team, playerData.players.player[i].position);
						}
						ls_nfl_stats_popup(nfl);
					})
					.catch(function (error) {
						// Handle the error here
						console.error('Error:', error);
					});
			} else {
				ls_nfl_stats_popup(nfl)
			}
			//console.log("ls_nfl_stats_popup_setup"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_nfl_stats_popup_setup


		////////////////////////////////////////////////////////////////////
		//               FUNCTION - ls_nfl_stats_popup                    //
		////////////////////////////////////////////////////////////////////
		function ls_nfl_stats_popup(nfl) {
			var content_str = "";
			content_str += '<ul class="ls-popup-position-ul">';
			for (var pos in ls_team_pos) {
				content_str += '<li class="ls-popup-position-li">' + pos + '</li>';
				content_str += '<ul class="ls-popup-player-ul">';
				var position_html = [];
				for (var key in ls_players_nfl[nfl]) {
					if (ls_players_nfl[nfl].hasOwnProperty(key)) {
						if (pos === ls_players_nfl[nfl][key].position) {
							try {
								if (ls_team_pos[pos] === 1 && ls_def_pos[pos] === 1) var stats_str = get_tstats_str(nfl);
								else if (ls_team_pos[pos] === 1 && ls_def_pos[pos] !== 1) var stats_str = get_otstats_str(nfl);
								else var stats_str = get_stats_str(key);
							} catch (er) {
								var stats_str = '';
							}
							if (stats_str !== '') {
								var _points = parseFloat(update_player_points(key));
								var _name = ls_players_nfl[nfl][key].name.substr(ls_players_nfl[nfl][key].name.indexOf(",") + 2, ls_players_nfl[nfl][key].name.length) + ' ' + ls_players_nfl[nfl][key].name.substr(0, ls_players_nfl[nfl][key].name.indexOf(","));
								var _icon = '';
								var _text = '';
								if (ls_players_roster[key] !== undefined) {
									if (ls_popup_status) _name += '<span class="ls-popup-status ls-popup-status-' + ls_players_roster[key].status.toLowerCase() + '" title="' + ls_players_roster[key].title + '">' + ls_players_roster[key].status + '</span>';
									switch (ls_popup_abbrev_name_icon) {
										case 0:
											if (franchiseDatabase["fid_" + ls_players_roster[key].fid].abbrev === '') var _text = '<span class="ls-popup-text">' + franchiseDatabase["fid_" + ls_players_roster[key].fid].name + '</span>';
											else var _text = '<span class="ls-popup-text" title="' + franchiseDatabase["fid_" + ls_players_roster[key].fid].name + '">' + franchiseDatabase["fid_" + ls_players_roster[key].fid].abbrev + '</span>';
											break;
										case 1:
											var _text = '<span class="ls-popup-text">' + franchiseDatabase["fid_" + ls_players_roster[key].fid].name + '</span>';
											break;
										case 2:
											if (franchiseDatabase["fid_" + ls_players_roster[key].fid].icon === '') {
												if (franchiseDatabase["fid_" + ls_players_roster[key].fid].abbrev === '') var _text = '<span class="ls-popup-text">' + franchiseDatabase["fid_" + ls_players_roster[key].fid].name + '</span>';
												else var _text = '<span class="ls-popup-text" title="' + franchiseDatabase["fid_" + ls_players_roster[key].fid].name + '">' + franchiseDatabase["fid_" + ls_players_roster[key].fid].abbrev + '</span>';
											} else var _icon = '<span class="ls-popup-icon-wrapper"><img class="ls-popup-icon" src=' + franchiseDatabase["fid_" + ls_players_roster[key].fid].icon + ' title="' + franchiseDatabase["fid_" + ls_players_roster[key].fid].name + '" alt="" /></span>';
											break;
									}
								}
								position_html.push({
									points: _points,
									html: '<li class="ls-popup-player-li"><span class="ls-popup-points" style="cursor:pointer" title="Click to View Details" onclick="ls_explain_points(\'' + key + '\');$(\'#ls-modal-container\').addClass(\'hide-overlay\')">' + format_points(_points) + '</span> ' + _name + _icon + _text + ' <span class="ls-popup-stats">' + stats_str + '</span></li>'
								});
							}
						}
					}
				}
				//sort hi point-getter to low point-getter
				position_html.sort(function (a, b) {
					return b.points - a.points
				});
				for (var i = 0; i < position_html.length; i++) {
					content_str += position_html[i].html;
				}
				content_str += '</ul>';
			}
			content_str += '</ul>';
			$("#ls-modal-header-content").html('Live Stats for ' + nfl);
			$("#ls-modal-content").html(content_str);
			$("#ls-modal-container").attr('style', 'display:block');
			const scorespop = document.querySelector('#ls-modal-content');
			try {
				bodyScrollLock.disableBodyScroll(scorespop);
			} catch (er) {};
			$('#ls-modal-content').scrollTop(0);
			//console.log("ls_nfl_stats_popup"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_nfl_stats_popup


		////////////////////////////////////////////////////////////////////
		//               FUNCTION - ls_update_nfl_box                     //
		////////////////////////////////////////////////////////////////////
		var ls_nfl_final = 0;
		var ls_nfl_sched = 0;

		function ls_update_nfl_box() {
			for (var key in ls_nfl_games) {
				if (ls_nfl_games.hasOwnProperty(key)) {
					if (ls_nfl_games[key].where === "home") {
						//as games kickoff there is an error in game_status that breaks script so we need to error check
						try { // IGNORE ON ERROR
							var key2 = ls_nfl_games[key].opp;
							var _yardStatus = '';
							var _gameStatus = ls_nfl_games[key].game_status.substring(ls_nfl_games[key].game_status.indexOf('<br>') + 4, ls_nfl_games[key].game_status.length);
							if (_gameStatus.indexOf('<br>') !== -1) {
								_yardStatus = '<div class="ls_down_dist" style="font-size:0.563rem;font-style:italic">' + _gameStatus.substring(_gameStatus.indexOf('<br>') + 4, _gameStatus.length) + '</div>';
								_gameStatus = _gameStatus.substring(0, _gameStatus.indexOf('<br>'));
							}
							var _ptsScored_home = "";
							var _ptsScored_away = "";
							try {
								_ptsScored_home = '<span class="ls-nfl-record" style="font-size:0.625rem;font-style:italic">(' + ls_nfl_records[key].w + '-' + ls_nfl_records[key].l + '-' + ls_nfl_records[key].t + ')</span>';
							} catch (er) {}
							try {
								_ptsScored_away = '<span class="ls-nfl-record" style="font-size:0.625rem;font-style:italic">(' + ls_nfl_records[key2].w + '-' + ls_nfl_records[key2].l + '-' + ls_nfl_records[key2].t + ')</span>';
							} catch (er) {}
							if (ls_tstats.hasOwnProperty(key))
								if (ls_tstats[key].TPS !== undefined) _ptsScored_home = ls_tstats[key].TPS;
							if (ls_tstats.hasOwnProperty(key2))
								if (ls_tstats[key2].TPS !== undefined) _ptsScored_away = ls_tstats[key2].TPS;
							$(".nflgffpts_" + key).html(_ptsScored_home);
							$(".nflgffpts_" + key2).html(_ptsScored_away);
							$("#ls_nfl_box_status_" + key).removeClass('ls_nfl_box_over ls_nfl_box_sched ls_nfl_box_inprog');
							$(".ls_box_possession_" + key).removeClass('ls_nothas_ball ls_in_redzone ls_has_ball');
							$(".ls_box_possession_" + key2).removeClass('ls_nothas_ball ls_in_redzone ls_has_ball');
							if (ls_nfl_games[key].secs_left === 0 || _gameStatus === "Final") {
								$("#ls_nfl_box_status_" + key).addClass('ls_nfl_box_over');
								$(".ls_down_dist_" + key).html("");
								$(".ls_down_dist_" + key2).html("");
							} else if (ls_nfl_games[key].secs_left === 3600) {
								$("#ls_nfl_box_status_" + key).addClass('ls_nfl_box_sched');
							} else {
								$("#ls_nfl_box_status_" + key).addClass('ls_nfl_box_inprog');
								// CHECK ORIGINAL class .game_TEAMABBR FOR POSSESSION THEN APPLY TO NFL BOX
								if ($(".ls-update-box.game_" + key).hasClass("ls_noposs")) {
									$(".ls_box_possession_" + key).addClass("ls_nothas_ball");
									$(".ls_down_dist_" + key).html("");
								}
								if ($(".ls-update-box.game_" + key).hasClass("ls_redzone")) {
									$(".ls_box_possession_" + key).addClass("ls_in_redzone");
									$(".ls_down_dist_" + key).html(_yardStatus);
								}
								if ($(".ls-update-box.game_" + key).hasClass("ls_withposs")) {
									$(".ls_box_possession_" + key).addClass("ls_has_ball");
									$(".ls_down_dist_" + key).html(_yardStatus);
								}
								if ($(".ls-update-box.game_" + key2).hasClass("ls_noposs")) {
									$(".ls_box_possession_" + key2).addClass("ls_nothas_ball");
									$(".ls_down_dist_" + key2).html("");
								}
								if ($(".ls-update-box.game_" + key2).hasClass("ls_redzone")) {
									$(".ls_box_possession_" + key2).addClass("ls_in_redzone");
									$(".ls_down_dist_" + key2).html(_yardStatus);
								}
								if ($(".ls-update-box.game_" + key2).hasClass("ls_withposs")) {
									$(".ls_box_possession_" + key2).addClass("ls_has_ball");
									$(".ls_down_dist_" + key2).html(_yardStatus);
								}
							}
							$("#ls_nfl_box_status_" + key).html(_gameStatus);
							if (_gameStatus === "Final") {
								try {
									if (parseInt(ls_tstats[key].TPS) > parseInt(ls_tstats[key2].TPS)) {
										$(".nflggstat_" + key).html('<i class="fa-regular fa-caret-left" aria-hidden="true"></i>');
										$(".nflggstat_" + key).parent().addClass('winner_mark');
									} else if (parseInt(ls_tstats[key2].TPS) > parseInt(ls_tstats[key].TPS)) {
										$(".nflggstat_" + key2).html('<i class="fa-regular fa-caret-left" aria-hidden="true"></i>');
										$(".nflggstat_" + key2).parent().addClass('winner_mark');
									}
								} catch (er) {}
							}
						} catch (er) {}
					}
				}
			}
			//GAME RE-ORDER LIVE GAME / FUTURE GAME / GAME OVER
			var html_live = '';
			var html_future = '';
			var html_over = '';
			var html_other = '';
			var ls_nfl_final_temp = 0;
			var ls_nfl_sched_temp = 0;
			$("#nfl_games tr td div.ls_other_game").each(function () {
				var _homeId = $(this).attr("id").substr(5, 3);
				var html_temp = '<div id="nflg_' + _homeId + '" class="ls_other_game" style="display:inline-block;margin:0 0.125rem;min-width:6.875rem;cursor:default;width:auto">' + $(this).html() + '</div>';
				switch (ls_nfl_games[_homeId].status) {
					case "INPROG":
						html_live += html_temp;
						break;
					case "OVER":
						html_over += html_temp;
						ls_nfl_final_temp++;
						break;
					case "SCHED":
						html_future += html_temp;
						ls_nfl_sched_temp++;
						break;
					default:
						html_other += html_temp;
				}
			});
			//ONLY RE-ORDER IF NEW GAME HAS GONE FINAL OR NEW GAME HAS STARTED
			if (ls_nfl_final_temp > ls_nfl_final || ls_nfl_sched_temp < ls_nfl_sched) {
				var html = '';
				html += html_live;
				html += html_future;
				html += html_over;
				html += html_other;
				$("#nfl_games tr td").html(html);
				ls_nfl_final = ls_nfl_final_temp;
				ls_nfl_sched = ls_nfl_sched_temp;
			}
			//console.log("ls_update_nfl_box"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_update_nfl_box


		////////////////////////////////////////////////////////////////////
		//               FUNCTION - ls_create_nfl_box                     //
		////////////////////////////////////////////////////////////////////
		function ls_create_nfl_box() {
			var html = '';
			if ($("#hide_nfl_boxscore_cb").is(':checked'))
				html += '<div class="mobile-wrap ls-boxscore ls-nfl-boxscore" style="margin-top: 0.313rem;text-align:center;display:none"><div class="ls_scroller">';
			else
				html += '<div class="mobile-wrap ls-boxscore ls-nfl-boxscore" style="margin-top: 0.313rem;text-align:center"><div class="ls_scroller">';
			html += '<table id="nfl_games" style="table-layout:fixed;font-size:0.813rem" border="0" cellpadding="0" cellspacing="2"><tbody><tr><td>';
			//GAME ORDER LIVE GAME / FUTURE GAME / GAME OVER
			var html_live = '';
			var html_future = '';
			var html_over = '';
			var html_other = '';
			for (var key in ls_nfl_games) {
				if (ls_nfl_games.hasOwnProperty(key)) {
					if (ls_nfl_games[key].where === "home") {
						var key2 = ls_nfl_games[key].opp;
						var html_temp = '';
						html_temp += '<div id="nflg_' + key + '" class="ls_other_game" style="display:inline-block;margin:0 0.125rem;min-width:6.875rem;cursor:default;width:auto">';
						html_temp += '<table border="0" cellspacing="0" cellpadding="0">';
						html_temp += '<tbody>';
						html_temp += '<tr onclick="ls_nfl_stats_popup_setup(\'' + key2 + '\')" title="Live Stats for ' + key2 + '"><td style="position:relative;height:1.375rem" class="ls_og_cell ls_box_possession ls_box_possession_' + key2 + '"><img src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + key2 + '.svg" class="ls_nfl_box_icon" style="height:1.875rem;max-width:1.25rem;max-height:1.25rem;" alt="' + key2 + '" title="' + key2 + '" /><span class="ls-update-box game_' + key2 + '" style="display:none"></span></td><td style="font-size:0.563rem;font-style:italic;text-align:left" class="ls_down_dist_' + key2 + '"></td><td align="right" style="border:none;"><div class="nflgffpts nflgffpts_' + key2 + '">0</div></td><td style="border:none;"><div style="width:0.125rem" class="nflggstat nflggstat_' + key2 + '"></div></td></tr>';
						html_temp += '<tr onclick="ls_nfl_stats_popup_setup(\'' + key + '\')" title="Live Stats for ' + key + '"><td style="position:relative;height:1.375rem" class="ls_og_cell ls_box_possession ls_box_possession_' + key + '"><img src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + key + '.svg" class="ls_nfl_box_icon" style="height:1.875rem;max-width:1.25rem;max-height:1.25rem;" alt="' + key + '" title="' + key + '" /><span class="ls-update-box game_' + key + '" style="display:none"></span></td><td style="font-size:0.563rem;font-style:italic;text-align:left" class="ls_down_dist_' + key + '"></td><td align="right" style="border:none;"><div class="nflgffpts nflgffpts_' + key + '">0</div></td><td style="border:none;"><div style="width:0.125rem" class="nflggstat nflggstat_' + key + '"></div></td></tr>';
						html_temp += '<tr><td class="ls_og_cell_status" colspan="4" style="height:1rem"><span id="ls_nfl_box_status_' + key + '" class="ls_nfl_box_status" style="font-size:0.688rem">Gametime</span></td></tr>';
						html_temp += '</tbody>';
						html_temp += '</table>';
						html_temp += '</div>';
						switch (ls_nfl_games[key].status) {
							case "INPROG":
								html_live += html_temp;
								break;
							case "OVER":
								html_over += html_temp;
								ls_nfl_final++;
								break;
							case "SCHED":
								html_future += html_temp;
								ls_nfl_sched++;
								break;
							default:
								html_other += html_temp;
						}
					}
				}
			}
			html += html_live;
			html += html_future;
			html += html_over;
			html += html_other;
			html += '</td></tr></tbody></table>';
			html += '</div>';
			$(".settings-mobile-wrap").after(html);
			ls_trigger_run = ls_trigger_run + 8;
			//console.log("ls_create_nfl_box + 8 "  + ls_trigger_run); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_create_nfl_box


		////////////////////////////////////////////////////////////////////
		//               FUNCTION - ls_explain_points                     //
		////////////////////////////////////////////////////////////////////
		function ls_explain_points(pid) {
			//$("#ls-modal-container").addClass('hide-overlay');
			var html = '';
			var pos = ls_player[pid].pos;
			if (ls_includeProjections) {
				var gsr = isNaN(ls_nfl_games[ls_player[pid].nfl_team].secs_left) ? 0 : ls_nfl_games[ls_player[pid].nfl_team].secs_left;
				var proj = isNaN(parseFloat(ls_projections['pid_' + pid])) ? 0 : parseFloat(ls_projections['pid_' + pid]);
			}
			var pts = 0;
			ls_explain = "";
			if (ls_team_pos[pos] === 1) {
				var nfl_team = ls_player[pid].nfl_team;
				if (ls_tstats[nfl_team] !== undefined) {
					points = score_player(nfl_team, pos);
				}
			} else if (ls_team_pos[pos] === 0 && ls_stats[pid] !== undefined) {
				points = score_player(pid, pos);
			}
			html += '<div class="ls-explain-points-wrapper" style="padding-left:2.5rem"><div class="ls-explain-points-name" style="font-size:0.875rem;margin-left:-1.25rem;padding-bottom:0.5rem;font-weight:bold">' + ls_player[pid].name + " " + ls_player[pid].nfl_team + " " + ls_player[pid].pos + '</div>';
			if (ls_explain !== "") {
				html += '<ul class="ls-explain-points-ul">';
				var stats = ls_explain.split("|");
				for (i = 0; i < stats.length; i++) {
					if (stats[i] !== "") {
						var fields = stats[i].split(",");
						try {
							pts += parseFloat(fields[2]);
						} catch (er) {}
						html += '<li class="ls-explain-points-li">' + fields[2] + " points for " + fields[1] + " ";
						if (ls_cat_desc[fields[0]] !== undefined) {
							html += ls_cat_desc[fields[0]];
						} else {
							html += fields[0];
						}
						html += "</li>";
					}
				}
				html += '</ul>';
				html += '<div class="ls-explain-points-total" style="font-size:1rem;margin-left:-1.25rem;padding-top:0.5rem;font-weight:bold">' + format_points(pts) + '</div>';
			} else {
				html += '<div class="ls-explain-no-stats">No stats</div>';
			}
			if (ls_includeProjections) {
				var pace = pts + ((gsr / 3600) * proj);
				if ($('input[name="hide_projections"]').is(':checked'))
					html += '<div class="ls_projections" style="display:none">';
				else
					html += '<div class="ls_projections">';
				html += '<hr style="margin:0.625rem 0.313rem 0.625rem -2.25rem;border-color:#555">';
				if (gsr === 3600)
					html += '<div class="ls-explain-points-orig-proj" style="font-size:0.75rem;margin-left:-1.25rem;padding-top:0.25rem;font-weight:bold"><span style="display:inline-block;min-width:5.625rem;text-align:right">Original Proj :</span><span style="display:inline-block;text-align:right;min-width:2.75rem">' + format_points(proj) + '</span></div>';
				else if (gsr === 0) {
					html += '<div class="ls-explain-points-orig-proj" style="font-size:0.75rem;margin-left:-1.25rem;padding-top:0.25rem;font-weight:bold"><span style="display:inline-block;min-width:5.625rem;text-align:right">Original Proj :</span><span style="display:inline-block;text-align:right;min-width:2.75rem">' + format_points(proj) + '</span></div>';
					if ((pts - proj) < 0)
						html += '<div class="ls-explain-points-diff" style="font-size:0.75rem;margin-left:-1.25rem;padding-top:0.25rem;font-weight:bold"><span style="display:inline-block;min-width:5.625rem;text-align:right">Difference :</span><span class="ls_below_projected" style="display:inline-block;text-align:right;min-width:2.75rem">' + format_points(pts - proj) + '</span></div>';
					else
						html += '<div class="ls-explain-points-diff" style="font-size:0.75rem;margin-left:-1.25rem;padding-top:0.25rem;font-weight:bold"><span style="display:inline-block;min-width:5.625rem;text-align:right">Difference :</span><span class="ls_above_projected" style="display:inline-block;text-align:right;min-width:2.75rem">+' + format_points(pts - proj) + '</span></div>';
				} else {
					html += '<div class="ls-explain-points-orig-proj" style="font-size:0.75rem;margin-left:-1.25rem;padding-top:0.25rem;font-weight:bold"><span style="display:inline-block;min-width:5.625rem;text-align:right">Original Proj :</span><span style="display:inline-block;text-align:right;min-width:2.75rem">' + format_points(proj) + '</span></div>';
					html += '<div class="ls-explain-points-pace" style="font-size:0.75rem;margin-left:-1.25rem;padding-top:0.25rem;font-weight:bold"><span style="display:inline-block;min-width:5.625rem;text-align:right">Pace Points :</span><span style="display:inline-block;text-align:right;min-width:2.75rem">' + format_points(pace) + '</span></div>';
					if ((pace - proj) < 0)
						html += '<div class="ls-explain-points-diff" style="font-size:0.75rem;margin-left:-1.25rem;padding-top:0.25rem;font-weight:bold"><span style="display:inline-block;min-width:5.625rem;text-align:right">Difference :</span><span class="ls_below_projected" style="display:inline-block;text-align:right;min-width:2.75rem">' + format_points(pace - proj) + '</span></div>';
					else
						html += '<div class="ls-explain-points-diff" style="font-size:0.75rem;margin-left:-1.25rem;padding-top:0.25rem;font-weight:bold"><span style="display:inline-block;min-width:5.625rem;text-align:right">Difference :</span><span class="ls_above_projected" style="display:inline-block;text-align:right;min-width:2.75rem">+' + format_points(pace - proj) + '</span></div>';
				}
				html += '</div>';
			}
			html += '</div>';

			$("#ls-modal-container-2 #ls-modal-header-content").html('Points Breakdown');
			$("#ls-modal-container-2 #ls-modal-content").html(html);
			$("#ls-modal-container-2").attr('style', 'display:block');
			const scorespop = document.querySelector('#ls-modal-content');
			try {
				bodyScrollLock.disableBodyScroll(scorespop);
			} catch (er) {};
			$('#ls-modal-container-2 #ls-modal-content').scrollTop(0);
			//console.log("ls_explain_points"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_explain_points


		////////////////////////////////////////////////////////////////////
		//               FUNCTION - triggerLiveScoring                    //
		////////////////////////////////////////////////////////////////////
		function triggerLiveScoring() {
			triggerLiveScoring_ran = true;
			if (ls_includeInjuryStatus) ls_parse_injuries(); //ONLY PARSE INJURIES IF ENABLED
			if (ls_includeProjections) ls_parse_projections(); //ONLY PARSE PROJECTIONS IF ENABLED
			if (ls_is_live_week) {
				ls_update_nfl_records(); //ONE TIME CALL TO CREATE NFL RECORDS FOR NFL BOX SCORE
				if (ls_excludeIR) ls_removeIR(); // NEED TO REMOVE PLAYER ON FANTASY IR, IF SET, ON INITIAL LOAD
				if (ls_excludeTaxi) ls_removeTaxi(); // NEED TO REMOVE PLAYER ON TAXI, IF SET, ON INITIAL LOAD
				ls_create_nfl_box();
			} else {
				ls_update_week();
			}
			// Stop highlight on initial page load
			setTimeout("clear_highlights()", 500);
			ls_create_players_roster();

			if (!ls_includeInjuryStatus && !ls_includeProjections) {
				ls_trigger_run = ls_trigger_run + 49;
			} else if (!ls_includeInjuryStatus) {
				ls_trigger_run = ls_trigger_run + 35;
			} else if (!ls_includeProjections) {
				ls_trigger_run = ls_trigger_run + 32;
			} else {
				ls_trigger_run = ls_trigger_run + 18;
			}
			//console.log("triggerLiveScoring + 18 "  + ls_trigger_run); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end triggerLiveScoring


		////////////////////////////////////////////////////////////////////
		//            FUNCTION - liveScoringListenerCheck                 //
		////////////////////////////////////////////////////////////////////
		function liveScoringListenerCheck() {
			if (largeLeagueSB) {
				triggerLiveScoring_count++;
				if (typeof reportDailyFullyLoaded !== "undefined") {
					if (reportFiveMinuteFullyLoaded && reportDailyFullyLoaded) {
						clearInterval(liveScoringListener);
						if (!triggerLiveScoring_ran) triggerLiveScoring();
					}
				}
				if (triggerLiveScoring_count > 50) {
					clearInterval(liveScoringListener);
					console.log("Stop trying Replace Live Scoring after 5 seconds");
					listenerCleared = true;
					$('.ls_loading_message').removeClass('ls_loading_message').addClass('ls_loading_message_offseason');
					$('.ls_loading_message_offseason').replaceWith('<h3 id="ls_error" class="warning h3-menu" style="max-width:31.25rem"><span style="font-size:1.75rem;display:block;text-align:center">Live Scoring has failed to load.</span><br><span style="font-size:1.25rem;display:block;text-align:center">There are 2 different reasons why this has happened.</span><br><span style="font-size:0.875rem;display:block;text-align:left">1. You have accessed this page during the offseason. MFL does not display Live Scores after the season has ended or up to 24 hours before kickoff of week 1 games.</span><br><span style="font-size:0.875rem;display:block;text-align:left">2. The scoring has failed to load for some other reason. Please contact your commissioner or see the MFL support thread located <a href="http://forums.myfantasyleague.com/forums/index.php?showtopic=38170" target="_blank">HERE</a></span></h3>');
					clearInterval(errorMsgCk, errorClassCk, listenerCk);
				}
			} else {
				triggerLiveScoring_count++;
				if (typeof reportDailyFullyLoaded !== "undefined") {
					if (reportFiveMinuteFullyLoaded && reportDailyFullyLoaded) {
						clearInterval(liveScoringListener);
						if (!triggerLiveScoring_ran) triggerLiveScoring();
					}
				}
				if (triggerLiveScoring_count > 200) {
					clearInterval(liveScoringListener);
					console.log("Stop trying Replace Live Scoring after 5 seconds");
					listenerCleared = true;
					$('.ls_loading_message').removeClass('ls_loading_message').addClass('ls_loading_message_offseason');
					$('.ls_loading_message_offseason').replaceWith('<h3 id="ls_error" class="warning h3-menu" style="max-width:31.25rem"><span style="font-size:1.75rem;display:block;text-align:center">Live Scoring has failed to load.</span><br><span style="font-size:1.25rem;display:block;text-align:center">There are 2 different reasons why this has happened.</span><br><span style="font-size:0.875rem;display:block;text-align:left">1. You have accessed this page during the offseason. MFL does not display Live Scores after the season has ended or up to 24 hours before kickoff of week 1 games.</span><br><span style="font-size:0.875rem;display:block;text-align:left">2. The scoring has failed to load for some other reason. Please contact your commissioner or see the MFL support thread located <a href="http://forums.myfantasyleague.com/forums/index.php?showtopic=38170" target="_blank">HERE</a></span></h3>');
					clearInterval(errorMsgCk, errorClassCk, listenerCk);
				}
			}
		} // end liveScoringListenerCheck


		////////////////////////////////////////////////////////////////////
		//                  FUNCTION - ls_setup_html                      //
		////////////////////////////////////////////////////////////////////	
		function ls_setup_html() {
			if (isAllPlay) {
				// MFL Live Scoring Page Formatting
				$('h4:first').remove();
				$('#other_games').wrap('<div class="mobile-wrap ls-boxscore"></div>');
				$('.ls-boxscore #other_games').wrap('<div class="ls_scroller"></div>');
				$('table').has('div.ls-boxscore').addClass('ls-outer-table');
				$('.ls-outer-table').css('margin-top', '0.313rem');
				$('td.mobile-view[valign="middle"]').removeClass().addClass('td-boxscore').unwrap().wrap('<tr></tr>');
				$('td.mobile-view').wrap('</tr><tr class="ls_players_table"></tr>');
				$('td.mobile-view').wrapInner('<div class="mobile-wrap ls-matchup"></div>');
				$('p').wrapAll('<div class="mobile-wrap ls-btm-table"></div>');
				$('div.mobile-wrap > table.ls-outer-table').unwrap();
				$('.ls_marquee_label:contains("Playing")').addClass('playing').text('P');
				$('.ls_marquee_label:contains("Yet"):contains("to"):contains("Play")').addClass('ytp').text('YTP');
				$('.ls_marquee_label:contains("Minutes"):contains("Remaining")').addClass('pmr').text('PMR');
			} else {
				// MFL Live Scoring Page Formatting
				$('h4:first').remove();
				$('#other_games').wrap('<div class="mobile-wrap ls-boxscore"></div>');
				$('.ls-boxscore #other_games').wrap('<div class="ls_scroller"></div>');
				$('table').has('div.ls-boxscore').addClass('ls-outer-table');
				$('.ls-outer-table').css('margin-top', '0.313rem');
				$('td.mobile-view').wrapInner('<div class="mobile-wrap ls-matchup"></div>');
				$('td').has('div.ls-boxscore').css({
					"padding": "0",
					"text-align": "center"
				});
				$('div.mobile-wrap:first table:first').unwrap();
				$('p').wrapAll('<div class="mobile-wrap ls-btm-table"></div>');
				$('div.mobile-wrap > table.ls-outer-table').unwrap();
				$('.ls_marquee_label:contains("Playing")').addClass('playing').text('P');
				$('.ls_marquee_label:contains("Yet"):contains("to"):contains("Play")').addClass('ytp').text('YTP');
				$('.ls_marquee_label:contains("Minutes"):contains("Remaining")').addClass('pmr').text('PMR');
			}
			// REMEMBER CHECK BOX FOR NFL BOXSCORES
			if (localStorage["ls_includeNFLBox_" + league_id] === "1") $("#hide_ticker_cb").parent().append(' | <input type="checkbox" name="hide_nfl_boxscore" checked="checked" id="hide_nfl_boxscore_cb" onclick="ls_hide_nfl_boxscore(this)"> Hide NFL');
			else $("#hide_ticker_cb").parent().append(' | <input type="checkbox" name="hide_nfl_boxscore" id="hide_nfl_boxscore_cb" onclick="ls_hide_nfl_boxscore(this)"> Hide NFL');
			// REMEMBER CHECKBOX FOR PROJECTIONS
			if (ls_includeProjections) {
				if (localStorage["ls_includeProjections_" + league_id] === "1") $("#hide_ticker_cb").parent().append(' | <input type="checkbox" name="hide_projections" checked="checked" id="hide_projections_cb" onclick="ls_hide_projections(this)"> Hide Pace');
				else $("#hide_ticker_cb").parent().append(' | <input type="checkbox" name="hide_projections" id="hide_projections_cb" onclick="ls_hide_projections(this)"> Hide Pace');
			}
			$('<div id="ls_setting_drop"><div class="settings-mobile-wrap"><div class="ls_setting_container"><span class="ls_toggle_settings" style="cursor:pointer;font-size:1rem;padding-left:0.313rem;width:100%;display:block;"><i class="fa-regular fa-gears" aria-hidden="true"></i> Settings</span><div class="ls_append_input" style="display:none;margin-left:0.313rem"></div></div></div></div>').insertBefore('.ls-outer-table');
			$('input#hide_nonstarters_cb').wrap('<div class="hide_bench"></div>').after('<label for="hide_nonstarters_cb">Bench</label>');
			$('input#hide_game_info_cb').wrap('<div class="hide_bench"></div>').after('<label for="hide_game_info_cb">Games</label>');
			$('input#hide_stats_cb').wrap('<div class="hide_bench"></div>').after('<label for="hide_stats_cb">Stats</label>');
			$('input#hide_ticker_cb').wrap('<div class="hide_bench"></div>').after('<label for="hide_ticker_cb">Ticker</label>');
			$('input#hide_nfl_boxscore_cb').wrap('<div class="hide_bench" id="ls_nfl_boxscore_wrapper"></div>').after('<label for="hide_nfl_boxscore_cb">NFL</label>');
			if (ls_includeProjections) $('input#hide_projections_cb').wrap('<div class="hide_bench" id="ls_pace_wrapper"></div>').after('<label for="hide_projections_cb">Pace</label>');
			$('.hide_bench').appendTo('.ls_append_input');
			$('#ls_setting_drop .ls_toggle_settings').on("click", function () {
				$(".ls_append_input").slideToggle('500');
			});
			// Toggle class when player stats not selected to remove padding
			$('input[name="hide_stats"]').on("click", function () {
				$('#roster_away td, #roster_home td').toggleClass('td-pad');
			});
			// Move MFL page bottom notes to live ticker table
			$('<div id="ls_mfl_notes"><div class="ls_update_msg" style="display:inline;text-align:center">Data last updated on: </div> , stats will update roughly every 40 seconds while games are in progress.<br>Stats are unofficial and subject to change. Official results can be viewed on <a href="' + baseURLDynamic + '/' + year + '/options?L=' + league_id + '&O=22" target="_blank">Weekly Results</a></div>').insertAfter('#ls_ticker_tab_id');
			if (ls_orig_proj_when_final) $('#ls_mfl_notes').append('<br><span class="ls_projections ls_pace_legend"><span class="ls_pace_legend_title" style="padding:0 0.188rem">Pace Legend:</span><span class="ls_above_projected" style="padding:0 0.188rem">Above Projected</span><span class="ls_below_projected" style="padding:0 0.188rem">Below Projected</span><span class="ls_at_projected" style="padding:0 0.188rem">At Projected</span><span class="ls_projected" style="padding:0 0.188rem">Original Projection</span></span>');
			$('#last_update').appendTo('.ls_update_msg');
			$('div.ls-btm-table').remove();
			$('tr').has('.ls-matchup').addClass('ls_players_table');
			if (isAllPlay) {
				$('<tr><td id="LS_TopTableHolder"><div class="mobile-wrap"><table class="LS_MainScoreboard" style="table-layout:fixed"><tbody><tr><td colspan="2" rowspan="2" id="LS_CenterTop">Live Scoring</td><td colspan="3" id="LS_HomeTeamName"></td></tr><tr><td colspan="3" id="LS_HomeTeamRecord">0-0-0</td></tr><tr><td colspan="2" rowspan="2" id="LS_HomeScore"></td><td class="LS_ScoreboardTitle" title="Player Minutes Remaining">PMR</td><td class="LS_ScoreboardTitle" title="Players Yet to Play">YTP</td><td class="LS_ScoreboardTitle" title="Players Currently Playing">P</td></tr><tr><td id="LS_HomePMR" class="prmin" title="Player Minutes Remaining"></td><td id="LS_HomeYTP" class="prmin" title="Players Yet to Play"></td><td id="LS_HomePlayers" class="prmin" title="Players Currently Playing"></td></tr></tbody></table></div></td></tr>').insertBefore('.ls_players_table');
			} else if ($("#winprob_home").length && ls_show_win_probability && (liveScoringWeek >= real_ls_week)) {
				$('<tr><td id="LS_TopTableHolder" colspan="2"><div class="mobile-wrap"><table class="LS_MainScoreboard" style="table-layout:fixed"><tbody><tr><td id="LS_AwayTeamName" class="ls-bye-hide"></td><td colspan="6" rowspan="3" id="LS_CenterTop" class="ls-bye-hide"><span class="hometeam ls-bye-hide">% WIN HOME</span><span class="awayteam ls-bye-hide">AWAY WIN %</span></td><td id="LS_HomeTeamName"></td></tr><tr><td id="LS_AwayTeamRecord" class="ls-bye-hide">0-0-0</td><td id="LS_HomeTeamRecord">0-0-0</td></tr><tr id="TeamWinPctRow"><td id="LS_AwayTeamPercent" class="ls-bye-hide"><span class="wp_bar" style="position:relative;display:block"><span style="display:inline-block;margin-left:0.313rem"></span>0%</span></td><td id="LS_HomeTeamPercent"><span class="wp_bar" style="position:relative;display:block"><span style="display:inline-block;margin-left:0.313rem"></span>0%</div></span></td></tr><tr><td rowspan="2" id="LS_AwayScore" class="ls-bye-hide"></td><td class="LS_ScoreboardTitle ls-bye-hide" title="Players Currently Playing">P</td><td class="LS_ScoreboardTitle ls-bye-hide" title="Players Yet to Play">YTP</td><td class="LS_ScoreboardTitle ls-bye-hide" title="Player Minutes Remaining">PMR</td><td class="LS_ScoreboardTitle" title="Player Minutes Remaining">PMR</td><td class="LS_ScoreboardTitle" title="Players Yet to Play">YTP</td><td class="LS_ScoreboardTitle" title="Players Currently Playing">P</td><td rowspan="2" id="LS_HomeScore"></td></tr><tr><td id="LS_AwayPlayers" class="prmin ls-bye-hide" title="Players Currently Playing"></td><td id="LS_AwayYTP" class="prmin ls-bye-hide" title="Players Yet to Play"></td><td id="LS_AwayPMR" class="prmin ls-bye-hide" title="Player Minutes Remaining"></td><td id="LS_HomePMR" class="prmin" title="Player Minutes Remaining"></td><td id="LS_HomeYTP" class="prmin" title="Players Yet to Play"></td><td id="LS_HomePlayers" class="prmin" title="Players Currently Playing"></td></tr></tbody></table></div></td></tr>').insertBefore('.ls_players_table');
			} else {
				$('<tr><td id="LS_TopTableHolder" colspan="2"><div class="mobile-wrap"><table class="LS_MainScoreboard" style="table-layout:fixed"><tbody><tr><td id="LS_AwayTeamName" class="ls-bye-hide"></td><td colspan="6" rowspan="2" id="LS_CenterTop" class="ls-bye-hide"><span class="hometeam ls-bye-hide">HOME</span><span class="awayteam ls-bye-hide">AWAY</span></td><td id="LS_HomeTeamName"></td></tr><tr><td id="LS_AwayTeamRecord" class="ls-bye-hide">0-0-0</td><td id="LS_HomeTeamRecord">0-0-0</td></tr><tr><td rowspan="2" id="LS_AwayScore" class="ls-bye-hide"></td><td class="LS_ScoreboardTitle ls-bye-hide" title="Players Currently Playing">P</td><td class="LS_ScoreboardTitle ls-bye-hide" title="Players Yet to Play">YTP</td><td class="LS_ScoreboardTitle ls-bye-hide" title="Player Minutes Remaining">PMR</td><td class="LS_ScoreboardTitle" title="Player Minutes Remaining">PMR</td><td class="LS_ScoreboardTitle" title="Players Yet to Play">YTP</td><td class="LS_ScoreboardTitle" title="Players Currently Playing">P</td><td rowspan="2" id="LS_HomeScore"></td></tr><tr><td id="LS_AwayPlayers" class="prmin ls-bye-hide" title="Players Currently Playing"></td><td id="LS_AwayYTP" class="prmin ls-bye-hide" title="Players Yet to Play"></td><td id="LS_AwayPMR" class="prmin ls-bye-hide" title="Player Minutes Remaining"></td><td id="LS_HomePMR" class="prmin" title="Player Minutes Remaining"></td><td id="LS_HomeYTP" class="prmin" title="Players Yet to Play"></td><td id="LS_HomePlayers" class="prmin" title="Players Currently Playing"></td></tr></tbody></table></div></td></tr>').insertBefore('.ls_players_table');
			}
			if (isAllPlay) {
				$('#LS_TopTableHolder #LS_HomeTeamName').append($('#ficon_home'));
				$('#LS_TopTableHolder #LS_HomeTeamName').append($('#fname_home'));
				$('#LS_TopTableHolder #LS_HomeScore').append($('#ffpts_home'));
				$('#LS_TopTableHolder #LS_HomePlayers').append($('#playing_home'));
				$('#LS_TopTableHolder #LS_HomeYTP').append($('#ytp_home'));
				$('#LS_TopTableHolder #LS_HomePMR').append($('#pmr_home'));
				if (ls_scoreboardName) {
					$("#LS_CenterTop").html(ls_scoreboardName);
				}
				if ($('#LS_HomeTeamRecord:empty')) {
					$('#LS_HomeTeamRecord').closest('tr').remove();
					$('#LS_CenterTop').attr('rowspan', '1');
				}
			} else {
				$('#LS_TopTableHolder #LS_AwayTeamName').append($('#ficon_away'));
				$('#LS_TopTableHolder #LS_HomeTeamName').append($('#ficon_home'));
				$('#LS_TopTableHolder #LS_AwayTeamName').append($('#fname_away'));
				$('#LS_TopTableHolder #LS_HomeTeamName').append($('#fname_home'));
				$('#LS_TopTableHolder #LS_AwayScore').append($('#ffpts_away'));
				$('#LS_TopTableHolder #LS_HomeScore').append($('#ffpts_home'));
				$('#LS_TopTableHolder #LS_AwayPlayers').append($('#playing_away'));
				$('#LS_TopTableHolder #LS_HomePlayers').append($('#playing_home'));
				$('#LS_TopTableHolder #LS_AwayYTP').append($('#ytp_away'));
				$('#LS_TopTableHolder #LS_HomeYTP').append($('#ytp_home'));
				$('#LS_TopTableHolder #LS_AwayPMR').append($('#pmr_away'));
				$('#LS_TopTableHolder #LS_HomePMR').append($('#pmr_home'));

				$('#LS_AwayTeamName,#LS_AwayTeamRecord,#LS_AwayScore').on("click", function () {
					$('.ls_players_table td.mobile-view:last-of-type').css("display", "none");
					$('.ls_players_table td.mobile-view:first-of-type').css("display", "table-cell");
					$('#LS_AwayTeamName div').css("opacity", "1");
					$('#LS_HomeTeamName div').css("opacity", ".3");
				});
				$('#LS_HomeTeamName,#LS_HomeTeamRecord,#LS_HomeScore').on("click", function () {
					$('.ls_players_table td.mobile-view:first-of-type').css("display", "none");
					$('.ls_players_table td.mobile-view:last-of-type').css("display", "table-cell");
					$('#LS_HomeTeamName div').css("opacity", "1");
					$('#LS_AwayTeamName div').css("opacity", ".3");
				});
				if (ls_scoreboardName) {
					$("#LS_CenterTop").html("<span class='hometeam ls-bye-hide'>HOME</span><span class='awayteam ls-bye-hide'>AWAY</span>" + ls_scoreboardName);
				}
			}

			if (ls_show_win_probability) {
				$('#LS_TopTableHolder #LS_AwayTeamPercent span').html($('#winprob_away'));
				$('#LS_TopTableHolder #LS_HomeTeamPercent span').html($('#winprob_home'));
			}

			if (!showTeamName) {
				$("#fname_away,#fname_home").css('display', 'none');
			}
			if (!showTeamIcon) {
				$("#ficon_away,#ficon_home").css('display', 'none');
			}
			//SIMPLE MODAL
			$("body").append('<div id="ls-modal-container" class="ls-modal"><div class="ls-modal-content"><div class="ls-modal-header"><span class="close" onclick="$(\'#ls-modal-container\').removeAttr(\'style\');const scorespop = document.querySelector(\'#ls-modal-content\');try{bodyScrollLock.enableBodyScroll(scorespop);}catch(er){}">X</span><h2 id="ls-modal-header-content"></h2></div><div class="ls-modal-body"><p id="ls-modal-content"></p></div></div></div><div id="ls-modal-container-2" class="ls-modal"><div class="ls-modal-content"><div class="ls-modal-header"><span class="close" onclick="if($(\'.hide-overlay\').is(\':visible\')){}else{const scorespop = document.querySelector(\'#ls-modal-content\');try {bodyScrollLock.enableBodyScroll(scorespop);} catch(er) {};};$(\'#ls-modal-container-2\').removeAttr(\'style\');$(\'#ls-modal-container\').removeClass(\'hide-overlay\')">X</span><h2 id="ls-modal-header-content"></h2></div><div class="ls-modal-body"><p id="ls-modal-content"></p></div></div></div>');

			$("#ls-modal-container").on("click", function () {
				$("#ls-modal-container").css('display', 'none');
				const scorespop = document.querySelector('#ls-modal-content');
				try {
					bodyScrollLock.enableBodyScroll(scorespop);
				} catch (er) {};
			});
			$("#ls-modal-container-2").on("click", function () {
				if ($('.hide-overlay').is(':visible')) {
					//DO NOTHING
				} else {
					const scorespop = document.querySelector('#ls-modal-content');
					try {
						bodyScrollLock.enableBodyScroll(scorespop);
					} catch (er) {};
				}
				$("#ls-modal-container-2").css('display', 'none');
				$('#ls-modal-container').removeClass('hide-overlay');
			});

			$(".ls-modal-content").on("click", function (e) {
				e.stopPropagation();
			});
			ls_trigger_run = ls_trigger_run + 21;
			//console.log("ls_setup_html + 21 " + ls_trigger_run); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_setup_html


		////////////////////////////////////////////////////////////////////
		//            REWRITE MFL FUNCTION - update_scores                //
		////////////////////////////////////////////////////////////////////
		update_scores = (function () {
			var cached_function = update_scores;
			return function () {
				cached_function.apply(this, arguments);
				if (ls_onSwitch) {
					ls_after_update_scores();
				}
			};
		}()); // end update_scores


		////////////////////////////////////////////////////////////////////
		//            REWRITE MFL FUNCTION - init_marquee                 //
		////////////////////////////////////////////////////////////////////
		function init_marquee(which, fid) {
			var fidkey = "fid_" + fid;
			var icon = "";
			if (fid === 'BYE' || fid === 'AVG') {
				if (fid == 'BYE') {
					load_elem("fname_" + which, "BYE");
					update_field("ffpts_" + which, "&nbsp;");
				} else {
					load_elem("fname_" + which, "Average");
					ls_avg_field = "ffpts_" + which;
					ls_do_avg = 1;
					update_field(ls_avg_field, "&nbsp;");
				}
				load_elem("ficon_" + which, "&nbsp;");
				update_field("playing_" + which, "&nbsp;");
				update_field("ytp_" + which, "&nbsp;");
				update_field("pmr_" + which, "&nbsp;");
			} else if (franchiseDatabase[fidkey].icon != undefined) {
				if (franchiseDatabase[fidkey].icon.length > 1) {
					icon = '<img src="' + franchiseDatabase[fidkey].icon +
						'" ' + ls_icon_dim + ' id="franchiseicon_' + fid +
						'" class="franchiseicon" />';
				}
				load_elem("ficon_" + which, icon);
				load_elem("fname_" + which, franchiseDatabase[fidkey].name);
				if (which === "away") {
					load_elem("LS_AwayTeamRecord", ls_records[fid]);
				}
				if (which === "home") {
					load_elem("LS_HomeTeamRecord", ls_records[fid]);
				}
				update_field("ffpts_" + which, format_points(ls_fran_totals[fid].total));
				update_field("playing_" + which, ls_fran_totals[fid].playing);
				update_field("ytp_" + which, ls_fran_totals[fid].ytp);
				update_field("pmr_" + which, format_time_rem(ls_fran_totals[fid].pmr));
				//update_field("proj_" + which, ls_fran_totals[fid].proj);
			}
		} // end init_marquee


		////////////////////////////////////////////////////////////////////
		//         REWRITE MFL FUNCTION - update_game_status              //
		////////////////////////////////////////////////////////////////////
		function update_game_status(team) {
			var opp = ls_nfl_games[team].opp;
			if (liveScoringWeek < 1) var _liveScoringWeek = 1;
			else var _liveScoringWeek = liveScoringWeek;
			var game_status = '<table style="border:0!important;border-spacing:0;box-shadow:none!important;padding:0;width:auto;margin:0 auto"><tbody>';
			var poss_class = "";
			var custom_game_status_class = ""; //NEW ADDITION HERE AND ALL OCCURRENCES BELOW
			var custom_is_half = false; //NEW ADDITION HERE AND ALL OCCURRENCES BELOW
			if (ls_nfl_games[team].time === 0) {
				game_status = '<table style="border:0!important;border-spacing:0;box-shadow:none!important;padding:0;margin:0;width:100%"><tbody><tr><td style="text-align:center;border:0!important;padding:0;margin:0;box-shadow:none!important">BYE</td></tr></tbody></table>';
				ls_nfl_games[team].secs_left = 0;
				ls_nfl_games[team].status = "BYE";
				custom_game_status_class = "no_stats";
			} else if (ls_nfl_games[team].time > ls_last_update_secs) {
				if (ls_nfl_games[team].where === 'away') {
					game_status = game_status + '<tr><td style="border:0!important;padding:0;margin:0;box-shadow:none!important;width:1.5rem;height:1.25rem;text-align:right"><img style="margin:0;max-height:1.25rem;max-width:1.25rem" src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + team + '.svg" class="ls_nfl_icon"></td><td style="border:0!important;margin:0;box-shadow:none!important;text-align:center;padding:0 0.25rem;font-style:normal;font-size:0.75rem">&#64;</td><td style="border:0!important;padding:0;margin:0;box-shadow:none!important;width:1.5rem;height:1.25rem;text-align:left"><img style="margin:0;max-height:1.25rem;max-width:1.25rem" src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + opp + '.svg" class="ls_nfl_icon"></td></tr>';
				} else {
					game_status = game_status + '<tr><td style="border:0!important;padding:0;margin:0;box-shadow:none!important;width:1.5rem;height:1.25rem;text-align:right"><img style="margin:0;max-height:1.25rem;max-width:1.25rem" src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + opp + '.svg" class="ls_nfl_icon"></td><td style="border:0!important;margin:0;box-shadow:none!important;text-align:center;padding:0 0.25rem;font-style:normal;font-size:0.75rem">vs</td><td style="border:0!important;padding:0;margin:0;box-shadow:none!important;width:1.5rem;height:1.25rem;text-align:left"><img style="margin:0;max-height:1.25rem;max-width:1.25rem" src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + team + '.svg" class="ls_nfl_icon"></td></tr>';

				}
				game_status = game_status + '</tbody></table><br>' + ls_nfl_games[team].pretty_time;
				ls_nfl_games[team].secs_left = 3600;
				ls_nfl_games[team].status = "SCHED";
				custom_game_status_class = "ls_gameis_scheduled";
			} else if (ls_tstats[team] === undefined) {
				//console.log("team stats for " + team + " is undefined");
				return;
			} else if (ls_tstats[opp] === undefined) {
				//console.log("team stats for " + opp + " is undefined");
				return;
			} else {
				if (ls_tstats[team].TPS === undefined) {
					ls_tstats[team].TPS = 0;
				}
				if (ls_tstats[opp].TPS === undefined) {
					ls_tstats[opp].TPS = 0;
				}
				if (ls_nfl_games[team].where === 'away') {
					game_status = game_status + '<tr><td style="border:0!important;padding:0;margin:0;box-shadow:none!important;width:1.5rem;height:1.25rem;text-align:right"><img style="margin:0;max-height:1.25rem;max-width:1.25rem" src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + team + '.svg" class="ls_nfl_icon"></td><td style="border:0!important;padding:0 0.188rem;font-size:0.875rem;font-weight:bold;font-style:normal;margin:0;box-shadow:none!important;text-align:center">' + ls_tstats[team].TPS + '</td><td style="border:0!important;padding:0;margin:0;box-shadow:none!important;text-align:center;font-style:normal;font-size:0.75rem">&#64;</td><td style="border:0!important;padding:0 0.188rem;font-size:0.875rem;font-weight:bold;font-style:normal;margin:0;box-shadow:none!important;text-align:center">' + ls_tstats[opp].TPS + '</td><td style="border:0!important;padding:0;margin:0;box-shadow:none!important;width:1.5rem;height:1.25rem;text-align:left"><img style="margin:0;max-height:1.25rem;max-width:1.25rem" src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + opp + '.svg" class="ls_nfl_icon"></td></tr>';
				} else {
					game_status = game_status + '<tr><td style="border:0!important;padding:0;margin:0;box-shadow:none!important;width:1.5rem;height:1.25rem;text-align:right"><img style="margin:0;max-height:1.25rem;max-width:1.25rem" src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + opp + '.svg" class="ls_nfl_icon"></td><td style="border:0!important;padding:0 0.188rem;font-size:0.875rem;font-weight:bold;font-style:normal;margin:0;box-shadow:none!important;text-align:center">' + ls_tstats[opp].TPS + '</td><td style="border:0!important;padding:0;margin:0;box-shadow:none!important;text-align:center;font-style:normal;font-size:0.75rem">vs</td><td style="border:0!important;padding:0 0.188rem;font-size:0.875rem;font-weight:bold;font-style:normal;margin:0;box-shadow:none!important;text-align:center">' + ls_tstats[team].TPS + '</td><td style="border:0!important;padding:0;margin:0;box-shadow:none!important;width:1.5rem;height:1.25rem;text-align:left"><img style="margin:0;max-height:1.25rem;max-width:1.25rem" src="https://www.mflscripts.com/ImageDirectory/script-images/nflTeamsvg_2/' + team + '.svg" class="ls_nfl_icon"></td></tr>';
				}
				game_status = game_status + '</tbody></table><br>';
				if (ls_tstats[team].QUARTER == '' || ls_tstats[team].QUARTER === 'F') {
					ls_nfl_games[team].secs_left = 0;
					ls_nfl_games[team].status = "OVER";
					game_status = game_status + "Final";
					custom_game_status_class = "ls_gameis_over";
				} else {
					custom_game_status_class = "ls_gameinprogress";
					poss_class = "ls_noposs";
					var when;
					ls_nfl_games[team].status = "INPROG";
					var parts = ls_tstats[team].REMAINING.split(":");
					ls_nfl_games[team].secs_left = parts[0] * 60 + Number(parts[1]);
					if (ls_tstats[team].QUARTER === 'O' || ls_tstats[team].QUARTER > 4) {
						when = "OT";
					} else if (ls_tstats[team].QUARTER === 'H') {
						when = "H";
						ls_nfl_games[team].secs_left += 15 * 60 * 2;
						custom_is_half = true;
					} else {
						ls_nfl_games[team].secs_left += 15 * 60 * (4 - ls_tstats[team].QUARTER);
						when = ls_tstats[team].QUARTER + "Q";
					}
					when = when + "&nbsp;" + ls_tstats[team].REMAINING;

					var down = ls_tstats[team].DOWN;
					if (down === undefined || down === 0) {
						down = 1;
					}
					if (down === 1) {
						down = down + "st";
					} else if (down === 2) {
						down = down + "nd";
					} else if (down === 3) {
						down = down + "rd";
					} else if (down === 4) {
						down = down + "th";
					}
					game_status = game_status + when;
					if (ls_tstats[team].YARDLINE !== undefined && ls_tstats[team].YARDLINE !== "") {
						var fieldpos = ls_tstats[team].YARDLINE.split(":");
						var side = fieldpos[0];
						var yardline = Number(fieldpos[1]);
						if (side == '50') {
							side = "";
							yardline = 50;
						}
						if (ls_tstats[team].TOGO !== undefined && ls_tstats[team].TOGO !== "") {
							var downdist = down + "&nbsp;and&nbsp;" + ls_tstats[team].TOGO + " at " + side + "&nbsp;" + yardline;
							game_status = game_status + '<br>' + downdist;
							if (ls_tstats[team].POSSESSION > 0) {
								poss_class = "ls_withposs";
								//console.log(team + " poss=" + ls_tstats[team].POSSESSION + " yard=" + ls_tstats[team].YARDLINE + " " + side + " " + yardline);
								if (side !== team && yardline < 20) {
									poss_class = "ls_redzone";
								}
							}
						}
					}
				}
			}
			//NEW ADDITION update game status using value of custom_game_status_class
			if (custom_game_status_class === "no_stats") {
				$(".ls_players_table div.game_" + team).closest('tr').removeClass('ls_nothas_ball ls_in_redzone ls_gameinprogress ls_has_ball').addClass('ls_gameis_over no_stats');
				$(".ls_players_table div[class*='game_FA']").closest('tr').removeClass('ls_nothas_ball ls_in_redzone ls_gameinprogress ls_has_ball').addClass('ls_gameis_over no_stats');
				$(".ls_players_table div[class*='game_FA']").html('<table style="border:0!important;border-spacing:0;box-shadow:none!important;padding:0;margin:0;width:100%"><tbody><tr><td style="text-align:center;border:0!important;padding:0;margin:0;box-shadow:none!important">NO MATCHUP</td></tr></tbody></table>');
			} else if (custom_game_status_class === "ls_gameis_over") {
				$(".ls_players_table div.game_" + team).closest('tr').removeClass('ls_nothas_ball ls_in_redzone ls_gameinprogress ls_has_ball').addClass('ls_gameis_over');
			} else if (custom_game_status_class === "ls_gameinprogress")
				$(".ls_players_table div.game_" + team).closest('tr').removeClass('ls_gameis_scheduled ls_gameis_over').addClass('ls_gameinprogress');
			else if (custom_game_status_class === "ls_gameis_scheduled")
				$(".ls_players_table div.game_" + team).closest('tr').removeClass('ls_nothas_ball ls_in_redzone ls_has_ball ls_gameinprogress ls_gameis_over').addClass("class", "ls_gameis_scheduled");
			if (custom_is_half)
				$(".ls_players_table div.game_" + team).closest('tr').closest('tr').removeClass('ls_nothas_ball ls_in_redzone ls_has_ball');
			//END NEW ADDITION 
			ls_nfl_games[team]["game_status"] = game_status;
			update_field_by_class("game_" + team, game_status, 1);
			update_class_by_class("game_" + team, poss_class);
		} // end update_game_status


		////////////////////////////////////////////////////////////////////
		//        REWRITE MFL FUNCTION - update_class_by_class            //
		////////////////////////////////////////////////////////////////////
		function update_class_by_class(classid, new_class) {
			var ellist = document.getElementsByClassName(classid);
			for (var i = 0; i < ellist.length; i++) {
				if (ellist[i]) {
					if (new_class !== "ls_redzone") {
						removeClass(ellist[i], "ls_redzone");
					}
					if (new_class !== "ls_withposs") {
						removeClass(ellist[i], "ls_withposs");
					}
					if (new_class !== "ls_noposs") {
						removeClass(ellist[i], "ls_noposs");
					}
					if (new_class !== undefined && new_class !== "") {
						addClass(ellist[i], new_class);
					}
				}
			}
			//NEW ADDITION update possession status 
			if (new_class === "ls_withposs")
				$(".ls_players_table div." + classid).closest('tr').removeClass('ls_nothas_ball ls_in_redzone').addClass('ls_has_ball');
			else if (new_class === "ls_noposs")
				$(".ls_players_table div." + classid).closest('tr').removeClass('ls_has_ball ls_in_redzone').addClass('ls_nothas_ball');
			else if (new_class === "ls_redzone")
				$(".ls_players_table div." + classid).closest('tr').addClass('ls_in_redzone');
			$('td.ls_game_info:contains("0:00")').closest('tr').removeClass('ls_has_ball ls_withposs ls_redzone ls_nothas_ball');
		} // end update_class_by_class


		////////////////////////////////////////////////////////////////////
		//           REWRITE MFL FUNCTION - build_other_games             //
		////////////////////////////////////////////////////////////////////
		function build_other_games(home, away) {
			//NOTE: FOR ALL PLAY LEAGUES home & away ARE UNDEFINED
			var html;
			var game_ord = [];
			var current_matchup = 0;
			for (var i = 0; i < ls_games.length; i++) {
				game_ord[i] = i;
				if (!ls_vert_og)
					if (ls_games[i].split(",")[1] === home && ls_games[i].split(",")[0] === away) current_matchup = i;
			}
			if (ls_vert_og) {
				// sort the teams by points scored
				game_ord.sort(function (a, b) {
					var afid = ls_games[a];
					var bfid = ls_games[b];
					var apts = ls_fran_totals[afid] == undefined ? 0 : ls_fran_totals[afid].total;
					var bpts = ls_fran_totals[bfid] == undefined ? 0 : ls_fran_totals[bfid].total;
					if (afid === ls_target_franchise) { //KEEP MY FRANCHISE ON TOP
						return -1;
					} else if (bfid === ls_target_franchise) { //MOVE MY FRANCHISE TO TOP
						return 1;
					} else if (apts < bpts) {
						return 1;
					} else if (apts > bpts) {
						return -1;
					} else {
						return 0;
					}
				});
			}
			html = "<tr><td>\n";
			if ($("#hide_projections_cb").is(':checked')) var _style = ' style="display:none"';
			else var _style = '';
			for (var gid = 0; gid < game_ord.length; gid++) {
				var i = game_ord[gid];
				var game = [];
				if (/,/.test(ls_games[i])) {
					game = ls_games[i].split(",");
				} else {
					game[0] = '';
					game[1] = ls_games[i];
				}
				var link = "switch_game('" + game[1] + "','" + game[0] + "');";
				var current_matchup_class = "";
				var matchup_class = "";
				if (ls_vert_og) {
					if (game[1] === ls_global_allplay) current_matchup_class = " current_matchup";
				} else {
					if (i === current_matchup) current_matchup_class = " current_matchup";
					for (var j = 0; j < 2; j++) {
						if (game[j] === 'BYE') matchup_class = ' ls_other_game_bye';
						if (game[j] === 'AVG') matchup_class = ' ls_other_game_avg';
					}
				}
				html = html + '<div id="og_' + i + '" class="ls_other_game' + matchup_class + current_matchup_class + '" onclick="' + link + '" onmouseenter="set_border(this,1);" onmouseleave="set_border(this,0);" style="display:inline-block;" title="View Match Up"><table border="0" cellspacing="0" cellpadding="0">\n';
				for (var j = 0; j < 2; j++) {
					if (game[j] == '') {} else if (game[j] == 'BYE') {
						html = html + '<tr><td class="ls_og_cell">BYE</td><td id="ls_pace_box_BYE" class="ls_pace_box_BYE ls_projections ls_pace_box"' + _style + '></td><td style="border:none;"><div></div></td><td style="border:none;"><div></div></td></tr>\n';
					} else if (game[j] == 'AVG') {
						ls_do_avg = 1;
						html = html + '<tr><td class="ls_og_cell">AVG</td><td id="ls_pace_box_AVG" class="ls_pace_box_BYE ls_projections ls_pace_box"' + _style + '></td><td align="right" style="border:none;"><div class="ogffpts_avg">0</div></td><td style="border:none;"><div></div></td></tr>\n';
					} else {
						var fidkey = "fid_" + game[j];
						html = html + '<tr><td class="ls_og_cell">' + ls_get_icon_abbrev(fidkey) + '</td>';

						html = html + '<td id="ls_pace_box_' + game[j] + '" class="ls_pace_box_' + game[j] + ' ls_projections ls_pace_box"' + _style + '>';
						if (ls_includeProjections) {
							if (ls_pace_tracker.hasOwnProperty(fidkey)) html = html + ls_pace_tracker[fidkey].S;
							else html = html;
						} else {
							html = html;
						}
						html = html + '</td>';

						html = html + '<td align="right" style="border:none;"><div class="ogffpts_' + game[j] + '">';
						html = html + format_points(ls_fran_totals[game[j]].total);
						html = html + '</div></td><td style="border:none;"><div class="oggstat_' + game[j] + '">';
						html = html + ls_fran_totals[game[j]].fin;
						html = html + '</div></td></tr>\n';
					}
				}
				html = html + "</table></div>\n";
			}
			html = html + '</td>';
			html = html + '</tr>\n';
			load_elem("other_games", html);
			if (ls_hide_bye_teams) {
				$("[id^=og_].ls_other_game_bye").each(function () {
					$(this).hide();
				});
			}
			// Break Rows - show matchups in single , 2 or 3 rows
			const ls_count_games = $('#other_games .ls_other_game:visible').length;
			const ls_count_half = ls_count_games / 2;
			const ls_count_half_round = Math.round(ls_count_half);
			const ls_count_third = ls_count_games / 3;
			const ls_count_third_round = Math.round(ls_count_third);
			const ls_count_third_round2 = (+ls_count_third_round) + (+ls_count_third_round);
			switch (BreakRows) {
				case 1:
					// Do Nothing
					break;
				case 2:
					$('#other_games div.ls_other_game:nth-child(' + ls_count_half_round + ')').after('<div class="ls_divide" style="display:block;height:0.313rem"></div>');
					break;
				case 3:
					$('#other_games div.ls_other_game:nth-child(' + ls_count_third_round + '),#other_games div.ls_other_game:nth-child(' + ls_count_third_round2 + ')').after('<div class="ls_divide" style="display:block;height:0.313rem"></div>');
					break;
			}

		} // end build_other_games


		////////////////////////////////////////////////////////////////////
		//                  FUNCTION - ls_get_icon_abbrev                 //
		////////////////////////////////////////////////////////////////////
		function ls_get_icon_abbrev(fidKey) {
			switch (ls_box_abbrev_name_icon) {
				case 0: //ABBREV
					return '<span class="ls_og_abbrev">' + franchiseDatabase[fidKey].abbrev + '</span>';
					break;
				case 1: //FULL NAME
					return '<span class="ls_og_full_name" style="display:inline-block;max-width:5rem;overflow:hidden">' + franchiseDatabase[fidKey].name + '</span>';
					break;
				case 2: //ICON ON FAIL USE LOGO ON FAIL USE ABBREV
					if (franchiseDatabase[fidKey].icon !== "")
						return '<img class="ls_og_icon" src="' + franchiseDatabase[fidKey].icon + '" alt="' + franchiseDatabase[fidKey].name + '" title="' + franchiseDatabase[fidKey].name + '" />';
					else if (franchiseDatabase[fidKey].logo !== "")
						return '<img class="ls_og_icon" src="' + franchiseDatabase[fidKey].logo + '" alt="' + franchiseDatabase[fidKey].name + '" title="' + franchiseDatabase[fidKey].name + '" />';
					else
						return '<span class="ls_og_abbrev">' + franchiseDatabase[fidKey].abbrev + '</span>';
					break;
				case 3: //ICON+ABBREV ON FAIL USE LOGO+ABBREV ON FAIL USE ABBREV
					if (franchiseDatabase[fidKey].icon !== "")
						return '<img class="ls_og_icon" src="' + franchiseDatabase[fidKey].icon + '" alt="' + franchiseDatabase[fidKey].name + '" title="' + franchiseDatabase[fidKey].name + '" /><span class="ls_og_icon_abbrev" style="vertical-align:middle;padding-left:0.25rem">' + franchiseDatabase[fidKey].abbrev + '</span>';
					else if (franchiseDatabase[fidKey].logo !== "")
						return '<img class="ls_og_icon" src="' + franchiseDatabase[fidKey].logo + '" alt="' + franchiseDatabase[fidKey].name + '" title="' + franchiseDatabase[fidKey].name + '" /><span class="ls_og_icon_abbrev" style="vertical-align:middle;padding-left:0.25rem">' + franchiseDatabase[fidKey].abbrev + '</span>';
					else
						return '<span class="ls_og_abbrev">' + franchiseDatabase[fidKey].abbrev + '</span>';
					break;
				case 4: //ICON+NAME ON FAIL USE LOGO+NAME ON FAIL USE NAME
					if (franchiseDatabase[fidKey].icon !== "")
						return '<img class="ls_og_icon" src="' + franchiseDatabase[fidKey].icon + '" alt="' + franchiseDatabase[fidKey].name + '" title="' + franchiseDatabase[fidKey].name + '" /><span class="ls_og_icon_full_name" style="display:inline-block;max-width:3.125rem;overflow:hidden;vertical-align:middle;padding-left:0.25rem">' + franchiseDatabase[fidKey].name + '</span>';
					else if (franchiseDatabase[fidKey].logo !== "")
						return '<img class="ls_og_icon" src="' + franchiseDatabase[fidKey].logo + '" alt="' + franchiseDatabase[fidKey].name + '" title="' + franchiseDatabase[fidKey].name + '" /><span class="ls_og_icon_full_name" style="display:inline-block;max-width:3.125rem;overflow:hidden;vertical-align:middle;padding-left:0.25rem">' + franchiseDatabase[fidKey].name + '</span>';
					else
						return '<span class="ls_og_full_name" style="display:inline-block;max-width:5rem;overflow:hidden">' + franchiseDatabase[fidKey].name + '</span>';
					break;
				default:
					return '<span class="ls_og_abbrev">' + franchiseDatabase[fidKey].abbrev + '</span>';
			}
			//console.log("ls_box_abbrev_name_icon"); // REMOVE AFTER TESTING - CONSOLE LOGGING
		} // end ls_box_abbrev_name_icon


		////////////////////////////////////////////////////////////////////
		//                    FUNCTION - build_one_team                   //
		////////////////////////////////////////////////////////////////////
		function build_one_team(which, fid) {
			var html = "";
			var proj_style = ($("#hide_projections_cb").is(':checked')) ? ' style="display:none"' : '';
			var proj_class = ($('input[name="hide_stats"]').is(':checked')) ? ' td-pad' : '';
			if (fid != 'BYE' && fid != 'AVG') {
				ls_showing[which] = fid;
				var fidkey = "fid_" + [fid];
				html = html + '<caption>' + ls_get_icon_abbrev(fidkey) + '</caption>';
				for (var i in ls_rkeys) {
					var rk = ls_rkeys[i];
					var last_pos = "";
					if ((typeof ls_rosters[fid][rk] != 'undefined') &&
						(ls_rosters[fid][rk].length > 0)) {
						var rowclass = "ls_" + (rk == 'S' ? 'starters' : 'nonstarters');
						html = html + '<tr class="' + rowclass + '"><th>' + ls_rkey_labels[rk] + '</th><th class="ls_game_info">Game</th>';
						if (ls_includeProjections) html = html + '<th class="ls_projections"' + proj_style + ' title="Pace/Projected Points">PP</th>';
						html = html + '<th>Points</th>';
						var rowcnt = 0;
						for (var j in ls_rosters[fid][rk]) {
							var rowstyle = (rowcnt % 2) ? "oddtablerow" : "eventablerow"
							rowstyle = rowstyle + " " + rowclass;
							var pid = ls_rosters[fid][rk][j];
							var nfl_team = ls_player[pid].nfl_team;
							if (/^FA/.test(nfl_team)) {
								pgame = "";
							} else {
								if (ls_def_pos[ls_player[pid].pos] &&
									ls_nfl_games[nfl_team].opp != "BYE") {
									nfl_team = ls_nfl_games[nfl_team].opp;
								}
								pgame = ls_nfl_games[nfl_team]["game_status"];
								if (pgame === undefined) pgame = "No Matchup";
							}
							if (j > 0 && ls_player[pid].pos != last_pos) {
								rowstyle = rowstyle + " newposition";
							}
							last_pos = ls_player[pid].pos;
							var ppts = format_points((ls_player[pid].points == undefined) ?
								0 : ls_player[pid].points);
							var pstats = ls_player[pid].stats_str == undefined ? "- stats -" : ls_player[pid].stats_str;
							var link = "player?L=" + league_id + "&P=" + pid;
							html = html + '<tr class="' + rowstyle + '"><td class="td-first-type"><a href="' + link + '" target="new" class="reallysmall" title="View Player News">' + ls_player[pid].name + '</a><br>' + ls_player[pid].nfl_team + ' ' + ls_player[pid].pos + '';
							try {
								if (ls_injuries["pid_" + pid] !== undefined) {
									html = html + ' (<span class="warning injurystatus" title="' + ls_injuries["pid_" + pid].status + '">' + ls_injuries["pid_" + pid].code + '</span>)';
								}
							} catch (error) {};
							html = html + '<div class="ls_player_stats" style="position: absolute;bottom:0.125rem;height:unset"><div class="stats_' + pid + ' reallysmall" style="font-size: 0.625rem;white-space: nowrap">' + pstats + '</div></div></td>';
							html = html + '<td class="ls_game_info"><div class="game_' + nfl_team + ' reallysmall">' + pgame + '</div></td>';
							if (ls_includeProjections) html = html + '<td class="ls_projections' + proj_class + '"' + proj_style + ' id="ls_pace_pts_' + pid + '"></td>';
							var exp_link = "ls_explain_points('" + pid + "');";
							html = html + '<td align="right"><div onclick="' + exp_link + '" class="pfpts_' + pid + ' reallysmall" style="text-decoration:underline;" title="Click to View Details">' + ppts + '</div></td></tr>';
							rowcnt++;
						}
						if (rk == 'S' && ls_hfa[fid] != undefined && ls_hfa[fid] != 0 &&
							which == 'home') {
							var rowstyle = (rowcnt % 2) ? "oddtablerow" : "eventablerow"
							rowstyle = rowstyle + " " + rowclass + " newposition";
							html = html + '<tr class="td-totals-row ' + rowstyle + '"><td class="reallysmall td-totals">Home Field Advantage</td>';
							html = html + '<td class="ls_game_info"><div class="reallysmall"></div></td>';
							if (ls_includeProjections) html = html + '<td class="ls_projections' + proj_class + '"' + proj_style + '></td>';
							html = html + '<td align="right"><div class="reallysmall">' + ls_hfa[fid] + '</div></td></tr>';
							rowcnt++;
						}
						if (rk == 'S' && ls_adjust[fid] != undefined) {
							var rowstyle = (rowcnt % 2) ? "oddtablerow" : "eventablerow"
							rowstyle = rowstyle + " " + rowclass + " newposition";
							html = html + '<tr class="td-totals-row ' + rowstyle + '"><td class="reallysmall" class="td-totals">' + ls_adjust[fid].label + '</td>';
							html = html + '<td class="ls_game_info"><div class="reallysmall"></div></td>';
							if (ls_includeProjections) html = html + '<td class="ls_projections' + proj_class + '"' + proj_style + '></td>';
							html = html + '<td align="right"><div class="reallysmall">' +
								format_points(ls_adjust[fid].value) +
								'</div></td></tr>';
							rowcnt++;
						}
						if (rk == 'S' || rk == 'NS') {
							var rowstyle = (rowcnt % 2) ? "odd" : "even"
							html = html + '<tr class="td-totals-row ' + rowstyle + 'tablerow ' + rowclass + '"><td align="left" class="td-totals"><b>Total Points</b></td><td class="ls_game_info"></td>';
							if (ls_includeProjections) html = html + '<td class="ls_projections ls_projections_' + rk + ' ffpts_pace_total' + proj_class + '"' + proj_style + ' id="ls_pace_' + fid + '"></td>';
							html = html + '<td class="ls_marquee_value" align="right"><div id="';
							if (rk == 'S') {
								html = html + 'fspts_';
							} else {
								html = html + 'frpts_';
							}
							var totpts = (rk == 'S') ? ls_fran_totals[fid].total :
								ls_fran_totals[fid].nstotal;
							html = html + fid + '">' + format_points(totpts) + '</div></td></tr>';
						}
					} else if (rk == 'S') {
						if (ls_includeProjections)
							html = html + '<tr><th colspan="5">This franchise did not set a lineup this week or the lineups are hidden.</th></tr>';
						else
							html = html + '<tr><th colspan="4">This franchise did not set a lineup this week or the lineups are hidden.</th></tr>';
					}
				}
			}
			load_elem("roster_" + which, html);
			try {
				MFLPlayerPopupNewsIcon();
			} catch (er) {}
			if (ls_should_hide_gs) {
				hide_by_class("ls_game_info", true, "table-cell");
			}
			if (ls_should_hide_ps) {
				hide_by_class("ls_player_stats", true, "table-cell");
			}
			if (ls_should_hide_rs) {
				hide_by_class("ls_nonstarters", true, "table-row");
			}
			if (ls_should_hide_ts) {
				hide_by_id("ls_ticker_tab_id", true, "inline");
			}
			if (ls_should_hide_wp) {
				hide_by_class("ls_proj_points", true, "table-cell");
				hide_by_id("ls_row_winprob_home", ls_should_hide_wp, "table-row");
				hide_by_id("ls_row_winprob_away", ls_should_hide_wp, "table-row");
			}
			if ($('input[name="hide_stats"]').is(':checked')) {
				$('#roster_away td, #roster_home td').addClass('td-pad');
			}
		} // end build_one_team

	} // end if $('script[src*="mfl_live_scoring.js"]').length

} // END MFL LIVE SCORING

// Add this outside of Live Scoring body id to target all links on page to add end week string UPDATED
$(document).ready(function () {
	setTimeout(function () {
		var urlParams = new URLSearchParams(window.location.search);
		var isTest = urlParams.get('TEST_WEEK');
		if (liveScoringWeek === 0 && isTest) {
			$.each(
				$('a[href*="ajax_ls?L"]'),
				function (index, value) {
					//$(value).attr('href', $(value).attr('href') + '&TEST_WEEK=1');
					$(value).addClass('scoringLinkDisable'); // added instead of making scoring link to TEST scoring page

				}
			);
		} else if (liveScoringWeek === 0) {
			$.each(
				$('a[href*="ajax_ls?L"]'),
				function (index, value) {
					//$(value).removeAttr('href'); // added instead of making scoring link to TEST scoring page
					//$(value).attr('onclick', 'scoringLinkDisable()'); // added instead of making scoring link to TEST scoring page
					$(value).addClass('scoringLinkDisable'); // added instead of making scoring link to TEST scoring page
				}
			);
		}
		if (completedWeek > endWeek || real_ls_week > endWeek) {
			$.each(
				$('a[href*="ajax_ls?L"]'),
				function (index, value) {
					//$(value).attr('href', $(value).attr('href') + '&W=' + real_ls_week + '&W2=' + endWeek);
				}
			);
		}
	}, 1000);
}); // end UPDATE URL LINKS ON SCORING PAGE WHEN IN PREVIOUS WEEKS

$(document).on('click', '.scoringLinkDisable', function (e) {
	e.preventDefault();
	alert("Live Scoring Will Start 24 Hours Prior To Kickoff Of First Game Of The Week. Live Scoring is disabled during offseason.");
});

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// STANDINGS SETTINGS  https://www.mflscripts.com/mfl-apps/standingSettings/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
if ((load_standingSettings_script) && ($('#body_home').length) || ($('#body_options_247').length) || ($('#body_standings').length)) {
	//console.log("STANDINGS SETTINGS SCRIPT LAST UPDATED 09-12-21");
	// ADD CLASS TO STANDINGS REPORTS ONLY BASED ON CAPTION TEXT "LEAGUE STANDINGS"
	(function ($) {
		$.expr[':'].text = function (obj, index, meta, stack) {
			return ($(obj).text() === meta[3])
		};
	})(jQuery);
	jQuery('#standings caption span:text("League Standings")').closest('table').addClass('standings-filter');

	// APPEND STANDINGS SETTINGS FONT AWESOME TO CAPTION
	jQuery('.standings-filter caption span').last().append('<i class="fa-regular fa-gears standings-cog" aria-hidden="true" title="Setup Standings Columns"></i>').addClass('standing_cog_span');

	// TH FICON DOES NOT HAVE ANY TEXT SO ADD TEXT FOR FRANCHISE
	jQuery('.standings-filter th.ficon').text('Franchise');

	// REPLACE MFL STANDINGS TH AND TD CLASSES THAT ARE USING A "#" SIGN
	jQuery('.standings-filter td[class="#w"],.standings-filter th[class="#w"]').removeClass().addClass('waiver-moves');
	jQuery('.standings-filter td[class="#a"],.standings-filter th[class="#a"]').removeClass().addClass('add-moves');

	// APPEND STANDINGS SETTINGS POPUP DIV AND OVERLAY - APPEND ALL POSSIBLE STANDINGS COLUMNS HEADERS
	jQuery('<div class="standings-settings_overlay" style="display: none;"></div><div id="standings-settings" class="standings-settings-content" style="display:none;"><p style="text-align:center;font-weight:bold;text-decoration:underline;margin:0;font-size:0.938rem">SELECT STANDINGS COLUMNS</p><div class="ss_setting_ck"><input type="checkbox" name="fname_checkbox" id="fname_checkbox" class="fname" checked="checked" onchange="ss_checkbox(this)"><label for="fname_checkbox">Franchise Name</label></div><div class="ss_setting_ck"><input type="checkbox" name="ficon_checkbox" id="ficon_checkbox" class="ficon" checked="checked" onchange="ss_checkbox(this)"><label for="ficon_checkbox">Franchise Icon</label></div><div class="ss_setting_ck"><input type="checkbox" name="ficonname_checkbox" id="ficonname_checkbox" class="ficonname" checked="checked" onchange="ss_checkbox(this)"><label for="ficonname_checkbox">Franchise Icon and Name</label></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Overall Columns</p><div class="ss_setting_ck"><input type="checkbox" name="h2hwlt_checkbox" id="h2hwlt_checkbox" class="h2hwlt" checked="checked" onchange="ss_checkbox(this)"><label for="h2hwlt_checkbox">Overall Wins, Losses and Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="h2hpct_checkbox" id="h2hpct_checkbox" class="h2hpct" checked="checked" onchange="ss_checkbox(this)"><label for="h2hpct_checkbox">Overall Winning Percentage</label></div><div class="ss_setting_ck"><input type="checkbox" name="h2hw_checkbox" id="h2hw_checkbox" class="h2hw" checked="checked" onchange="ss_checkbox(this)"><label for="h2hw_checkbox">Overall Wins</label></div><div class="ss_setting_ck"><input type="checkbox" name="h2hl_checkbox" id="h2hl_checkbox" class="h2hl" checked="checked" onchange="ss_checkbox(this)"><label for="h2hl_checkbox">Overall Losses</label></div><div class="ss_setting_ck"><input type="checkbox" name="h2ht_checkbox" id="h2ht_checkbox" class="h2ht" checked="checked" onchange="ss_checkbox(this)"><label for="h2ht_checkbox">Overall Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="gb_checkbox" id="gb_checkbox" class="gb" checked="checked" onchange="ss_checkbox(this)"><label for="gb_checkbox">Games Back</label></div><div class="ss_setting_ck"><input type="checkbox" name="strk_checkbox" id="strk_checkbox" class="strk" checked="checked" onchange="ss_checkbox(this)"><label for="strk_checkbox">Winning-Losing Streak</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Division Columns</p><div class="ss_setting_ck"><input type="checkbox" name="divw_checkbox" id="divw_checkbox" class="divw" checked="checked" onchange="ss_checkbox(this)"><label for="divw_checkbox">Divisional Wins</label></div><div class="ss_setting_ck"><input type="checkbox" name="divl_checkbox" id="divl_checkbox" class="divl" checked="checked" onchange="ss_checkbox(this)"><label for="divl_checkbox">Divisional Losses</label></div><div class="ss_setting_ck"><input type="checkbox" name="divt_checkbox" id="divt_checkbox" class="divt" checked="checked" onchange="ss_checkbox(this)"><label for="divt_checkbox">Divisional Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="divwlt_checkbox" id="divwlt_checkbox" class="divwlt" checked="checked" onchange="ss_checkbox(this)"><label for="divwlt_checkbox">Divisional Wins, Losses and Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="divpct_checkbox" id="divpct_checkbox" class="divpct" checked="checked" onchange="ss_checkbox(this)"><label for="divpct_checkbox">Divisional Winning Percentage</label></div><div class="ss_setting_ck"><input type="checkbox" name="nondivw_checkbox" id="nondivw_checkbox" class="nondivw" checked="checked" onchange="ss_checkbox(this)"><label for="nondivw_checkbox">Non-Divisional Wins</label></div><div class="ss_setting_ck"><input type="checkbox" name="nondivl_checkbox" id="nondivl_checkbox" class="nondivl" checked="checked" onchange="ss_checkbox(this)"><label for="nondivl_checkbox">Non-Divisional Losses</label></div><div class="ss_setting_ck"><input type="checkbox" name="nondivt_checkbox" id="nondivt_checkbox" class="nondivt" checked="checked" onchange="ss_checkbox(this)"><label for="nondivt_checkbox">Non-Divisional Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="nondivwlt_checkbox" id="nondivwlt_checkbox" class="nondivwlt" checked="checked" onchange="ss_checkbox(this)"><label for="nondivwlt_checkbox">Non-Divisional Wins, Losses and Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="nondivpct_checkbox" id="nondivpct_checkbox" class="nondivpct" checked="checked" onchange="ss_checkbox(this)"><label for="nondivpct_checkbox">Non-Divisional Winning Percentage</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Conference Columns</p><div class="ss_setting_ck"><input type="checkbox" name="confw_checkbox" id="confw_checkbox" class="confw" checked="checked" onchange="ss_checkbox(this)"><label for="confw_checkbox">Conference Wins</label></div><div class="ss_setting_ck"><input type="checkbox" name="confl_checkbox" id="confl_checkbox" class="confl" checked="checked" onchange="ss_checkbox(this)"><label for="confl_checkbox">Conference Losses</label></div><div class="ss_setting_ck"><input type="checkbox" name="conft_checkbox" id="conft_checkbox" class="conft" checked="checked" onchange="ss_checkbox(this)"><label for="conft_checkbox">Conference Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="confwlt_checkbox" id="confwlt_checkbox" class="confwlt" checked="checked" onchange="ss_checkbox(this)"><label for="confwlt_checkbox">Conference Wins, Losses and Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="confpct_checkbox" id="confpct_checkbox" class="confpct" checked="checked" onchange="ss_checkbox(this)"><label for="confpct_checkbox">Conference Winning Percentage</label></div><div class="ss_setting_ck"><input type="checkbox" name="nonconfw_checkbox" id="nonconfw_checkbox" class="nonconfw" checked="checked" onchange="ss_checkbox(this)"><label for="nonconfw_checkbox">Non-Conference Wins</label></div><div class="ss_setting_ck"><input type="checkbox" name="nonconfl_checkbox" id="nonconfl_checkbox" class="nonconfl" checked="checked" onchange="ss_checkbox(this)"><label for="nonconfl_checkbox">Non-Conference Losses</label></div><div class="ss_setting_ck"><input type="checkbox" name="nonconft_checkbox" id="nonconft_checkbox" class="nonconft" checked="checked" onchange="ss_checkbox(this)"><label for="nonconft_checkbox">Non-Conference Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="nonconfwlt_checkbox" id="nonconfwlt_checkbox" class="nonconfwlt" checked="checked" onchange="ss_checkbox(this)"><label for="nonconfwlt_checkbox">Non-Conference Wins, Losses and Ties</label></div><div class="ss_setting_ck"><input type="checkbox" name="nonconfpct_checkbox" id="nonconfpct_checkbox" class="nonconfpct" checked="checked" onchange="ss_checkbox(this)"><label for="nonconfpct_checkbox">Non Conference Winning Percentage</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Points Columns</p><div class="ss_setting_ck"><input type="checkbox" name="pf_checkbox" id="pf_checkbox" class="pf" checked="checked" onchange="ss_checkbox(this)"><label for="pf_checkbox">Total YTD Point Scored</label></div><div class="ss_setting_ck"><input type="checkbox" name="avgpf_checkbox" id="avgpf_checkbox" class="avgpf" checked="checked" onchange="ss_checkbox(this)"><label for="avgpf_checkbox">Weekly Average Point Scored</label></div><div class="ss_setting_ck"><input type="checkbox" name="pa_checkbox" id="pa_checkbox" class="pa" checked="checked" onchange="ss_checkbox(this)"><label for="pa_checkbox">Total YTD Opp. Points Scored</label></div><div class="ss_setting_ck"><input type="checkbox" name="avgpa_checkbox" id="avgpa_checkbox" class="avgpa" checked="checked" onchange="ss_checkbox(this)"><label for="avgpa_checkbox">Weekly Average Opp. Points Scored</label></div><div class="ss_setting_ck"><input type="checkbox" name="divpf_checkbox" id="divpf_checkbox" class="divpf" checked="checked" onchange="ss_checkbox(this)"><label for="divpf_checkbox">Total YTD Points Scored In Div. Games</label></div><div class="ss_setting_ck"><input type="checkbox" name="confpf_checkbox" id="confpf_checkbox" class="confpf" checked="checked" onchange="ss_checkbox(this)"><label for="confpf_checkbox">Total YTD Points Scored In Conference</label></div><div class="ss_setting_ck"><input type="checkbox" name="maxpf_checkbox" id="maxpf_checkbox" class="maxpf" checked="checked" onchange="ss_checkbox(this)"><label for="maxpf_checkbox">Highest Weekly Point Total</label></div><div class="ss_setting_ck"><input type="checkbox" name="minpf_checkbox" id="minpf_checkbox" class="minpf" checked="checked" onchange="ss_checkbox(this)"><label for="minpf_checkbox">Lowest Weekly Point Total</label></div><div class="ss_setting_ck"><input type="checkbox" name="maxpa_checkbox" id="maxpa_checkbox" class="maxpa" checked="checked" onchange="ss_checkbox(this)"><label for="maxpa_checkbox">Highest Weekly Points Against</label></div><div class="ss_setting_ck"><input type="checkbox" name="minpa_checkbox" id="minpa_checkbox" class="minpa" checked="checked" onchange="ss_checkbox(this)"><label for="minpa_checkbox">Lowest Weekly Points Against</label></div><div class="ss_setting_ck"><input type="checkbox" name="vp_checkbox" id="vp_checkbox" class="vp" checked="checked" onchange="ss_checkbox(this)"><label for="vp_checkbox">Victory Points</label></div><div class="ss_setting_ck"><input type="checkbox" name="pp_checkbox" id="pp_checkbox" class="pp" checked="checked" onchange="ss_checkbox(this)"><label for="pp_checkbox">Potential Points</label></div><div class="ss_setting_ck"><input type="checkbox" name="pb_checkbox" id="pb_checkbox" class="pb" checked="checked" onchange="ss_checkbox(this)"><label for="pb_checkbox">Points Back</label></div><div class="ss_setting_ck"><input type="checkbox" name="op_checkbox" id="op_checkbox" class="op" checked="checked" onchange="ss_checkbox(this)"><label for="op_checkbox">Offensive Points</label></div><div class="ss_setting_ck"><input type="checkbox" name="dp_checkbox" id="dp_checkbox" class="dp" checked="checked" onchange="ss_checkbox(this)"><label for="dp_checkbox">Defensive Points</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Accounting Columns</p><div class="ss_setting_ck"><input type="checkbox" name="bbidspent_checkbox" id="bbidspent_checkbox" class="bbidspent" checked="checked" onchange="ss_checkbox(this)"><label for="bbidspent_checkbox">Total $ Spent YTD On Blind Bidding</label></div><div class="ss_setting_ck"><input type="checkbox" name="bbidbalance_checkbox" id="bbidbalance_checkbox" class="bbidbalance" checked="checked" onchange="ss_checkbox(this)"><label for="bbidbalance_checkbox">Balance Available For Blind Bidding</label></div><div class="ss_setting_ck"><input type="checkbox" name="acct_checkbox" id="acct_checkbox" class="acct" checked="checked" onchange="ss_checkbox(this)"><label for="acct_checkbox">Accounting Balance</label></div><div class="ss_setting_ck"><input type="checkbox" name="salary_checkbox" id="salary_checkbox" class="salary" checked="checked" onchange="ss_checkbox(this)"><label for="salary_checkbox">Total Salary</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">All-Play Columns</p><div class="ss_setting_ck"><input type="checkbox" name="all_play_wlt_checkbox" id="all_play_wlt_checkbox" class="all_play_wlt" checked="checked" onchange="ss_checkbox(this)"><label for="all_play_wlt_checkbox">All-Play Wins, Losses and Tie</label></div><div class="ss_setting_ck"><input type="checkbox" name="all_play_pct_checkbox" id="all_play_pct_checkbox" class="all_play_pct" checked="checked" onchange="ss_checkbox(this)"><label for="all_play_pct_checkbox">All-Play Winning Percentage</label></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Ranking Columns</p><div class="ss_setting_ck"><input type="checkbox" name="pwr_checkbox" id="pwr_checkbox" class="pwr" checked="checked" onchange="ss_checkbox(this)"><label for="pwr_checkbox">Power Rank</label></div><div class="ss_setting_ck"><input type="checkbox" name="altpwr_checkbox" id="altpwr_checkbox" class="altpwr" checked="checked" onchange="ss_checkbox(this)"><label for="altpwr_checkbox">Alternative Power Rank</label></div><div class="ss_setting_ck"><input type="checkbox" name="eff_checkbox" id="eff_checkbox" class="eff" checked="checked" onchange="ss_checkbox(this)"><label for="eff_checkbox">Efficiency Rating</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Transactions Columns</p><div class="ss_setting_ck"><input type="checkbox" name="ww_checkbox" id="ww_checkbox" class="ww" checked="checked" onchange="ss_checkbox(this)"><label for="ww_checkbox">Waiver Wire Order</label></div><div class="ss_setting_ck"><input type="checkbox" name="add-moves_checkbox" id="add-moves_checkbox" class="add-moves" checked="checked" onchange="ss_checkbox(this)"><label for="add-moves_checkbox">Year-To-Date Number Of Add Moves</label></div><div class="ss_setting_ck"><input type="checkbox" name="waiver-moves_checkbox" id="waiver-moves_checkbox" class="waiver-moves" checked="checked" onchange="ss_checkbox(this)"><label for="waiver-moves_checkbox">Year-To-Date Number Of Waiver Moves</label></div></div><div class="ss_wrapper"><p class="headp-carrot" style="text-align:left;font-weight:bold;margin:0">Miscellaneous Columns</p><div class="ss_setting_ck"><input type="checkbox" name="eliminated_checkbox" id="eliminated_checkbox" class="eliminated" checked="checked" onchange="ss_checkbox(this)"><label for="eliminated_checkbox">Guillotine Leagues, Week Eliminated</label></div><div class="ss_setting_ck"><input type="checkbox" name="custom_standings_column01_checkbox" id="custom_standings_column01_checkbox" class="custom_standings_column01" checked="checked" onchange="ss_checkbox(this)"><label for="custom_standings_column01_checkbox">Custom Standings Column 1</label></div><div class="ss_setting_ck"><input type="checkbox" name="custom_standings_column02_checkbox" id="custom_standings_column02_checkbox" class="custom_standings_column02" checked="checked" onchange="ss_checkbox(this)"><label for="custom_standings_column02_checkbox">Custom Standings Column 2</label></div></div></div>').appendTo("body");

	// CHECK STANDINGS TH CLASSES AGAINST ALL INPUTS LOADED AND REMOVES ONES NOT BEING USED
	(function () {
		let classes = [];
		let classes_check = [];
		$('.standings-filter th').each(function () {
			classes.push($(this).attr("class"));
			classes_check[$(this).attr("class")] = 1;
		})
		//console.log(classes);
		$('#standings-settings div input').each(function () {
			let divClassName = $(this).attr("class");
			if (classes.indexOf(divClassName) == -1) {
				$(this).parent('.ss_setting_ck').remove();
			}
		})
		for (var class_check in classes_check) {
			if (classes_check.hasOwnProperty(class_check)) {
				if (localStorage.getItem(league_id + "_" + year + "_" + class_check) === 'hidden') {
					$('.standings-filter .' + class_check + '').hide();
					$("#" + class_check + "_checkbox").prop("checked", false);
				}
			}
		}
	})();

	const StandingSettingsPop = document.querySelector('#standings-settings');

	// SHOW AND HIDE OVERLAY ON CLICK OF COG WHEEL AND OVERLAY
	jQuery(".standings-filter .standings-cog").on("click", function () {
		$("#standings-settings,.standings-settings_overlay").css("display", "block");
		try {
			bodyScrollLock.disableBodyScroll(StandingSettingsPop);
		} catch (er) {};
	});
	jQuery(".standings-settings_overlay").on("click", function () {
		$("#standings-settings,.standings-settings_overlay").css("display", "none");
		try {
			bodyScrollLock.enableBodyScroll(StandingSettingsPop);
		} catch (er) {};
	});

	// INPUT CLICK FUNCTION TO HIDE AND SHOW TD AND TH IN STANDINGS TABLES
	function ss_checkbox(e) {
		let getClass = $(e).attr('class') //get class name
		if ($(e).is(':checked')) {
			$('.standings-filter .' + getClass + '').show();
			localStorage.removeItem(league_id + "_" + year + "_" + getClass);
		} else {
			$('.standings-filter .' + getClass + '').hide();
			localStorage.setItem(league_id + "_" + year + "_" + getClass, "hidden");
		}
	}

	// REMOVE EMPTY SETTINGS SECTIONS
	jQuery('.ss_wrapper').not(':has(.ss_setting_ck)').remove();

	// APPEND STANDINGS SETTINGS CSS
	jQuery('<style>.standings-cog{margin-left:0.625rem;cursor:pointer;z-index:1;pointer-events:all;position:absolute;top:50%;transform:translateY(-50%)}.standing_cog_span{position:relative}#standings-settings{position:fixed;left:0;right:0;top:0;bottom:0;margin:auto;width:18.75rem;z-index:999999;height:18.75rem;overflow:auto}.standings-settings_overlay{content:"";width:100%;height:100%;position:fixed;left:0;top:0;z-index:99999}#standings-settings input{display:none}#standings-settings div{position:relative;display:block;margin:0.625rem 0}#standings-settings input+label:before{font-family:"Font Awesome 6 Pro";display:inline-block;content:"\\f096";position:absolute;left:0}#standings-settings input:checked+label:before{content:"\\f046";z-index:0}#standings-settings label{padding-left:1.25rem;font-size:0.813rem;line-height:0.813rem;cursor:pointer;display:block}#standings-settings #fname_checkbox:checked+label,#standings-settings #fname_checkbox+label,#standings-settings #ficon_checkbox:checked+label,#standings-settings #ficon_checkbox+label,#standings-settings #ficonname_checkbox:checked+label,#standings-settings #ficonname_checkbox+label{pointer-events:none}#standings-settings #fname_checkbox:checked+label:before,#standings-settings #fname_checkbox+label:before,#standings-settings #ficon_checkbox:checked+label:before,#standings-settings #ficon_checkbox+label:before,#standings-settings #ficonname_checkbox:checked+label:before,#standings-settings #ficonname_checkbox+label:before{content:"\\f30d";pointer-events:none}#standings-settings p.headp-carrot{position:relative}#standings-settings p.headp-carrot:after{font-family:"Font Awesome 6 Pro";display:inline-block;content:"\\f0d7";position:absolute;top:50%;transform:translateY(-50%);margin-left:0.313rem}</style>').appendTo('head');
} // END STANDINGS SETTINGS


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// Popup Addon  https://www.mflscripts.com/mfl-apps/popups/addon/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
if (load_popupAddon_script) {
	//console.log("POPUP ADDON SCRIPT LAST UPDATED 12-22-21");
	if (enableAddonNewPM === undefined) var enableAddonNewPM = false;
	if (enableAddonNewPost === undefined) var enableAddonNewPost = false;
	if (enableAddonPoll === undefined) var enableAddonPoll = false;
	if (enableAddonTrade === undefined) var enableAddonTrade = false;

	// CHECK FOR NEW MESSAGE BOARD MESSAGES AND NEW PRIVATE MESSAGES AND APPEND TO HEADER IF FOUND
	function checkAddons() {
		if (typeof franchise_id !== "undefined") {
			try {
				const headElement = document.querySelector('head');
				if (enableAddonNewPM || enableAddonNewPost || enableAddonPoll || enableAddonTrade) {
					$('#icon-wrapper-mobile, #icon-wrapper').show();
				}
				if (enableAddonNewPM && leagueAttributes['NewPrivateMessages'] > 0) {
					const style = `<style>li.notification-icon-new-mb-private-message{display:inline-block!important}</style>`;
					headElement.insertAdjacentHTML('beforeend', style);
				}
				if (enableAddonNewPost && $("#message_board_check .timestamp .warning").length > 0) {
					const style = `<style>li.notification-icon-new-mb-message{display:inline-block!important}</style>`;
					headElement.insertAdjacentHTML('beforeend', style);
				}
				if (enableAddonPoll && franchise_id !== "0000" && leagueAttributes["PollsToVoteIn"] > 0 && $("#poll tr.reportfooter td:contains('Closed')").length === 0) {
					const style = `<style>li.notification-icon-new-poll{display:inline-block!important}</style>`;
					headElement.insertAdjacentHTML('beforeend', style);
				}
				if (enableAddonTrade) {
					if (franchise_id === "0000" && leagueAttributes["PendingTradesForCommish"] > 0) {
						const style = `<style>li.notification-pending-trade{display:inline-block!important}</style>`;
						headElement.insertAdjacentHTML('beforeend', style);
					} else {
						if (leagueAttributes["PendingTradesAwaitingCommishApproval"] > 0) {
							const style = `<style>li.notification-awaiting-approval{display:inline-block!important}</style>`;
							headElement.insertAdjacentHTML('beforeend', style);
						}
						if (leagueAttributes["PendingTradesToMe"] > 0) {
							const style = `<style>li.notification-outstandings-offers-received{display:inline-block!important}</style>`;
							headElement.insertAdjacentHTML('beforeend', style);
						}
					}
				}
			} catch (error) {
				// Handle specific errors or log the error for debugging
			}
		}
	}
	document.addEventListener("DOMContentLoaded", function() {
  		checkAddons();
	});
} // END POPUP ADDON SCRIPT


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// Notification Slide Down  https://www.mflscripts.com/mfl-apps/popups/notfications/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
if (load_notification_script) {
	//console.log("NOTIFICATION SCRIPT LAST UPDATED 09-12-21");
	if (checkEverySecond_notificationVisitor === undefined) var checkEverySecond_notificationVisitor = 60;

	if (sameVisitor_notification_interval === undefined) var sameVisitor_notification_interval = 5 * 60;

	if (trade_notification_interval === undefined) var trade_notification_interval = 60 * 60;

	if (notification_duration_seconds === undefined) var notification_duration_seconds = 2.5;

	if (notification_stagger_seconds === undefined) var notification_stagger_seconds = 2.5;

	if (notification_history_seconds === undefined) var notification_history_seconds = 60;

	if (includeVisitorNotification === undefined) var includeVisitorNotification = true;

	if (includeTradeNotification === undefined) var includeTradeNotification = false;

	if (includeIRNotification === undefined) var includeIRNotification = false;

	if (includeMsgBoardNotification === undefined) var includeMsgBoardNotification = false;

	var originalPageLoadTimestamp = currentServerTime * 1000;

	function showNotificationBar(message, messageClass) {

		if (typeof message === 'undefined') return false;


		//set default values

		var duration = notification_duration_seconds * 1000;

		if (typeof messageClass !== 'undefined')

			var notification_class = ' notification-' + messageClass.trim();

		else

			var notification_class = '';


		var notification_current_count = jQuery(".notification-bar-content").length;

		var notification_delay = notification_current_count * duration + notification_current_count * (notification_stagger_seconds * 1000);


		//create the notification bar div if it doesn't exist

		if (!document.getElementById("notification-bar-container")) jQuery('body').prepend("<div id='notification-bar-container'></div>");


		//create message

		var HTMLmessage = "<div class='notification-message notification-default" + notification_class + "' style='text-align:center;'> " + message + " </div>";

		jQuery('#notification-bar-container').append("<div id='notification-bar0' class='notification-bar-content' style='display:none; width:100%; position: fixed; top:0; left:0; z-index: 99999'>" + HTMLmessage + "</div>");


		/*animate the bar*/

		setTimeout(function () {

			jQuery('#notification-bar0').slideDown(function () {

				setTimeout(function () {

					$('#notification-bar0').slideUp(function () {

						$('#notification-bar0').remove();

					});

				}, duration);

			});

		}, notification_delay);

	}

	function parseVisitorsXML_notification(visitorsXML) {

		var visitors = visitorsXML.getElementsByTagName("visit");

		for (var i = 0; i < visitors.length; i++) {

			var fid = visitors[i].getAttribute("franchise_id");

			var timestamp = parseInt(visitors[i].getAttribute("timestamp")) * 1000;

			var ignore_fid = false;

			if (typeof franchise_id !== "undefined") {

				if (fid === franchise_id) ignore_fid = true;

			}

			//ONLY IF TIMESTAMP IS GREATER THAN TIME OF ORIGINAL PAGE LOAD AND IF NOT OWN FID

			if (!ignore_fid && timestamp > (originalPageLoadTimestamp - (notification_history_seconds * 1000))) {

				if (sessionStorage.getItem("mfl_visitor_" + league_id + "_" + fid) === null) {

					sessionStorage.setItem("mfl_visitor_" + league_id + "_" + fid, timestamp);

					showNotificationBar(franchiseDatabase['fid_' + fid].name + " is now online", "online");

				} else {

					//FID EXISTS FOR LEAGUE THEREFORE ONLY POP IF 5 MINUTES HAS PASSED SINCE LAST NOTIFICATION

					if ((timestamp - parseInt(sessionStorage["mfl_visitor_" + league_id + "_" + fid])) > (sameVisitor_notification_interval * 1000)) {

						sessionStorage.setItem("mfl_visitor_" + league_id + "_" + fid, timestamp);

						showNotificationBar(franchiseDatabase['fid_' + fid].name + " is online", "online");

					}

				}

			}

		}

		if (franchise_id === '0000') {

			//showNotificationBar("TEST 1 is online","online");

			//showNotificationBar("TEST 2 is trade","trade");

			//showNotificationBar("TEST 3 is default","trad");

			//showNotificationBar("TEST 4 is IR","ir");

		}

		visitors = null;

	}

	function updateOnlineStatus_notification() {

		var url = xmlBaseURL + league_id + '_visitors.xml?random=' + get_random_string();

		try {

			makeHttpRequest(url, 'parseVisitorsXML_notification', 1);

		} catch (e) {

			url = window.location.protocol + "//" + window.location.host + "/fflnetdynamic" + year + "/" + league_id + '_visitors.xml?random=' + get_random_string();

			makeHttpRequest(url, 'parseVisitorsXML_notification', 1);

		}

		url = null;

	}

	jQuery(document).ready(function () {

		if (typeof franchise_id !== 'undefined') { // IF LOGGED IN TO LEAGUE 

			if (includeVisitorNotification) {

				updateOnlineStatus_notification();

				onlineStatusInterval_notification = setInterval('updateOnlineStatus_notification()', checkEverySecond_notificationVisitor * 1000);

			}

			if (includeMsgBoardNotification) {
				try {
					if ($("#message_board_check").find(".timestamp .warning").length > 0 && (sessionStorage["mfl_messages_" + league_id] === undefined || parseInt(sessionStorage["mfl_messages_" + league_id]) < currentServerTime)) {
						showNotificationBar("You Have A New Message Board Post!", "messages");
						sessionStorage.setItem("mfl_messages_" + league_id, currentServerTime + trade_notification_interval);
					}
				} catch (er) {}
			}

			if (includeTradeNotification) {

				if (leagueAttributes['PendingTradesForCommish'] === undefined && leagueAttributes['PendingTradesToMe'] === undefined) {

					//console.log("TRADE MODULE doesn't exist");

					fetch(`${baseURLDynamic}/${year}/home/${league_id}?MODULE=TRADES`)
						.then(function (response) {
							if (response.ok) {
								return response.text();
							} else {
								throw new Error('Network response was not OK');
							}
						})
						.then(function (data) {
							if (franchise_id === "0000") { //IF COMMISSIONER

								var _trades_waiting = parseInt(jQuery(data).find("#trades tr:eq(0) td:eq(0)").text());

								if (_trades_waiting > 0 && (sessionStorage["mfl_approval_" + league_id] === undefined || parseInt(sessionStorage["mfl_approval_" + league_id]) < currentServerTime)) {

									showNotificationBar("Trades awaiting commissioner approval!", "trade");

									sessionStorage.setItem("mfl_approval_" + league_id, currentServerTime + trade_notification_interval);

								}
							} else {
								var _trades_from_me = parseInt(jQuery(data).find("#trades tr:eq(0) td:eq(0)").text());

								var _trades_to_me = parseInt(jQuery(data).find("#trades tr:eq(1) td:eq(0)").text());

								var _trades_waiting = parseInt(jQuery(data).find("#trades tr:eq(2) td:eq(0)").text());

								if (_trades_to_me > 0 && (sessionStorage["mfl_trade_" + league_id] === undefined || parseInt(sessionStorage["mfl_trade_" + league_id]) < currentServerTime)) {

									showNotificationBar("You have been offered a trade!", "trade");

									sessionStorage.setItem("mfl_trade_" + league_id, currentServerTime + trade_notification_interval);

								}

							}
						})
						.catch(function (error) {
							// Handle error here
							console.log('Error:', error);
						});

				} else {

					//console.log("TRADE MODULE exists");

					if (franchise_id === "0000") { //IF COMMISSIONER

						if (leagueAttributes['PendingTradesForCommish'] > 0 && (sessionStorage["mfl_approval_" + league_id] === undefined || parseInt(sessionStorage["mfl_trade_" + league_id]) < currentServerTime)) {

							showNotificationBar("Trades awaiting commissioner approval!", "trade");

							sessionStorage.setItem("mfl_approval_" + league_id, currentServerTime + trade_notification_interval);

						}

					} else {

						if (leagueAttributes['PendingTradesToMe'] > 0 && (sessionStorage["mfl_trade_" + league_id] === undefined || parseInt(sessionStorage["mfl_trade_" + league_id]) < currentServerTime)) {

							showNotificationBar("You have been offered a trade!", "trade");

							sessionStorage.setItem("mfl_trade_" + league_id, currentServerTime + trade_notification_interval);

						}

					}

				}

			}

		}

	});
} // END NOTIFICATION SCRIPT


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// Rosters Script  https://www.mflscripts.com/mfl-apps/rosters/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


if ((load_rosters_script) && ($('#body_options_07').length && $('td.two_column_layout').length)) {
	if ($('#body_options_07 .warning:contains("League"):contains("settings"):contains("prevent")').length) {
		$('#body_options_07 table.two_column_layout').addClass('rosterRemove');
		$('#body_options_07 table.two_column_layout').before('<div id="pre_load_html"><h2 class="warning">League settings prevent roster report from being viewed.</h2></div>');
		$('#body_options_07 .rosterRemove,#body_options_07 .weekly-navbar,#body_options_07 .weekly-navbar-mobile,#body_options_07 .reportnavigation').remove();
	} else {
		//console.log('ROSTER SCRIPT LAST UPDATED 12-11-21');

		$('#body_options_07').addClass('rosters_display roster_base');

		//HIT API FOR CALENDAR TO GET TRADE DEADLINE OR REMOVE BUTTONS IF VARIABLE IS FALSE
		if (tradeViewPermission && typeof franchise_id !== "undefined") {
			getCalendarDataFromAjax(getURLForCalendar());
		}

		// LOOP AND FIND THE FIRST FRANCHISES THAT APPEAR ON THE PAGE (THIS SHOULD WORK FOR NORMAL LEAGUES AND DELUXE LEAGUES
		var fid_found = new Array();
		var fid_first_found = "";
		var fid_second_found = "";
		$('#body_options_07 table.two_column_layout').addClass('rosterRemove').find('caption a[class^="franchise_"],caption a[class^="myfranchise franchise_"]').each(function () {
			fid_found[$(this).attr("class").substr($(this).attr("class").indexOf('franchise_') + 10, 4)] = true;
			if (fid_first_found === "")
				fid_first_found = $(this).attr("class").substr($(this).attr("class").indexOf('franchise_') + 10, 4);
			else if (fid_second_found === "")
				fid_second_found = $(this).attr("class").substr($(this).attr("class").indexOf('franchise_') + 10, 4);
		});

		// ASSIGN FIRST FOUND TO BOTH MIDDLE AND RIGHT
		var fid_middle = fid_first_found;
		var fid_right = fid_first_found;

		// RESET THE MIDDLE FRANCHISE IF LOGGED IN
		// IF LOGGED IN AS COMMISH AND FID_COMMISH IS SET THEN SET MIDDLE FRANCHISE TO FID_COMMISH; 
		if (typeof franchise_id !== "undefined") {
			if (typeof fid_commish !== "undefined" && franchise_id === "0000")
				fid_middle = fid_commish;
			else
				fid_middle = franchise_id;
		}

		//FOR DELUXE LEAGUES THE CURRENT COMMISH FID AND/OR LOGGED IN OWNER FID MAY NOT EXIST SO WE NEED TO RESET
		if (!fid_found.hasOwnProperty(fid_middle)) fid_middle = fid_first_found;
		//CHANGE RIGHT FRANCHISE IF THE SAME AS MIDDLE FRANCHISE
		if (fid_right === fid_middle) fid_right = fid_second_found;
		//console.log(fid_middle + " " + fid_right);

			

		//IF VARIABLE ARE UNDEFINED THEN DEFINE THEM
		if (RosterEnableMedia == undefined) var RosterEnableMedia = true;
		if (SetCaptionIconWidth == undefined) var SetCaptionIconWidth = 250;
		if (SetLeftColumnWidth == undefined) var SetLeftColumnWidth = 150;
		if (showNav == undefined) var showNav = true;
		if (tradeViewPermission == undefined) var tradeViewPermission = true;
		if (showMFLdefaultBtn == undefined) var showMFLdefaultBtn = false;
		if (leagueTypeNormal == undefined) var leagueTypeNormal = true;
		if (fid_commish == undefined) var fid_commish = "0001";
		if (showAllstatus == undefined) var showAllstatus = false;
		if (showCalculator == undefined) var showCalculator = false;
		if (showTopCalculator == undefined) var showTopCalculator = false;
		if (calcHeaderName == undefined) var calcHeaderName = 'Give Up';
		if (showTradesDefault == undefined) var showTradesDefault = false;
		if (hideTilClk == undefined) var hideTilClk = false;
		if (rosCapdisplay == undefined) var rosCapdisplay = '4';
		if (precision === undefined) var precision = 0;
		if (salary_precision === undefined) var salary_precision = 2;
		if (rosEnableSwipe == undefined) var rosEnableSwipe = false;

		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		///// APPEND GENERAL ROSTERS SCRIPT CSS TO BODY
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		$("head").append("<style>#roster_column_left td.no_icons a{padding:0.313rem;border-radius:0.313rem;margin-top:0.188rem;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:9.063rem}#roster_column_left td.no_icons a{max-width:" + (SetLeftColumnWidth - 5) + (useREM ? 'rem' : 'px') + "}#roster_column_left > table > tbody > tr:first-child > td.no_icons > a{margin-top:0}.roster_assets thead a:before{content:'.';display:block;width:100%;position:absolute;left:0;z-index:99999;color:transparent}.roster_assets thead th{position:relative}#messageBoxDIV textarea{width:100%}tr.Taxi_firstTR th{position:relative}tr.Taxi_firstTR a:before{content:'.';display:block;width:100%;position:absolute;left:0;z-index:99999;color:transparent}tr.ir_firstTR th{position:relative}tr.ir_firstTR a:before{content:'.';display:block;width:100%;position:absolute;left:0;z-index:99999;color:transparent}.rosters_trades_display #roster input[type=checkbox]{-ms-transform: scale(1.2);-moz-transform: scale(1.2);-webkit-transform: scale(1.2);-o-transform: scale(1.2);margin:0.125rem}a.show_toggler:after,a.show_toggler_taxi:after{font-family:'Font Awesome 6 Pro';margin-right:0.188rem;display:inline-flex;content:'\\f0fe'}a.hide_toggler:after,a.hide_toggler_taxi:after{font-family:'Font Awesome 6 Pro';margin-right:0.188rem;display:inline-flex;content:'\\f146'}td.icon_column div[class*='franTeam_']+a{display:none}#pre_load_html #propseTradeButtonDIV,#pre_load_html #MFLroster #messageBoxDIV,#rosterTradeLinkDIV,.mobile-wrap.reviewwrap{margin-left:" + (SetLeftColumnWidth + 5) + (useREM ? 'rem' : 'px') + ";margin-right:0.313rem}td.icon_column .franchiseicon{padding:0 0.313rem;padding:0 .313rem;max-height:5rem;max-height:5rem;display:block;margin:0 auto;height:auto;width:auto}#roster caption.withfranchiseicon .franchiseicon{height:auto;max-width:100%;max-height:5rem;max-height:5rem}#rosterTradeLinkDIV input.inactivetab{opacity:.5}#roster caption.withfranchiseicon{padding-left:0.188rem;padding-left:.188rem;padding-right:0.188rem;padding-right:.188rem}#roster_column_left a:hover,#roster_column_left tr:hover,.hideShowAssets{cursor:pointer}td.icon_column{width:" + SetLeftColumnWidth + (useREM ? 'rem' : 'px') + ";padding:0}td.icon_column .franchiseicon{max-width:" + SetLeftColumnWidth + (useREM ? 'rem' : 'px') + "}#roster caption.withfranchiseicon .franchiseicon {width:100%;max-width:" + SetCaptionIconWidth + (useREM ? 'rem' : 'px') + "!important}#MFLroster #propseTradeButtonDIV p.form_buttons{margin-top:0}#roster_column_left td img+a{display:none}.buttonDisabled{pointer-events:none}@media only screen and (max-width: 48em){#MFLroster .mobile-view{float:none}}#rosterTradeLinkDIV input.inactivetab:hover{opacity:1}.roster_base #roster_column_right .mobile-wrap{display:none}.roster_base #roster_column_right .mobile-wrap.active{display:block}</style>");

		// CSS TO INCLUDE IF "leagueTypeNormal" VAR SET TO TRUE (This places icon show/hide menu on top of reports)
		if (!leagueTypeNormal) {
			$("head").append("<style>#pre_load_html .mobile-view{width:100%!important;float:left}td.two_column{display:inline-table;width:50%}#roster_column_left{overflow:auto;-webkit-overflow-scrolling:touch}#MFLroster table{text-align:center}#roster_column_left tr{display:table-cell}td.icon_column{padding:0.625rem 0.313rem!important}#pre_load_html #MFLroster #messageBoxDIV,#pre_load_html #propseTradeButtonDIV,#rosterTradeLinkDIV,.mobile-wrap.reviewwrap{margin-left:0.313rem!important;margin-right:0.313rem!important}#roster_column_left{margin:0 auto}#pre_load_html .mobile-view{display:flex}</style>");
		} else {
			$("head").append("<style>.roster_base #rosSwipe .mobile-wrap{margin:0 0.313rem 0.625rem}.roster_base #rosSwipe #roster_column_middle .mobile-wrap{margin-left:0}.roster_base #rosSwipe #roster_column_right .mobile-wrap{margin-right:0}</style>");
		}

		// CSS TO INCLUDE FOR CONTRACT-SALARY LEAGUES USING RESPONSIVE DESIGNS
		if (RosterEnableMedia == true && leagueTypeNormal == false) {
			$("head").append('<style>@media only screen and (max-width:65.625em){#roster tr td:nth-of-type(8),#roster tr th:nth-of-type(8),#roster tr th[colspan="2"]+th+th+th+th+th,#roster tr th[colspan="3"]+th+th+th+th+th,#roster tr th[colspan="4"]+th+th+th+th+th,.rosters_trades_display #roster tr td:nth-of-type(9),.rosters_trades_display #roster tr th:nth-of-type(9),.rosters_trades_display #roster tr th[colspan="2"]+th+th+th+th+th,.rosters_trades_display #roster tr th[colspan="3"]+th+th+th+th+th,.rosters_trades_display #roster tr th[colspan="4"]+th+th+th+th+th{display:none!important}.rosters_trades_display #roster tr td:nth-of-type(8),.rosters_trades_display #roster tr th:nth-of-type(8){display:table-cell!important}}@media only screen and (max-width:56.25em){#roster tr td:nth-of-type(7),#roster tr th:nth-of-type(7),#roster tr th[colspan="2"]+th+th+th+th,#roster tr th[colspan="3"]+th+th+th+th,#roster tr th[colspan="4"]+th+th+th+th,.rosters_trades_display #roster tr td:nth-of-type(8),.rosters_trades_display #roster tr th:nth-of-type(8),.rosters_trades_display #roster tr th[colspan="2"]+th+th+th+th,.rosters_trades_display #roster tr th[colspan="3"]+th+th+th+th,.rosters_trades_display #roster tr th[colspan="4"]+th+th+th+th{display:none!important}.rosters_trades_display #roster tr td:nth-of-type(7),.rosters_trades_display #roster tr th:nth-of-type(7){display:table-cell!important}}@media only screen and (max-width:53.125em){#roster tr td:nth-of-type(6),#roster tr th:nth-of-type(6),#roster tr th[colspan="2"]+th+th+th,#roster tr th[colspan="3"]+th+th+th,#roster tr th[colspan="4"]+th+th+th,.rosters_trades_display #roster tr td:nth-of-type(7),.rosters_trades_display #roster tr th:nth-of-type(7),.rosters_trades_display #roster tr th[colspan="2"]+th+th+th,.rosters_trades_display #roster tr th[colspan="3"]+th+th+th,.rosters_trades_display #roster tr th[colspan="4"]+th+th+th{display:none!important}.rosters_trades_display #roster tr td:nth-of-type(6),.rosters_trades_display #roster tr th:nth-of-type(6){display:table-cell!important}}@media only screen and (max-width:46.875em){#roster tr td:nth-of-type(5),#roster tr th:nth-of-type(5),#roster tr th[colspan="2"]+th+th,#roster tr th[colspan="3"]+th+th,#roster tr th[colspan="4"]+th+th,.rosters_trades_display #roster tr td:nth-of-type(6),.rosters_trades_display #roster tr th:nth-of-type(6),.rosters_trades_display #roster tr th[colspan="2"]+th+th,.rosters_trades_display #roster tr th[colspan="3"]+th+th,.rosters_trades_display #roster tr th[colspan="4"]+th+th{display:none!important}.rosters_trades_display #roster tr td:nth-of-type(5),.rosters_trades_display #roster tr th:nth-of-type(5){display:table-cell!important}}@media only screen and (max-width:40em){.rosters_full_display td.two_column div.mobile-wrap{width: 100%!important;margin:0 0 0.625rem 0!important}td.two_column{width:100%}#roster tr td:nth-of-type(8),#roster tr th:nth-of-type(8),#roster tr th[colspan="2"]+th+th+th+th+th,#roster tr th[colspan="3"]+th+th+th+th+th,#roster tr th[colspan="4"]+th+th+th+th+th,.rosters_trades_display #roster tr td:nth-of-type(9),.rosters_trades_display #roster tr th:nth-of-type(9),.rosters_trades_display #roster tr th[colspan="2"]+th+th+th+th+th,.rosters_trades_display #roster tr th[colspan="3"]+th+th+th+th+th,.rosters_trades_display #roster tr th[colspan="4"]+th+th+th+th+th{display:table-cell!important}#roster tr td:nth-of-type(7),#roster tr th:nth-of-type(7),#roster tr th[colspan="2"]+th+th+th+th,#roster tr th[colspan="3"]+th+th+th+th,#roster tr th[colspan="4"]+th+th+th+th,.rosters_trades_display #roster tr td:nth-of-type(8),.rosters_trades_display #roster tr th:nth-of-type(8),.rosters_trades_display #roster tr th[colspan="2"]+th+th+th+th,.rosters_trades_display #roster tr th[colspan="3"]+th+th+th+th,.rosters_trades_display #roster tr th[colspan="4"]+th+th+th+th{display:table-cell!important}#roster tr td:nth-of-type(6),#roster tr th:nth-of-type(6),#roster tr th[colspan="2"]+th+th+th,#roster tr th[colspan="3"]+th+th+th,#roster tr th[colspan="4"]+th+th+th,.rosters_trades_display #roster tr td:nth-of-type(7),.rosters_trades_display #roster tr th:nth-of-type(7),.rosters_trades_display #roster tr th[colspan="2"]+th+th+th,.rosters_trades_display #roster tr th[colspan="3"]+th+th+th,.rosters_trades_display #roster tr th[colspan="4"]+th+th+th{display:table-cell!important}#roster tr td:nth-of-type(5),#roster tr th:nth-of-type(5),#roster tr th[colspan="2"]+th+th,#roster tr th[colspan="3"]+th+th,#roster tr th[colspan="4"]+th+th,.rosters_trades_display #roster tr td:nth-of-type(6),.rosters_trades_display #roster tr th:nth-of-type(6),.rosters_trades_display #roster tr th[colspan="2"]+th+th,.rosters_trades_display #roster tr th[colspan="3"]+th+th,.rosters_trades_display #roster tr th[colspan="4"]+th+th{display:table-cell!important}}@media only screen and (max-width:33.75em){#roster tr td:nth-of-type(8),#roster tr th:nth-of-type(8),#roster tr th[colspan="2"]+th+th+th+th+th,#roster tr th[colspan="3"]+th+th+th+th+th,#roster tr th[colspan="4"]+th+th+th+th+th,.rosters_trades_display #roster tr td:nth-of-type(9),.rosters_trades_display #roster tr th:nth-of-type(9),.rosters_trades_display #roster tr th[colspan="2"]+th+th+th+th+th,.rosters_trades_display #roster tr th[colspan="3"]+th+th+th+th+th,.rosters_trades_display #roster tr th[colspan="4"]+th+th+th+th+th{display:none!important}.rosters_trades_display #roster tr td:nth-of-type(8),.rosters_trades_display #roster tr th:nth-of-type(8){display:table-cell!important}}@media only screen and (max-width:31.25em){#roster tr td:nth-of-type(7),#roster tr th:nth-of-type(7),#roster tr th[colspan="2"]+th+th+th+th,#roster tr th[colspan="3"]+th+th+th+th,#roster tr th[colspan="4"]+th+th+th+th,.rosters_trades_display #roster tr td:nth-of-type(8),.rosters_trades_display #roster tr th:nth-of-type(8),.rosters_trades_display #roster tr th[colspan="2"]+th+th+th+th,.rosters_trades_display #roster tr th[colspan="3"]+th+th+th+th,.rosters_trades_display #roster tr th[colspan="4"]+th+th+th+th{display:none!important}.rosters_trades_display #roster tr td:nth-of-type(7),.rosters_trades_display #roster tr th:nth-of-type(7){display:table-cell!important}}@media only screen and (max-width:28.125em){#roster tr td:nth-of-type(6),#roster tr th:nth-of-type(6),#roster tr th[colspan="2"]+th+th+th,#roster tr th[colspan="3"]+th+th+th,#roster tr th[colspan="4"]+th+th+th,.rosters_trades_display #roster tr td:nth-of-type(7),.rosters_trades_display #roster tr th:nth-of-type(7),.rosters_trades_display #roster tr th[colspan="2"]+th+th+th,.rosters_trades_display #roster tr th[colspan="3"]+th+th+th,.rosters_trades_display #roster tr th[colspan="4"]+th+th+th{display:none!important}.rosters_trades_display #roster tr td:nth-of-type(6),.rosters_trades_display #roster tr th:nth-of-type(6){display:table-cell!important}}@media only screen and (max-width:25em){#roster tr td:nth-of-type(5),#roster tr th:nth-of-type(5),#roster tr th[colspan="2"]+th+th,#roster tr th[colspan="3"]+th+th,#roster tr th[colspan="4"]+th+th,.rosters_trades_display #roster tr td:nth-of-type(6),.rosters_trades_display #roster tr th:nth-of-type(6),.rosters_trades_display #roster tr th[colspan="2"]+th+th,.rosters_trades_display #roster tr th[colspan="3"]+th+th,.rosters_trades_display #roster tr th[colspan="4"]+th+th{display:none!important}.rosters_trades_display #roster tr td:nth-of-type(5),.rosters_trades_display #roster tr th:nth-of-type(5){display:table-cell!important}}@media only screen and (max-width: 56.25em){#roster caption{font-size:1rem}.roster_assets th,.roster_assets td,#roster td,#roster th{font-size:0.813rem}}@media only screen and (max-width: 50em){#roster caption{font-size:1rem}.roster_assets th,.roster_assets td,#roster td,#roster th{font-size:0.75rem}}@media only screen and (max-width: 40em){#roster caption{font-size:1rem}.roster_assets th,.roster_assets td,#roster td,#roster th{font-size:0.813rem}#MFLroster #tradereview td[width="50%"]{width:100%!important;display:inline-block;}#MFLroster #tradereview td[width="50%"]:nth-child(2){margin-top:0.938rem}}@media only screen and (max-width: 26.875em){#roster caption{font-size:0.938rem}.roster_assets th,.roster_assets td,#roster td,#roster th{font-size:0.75rem}}@media only screen and (max-width: 20em){#roster caption{font-size:0.938rem}.roster_assets th,.roster_assets td,#roster td,#roster th{font-size:0.688rem}}@media only screen and (max-width: 17.5em){#roster caption{font-size:0.875rem}.roster_assets th,.roster_assets td,#roster td,#roster th{font-size:0.625rem}}</style>');
		}

		// CSS TO INCLUDE FOR STANDARD LEAGUES USING RESPONSIVE DESIGNS
		if (RosterEnableMedia && leagueTypeNormal) {
			$("head").append("<style>@media only screen and (max-width: 58em){body.roster_base #deadlinePassed{padding-bottom:0!important}body.roster_base #pre_load_html .mobile-view{width:100%!important;float:left}body.roster_base #roster_column_left{margin:0 auto}body.roster_base #pre_load_html .mobile-view{display:flex}body.roster_base td.icon_column{padding:0.625rem 0;padding:.625rem 0}body.roster_base #roster_column_left{overflow:auto;-webkit-overflow-scrolling:touch}body.roster_base #roster_column_left tr{display:table-cell}body.roster_base td.two_column{display:inline-table;width:50%}body.roster_base #MFLroster table{text-align:center}body.roster_base #pre_load_html #MFLroster #messageBoxDIV,body.roster_base #pre_load_html #propseTradeButtonDIV,body.roster_base #rosterTradeLinkDIV,.mobile-wrap.reviewwrap{margin-left:0.313rem!important;margin-right:0.313rem!important}}@media only screen and (max-width: 49em){body.roster_base #roster .drafted{display:none!important}}@media only screen and (max-width: 48em){body.roster_base #pre_load_html #MFLroster .mobile-view{float:left}body.roster_base #roster_column_left{margin:0.625rem 0}}@media only screen and (max-width: 40em){body.roster_base #roster .week{display:none!important}}@media only screen and (max-width: 34em){body.roster_base #roster caption span{background:none;padding:0}body.roster_base #roster caption{text-indent:0;padding-left:0.313rem;padding-left:.313rem}body.roster_base #roster .points{display:none!important}}@media only screen and (max-width: 44em){.rosters_full_display td.two_column div.mobile-wrap{width:100%!important;margin:0 0 0.625rem 0!important}}@media only screen and (max-width: 56.25em){.roster_base #roster caption{font-size:1.063rem}.roster_assets th,.roster_assets td,.roster_base #roster td,.roster_base #roster th{font-size:0.813rem}}@media only screen and (max-width: 43.75em){.roster_base #roster caption{font-size:1rem}.roster_assets th,.roster_assets td,.roster_base #roster td,.roster_base #roster th{font-size:0.75rem}}@media only screen and (max-width: 40em){.roster_base #roster caption{font-size:1rem}.roster_assets th,.roster_assets td,.roster_base #roster td,.roster_base #roster th{font-size:0.75rem}}@media only screen and (max-width: 33.125em){.roster_base #roster caption{font-size:0.938rem}.roster_assets th,.roster_assets td,.roster_base #roster td,.roster_base #roster th{font-size:0.75rem}}@media only screen and (max-width: 28.75em){.roster_base #roster caption{font-size:0.938rem}.roster_assets th,.roster_assets td,.roster_base #roster td,.roster_base #roster th{font-size:0.625rem}}@media only screen and (max-width: 20em){.roster_base #roster caption{font-size:0.813rem}.roster_assets th,.roster_assets td,.roster_base #roster td,.roster_base #roster th{font-size:0.563rem}}@media only screen and (max-width: 50em){.rosters_full_display #roster caption{font-size:1.063rem}.rosters_full_display #roster td,.rosters_full_display #roster th{font-size:0.813rem}}@media only screen and (max-width: 44em){.rosters_full_display #roster caption{font-size:1.063rem}.rosters_full_display #roster td,.rosters_full_display #roster th{font-size:0.813rem}}@media only screen and (max-width: 33.125em){.rosters_full_display #roster caption{font-size:0.938rem}.rosters_full_display #roster td,.rosters_full_display #roster th{font-size:0.75rem}}@media only screen and (max-width: 28.75em){.rosters_full_display #roster caption{font-size:0.938rem}.rosters_full_display #roster td,.rosters_full_display #roster th{font-size:0.688rem}}@media only screen and (max-width: 20em){.rosters_full_display #roster caption{font-size:0.813rem}.rosters_full_display #roster td,.rosters_full_display #roster th{font-size:0.563rem}}@media only screen and (max-width: 33.75em){#MFLroster #tradereview td[width='50%']{width:100%!important;display:inline-block}#MFLroster #tradereview td[width='50%']:nth-child(2){margin-top:0.938rem}#tradereview .franchiseicon{max-width:11.25rem;min-width:6.25rem}}</style>");

		}

		// CSS TO INCLUDE IF "showMFLdefaultBtn" VAR SET TO TRUE
		if (showMFLdefaultBtn) {
			$("head").append("<style>.rosters_full_display #roster_column_right div.mobile-wrap{display:inline-block;width:calc(50% - 0.625rem);vertical-align:top;margin:0 0.313rem 0.625rem 0.313rem}.rosters_full_display #MFLroster #messageBoxDIV{margin:0.438rem!important}.rosters_full_display td.two_column{width:100%;text-align:center}.rosters_full_display #rosterViewTab,.rosters_full_display #tradeViewTab,.rosters_full_display .left_column,.rosters_full_display .icon_column{display:none!important}.rosters_full_display #roster_column_right div.mobile-wrap{display:inline-block!important}.rosters_full_display #rosterViewTab{display:inline!important}.rosters_full_display #allViewTab{display:none!important}.rosters_full_display #rosterTradeLinkDIV{margin-left:0.313rem!important;margin-right:0.313rem!important}</style>");
		}


		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		///// START FUNCTIONS TO CREATE AND MANIPULATE ROSTERS PAGE
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		function createRosters() {
			// CREATE NEW HTML FOR ROSTER PAGE AND APPEND TO OPTIONS 07 PAGE
			$('#body_options_07 table.two_column_layout').before('<div id="pre_load_html"><form  method="post" id="proposeTradeForm"><input type="hidden" id="LEAGUE_ID" name="LEAGUE_ID" value="" /><input type="hidden" id="TRADE_EXPIRES_MONTH" name="TRADE_EXPIRES_MONTH" value="" /><input type="hidden" id="TRADE_EXPIRES_DAY" name="TRADE_EXPIRES_DAY" value="" /><input type="hidden" id="TRADE_EXPIRES_TIME" name="TRADE_EXPIRES_TIME" value="01" /><input type="hidden" id="TRADE_EXPIRES_YEAR" name="TRADE_EXPIRES_YEAR" value="" /><input type="hidden" id="FRANCHISE_ID" name="FRANCHISE_ID" value="" /><div id="MFLroster"><div id="rosterTradeLinkDIV" style="text-align:center"><input id="rosterViewTab" class="currenttab" style="text-transform:uppercase" value="Rosters" onclick="javascript:rosterViewClickFunction(); return false;" type="submit"><input id="tradeViewTab" class="inactivetab" style="text-transform: uppercase;" value="Trades" onclick="javascript:tradeViewClickFunction(); return false;" type="submit"><div id="appendRos" style="display:none"></div><h3 id="deadlinePassed" class="warning" style="display:none;padding-bottom:0.625rem">Trading Deadline Expired</h3></div><table align="center" style="table-layout:fixed;border-spacing:0.188rem 0"><tr><td class="mobile-view icon_column" style="vertical-align:top"><div id="roster_column_left"></div></td><td style="display:inline-table;width:100%;"><table id="rosSwipe" style="table-layout:fixed"><tr><td class="two_column left_column" style="vertical-align:top"><div id="roster_column_middle"></div></td><td class="two_column right_column" style="vertical-align:top"><div id="roster_column_right"></div></td></tr></table></td></tr></table><div id="messageBoxDIV" class="mobile-wrap"></div><div id="propseTradeButtonDIV" style="display:none"><p class="form_buttons"><input type="submit" value="Perform Trade" style="display:none;text-transform:uppercase" name="Perform" onclick="javascript:performTrade(); return false;" /><input type="submit" value="Propose Trade" style="text-transform:uppercase" name="Propose" onclick="javascript:proposeTrade(); return false;" /></p></div></div></form></div>');

			// LOGIC TO SHOW AN HIDE ROSTER - TRADE AND FULL ROSTERS BUTTONS
			if (tradeViewPermission && typeof franchise_id !== "undefined") {
				getAssetsJSON();
			} else {
				$('#tradeViewTab').remove();
			}
			if (typeof franchise_id === "undefined") {
				if (showMFLdefaultBtn) {} else {
					$('#rosterViewTab').remove();
				}
			}
			if (tradeViewPermission == false && showMFLdefaultBtn == false) {
				$('#rosterViewTab').remove();
			}
			if (tradeViewPermission) {
				if (window.location.href.indexOf("WEEK=") < 0 || parseInt(window.location.href.substr(window.location.href.indexOf("&WEEK=") + 6, 2)) === (completedWeek + 1)) {
					// DO NOTHING
				} else {
					$('#tradeViewTab,#deadlinePassed').remove();
					if (showMFLdefaultBtn) {} else {
						$('#rosterViewTab').remove();
					}
				}
			}

			if (tradeViewPermission && showTradesDefault) {
				setTimeout(function () {
					tradeViewClickFunction();
				}, 1000);
			}

			// REMOVE SOME HTML ON ROSTERS PAGE
			if (showNav) {
				$('#body_options_07 .ownername').hide();
			} else {
				$('#body_options_07 h3:contains("Display"),#body_options_07 .reportnavigation,#body_options_07 .weekly-navbar,#body_options_07 .weekly-navbar-mobile').remove();
				$('#body_options_07 .ownername').hide();
			}
			// ADD CLASS TO EACH ROSTERS TABLE TO IDENTIFY BASED ON FRANCHISE ID
			$('#body_options_07 table.two_column_layout').find('caption a[class^="franchise_"],caption a[class^="myfranchise franchise_"]').each(function () {
				var fid = $(this).attr("class").substr($(this).attr("class").indexOf('franchise_') + 10, 4);
				$(this).closest("table").addClass("franchise_" + fid);
			});

			// OLD - function rostersFunc_two
			// CLONE CAPTION SPANS OR EACH ROSTER TABLE TO CREATE LEFT NAV MENU TO CLICK TO DISPLAY TEAMS
			$('#body_options_07 table.two_column_layout caption span:first-child').clone().appendTo('#roster_column_left');

			// OLD - function rostersFunc_three
			//REMOVE A HREF FOR LEFT COLUMN APPLIED AFTER LEFT COLUMN TABLE CREATED AND APPENED CAPTION SPAN FROM PREV FUNCTION
			$('#roster_column_left a').removeAttr("href");
			//HTML RESTRUCTION FOR LEFT COLUMN APPLIED AFTER LEFT COLUMN TABLE CREATED AND APPENED CAPTION SPAN FROM PREV FUNCTION
			$('#roster_column_left').wrapInner('<table><tbody>');
			$('#roster_column_left span').wrap('<tr><td>');
			$('#roster_column_left tr td span a').unwrap();
			// APPEND ALL ROSTERS TO THE NEW HTML CREATED
			$('#body_options_07 table.two_column_layout td.two_column_layout table').appendTo('#roster_column_right').wrap('<div class="mobile-wrap">');
			if (showMFLdefaultBtn) {
				$('#appendRos').after('<input id="allViewTab" class="inactivetab" style="text-transform:uppercase" value="All Rosters" onclick="javascript:allViewClickFunction(); return false;" type="submit">');
			}

			// OLD - function rostersFunc_four
			$('#body_options_07 #roster_column_right table[class*="franchise_"]').attr('id', 'roster');
			// FROM RIGHT COLUMN ROSTERS APPEND LOGGED IN OR COMMISH ROSTER TO THE MIDDLE COLUMN AND REMOVE THE LEFT COLUMN FRANCHISE ICON OR NAME
			$('#body_options_07 #roster_column_right table.franchise_' + fid_middle).closest('.mobile-wrap').clone().appendTo('#roster_column_middle');
			//$('#body_options_07 #roster_column_middle div.mobile-wrap').show();
			$('#body_options_07 #roster_column_left a.franchise_' + fid_middle).closest('tr').remove();
			// SHOW RIGHT COLUMN ROSTER TO DISPLAY BY DEFAULT FRANCHISE 2 - OR BASED ON ICON CLICKED FROM LEFT COLUMN
			//$('#body_options_07 #roster_column_right table.franchise_' + fid_right).closest('.mobile-wrap').show();


			$('#body_options_07 #roster_column_right table.franchise_' + fid_right).closest('.mobile-wrap').addClass("active");			

			// GIVE LEFT COLUMN TR SAME CLASS AS A TAGS TO TARGET ONCLICK OF TR TO SHOW AND HIDE ROSTERS - NEEDED FROM ICONS AND NAMES DISPLAY
			$('#roster_column_left tr td a').each(function (index) {
				$(this).closest('tr').addClass($(this).attr("class"));
			});
			// Append assets table to each roster
			$('#MFLroster div.mobile-wrap table').each(function () {
				//$(this).after('<table class="homepagemodule report roster_assets" style="padding-top:0;display:none" cellspacing="1" align="center"><thead><tr class="assets"><th colspan="9" style="background:green;color:#fff">Other Trade Assets (<a class="show_toggler_asset" style="cursor:pointer;text-decoration:none;display:inline-block;color:#fff">Show</a><a class="hide_toggler_asset" style="cursor:pointer;display:none;text-decoration:none;color:#fff">Hide</a>)</th></tr></thead><tbody><tr><td colspan="9">test</td></tr><tr><td colspan="9">test</td></tr><tr><td colspan="9">test</td></tr><tr><td colspan="9">test</td></tr></tbody></table>');
				$(this).after('<table class="homepagemodule report roster_assets"style="padding-top:0;display:none" cellspacing="1" align="center"><thead><tr class="assets"><th colspan="9" style="background:green;color:#fff">Other Trade Assets (<a class="show_toggler_asset" style="cursor:pointer;text-decoration:none;display:inline-block;color:#fff">Show</a><a class="hide_toggler_asset" style="cursor:pointer;display:none;text-decoration:none;color:#fff">Hide</a>)</th></tr></thead><tbody></tbody></table>');
			});


			// IR FUNCTIONS SHOW AND HIDE TABLE ROWS
			// TAXI FUNCTIONS SHOW AND HIDE TABLE ROWS
			// OLD - function rostersFunc_five
			$("#body_options_07 table th:contains('Injured'):contains('Reserve')").parent().addClass('ir_firstTR');
			$("#body_options_07 table th:contains('Total'):contains('on'):contains('IR')").parent().addClass('ir_lastTR');

			// IF TRADES COLUMN EXIST MARK TO REMOVE
			if ($('#roster th.trade').length) {
				$('#roster tr').each(function (index) {
					$('th[colspan="3"]').parent().addClass("remove_tr");
					$('td.trade,th.trade').remove();
				});
				$("#body_options_07 tr:contains('Salary'):contains('Adjustments:')").find('td:last').remove();
			}
			$("#body_options_07 table th:contains('Taxi')").not(':contains(on)').parent().addClass('Taxi_firstTR');
			$("#body_options_07 table th:contains('on'):contains('Taxi'):contains('Squad')").parent().addClass('Taxi_lastTR');
			$('#MFLroster').find('caption a[class^="franchise_"],caption a[class^="myfranchise franchise_"]').each(function () {
				var fid = $(this).attr("class").substr($(this).attr("class").indexOf('franchise_') + 10, 4);
				$(this).closest('.mobile-wrap').attr('id', fid);
			});
			// REMOVE DOUBLE WARNINGS FOR MULTIPLE PLAYERS ON IR
			$('#roster tr').has('b.warning').attr('id', 'warning');
			$('#roster tr#warning').each(function () {
				let group = $(this).closest("table");
				group.find('[id="' + this.id + '"]').not(':last').remove();
			});
			loadTradeModule();
			$("#MFLroster #roster th.drafted").each(function () {
				$(this).text("Acq.");
			});
			$("#MFLroster #roster th.points").each(function () {
				$(this).text("Pts");
			});
			$('div table td:contains("Salary"):contains("Adjustments")').css('text-align', 'left');

			$('body').on('click', '.show_toggler_asset', function () {
				let group = $(this).closest("table");
				group.find("tbody").show();
				group.find(".hide_toggler_asset").css('display', 'inline-block');
				group.find(".show_toggler_asset").hide();
			});
			$('body').on('click', '.hide_toggler_asset', function () {
				let group = $(this).closest("table");
				group.find("tbody").hide();
				group.find(".show_toggler_asset").css('display', 'inline-block');
				group.find(".hide_toggler_asset").hide();
			});


			// OLD - function rostersFunc_six
			$("#body_options_07 table tr.ir_firstTR").show();
			$("#body_options_07 table tr.ir_firstTR th").prepend('<a class="show_toggler" style="cursor:pointer;float:right;text-decoration:none">Show </a><a class="hide_toggler" style="cursor:pointer;float:right;display:none;text-decoration:none">Hide </a>');
			$('.ir_lastTR').each(function () {
				$(this).prevUntil('.ir_firstTR').addBack().addClass('IRtoggle');
			});
			// REMOVE COLUMNS FOR TRADES
			$('tr.remove_tr th:last-of-type').remove();
			$('tr.remove_tr').removeClass("remove");

			$("#body_options_07 table tr.Taxi_firstTR").show();
			$("#body_options_07 table tr.Taxi_firstTR th").prepend('<a class="show_toggler_taxi" style="cursor:pointer;float:right;text-decoration:none">Show </a><a class="hide_toggler_taxi" style="cursor:pointer;float:right;display:none;text-decoration:none">Hide </a>');
			$('.Taxi_lastTR').each(function () {
				$(this).prevUntil('.Taxi_firstTR').addBack().addClass('Taxitoggle');
			});
			$('#roster_column_left > table > tbody > tr:first-child > td > a').addClass('rs_active');

			if (($('#roster_column_left td a img').length) || ($('#roster_column_left td div[class*="franTeam_"]').length)) {
				//console.log('yes')
			} else {
				$('#roster_column_left td').addClass('no_icons');
			}
			// OLD - function rostersFunc_seven
			if (showAllstatus) {
				$(".show_toggler,.show_toggler_taxi").hide();
				$(".hide_toggler,.hide_toggler_taxi").show();

				$('body').on('click', '.show_toggler', function () {
					$(this).closest('table').find(".IRtoggle,.IRtoggle td").show();
					$(this).closest('table').find(".hide_toggler").show();
					$(this).closest('table').find(".show_toggler").hide();
				});
				$('body').on('click', '.hide_toggler', function () {
					$(this).closest('table').find(".IRtoggle,.IRtoggle td").hide();
					$(this).closest('table').find(".hide_toggler").hide();
					$(this).closest('table').find(".show_toggler").show();
				});
				$('body').on('click', '.show_toggler_taxi', function () {
					$(this).closest('table').find(".Taxitoggle,.Taxitoggle td").show();
					$(this).closest('table').find(".hide_toggler_taxi").show();
					$(this).closest('table').find(".show_toggler_taxi").hide();
				});
				$('body').on('click', '.hide_toggler_taxi', function () {
					$(this).closest('table').find(".Taxitoggle,.Taxitoggle td").hide();
					$(this).closest('table').find(".hide_toggler_taxi").hide();
					$(this).closest('table').find(".show_toggler_taxi").show();
				});
			} else {
				$(".IRtoggle,.IRtoggle td").hide();
				$('body').on('click', '.show_toggler', function () {
					$(this).closest('table').find(".IRtoggle,.IRtoggle td").show();
					$(this).closest('table').find(".hide_toggler").show();
					$(this).closest('table').find(".show_toggler").hide();
				});
				$('body').on('click', '.hide_toggler', function () {
					$(this).closest('table').find(".IRtoggle,.IRtoggle td").hide();
					$(this).closest('table').find(".hide_toggler").hide();
					$(this).closest('table').find(".show_toggler").show();
				});
				$(".Taxitoggle,.Taxitoggle td").hide();
				$('body').on('click', '.show_toggler_taxi', function () {
					$(this).closest('table').find(".Taxitoggle,.Taxitoggle td").show();
					$(this).closest('table').find(".hide_toggler_taxi").show();
					$(this).closest('table').find(".show_toggler_taxi").hide();
				});
				$('body').on('click', '.hide_toggler_taxi', function () {
					$(this).closest('table').find(".Taxitoggle,.Taxitoggle td").hide();
					$(this).closest('table').find(".hide_toggler_taxi").hide();
					$(this).closest('table').find(".show_toggler_taxi").show();
				});
			}

			// REMOVE OLD ROSTER TABLE
			$('.rosterRemove').remove();

			$('#MFLroster #roster').not(function (index) {
				return $(this).find('td.player , tr.salary_warning_row').length
			}).each(function (index, elem) {
				$(this).append('<tr><td colspan="12" class="warning">Franchise has no roster or hidden</td></tr>');
			});

			$("#roster_column_middle table caption span a,#roster_column_right table caption span a").each(function () {
				var href = $(this).attr("href");
				var imgPathURL = href.substr(href.indexOf("F=") + 2, 4);
				var imgPathURLKey = 'fid_' + imgPathURL;
				switch (rosCapdisplay) {
					case '0':
						$(this).html('<img class="franchiseicon" src="' + franchiseDatabase[imgPathURLKey].icon + '">');
						$(this).closest('caption').addClass('withfranchiseicon');
						break;
					case '1':
						$(this).html('<img class="franchiselogo" src="' + franchiseDatabase[imgPathURLKey].logo + '">');
						$(this).closest('caption').addClass('withfranchiseicon');
						break;
					case '2':
						$(this).html(franchiseDatabase[imgPathURLKey].name);
						$(this).closest('caption').removeClass('withfranchiseicon');
						break;
					case '3':
						$(this).html(franchiseDatabase[imgPathURLKey].abbrev);
						$(this).closest('caption').removeClass('withfranchiseicon');
						break;
					default: //DO NOTHING
				}
			});

		}


		createRosters();


		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		///// SHOW ROSTERS AND SHOW TRADE BUTTONS FUNCTIONS
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		function rosterViewClickFunction() {
			$('#body_options_07 #noSwipe').attr('id','rosSwipe');
			$('#body_options_07 #tradeViewTab').css('pointer-events', 'all');
			$('#body_options_07').addClass('rosters_display roster_base');
			$('#body_options_07').removeClass('rosters_trades_display rosters_full_display');
			if (showAllstatus) {
				$(".IRtoggle,.IRtoggle td,.Taxitoggle,.Taxitoggle td").show();
				$(".hide_toggler,.hide_toggler_taxi").show();
				$(".show_toggler,.show_toggler_taxi").hide();
			} else {
				$(".IRtoggle,.IRtoggle td,.Taxitoggle,.Taxitoggle td").hide();
				$(".hide_toggler,.hide_toggler_taxi").hide();
				$(".show_toggler,.show_toggler_taxi").show();
			}
			if (!$('#rosterViewTab').hasClass('currenttab')) {
				$('#rosterViewTab').val('Rosters');
				if (showMFLdefaultBtn && tradeViewPermission) {
					$("#deadlinePassed").html('Trading Deadline Expired');
				}
				showRosterDetails();
				$('#propseTradeButtonDIV').hide();
				$('#MFLroster .checkBox,#MFLroster .no-checkBox').remove();
				$('#rosterViewTab').addClass('currenttab');
				$('#tradeViewTab,#allViewTab').addClass('inactivetab');
				$('#tradeViewTab,#allViewTab').removeClass('currenttab');
				$('#rosterViewTab').removeClass('inactivetab');
				$('#messageBoxDIV').html('');
			}
			if (showCalculator) {
				$('.reviewwrap , .savingsreview').remove();
				$('.roster_assets tbody').empty();
				assets_appended = false;
			}
		}

		function tradeViewClickFunction() {
			$('#body_options_07 #noSwipe').attr('id','rosSwipe');
			$('#body_options_07 #tradeViewTab').css('pointer-events', 'none');
			if (!assets_appended) appendAssets();
			if (showAllstatus) {
				$(".IRtoggle,.IRtoggle td,.Taxitoggle,.Taxitoggle td").show();
				$(".hide_toggler,.hide_toggler_taxi,.roster_assets tbody,.hide_toggler_asset").show();
				$(".show_toggler,.show_toggler_taxi").hide();
				$(".show_toggler_asset").css('display', 'none');
				$(".hide_toggler_asset").css('display', 'inline-block');
			} else {
				$(".IRtoggle,.IRtoggle td,.Taxitoggle,.Taxitoggle td").hide();
				$(".hide_toggler,.hide_toggler_taxi,.roster_assets tbody,.hide_toggler_asset").hide();
				$(".show_toggler,.show_toggler_taxi").show();
				$(".show_toggler_asset").css('display', 'inline-block');
			}
			$("head").append('<style>.roster_assets input[type="text"]{min-width:0}.rosters_trades_display .roster_assets{display:table!important}</style>');
			if (!$('#tradeViewTab').hasClass('currenttab') || showTradesDefault === true) {
				if (typeof franchise_id !== "undefined") {
					showTradeDetails();
					$('#propseTradeButtonDIV').show();
					$('#tradeViewTab').addClass('currenttab');
					$('#rosterViewTab,#allViewTab').addClass('inactivetab');
					$('#tradeViewTab').removeClass('inactivetab');
					$('#rosterViewTab,#allViewTab').removeClass('currenttab');
					$('#roster_column_middle div:visible tr').eq(0).show();
					$('#roster_column_right div')
						.each(function () {
							var item = $('tr');
							$(this).find(item).eq(0).show();
						});
					$('#messageBoxDIV').html('<table class="report" align="center"><caption><span>Trade Proposal</span></caption><tbody><tr><th>Optional Message to Include With Trade Offer Email:</th></tr><tr><td><' + 'textarea cols="70" rows="5" name="msg"></' + 'textarea' + '></td></tr></tbody></table>');
				}
				if (typeof franchise_id !== 'undefined' && franchise_id !== '' && franchise_id === '0000') { // For Commish login show perform Trade button
					$('[name=Perform]').show();
				}
			}


			if (showCalculator) {
				$("head").append("<style>#tradereview td {vertical-align:top;}#tradereview table th {border:0;}#tradereview table td {text-align:right;}tr.total_salary_row .total, tr.salary_cap_row .difference {text-align:left!important;}.opptradereview caption{display:none;}.savingsreview {padding:0.625rem 0;display:none;position:fixed;z-index:99999;top:auto;bottom:0;left:0;width:100%;box-shadow: 0 0 0.625rem #000}.savingsreview table {width:auto;margin:auto;}.savingsreview th {display:none;min-width:3.75rem;}#tradereview td{white-space:nowrap}.difference{white-space:nowrap}</style>");

				var tradeReview = '<div class="mobile-wrap reviewwrap"><table class="report" id="tradereview"><caption><span>Trade Review</span></caption><tr><td width="50%"><table class="mytradereview"></table></td><td width="50%"><table class="opptradereview"></table></td></tr></table></div><div class="savingsreview"><div class="mobile-wrap" style="width:min-content;margin: 0 auto"><table></table></div></div>';

				$('#body_options_07 #messageBoxDIV').before(tradeReview);
				$('#roster_column_middle #roster, #roster_column_middle .roster_assets').addClass('myroster');
				$('#roster_column_right #roster, #roster_column_right .roster_assets').addClass('opproster');
				$('#roster_column_middle #roster tr:first-child').clone().addClass('tradereviewheader').prependTo('#tradereview td table, .savingsreview table');
				$('.myroster caption').clone().prependTo('.mytradereview');
				$('.opproster caption').clone().prependTo('.opptradereview');
				$('#body_options_07 .opptradereview a.franchise_' + fid_right).closest('caption').show();
				$('#roster_column_middle #roster tr:first-child').clone().addClass('tradetotal total_salary_row').appendTo('#tradereview td table');
				$('#roster_column_middle #roster tr:first-child').clone().addClass('tradedifference salary_cap_row').appendTo('#tradereview td table, .savingsreview table');
				$('.tradetotal th, .tradedifference th').html('');
				$('.savingsreview .player').html('');

				// rename the class names to be targetted later, and not counted in calculations
				$('.tradetotal .player').addClass('total').removeClass('player').html('Total');
				$('.tradetotal .salary').addClass('salarytotal').removeClass('salary');
				$('.tradetotal .contractyear').addClass('yeartotal').removeClass('contractyear');
				$('.tradetotal .points').addClass('pointstotal').removeClass('points');
				$('.tradedifference .player').addClass('difference').removeClass('player').html(calcHeaderName);
				$('.tradedifference .salary').addClass('salarydifference').removeClass('salary');
				$('.tradedifference .contractyear').addClass('yeardifference').removeClass('contractyear');
				$('.tradedifference .points').addClass('pointsdifference').removeClass('points');

				// This section is meant to create calculations for the new cap space after the trade goes through. hasnt been coded yet
				//$('#roster_column_middle #roster tr:first-child').clone().addClass('newcapspace').appendTo($('#tradereview td table'));
				//$('.newcapspace td:first-child').remove();
				//$('.newcapspace td').html('');
				//$('.newcapspace .player').addClass('newcap').removeClass('player').html('New Cap Space');
				//$('.newcapspace .salary').addClass('newsalarycapspace').removeClass('salary');
				//$('.newcapspace .contractyear').addClass('newyearcapspace').removeClass('contractyear');
				//$('.newcapspace .points').addClass('newcapspacepoints').removeClass('points');

				// remove checkboxes on table headers
				$('#tradereview table tr th:first-child').remove();


				if (showTopCalculator) {
					if (hideTilClk && showCalculator) {
						$('.savingsreview').hide();
					} else {
						$('.savingsreview,.savingsreview .player, .savingsreview .difference, .savingsreview .salary, .savingsreview .salarydifference, .savingsreview .contractyear, .savingsreview .yeardifference, .savingsreview .points, .savingsreview .pointsdifference').show();
					}
				} else {
					$('.savingsreview').remove();
				}
				if ($('.savingsreview td.pointsdifference').length > 1) {
					$('.savingsreview td.pointsdifference:last-child').hide()
				}

				$('.report input').on("change", function () {
					if (hideTilClk && showCalculator) {
						$('.reviewwrap,.savingsreview,.savingsreview .player, .savingsreview .difference, .savingsreview .salary, .savingsreview .salarydifference, .savingsreview .contractyear, .savingsreview .yeardifference, .savingsreview .points, .savingsreview .pointsdifference').show();
					}
					if ($(this).is(':checked')) {
						var playerClass = 'player' + $(this).attr('value');
						$(this).closest('tr').addClass(playerClass + ' playerrow');
						var newPlayerRow = $(this).closest('tr').clone();
						newPlayerRow.find('td:first-child').remove();
						newPlayerRow.find('.player a').attr('target', '_blank');
						newPlayerRow.removeClass('oddtablerow eventablerow newposition Taxitoggle IRtoggle');
						setTimeout(function () {
							$("#tradereview table tr:nth-child(odd)").removeClass("eventablerow newposition Taxitoggle IRtoggle").addClass("oddtablerow");
							$("#tradereview table tr:nth-child(even)").removeClass("oddtablerow newposition Taxitoggle IRtoggle").addClass("eventablerow");
						}, 1);
						if ($(this).closest('table').hasClass('myroster')) {


							if ($('.mytradereview tr.playerrow').length) {
								//console.log('mytradereview player row is here');
								$('.mytradereview .playerrow').last().after(newPlayerRow);
							} else {
								//console.log('mytradereview player row is not here');
								$('.mytradereview .tradereviewheader').after(newPlayerRow);
							}
							//$('.mytradereview .tradereviewheader').after(newPlayerRow);
							try {
								MFLPlayerPopupNewsIcon("tradereview .mytradereview");
							} catch (er) {};
						} else {

							if ($('.opptradereview tr.playerrow').length) {
								//console.log('opptradereview player row is here');
								$('.opptradereview .playerrow').last().after(newPlayerRow);
							} else {
								//console.log('opptradereview player row is not here');
								$('.opptradereview .tradereviewheader').after(newPlayerRow);
							}
							//$('.opptradereview .tradereviewheader').after(newPlayerRow);
							try {
								MFLPlayerPopupNewsIcon("tradereview .opptradereview");
							} catch (er) {};
						}
					} else {
						$("#tradereview").find('tr.player' + $(this).attr('value') + '').remove();
						setTimeout(function () {
							$("#tradereview table tr:nth-child(odd)").removeClass("eventablerow newposition Taxitoggle IRtoggle").addClass("oddtablerow");
							$("#tradereview table tr:nth-child(even)").removeClass("oddtablerow newposition Taxitoggle IRtoggle").addClass("eventablerow");
						}, 1);
					}

					// calculate salary
					var mysalarysum = 0;
					var oppsalarysum = 0;
					$('.mytradereview .salary').each(function () {
						var val = $.trim($(this).text());
						if (val) {
							val = parseFloat(val.replace(/^\$/, ""));
							mysalarysum += !isNaN(val) ? val : 0;
						}
					});
					$('.opptradereview .salary').each(function () {
						var val = $.trim($(this).text());
						if (val) {
							val = parseFloat(val.replace(/^\$/, ""));
							oppsalarysum += !isNaN(val) ? val : 0;
						}
					});
					var mySalarySumRounded = mysalarysum.toFixed(salary_precision);
					var oppSalarySumRounded = oppsalarysum.toFixed(salary_precision);
					$('.mytradereview .salarytotal').html('$' + mySalarySumRounded);
					$('.opptradereview .salarytotal').html('$' + oppSalarySumRounded);
					var mySalaryDifference = mySalarySumRounded - oppSalarySumRounded;
					var oppSalaryDifference = oppSalarySumRounded - mySalarySumRounded;
					var mySalaryDifferenceRounded = mySalaryDifference.toFixed(salary_precision);
					var oppSalaryDifferenceRounded = oppSalaryDifference.toFixed(salary_precision);
					$('.mytradereview .salarydifference, .savingsreview .salarydifference').html('$' + mySalaryDifferenceRounded);
					$('.opptradereview .salarydifference').html('$' + oppSalaryDifferenceRounded);

					// calculate contract years
					var yearsum = 0;
					var oppyearsum = 0;
					$('.mytradereview .contractyear').each(function () {
						var val = $.trim($(this).text());
						if (val) {
							val = parseFloat(val.replace(/^\$/, ""));
							yearsum += !isNaN(val) ? val : 0;
						}
					});
					$('.opptradereview .contractyear').each(function () {
						var val = $.trim($(this).text());
						if (val) {
							val = parseFloat(val.replace(/^\$/, ""));
							oppyearsum += !isNaN(val) ? val : 0;
						}
					});
					var myyearadding = yearsum - oppyearsum;
					var oppyearadding = oppyearsum - yearsum;
					$('.mytradereview .yeartotal').html(yearsum);
					$('.opptradereview .yeartotal').html(oppyearsum);
					$('.mytradereview .yeardifference, .savingsreview .yeardifference').html(myyearadding);
					$('.opptradereview .yeardifference').html(oppyearadding);

					// calculate points
					var mypointssum = 0;
					var opppointssum = 0;
					$('.mytradereview .points a').each(function () {
						var val = $.trim($(this).text());
						if (val) {
							val = parseFloat(val.replace(/^\$/, ""));
							mypointssum += !isNaN(val) ? val : 0;
						}
					});
					$('.opptradereview .points a').each(function () {
						var val = $.trim($(this).text());
						if (val) {
							val = parseFloat(val.replace(/^\$/, ""));
							opppointssum += !isNaN(val) ? val : 0;
						}
					});
					var myPointsSumRounded = mypointssum.toFixed(precision);
					var oppPointsSumRounded = opppointssum.toFixed(precision);
					$('.mytradereview .pointstotal').html(myPointsSumRounded);
					$('.opptradereview .pointstotal').html(oppPointsSumRounded);
					var myPointsDifference = myPointsSumRounded - oppPointsSumRounded;
					var oppPointsDifference = oppPointsSumRounded - myPointsSumRounded;
					var myPointsDifferenceRounded = myPointsDifference.toFixed(precision);
					var oppPointsDifferenceRounded = oppPointsDifference.toFixed(precision);
					$('.mytradereview .pointsdifference, .savingsreview .pointsdifference').html(myPointsDifferenceRounded);
					$('.opptradereview .pointsdifference').html(oppPointsDifferenceRounded);

					if (hideTilClk && showCalculator) {
						if ($('#tradereview tr.playerrow').length) {
							$('.reviewwrap , .savingsreview , #messageBoxDIV , #propseTradeButtonDIV').show();
						} else {
							$('.reviewwrap , .savingsreview , #messageBoxDIV , #propseTradeButtonDIV').hide();
						}
					}
				});

				if (hideTilClk && showCalculator) {
					$('.reviewwrap , .savingsreview , #messageBoxDIV , #propseTradeButtonDIV').hide();
				} else {
					$('.reviewwrap , .savingsreview , #messageBoxDIV , #propseTradeButtonDIV').show();
				}
			}
		}

		function showRosterDetails() {
			$('#MFLroster .checkBox,#MFLroster .no-checkBox').remove();
		}

		function showTradeDetails() {
			$('#body_options_07').addClass('rosters_trades_display roster_base');
			$('#body_options_07').removeClass('rosters_full_display rosters_display');
			$('.rosters_trades_display #roster td:first-child:not(.player,.checkBox),.rosters_trades_display div table td.player:contains("Salary"):contains("Adjustments")').removeClass('player').parent().prepend('<td class="no-checkBox"></td>');
			$('.rosters_trades_display #roster th:first-child:not(.player,.checkBox)').removeClass('player').parent().prepend('<th class="no-checkBox"></th>');
			$('#MFLroster .player+th').parent().prepend('<th class="checkBox" align="center"><i class="fa-regular fa-check" aria-hidden="true"></i></td>');
			$('#MFLroster .player+td').parent().each(function (index, element) {
				var playerTempId = $(this).children().eq(0).children().eq(0).attr('href').split('&');
				for (var i = 0; i < playerTempId.length; i++) {
					var p_temp = playerTempId[i].split('=');
					if (p_temp[0] == 'P') {
						$(this).prepend('<td class="checkBox" align="center"><input type="checkbox" id="' + p_temp[1] + '" value="' + p_temp[1] + '"><label for="' + p_temp[1] + '"></label></td>')
					}
				}
			});
			$('.roster_assets').has('tbody:empty').remove();
		}

		function allViewClickFunction() {
			$('#body_options_07 #rosSwipe').attr('id','noSwipe');
			$('#body_options_07 #tradeViewTab').css('pointer-events', 'all');
			if (showAllstatus) {
				$(".IRtoggle,.IRtoggle td,.Taxitoggle,.Taxitoggle td").show();
				$(".hide_toggler,.hide_toggler_taxi").show();
				$(".show_toggler,.show_toggler_taxi").hide();
			} else {
				$(".IRtoggle,.IRtoggle td,.Taxitoggle,.Taxitoggle td").hide();
				$(".hide_toggler,.hide_toggler_taxi").hide();
				$(".show_toggler,.show_toggler_taxi").show();
			}
			$('#body_options_07').removeClass('rosters_trades_display rosters_display roster_base');
			if (!$('#allViewTab').hasClass('currenttab')) {
				$('#body_options_07').addClass('rosters_full_display');
				$('#rosterViewTab').val('Return to tabbed rosters');
				$("#deadlinePassed").html('');
				showRosterDetails();
				$('#propseTradeButtonDIV').hide();
				$('#MFLroster .checkBox,#MFLroster .no-checkBox').remove();
				$('#tradeViewTab').addClass('inactivetab');
				$('#tradeViewTab,#rosterViewTab').removeClass('currenttab');
				$('#rosterViewTab').removeClass('inactivetab');
				$('#messageBoxDIV').html('');
			}
			if (showCalculator) {
				$('.reviewwrap , .savingsreview').remove();
				$('.roster_assets tbody').empty();
				assets_appended = false;
			}
		}


		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		///// TRADE DEADLINE FUNCTIONS AND API CALL TO CALENDAR
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		function checkTradeDeadline() {
			try {
				for (var i = 0; i < calendarJson1.calendar.event.length; i++) {
					if (calendarJson1.calendar.event[i].type == "TRADE") {
						var startTime = parseInt(calendarJson1.calendar.event[i].start_time, 10);
						if (startTime > 0 && startTime < AllGamesCount) { //START TIME MUST BE KICKOFF FOR WEEK FOUND
							if ((completedWeek + 1) < startTime) //WE ARE NOT IN DEADLINE WEEK SO TRADES ARE GOOD
								startTime = currentServerTime + 60 * 60;
							else if ((completedWeek + 1) > startTime) // WE ARE PASSED DEADLINE WEEK SO TRADES ARE NOT GOOD
								startTime = currentServerTime - 60 * 60;
							else // WE ARE IN DEADLINE WEEK SO CHECK NFL SCHEDULE FOR KICKOFF
								try { //MORE THAN ONE MATCHUP
									startTime = parseInt(kickoffJson1.nflSchedule.matchup[0].kickoff);
								} catch (er) { //ONLY ONE MATCHUP
									startTime = parseInt(kickoffJson1.nflSchedule.matchup.kickoff);
								}
						}
						var endTime = parseInt(calendarJson1.calendar.event[i].end_time, 10);
						var loopTime = parseInt(calendarJson1.calendar.event[i].happens, 10);
						if (isNaN(endTime)) endTime = 0;
						if (isNaN(loopTime)) loopTime = 1;
						else loopTime += 1;
						for (var j = 0; j < loopTime; j++) {
							var loopStartTime = (j) * 60 * 60 * 24 * 7 + startTime;
							if (endTime == 0) var loopEndTime = 0;
							else var loopEndTime = (j) * 60 * 60 * 24 * 7 + endTime;
							if ((currentServerTime > loopStartTime && loopEndTime == 0) || (currentServerTime > loopStartTime && ServerTime <= loopEndTime)) {
								tradeDeadlinePassed = true;
								$("#tradeViewTab").attr("disabled", "disabled");
								$("#deadlinePassed").slideDown(1000);
								if (showMFLdefaultBtn) {
									$("#tradeViewTab").addClass("buttonDisabled");
								} else {
									$("#tradeViewTab,#rosterViewTab").addClass("buttonDisabled");
								}
							}
						}

					}
				}
			} catch (er) {}
		}


		function getURLForCalendar() {
			return '/' + window.year + '/export?TYPE=calendar&L=' + window.league_id + '&JSON=1';
		}

		function getCalendarDataFromAjax(url) {
			return fetch(url)
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.text(); // Retrieve response as plain text
				})
				.then(data => {
					// Handle the retrieved data here
					calendarJson1 = data;
					checkTradeDeadline();
				})
				.catch(error => {
					console.error('Error:', error);
					// Handle the error here or rethrow it if needed
					throw error;
				});
		}


		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		///// FUNCTION TO PERFORM TRADES
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		function loadTradeModule() {
			jQuery('#rosterTradeLinkDIV').show();
			var oneWeek = currentServerTime * 1000 + 60 * 60 * 24 * 7 * 1000;
			var d = new Date(oneWeek);
			jQuery('#proposeTradeForm').attr('action', baseURLDynamic + '/' + year + '/trade_offer');
			jQuery('#LEAGUE_ID').val(league_id);
			jQuery('#TRADE_EXPIRES_MONTH').val(d.getMonth());
			jQuery('#TRADE_EXPIRES_DAY').val(d.getDate());
			jQuery('#TRADE_EXPIRES_YEAR').val(d.getFullYear());
		}

		function proposeTrade() {
			tradeAction('Perform');
		}

		function performTrade() {
			tradeAction('Propose');
		}

		function tradeAction(clickedName) {
			var rightSelectedFranchise = jQuery('#roster_column_right div:visible').attr('id');
			var middleSelectedFranchise = jQuery('#roster_column_middle div:visible').attr('id');
			var middleFranPlayers = jQuery('#roster_column_middle input:checkbox:checked');
			var rightFranPlayers = jQuery('#roster_column_right #' + rightSelectedFranchise + ' input:checkbox:checked');
			if (validateTradeForm()) {
				jQuery('#roster_column_right div:not(:visible) input:checkbox').prop('checked', false);
				jQuery('#FRANCHISE_ID').val(middleSelectedFranchise + ',' + rightSelectedFranchise);
				jQuery('#roster_column_middle input:checkbox:checked').attr('name', 'drop' + middleSelectedFranchise);
				jQuery('#roster_column_right input:checkbox:checked').attr('name', 'drop' + rightSelectedFranchise);
				var action = jQuery('#proposeTradeForm').attr('action');
				action = action + '?' + clickedName + '=' + jQuery('name=' + clickedName).val();
				jQuery('#proposeTradeForm').attr('action', action);
				jQuery('#proposeTradeForm').submit();
				return true;
			}
		}

		function validateTradeForm() {
			jQuery('#roster_column_right div:not(:visible) input:checkbox').prop('checked', false);
			if (jQuery('#MFLroster input:checkbox:checked').length == 0) {
				alert('Please select Players for trade');
				return false;
			}
			return true;
		}

		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		///// FUNCTION PERTAINING TO TRADE ASSETS
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		var assets_ar = new Array();
		var assets_appended = false;

		function getAssetsJSON() {
			fetch(`${baseURLDynamic}/${year}/export?TYPE=assets&L=${league_id}&JSON=1`)
				.then(response => {
					if (response.ok) {
						return response.json();
					} else {
						throw new Error('Network response was not OK');
					}
				})
				.then(data => {
					assets_ar = data;
				})
				.catch(error => {
					// Handle error here
					console.log('Error:', error);
				});
		}

		function appendAssets() {
			var assets = new Array();
			try {
				for (var i = 0; i < assets_ar.assets.franchise.length; i++) {
					var fid = assets_ar.assets.franchise[i].id;
					if (document.getElementById(fid)) { //DELUXE LEAGUES MAY NOT SHOW ALL ROSTERS
						var rowCount = 0;
                				try {
                    					var draftPicks = assets_ar.assets.franchise[i].currentYearDraftPicks.draftPick;
                    					if (!Array.isArray(draftPicks)) {
                        					draftPicks = [draftPicks]; // Convert to array if it's not already
                    					}
                    					for (var j = 0; j < draftPicks.length; j++) {
                        					//console.log(fid);
                        					if (rowCount % 2) var rowClass = " eventablerow";
                        					else var rowClass = " oddtablerow";
                        					if (!assets["fid_" + fid]) assets["fid_" + fid] = "";
                        					assets["fid_" + fid] += "<tr class='" + rowClass + "'><td align='center'><input type='checkbox' name='drop" + fid + "' value='" + draftPicks[j].pick + "'></td><td colspan='8' style='text-align:left'>" + draftPicks[j].description + "</td></tr>";
                        					rowCount++;
                    					}
                				} catch (er) {}
						try {
							var firstRow = true;
                    					var draftPicks = assets_ar.assets.franchise[i].futureYearDraftPicks.draftPick;
                    					if (!Array.isArray(draftPicks)) {
                        					draftPicks = [draftPicks]; // Convert to array if it's not already
                    					}
							for (var j = 0; j < draftPicks.length; j++) {
								if (rowCount % 2) var rowClass = " eventablerow";
								else var rowClass = " oddtablerow";
								if (firstRow) var newPosition = " newposition";
								else var newPosition = "";
								if (j > 0 && assets_ar.assets.franchise[i].futureYearDraftPicks.draftPick[j].description.substring(0, 9) != assets_ar.assets.franchise[i].futureYearDraftPicks.draftPick[j - 1].description.substring(0, 9)) var newPosition = " newposition";
								assets["fid_" + fid] += "<tr class='" + rowClass + newPosition + "'><td align='center'><input type='checkbox' name='drop" + fid + "' value='" + assets_ar.assets.franchise[i].futureYearDraftPicks.draftPick[j].pick + "'></td><td colspan='8' style='text-align:left'>" + assets_ar.assets.franchise[i].futureYearDraftPicks.draftPick[j].description + "</td></tr>";
								rowCount++;
								firstRow = false;
							}
						} catch (er) {}
						try {
							if (parseFloat(assets_ar.assets.franchise[i].blindBiddingDollars.amount) > 0) {
								var firstRow = true;
								if (rowCount % 2) var rowClass = " eventablerow";
								else var rowClass = " oddtablerow";
								if (firstRow) var newPosition = " newposition";
								else var newPosition = "";
								assets["fid_" + fid] += "<tr class='" + rowClass + newPosition + "'><td align='center'><input type='text' name='bbid" + fid + "' size='5' maxlength='10' value></td><td colspan='8' style='text-align:left'>Blind Bidding Dollars ($" + assets_ar.assets.franchise[i].blindBiddingDollars.amount + ")</td></tr>";
								rowCount++;
								firstRow = false;
							}
						} catch (er) {}

						jQuery("#" + fid + " .roster_assets tbody").html(assets["fid_" + fid]);
					}
				}
			} catch (er) {}

			assets_appended = true;
		}

		if (rosEnableSwipe) {
			var currentMobileWrap = $(".roster_base #roster_column_right #" + fid_right);
			var startX, distX;
			var threshold = 50;

			$(document).on("touchstart", "#rosSwipe", function (e) {
				startX = e.originalEvent.changedTouches[0].pageX;
			});

			$(document).on("touchend", "#rosSwipe", function (e) {
				distX = e.originalEvent.changedTouches[0].pageX - startX;
				if (Math.abs(distX) >= threshold) {
					if (distX > 0) {
						showPreviousMobileWrap();
					} else {
						showNextMobileWrap();
					}
					if (fid_right !== fid_middle) {
						$("#roster_column_left a").removeClass("rs_active");
						$("#roster_column_left tr.franchise_" + fid_right + " a").addClass("rs_active");
						const element = $("#roster_column_left tr.franchise_" + fid_right)
						const container = element.closest('#roster_column_left')[0];
						const targetScrollPosition = element.get(0).offsetLeft - container.offsetLeft;
						container.scrollLeft = targetScrollPosition;
						$('.opptradereview caption a[class*="franchise_"]').closest('caption').hide();
						$('.opptradereview caption a.' + $(this).attr('class')).closest('caption').toggle();
						$('#roster_column_right table input:checkbox').prop('checked', false);
						$('.opptradereview').find('tr.playerrow').remove();
						$('.salarytotal, .yeartotal, .pointstotal, .salarydifference, .yeardifference, .pointsdifference').html('0');
						if (hideTilClk && showCalculator) {
							if ($('#tradereview tr.playerrow').length) {
								$('.reviewwrap , .savingsreview , #messageBoxDIV , #propseTradeButtonDIV').show();
							} else {
								$('.reviewwrap , .savingsreview , #messageBoxDIV , #propseTradeButtonDIV').hide();
							}
						}
					}
				}
			});

			function showNextMobileWrap() {
				var nextMobileWrap = currentMobileWrap.next(".roster_base #roster_column_right .mobile-wrap");
				if (nextMobileWrap.length === 0) {
					nextMobileWrap = $("#roster_column_right .mobile-wrap:first");
				}
				while (nextMobileWrap.attr("id") === fid_middle) {
					nextMobileWrap = nextMobileWrap.next(".roster_base #roster_column_right .mobile-wrap");
					if (nextMobileWrap.length === 0) {
						nextMobileWrap = $("#roster_column_right .mobile-wrap:first");
					}
				}
				currentMobileWrap.removeClass("active");
				currentMobileWrap = nextMobileWrap;
				fid_right = nextMobileWrap.attr("id");
				showCurrentMobileWrap();
			}

			function showPreviousMobileWrap() {
				var prevMobileWrap = currentMobileWrap.prev(".roster_base #roster_column_right .mobile-wrap");
				if (prevMobileWrap.length === 0) {
					prevMobileWrap = $("#roster_column_right .mobile-wrap:last");
				}
				while (prevMobileWrap.attr("id") === fid_middle) {
					prevMobileWrap = prevMobileWrap.prev(".roster_base #roster_column_right .mobile-wrap");
					if (prevMobileWrap.length === 0) {
						prevMobileWrap = $("#roster_column_right .mobile-wrap:last");
					}
				}
				currentMobileWrap.removeClass("active");
				currentMobileWrap = prevMobileWrap;
				fid_right = prevMobileWrap.attr("id");
				showCurrentMobileWrap();
			}

			$('body').on('click', '#roster_column_left tr', function () {
				$('#roster_column_left tr td a').removeClass('rs_active');
				$(this).find('td a').addClass('rs_active');
				var classAttribute = $(this).attr("class");
				var match = classAttribute.match(/franchise_(\d+)/);
				fid_right = match[1];
				currentMobileWrap = $(".roster_base #roster_column_right #" + fid_right);
				showCurrentMobileWrap();
				const element = $(this)
				const container = element.closest('#roster_column_left')[0];
				const targetScrollPosition = element.get(0).offsetLeft - container.offsetLeft;
				container.scrollLeft = targetScrollPosition;
				$('.opptradereview caption a[class*="franchise_"]').closest('caption').hide();
				$('.opptradereview caption a.' + $(this).attr('class')).closest('caption').toggle();
				$('#roster_column_right table input:checkbox').prop('checked', false);
				$('.opptradereview').find('tr.playerrow').remove();
				$('.salarytotal, .yeartotal, .pointstotal, .salarydifference, .yeardifference, .pointsdifference').html('0');
				if (hideTilClk && showCalculator) {
					if ($('#tradereview tr.playerrow').length) {
						$('.reviewwrap , .savingsreview , #messageBoxDIV , #propseTradeButtonDIV').show();
					} else {
						$('.reviewwrap , .savingsreview , #messageBoxDIV , #propseTradeButtonDIV').hide();
					}
				}
			});
		} else {
			$('body').on('click', '#roster_column_left tr', function () {
				$('#roster_column_left tr td a').removeClass('rs_active');
				$(this).find('td a').addClass('rs_active');
				var classAttribute = $(this).attr("class");
				var match = classAttribute.match(/franchise_(\d+)/);
				fid_right = match[1];
				currentMobileWrap = $(".roster_base #roster_column_right #" + fid_right);
				showCurrentMobileWrap();
				$('.opptradereview caption a[class*="franchise_"]').closest('caption').hide();
				$('.opptradereview caption a.' + $(this).attr('class')).closest('caption').toggle();
				$('#roster_column_right table input:checkbox').prop('checked', false);
				$('.opptradereview').find('tr.playerrow').remove();
				$('.salarytotal, .yeartotal, .pointstotal, .salarydifference, .yeardifference, .pointsdifference').html('0');
				if (hideTilClk && showCalculator) {
					if ($('#tradereview tr.playerrow').length) {
						$('.reviewwrap , .savingsreview , #messageBoxDIV , #propseTradeButtonDIV').show();
					} else {
						$('.reviewwrap , .savingsreview , #messageBoxDIV , #propseTradeButtonDIV').hide();
					}
				}
			});
		}
		function showCurrentMobileWrap() {
			$(".roster_base #roster_column_right .mobile-wrap").removeClass("active");
			currentMobileWrap.addClass("active");
		}
	}
} // END ROSTERS SCRIPT


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// History Script  https://www.mflscripts.com/mfl-apps/history/integrated/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
if (load_history_script) {
	if (typeof historyHPMupdateNotloaded === "undefined") {
		historyHPMupdateNotloaded = true;
		if (typeof franchise_id !== "undefined") {
			if (franchise_id === '0000') {
				runHistoryUpdateHPM();
			}
		}
	}
}

function hsSetTimestamp() {
	const xhr = new XMLHttpRequest();
	const hsTimeurl = 'https://mflscripts.com/mfl-apps/history/integrated/historyTime.php';
	const data = new FormData();
	data.append('updateHistoryTime', currentHistoryTime);
	data.append('year', year);
	data.append('leagueId', league_id);
	xhr.open('POST', hsTimeurl, true);
	xhr.responseType = 'text';
	xhr.onload = function() {
  		if (xhr.status === 200) {
    			console.log('Variable written to file successfully!');
  		} else {
    			console.error('Error:', xhr.status);
  		}
	};
	xhr.send(data);
}

if (load_standingsHistory_script === undefined) var load_standingsHistory_script = false;
if (load_draftHistory_script === undefined) var load_draftHistory_script = false;
if (load_contractHistory_script === undefined) var load_contractHistory_script = false;
if (load_playoffsHistory_script === undefined) var load_playoffsHistory_script = false;
if (load_topsHistory_script === undefined) var load_topsHistory_script = false;
if (load_tradesHistory_script === undefined) var load_tradesHistory_script = false;
console.log("HISTORY SCRIPT LAST UPDATED 11-11-21");
if ((load_history_script) && ($('#league-history-wrapper').length)) {
	//OPTIONAL VAR DEFAULT VALUES
	if (lh_use_habman === undefined) var lh_use_habman = false;
	if (lh_use_most_recent_franchise_info === undefined) var lh_use_most_recent_franchise_info = true;
	if (lh_precision_override === undefined) var lh_precision_override = -1;
	if (lh_commish_franchise_id === undefined) var lh_commish_franchise_id = '';
	if (lh_fname_override === undefined) var lh_fname_override = new Array();
	if (lh_abbrev_override === undefined) var lh_abbrev_override = new Array();
	if (lh_abbrev_max_length === undefined) var lh_abbrev_max_length = 5;
	if (lh_first_player_season === undefined) var lh_first_player_season = '';
	if (lh_auto_rename_linked_franchise === undefined) var lh_auto_rename_linked_franchise = true;
	if (lh_name_icon_logo === undefined) var lh_name_icon_logo = 0;
	if (lh_abbrev_icon_logo === undefined) var lh_abbrev_icon_logo = 0;
	if (lh_open_form_in_iframe === undefined) var lh_open_form_in_iframe = false;

	if (apiKey === undefined) var apiKey = ""; //API KEY DOES NOT GET GENERATED FOR COMMISSIONERS WITH NO TEAM IN THE LEAGUE

	var integratedHistory_ar = [];
	var integratedHistory_Links = [];

	if (lh_use_habman) {
		var baseURLHistory = "https://mfl.habman.com/history";
	} else {
		var baseURLHistory = "https://www.mflscripts.com/mfl-apps/history/integrated";
	}
	//IF FILE DOESN'T EXIST IT WILL CAUSE 404 ERROR THAT CANNOT BE TRAPPED - Now i catch error if a file does not load and the other files will load
	const Historyscripts = [
		`${baseURLHistory}/players/playerHistory.js`,
		`${baseURLHistory}/${year}/leagues/${league_id}/league_info.js`
	];
	let loadedScripts = 0;
	Historyscripts.forEach(url => {
		try {
			const script = document.createElement('script');
			script.src = url;
			script.onload = () => {
				loadedScripts++;
				if (loadedScripts === Historyscripts.length) {
					lh_initiate();
				}
			};
			document.head.appendChild(script);
		} catch (error) {
			console.error(`Failed to load script: ${url}`, error);
			setTimeout(() => {lh_initiate();}, "1000");
		}
	});

	//ADD HTML TO HISTORY PAGE

	const leagueHistoryWrap = document.getElementById('league-history-wrapper');

	const historyNavHTML = `<div class="historyNav" style="text-align:center;display:none"><input class="leagueTabNav currenttab" style="text-transform:uppercase;display:none" value="League History" type="submit"><input class="draftTabNav inactive mainHistoryTab" style="text-transform:uppercase;display:none" value="Draft History" type="submit"><input class="standingsTabNav inactive mainHistoryTab" style="text-transform:uppercase;display:none" value="Standings History" type="submit"><input class="contractsTabNav inactive mainHistoryTab" style="text-transform:uppercase;display:none" value="Contract History" type="submit"><input class="playoffsTabNav inactive mainHistoryTab" style="text-transform:uppercase;display:none" value="Playoff History" type="submit"><input class="topsTabNav inactive mainHistoryTab" style="text-transform:uppercase;display:none" value="Tops History" type="submit"><input class="tradesTabNav inactive mainHistoryTab" style="text-transform:uppercase;display:none" value="Trade History" type="submit"></div><div class="historyNav mobileNavs" style="text-align:center;display:none"><input class="leagueTabNav currenttab" style="text-transform:uppercase;display:none" value="League" type="submit"><input class="draftTabNav inactive mainHistoryTab" style="text-transform:uppercase;display:none" value="Draft" type="submit"><input class="standingsTabNav inactive mainHistoryTab" style="text-transform:uppercase;display:none" value="Standings" type="submit"><input class="contractsTabNav inactive mainHistoryTab" style="text-transform:uppercase;display:none" value="Contracts" type="submit"><input class="playoffsTabNav inactive mainHistoryTab" style="text-transform:uppercase;display:none" value="Playoffs" type="submit"><input class="topsTabNav inactive mainHistoryTab" style="text-transform:uppercase;display:none" value="Players" type="submit"><input class="tradesTabNav inactive mainHistoryTab" style="text-transform:uppercase;display:none" value="Trades" type="submit"></div>`;

	const historyHTMLcontent = `<div id="html-form-content" style="display:none"></div><div id="myfantasyleague_tabs" class="hs_tabs_wrap"><table class="homepagemodule report" id="tab_reports" cellspacing="1" align="center"><caption><span class="lh-main-caption-span">League History</span></caption><tbody></tbody></table><div class="toggle_tabs lh-main-toggle-tabs"><table class="report"><tbody><tr><td><div class="myfantasyleague_tabmenu"><span id="tab_title_11100">11100</span><input id="sub11100" type="checkbox"><label for="sub11100"><span></span></label><ul id="homepagetabs" class="lh-tabs-menu"><li id="tab11100" onclick="show_custom_tab_history('11100');"><a class="no-sub">Overall Record<input id="sub11100" type="checkbox"><label for="sub11100"></label></a></li><li id="tab11101" onclick="show_custom_tab_history('11101');"><a class="no-sub">Series Record<input id="sub11100" type="checkbox"><label for="sub11100"></label></a></li><li id="tab11102" onclick="show_custom_tab_history('11102');"><a class="no-sub">Team Points<input id="sub11100" type="checkbox"><label for="sub11100"></label></a></li><li id="tab11103" onclick="show_custom_tab_history('11103');"><a class="no-sub">Player<input id="sub11100" type="checkbox"><label for="sub11100"></label></a></li><li id="tab11104" onclick="show_custom_tab_history('11104');"><a class="no-sub">Misc<input id="sub11100" type="checkbox"><label for="sub11100"></label></a></li><li id="tab11105" onclick="show_custom_tab_history('11105');" style="display:none"><a class="no-sub">Admin<input id="sub11100" type="checkbox"><label for="sub11100"></label></a></li></ul></div></td</tr></tbody></table> <div class="tabs_scroll" style="position:relative"><div id="tabcontent11100" class="homepagetabcontent"><div id="historical_records_content"><div style="text-align:center;height:12.5rem;font-size:0.875rem;margin-top:1.25rem"><div id="MFLPlayerPopupLoading" class="failure_message" style="top:auto;position:relative;transform:none"><center>Preparing History . . .<br><br><div class="MFLPlayerPopupLoader"></div></center></div></div></div></div><div id="tabcontent11101" class="homepagetabcontent"><div id="series_records_content"></div></div><div id="tabcontent11102" class="homepagetabcontent"><div id="team_points_content"></div></div><div id="tabcontent11103" class="homepagetabcontent"><div id="player_content"></div></div><div id="tabcontent11104" class="homepagetabcontent"><div id="misc_content"></div></div><div id="tabcontent11105" class="homepagetabcontent"><div id="admin_content"></div></div></div></div></div>`;

	//APPEND SIMPLE MODAL - 4 MODALS REQUIRED FOR NESTING
	const historyPopHTML = `<div id="ls-modal-1-container" class="ls-modal"><div class="ls-modal-content ls-history-modal" style="font-size:0.813rem"><div class="ls-modal-header"><span class="close">X</span><h2 id="ls-modal-1-header-content"></h2></div><div class="ls-modal-body" style="padding:0 0.625rem;padding-bottom:0.063rem"><p id="ls-modal-1-content" style="margin-top:0"></p></div></div></div><div id="ls-modal-2-container" class="ls-modal"><div class="ls-modal-content ls-history-modal" style="font-size:0.813rem"><div class="ls-modal-header"><span class="close">X</span><h2 id="ls-modal-2-header-content"></h2></div><div class="ls-modal-body" style="padding:0 0.625rem;padding-bottom:0.063rem"><p id="ls-modal-2-content" style="margin-top:0"></p></div></div></div><div id="ls-modal-3-container" class="ls-modal"><div class="ls-modal-content ls-history-modal" style="font-size:0.813rem"><div class="ls-modal-header"><span class="close">X</span><h2 id="ls-modal-3-header-content"></h2></div><div class="ls-modal-body" style="padding:0 0.625rem;padding-bottom:0.063rem"><p id="ls-modal-3-content" style="margin-top:0"></p></div></div></div><div id="ls-modal-4-container" class="ls-modal"><div class="ls-modal-content ls-history-modal" style="font-size:0.813rem"><div class="ls-modal-header"><span class="close">X</span><h2 id="ls-modal-4-header-content"></h2></div><div class="ls-modal-body" style="padding:0 0.625rem;padding-bottom:0.063rem"><p id="ls-modal-4-content" style="margin-top:0"></p></div></div></div>`;

	if (leagueHistoryWrap) {
		leagueHistoryWrap.insertAdjacentHTML('beforebegin', historyNavHTML);
		leagueHistoryWrap.insertAdjacentHTML('beforeend', historyHTMLcontent);
		document.body.insertAdjacentHTML('beforeend', historyPopHTML);
	}

	$('head').append('<style>#league-history-wrapper .plus-toggle{display:none!important}.historyNav input.inactive{opacity:.3}#standings-history-wrapper,#draft-history-wrapper,#contract-history-wrapper,#playoffs-history-wrapper,#tops-history-wrapper,#trades-history-wrapper{display:none}.historyNav input{margin-top:0;font-size:0.813rem;}@media only screen and (max-width: 48em){.historyNav{white-space:nowrap;overflow:auto;padding:0 1.25rem}.historyNav input{font-size:0.813rem;padding:0.313rem;margin-top:0}}.hs_tabs_wrap caption span.module_expand{display:none}.hs_tabs_wrap .report{background:none!important}.lh_franchise_img{max-height:1.375rem;max-width:9.375rem;padding:0.063rem 0}#league-history-wrapper th,#league-history-wrapper td,#league-history-wrapper caption{cursor:default}#historical_records td.lh_overall_awards.lh_award_check>div>span:nth-child(5):after,#historical_records td.lh_overall_awards.lh_award_check>div>span:nth-child(10):after,#historical_records td.lh_overall_awards.lh_award_check>div>span:nth-child(15):after,#historical_records td.lh_overall_awards.lh_award_check>div>span:nth-child(20):after,#historical_records td.lh_overall_awards.lh_award_check>div>span:nth-child(25):after{content:"";display:block;height:0.063rem}#myfantasyleague_tabs.hs_tabs_wrap{position:relative}.hz-main-table th.lh_overall_franchise{visibility:hidden}.hz-main-table.hz-clone th.lh_overall_franchise.fixed-side{visibility:visible}.lh_award_li .lh_award_li_award,.lh_notation_li .lh_notation_li_notation{padding-right:0.188rem;padding-left:0.625rem;font-size:0.5rem;display:table-cell;width:1.5rem;text-align:center}.lh_award_li span,.lh_notation_li span{height:0.938rem;line-height:0.938rem;font-size:0.75rem;vertical-align:middle;display:table-cell}.lh_award_check ul,.lh_award_check li,.lh_notation_check ul,.lh_notation_check li{margin:0;padding:0}td.lh_overall_awards{font-size:0.625rem}td.lh_overall_awards i{padding:0.063rem}.lh_defunct_check.rowheader th{background:none}.hs_tabs_wrap div.mobile-wrap{padding:0;box-shadow:none;border:none;border-radius:0;overflow:hidden;background:none}.toggle_tabs .hz-clone{top:0;left:0}.hs_tabs_wrap .tabs_scroll caption{font-size:0.938rem;text-indent:0}.hs_tabs_wrap div.mobile-wrap.lh-bottom-line{padding-bottom:0.625rem}#admin_content #html-form-submit span{display:block;width:100%;text-align:center}#iframe-summary-popup{width:100%;background:none!important;background-color:transparent!important}.history-selections input,.series-selections input,.team-selections input,.player-selections input,.misc-selections input{display:none}.history-selections div,.series-selections div,.team-selections div,.player-selections div,.misc-selections div{position:relative;display:inline-block}.history-selections input+label:before,.series-selections input+label:before,.team-selections input+label:before,.player-selections input+label:before,.misc-selections input+label:before{font-family:"Font Awesome 6 Pro";display:inline-block;content:"\\f096";position:absolute;left:0}.history-selections input:checked+label:before,.series-selections input:checked+label:before,.team-selections input:checked+label:before,.player-selections input:checked+label:before,.misc-selections input:checked+label:before{content:"\\f046";z-index:0}.history-selections label,.series-selections label,.team-selections label,.player-selections label,.misc-selections label{padding-left:0.938rem;font-size:0.813rem;margin-right:0.625rem;line-height:0.813rem;cursor:pointer}@media only screen and (max-width:31.25em){.history-selections,.series-selections,.team-selections,.player-selections,.misc-selections{margin-top:0.188rem}}.hs-control-setting{font-size:0.938rem;cursor:pointer;font-weight:normal;display:inline}.players_radio_ckbox div:last-of-type label{margin-right:0}.hs_tabs_wrap th{background:none!important}.history-selections input+label:before,.series-selections input+label:before,.team-selections input+label:before,.player-selections input+label:before,.misc-selections input+label:before{color:var(--checkbox-box)}.history-selections input:checked+label:before,.series-selections input:checked+label:before,.team-selections input:checked+label:before,.player-selections input:checked+label:before,.misc-selections input:checked+label:before{color:var(--checkbox-check)}.ls-history-modal .lh_popup_win{color:var(--popup-win)}.ls-history-modal .lh_popup_loss{color:var(--popup-loss)}.ls-history-modal .lh_popup_tie{color:var(--popup-tie)}.ls-history-modal .ls-popup-position-ul > span,.ls-history-modal .ls-popup-matchup{background:var(--popup-th-bg)!important}.myfranchise,.myfranchise td,.myfranchise th,tr.myfranchise th a,tr.myfranchise td a,tr.myfranchise i.fa-minus,tr.myfranchise i.fa-rectangle-xmark{color:var(--my-franchise)!important}.hs_tabs_wrap tr.myfranchise td,.hs_tabs_wrap tr.myfranchise th,.hs_tabs_wrap tr.myfranchise th.fixed-side.hz-hide-shadow{background:var(--my-franchise-bg)!important}.lh_year_record i,.lh_series_td i,.lh_rank i{color:var(--dash-x-boxes)}.hs_tabs_wrap div.mobile-wrap.lh-bottom-line{border-bottom:var(--table-separate)}.hs_tabs_wrap th,.hs_tabs_wrap th.fixed-side.hz-hide-shadow{background:var(--table-header-bg)!important}.hs-control-setting{color:var(--color-settings)}.hs_tabs_wrap th.fixed-side{background:var(--table-header-bg-fixed)!important}.hs_tabs_wrap .lh_defunct_check,.hs_tabs_wrap .lh_defunct_check th,.hs_tabs_wrap .lh_defunct_check th a{color:var(--defunct-bg-text)}.hs_tabs_wrap .lh_defunct_check th.fixed-side.hz-hide-shadow,.hs_tabs_wrap .lh_defunct_check.rowheader th.fixed-side.hz-hide-shadow ~ th{background:var(--defunct-bg)!important}.hs_tabs_wrap .lh_defunct_check th.fixed-side,.lh_defunct_check.rowheader th.fixed-side ~ th{background:var(--defunct-bg-fixed)!important}#league-history-wrapper tr.oddtablerow.myfranchise + tr.myfranchise.eventablerow td,#league-history-wrapper tr.eventablerow.myfranchise + tr.myfranchise.oddtablerow td{border-top:var(--highlight-separate)}.ls-modal-content{background-color:#fff;box-shadow:0 0 1.563rem rgba(0,0,0,1)}.ls-modal-header .close{background:red;border-color:red;color:#fff}.ls-modal-header .close:hover,.ls-modal-header .close:focus{background:#ff0000;border-color:#000;color:#fff}.ls-modal{display:none;position:fixed;z-index:99999;left:0;top:0;width:100%;height:100%;overflow:auto;background:rgba(0,0,0,0.7)}.ls-modal-content{max-width:31.25rem;width:96%;margin:auto;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;box-shadow:0 0 1.563rem #000;border-radius:0.188rem;padding:0.625rem;max-height:90%;overflow:auto}.ls-modal-header{padding:0.188rem;background:none}.ls-modal-header h2{text-align:left;margin:0;padding:0;padding-left:0.313rem;min-height:1.625rem;text-transform:uppercase}.ls-modal-header .close{font-size:1.25rem;font-weight:700;position:absolute;right:0.313rem;top:0.313rem;text-align:center;border-radius:0.188rem;padding:0;height:1.375rem;width:1.375rem;line-height:1.375rem}.ls-modal-header .close:hover,.ls-modal-header .close:focus{text-decoration:none;cursor:pointer}.ls-modal-body{padding:0 0.125rem;font-size:0.813rem;padding-bottom:0.063rem}.ls-popup-text::before,.ls-popup-icon-wrapper::before{content:"-";padding:0 0.125rem}#ls-modal-1-content li,#ls-modal-1-content ul,#ls-modal-2-content li,#ls-modal-2-content ul,#ls-modal-3-content li,#ls-modal-3-content ul{margin:0;padding:0;list-style:none}#ls-modal-1-content .ls-popup-position-li,#ls-modal-2-content .ls-popup-position-li,#ls-modal-3-content .ls-popup-position-li{font-weight:700;font-size:0.875rem;padding-left:0.313rem}#ls-modal-1-content .ls-popup-player-li,#ls-modal-2-content .ls-popup-player-li,#ls-modal-3-content .ls-popup-player-li{position:relative;padding-left:0.5rem}#ls-modal-1-content .ls-popup-player-li:last-child,#ls-modal-2-content .ls-popup-player-li:last-child,#ls-modal-3-content .ls-popup-player-li:last-child{border:0}#ls-modal-1-content span.ls-popup-text,#ls-modal-2-content span.ls-popup-text,#ls-modal-3-content span.ls-popup-text{font-style:italic;font-weight:bold}#ls-modal-1-content img.ls-popup-icon,#ls-modal-2-content img.ls-popup-icon,#ls-modal-3-content img.ls-popup-icon{max-height:1rem;max-width:5rem}.hz-table-scroll{position:relative;overflow:hidden;white-space:nowrap}.hz-table-wrap{width:100%;overflow:auto}.hz-table-scroll table{padding-bottom:0.625rem;width:100%;margin:auto;border-collapse:separate;border-spacing:0}.hz-main-table caption,.hz-main-table .fixed-side,.hz-clone th,.hz-clone td{visibility:hidden}.hz_table_remove{padding:0;margin:0;background:none;box-shadow:none;border:0;background-image:none}.hz-clone.hz_table_remove caption,.hz-clone .fixed-side{visibility:visible;pointer-events:auto}.fixed-side{width:6.25rem;padding:0.188rem 0.313rem}.fixed-side img.franchiseicon{max-width:6.25rem;min-width:auto!important}.hz-clone{position:absolute;top:0.625rem;left:0.625rem;pointer-events:none}.fixed-side .franchiseicon,.fixed-side a{max-width:none;height:auto}.fixed-side.fx-dbl{text-align:left;width:0.063rem}.fixed-side a{display:inline}.hz-table-scroll thead th.fixed-side{text-align:center!important}.fixed-side+td,.fixed-side+th{padding-left:0.375rem}#body_options_93 .hz-main-table tbody tr:first-of-type th{font-size:0.688rem}#body_options_93 .hz-main-table thead th{white-space:normal;min-width:6.25rem}#body_depth_chart thead th,#body_depth_chart tbody tr:first-of-type th{text-align:left!important}#body_depth_chart .report.hz-main-table td:nth-child(2){text-align:left}.mobile-wrap.hz-table-scroll{overflow:hidden}.fixed-side{position:sticky}.hz-hide-shadow:after{background-image:none!important}#options_236 th.fixed-side a,#options_08 th.fixed-side a,#body_top th.fixed-side a{padding-left:0.188rem}#options_236 thead .fixed-side,#options_08 thead .fixed-side,#body_top thead .fixed-side{text-align:left!important}.hz-main-table tbody th.fixed-side{text-align:left}.hz-main-table tbody tr.average th.fixed-side{text-align:center}#body_options_93 .hz-main-table tbody tr:first-of-type th.fixed-side{text-align:center}.shadow-right{position:sticky;right:0;visibility:visible}.shadow-right:after{content:"";position:absolute;top:0;width:1.25rem;height:100%;visibility:visible;background:none;right:0;background-image:linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,.3))}.hz_table_remove_shadow .shadow-right.hz-hide-shadow:after{display:none}.fixed-side:after{content:"";position:absolute;top:0;width:1.25rem;height:100%}.hz-clone .fixed-side:after{background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0));right:-1.25rem}.hz-main-table tbody th.fixed-side.has-ficon{text-align:center}.pointer-events-none{pointer-events:none}.hs-control-setting-content{display:none;padding:0.313rem 0;text-align:center;line-height:0}.hs-control-setting-content div{visibility:hidden}.hs-control-setting-content[style="display: block;"] div{visibility:visible}.hz-main-table tbody th.fixed-side.has-ficon{text-align:center}.hs-control-setting-content span{background:none;padding:0}.playerHistory_taxi,.playerHistory_ir{font-size:0.625rem;vertical-align:top}.ls-history-modal #ls-modal-4-content caption{display:none}#ls-modal-4-content th{text-align:left!important}#ls-modal-3-content .lh-popup-points{text-align:center!important}#ls-modal-3-content .lh-popup-name{text-align:left!important}#ls-modal-3-content th[style="text-align:left"]{text-align:left!important}#ls-modal-3-content th[style="text-align:left"] + th{text-align:center!important}.details_table th{text-align:right}.details_table th[colspan="2"]{text-align:left}.details_table .reportfooter{display:none}.details_table td.points,.details_table td.points a{color:inherit}#league-history-wrapper.report-wrapper .toggle_tabs ul{display:block!important}#league-history-wrapper.report-wrapper .hs-control-setting-content span{text-align:center}#league-history-wrapper.report-wrapper .hs_tabs_wrap div.mobile-wrap{overflow:hidden!important}#league-history-wrapper .mobile-view{vertical-align:top;padding-right:0.625rem}#league-history-wrapper .mobile-view{width:50%}@media only screen and (max-width: 48em){#league-history-wrapper .mobile-view{width:100%;float:left;margin-top:0;padding:0!important}.players_radio_ckbox,.season_radio_ckbox,.team-selections span[style="display:block;padding-bottom:0.313rem"]{padding-bottom:0.625rem!important}}</style>');

	//MFL ADDONS TEMPLATE ADJUSTMENT
	setTimeout(function () {
		if (jQuery('#league-history-wrapper div').hasClass('report-wrapper')) {
			$('#league-history-wrapper').addClass('report-wrapper');
		}
		jQuery('#league-history-wrapper div.report-wrapper table').unwrap();
	}, 100);

	//CREATE ADMIN CONTENT HTML THEN APPEND TO div#admin_content
	var admin_html = '';
	admin_html += '<div id="html-form-submit">';
	admin_html += '<p class="warning" style="text-align:center;font-weight:bold;font-size:1.25rem">DO NOT RUN ANY UPDATES UNTIL THE FOLLOWING HAS BEEN COMPLETED.</p><p class="warning" style="text-align:center">Make sure this league and all previous years leagues are set to PUBLIC display. If any league is set to private , this script will not work, go to all previous years and set to public or do not use this script.</p><p class="warning" style="text-align:center">Do not install this script on your homepage or any homepage tab. The script must be linked to or you will have issues with performance.</p><p class="warning" style="text-align:center">After reading and understanding everything on this page, run the update 1 time , do not continue to repeat the update process or the site will be banned from accessing MFL Scripts. Post on forums if you have ran , followed all instructions and are still having an issue.</p>';
	admin_html += '<p>In order to create accurate historical reports you must first <a href="' + baseURLDynamic + '/' + year + '/options?L=' + league_id + '&O=170" target="_blank">Link Historical Franchises</a>.</p>';
	admin_html += '<p>If for some reason the drop down boxes on the link historical franchises page has missing seasons, has incorrect franchise information or does not update even after you have applied your changes your settings may be corrupt.  You can force a correction to this page by visiting <a href="' + baseURLDynamic + '/' + year + '/csetup?L=' + league_id + '&C=HISTORY" target="_blank">League History Setup</a> and remove all the historical links then wait 24 hours. This will clear all data from your MFL history. You can then add back your links and wait another 24 hours.  This will update your league history with the correct information. Make sure that you record the original links so that you can add them back later.</p>';
	admin_html += '<p>Once you have properly linked your franchises you can click the "League History" & "Player History" buttons to generate the full history info for your league.  These pages will each take a few minutes to process. It is important to let the pages fully complete the process so do not close this page pre-maturely.  You should only have to run these processes once per new season however if you make changes to your historical leagues or update the historical franchise links you will need to re-run.</p>';
	admin_html += '<p>A cron job will run each Tuesday morning and again Thursday afternoon each week to update the current season for your league.</p>';
	admin_html += '<p>IMPORTANT: Do not run updates between 1 hr before and 15 minutes after Sunday 1:00pm ET kickoffs since MFL blocks requests to history API at those time to conserve resources to processes with higher priority IE lineup submissions etc.</p>';
	admin_html += '<div id="lh_custom_historical_franchises_wrapper" style="display:none;width:100%">';
	admin_html += '<div style="border:0.063rem solid;border-radius:0.625rem;position:relative;margin:0 auto;width:9.375rem;height:9.375rem"><div style="position:absolute;top:0.625rem;left:0.625rem">Generating Table . . .</div><i class="fa-regular fa-gear fa-spin fa-2xl" style="position:absolute;left:0;right:0;margin:0 auto;top:3.125rem"></i></div>';
	admin_html += '</div><br>';
	admin_html += '<div id="lh-weekly-update-wrapper" style="display:none">';
	admin_html += '<span style="display:inline-block">';
	admin_html += '<input type="button" value="Weekly History Update" onclick="doLeagueHistory(false)" style="vertical-align:middle" />';
	admin_html += '<span id="lh_history_loading" style="vertical-align:middle"></span>';
	admin_html += '</span><br>';
	admin_html += '<span style="display:inline-block">';
	admin_html += '<input type="button" value="Weekly Player Update" onclick="doPlayerHistory(false)" style="vertical-align:middle" />';
	admin_html += '<span id="lh_player_loading" style="vertical-align:middle"></span>';
	admin_html += '</span>';
	admin_html += '</div><br>';
	admin_html += '<span class="lh-admin-updates" style="border:0.25rem solid #ff0000;background-color: rgba(255,0,0,.1);border-radius:0.625rem;padding:0.625rem;display:inline-block">';
	admin_html += '<div style="display:inline;text-align:left"><h1 style="margin:0">When to Update and Notes:</h1><ul><li>Update League and Player history on new installs <b>and</b> each new season when you upgrade your league.</li><li>To re-generate all historicial reports</li><li>Each takes several minutes to process</li><li>Once initiated do not navigate away from page until complete</li><li><b>Do not run 1 hour before thru 15 minutes after Sunday 1:00pm ET kickoffs.</b></li></ul></div>';
	admin_html += '<span style="display:inline-block">';
	admin_html += '<input type="button" value="Install/Update League History" onclick="doLeagueHistory(true)" style="vertical-align:middle" />';
	admin_html += '<span id="lh_full_history_loading" style="vertical-align:middle"></span>';
	admin_html += '</span><br>';
	admin_html += '<span style="display:inline-block">';
	admin_html += '<input type="button" value="Install/Update Player History" onclick="doPlayerHistory(true)" style="vertical-align:middle" />';
	admin_html += '<span id="lh_full_player_loading" style="vertical-align:middle"></span>';
	admin_html += '</span>';
	admin_html += '</span>';
	admin_html += '<p></p>';
	admin_html += '<span class="lh-admin-updates" style="border:0.25rem solid #ff0000;background-color: rgba(255,0,0,.1);border-radius:0.625rem;padding:0.625rem;display:inline-block">';
	admin_html += '<div style="display:inline;text-align:left"><h1 style="margin:0">When to Force Reset:</h1><ul><li>If you cannot get the files to update it could be that some of your files are corrupt and the host directory for your league needs to be reset.</li><li>After you reset you will need to re-run League History and Player History updates.</li><li>If there are still problems then post your issue to the MFL message board and we will try to get it resolved.</li></ul></div>';
	admin_html += '<span style="display:inline-block">';
	admin_html += '<input type="button" value="Full Reset" onclick="jQuery(\'.are_you_sure\').show();" style="vertical-align:middle" />';
	admin_html += '<span id="lh_full_history_loading" class="are_you_sure" style="vertical-align:middle;display:none"><h1>Are You Sure?</h1><input type="button" value="YES" onclick="doLeagueHistoryReset()" style="vertical-align:middle" /><input type="button" value="CANCEL" onclick="jQuery(\'.are_you_sure\').hide();" style="vertical-align:middle" /></span>';
	admin_html += '</span><br>';
	admin_html += '</span>';
	admin_html += '</div>';
	jQuery('#admin_content').append(admin_html);
	jQuery('#league-history-wrapper').prepend('<div id="lh_iframe_wrapper" style="display:none"><iframe name="lh_iframe_form" id="lh_iframe_form" allowtransparency="true"></iframe></div>');

	var playerHistory = new Array();
	var playerHistoryLeague = new Array();

	var yearStr = "" + year;
	var historicalLeagues = new Array();
	var historicalStandings = new Array();
	if (historicalAwards === undefined) {
		var historicalAwards = new Array();
		historicalAwards["League Champion"] = '<i class="fa-solid fa-trophy-star ls-league-award"   style="color:goldenrod" aria-hidden="true"></i>';
		historicalAwards["Second Place Overall"] = '<i class="fa-regular fa-trophy-star ls-league-award"   style="color:darkgray" aria-hidden="true"></i>';
	}
	var lh_no_record = '<i class="fa-regular fa-minus" aria-hidden="true" style="font-size:0.625rem;margin-right:0.188rem"></i><i class="fa-regular fa-minus" aria-hidden="true" style="font-size:0.625rem;margin-right:0.188rem"></i><i class="fa-regular fa-minus" aria-hidden="true" style="font-size:0.625rem"></i>';
	var lh_precision = precision;
	var lh_precision_multiplier = 1;
	var lh_franchise_id;
	var lh_overall_record_ar = new Array();
	var lh_playerScore_ar = new Array();
	var lh_playerScoreSeason_ar = new Array();
	var lh_playerScoreCareer_ar = new Array();
	var lh_missing_players = '';
	var lh_is_new_install = false;
	var lh_initial_run = true;

	if (localStorage.hasOwnProperty("lh_rank_teams_" + league_id)) var lh_teams_to_rank = parseInt(localStorage["lh_rank_teams_" + league_id]);
	else var lh_teams_to_rank = 10;
	if (localStorage.hasOwnProperty("lh_rank_players_" + league_id)) var lh_players_to_rank = parseInt(localStorage["lh_rank_players_" + league_id]);
	else var lh_players_to_rank = 10;
	if (localStorage.hasOwnProperty("lh_rank_misc_" + league_id)) var lh_misc_to_rank = parseInt(localStorage["lh_rank_misc_" + league_id]);
	else var lh_misc_to_rank = 10;

	function trigger_history_script() {
		history_script_trigger_ran = true;
		if (localStorage.getItem("lh_defunct_" + league_id) == null) localStorage.setItem("lh_defunct_" + league_id, "1");
		if (localStorage.getItem("lh_notation_" + league_id) !== null) localStorage.setItem("lh_notation_" + league_id, "1");
		for (let i = 0; i < reportLeague_ar.league.history.league.length; i++) {
			if (reportLeague_ar.league.history.league[i].year !== `${year}`) {
				let url = reportLeague_ar.league.history.league[i].url;
    				if (url.includes("myfantasyleague")) {
      					integratedHistory_Links.push(url);
    				}
			}
		}
		integratedHistory_Links.forEach((url, index) => {
			const yid = url.split('/')[3];
			const sid = url.split('/')[2].substr(3, 2);
			const lid = url.split('/').pop();
			integratedHistory_ar[index] = {
				"yid": yid,
				'sid': sid,
				'lid': lid
			};
			const lazyLoadTableTabs = (scriptLoaded, wrapperElement, getTableFn, getYtdPtsFn) => {
				if (scriptLoaded && wrapperElement.length) {
					getTableFn(yid, sid, lid);
					if (getYtdPtsFn) getYtdPtsFn(yid, sid, lid);
				}
			};
			lazyLoadTableTabs(load_tradesHistory_script, $('#trades-history-wrapper'), trh_getTradesTableLazyLoad);
			lazyLoadTableTabs(load_topsHistory_script, $('#tops-history-wrapper'), th_getTopsTableLazyLoad);
			lazyLoadTableTabs(load_playoffsHistory_script, $('#playoffs-history-wrapper'), ph_getPlayoffsTableLazyLoad);
			lazyLoadTableTabs(load_contractHistory_script, $('#contract-history-wrapper'), ch_getContractTableLazyLoad, shared_getYtdPtsLazyLoad);
			lazyLoadTableTabs(load_standingsHistory_script, $('#standings-history-wrapper'), sh_getStandingsTableLazyLoad);
			lazyLoadTableTabs(load_draftHistory_script, $('#draft-history-wrapper'), dh_getDraftTableLazyLoad, dh_accumulatePts ? dh_getYtdPtsLazyLoad : null);
		});
		const getHistoryTabsTable = (scriptLoaded, wrapperElement, buildTabsFn, getTableFn) => {
			if (scriptLoaded && wrapperElement.length) {
				buildTabsFn();
				getTableFn(year, baseURLDynamic.split('/')[2].substr(3, 2), league_id, true);
			}
		};
		getHistoryTabsTable(load_tradesHistory_script, $('#trades-history-wrapper'), trh_buildTabs, trh_getTradesTable);
		getHistoryTabsTable(load_topsHistory_script, $('#tops-history-wrapper'), th_buildTabs, th_getTopsTable);
		getHistoryTabsTable(load_playoffsHistory_script, $('#playoffs-history-wrapper'), ph_buildTabs, ph_getPlayoffsTable);
		getHistoryTabsTable(load_contractHistory_script, $('#contract-history-wrapper'), ch_buildTabs, ch_getContractTable);
		getHistoryTabsTable(load_standingsHistory_script, $('#standings-history-wrapper'), sh_buildTabs, sh_getStandingsTable);
		getHistoryTabsTable(load_draftHistory_script, $('#draft-history-wrapper'), dh_buildTabs, dh_getDraftTable);

		//console.log(integratedHistory_ar);
	}

	// THIS FUNCTION IS NOT ACTIVE BUT IF WANT TO USE AGAIN RENAME IS AS ABOVE FUNCTION trigger_history_script()
	// this will check url paths before running to see if they are valid and not show years not valid
	function doNotRunFunction() {
		history_script_trigger_ran = true;
		if (localStorage.getItem("lh_defunct_" + league_id) == null) localStorage.setItem("lh_defunct_" + league_id, "1");
		if (localStorage.getItem("lh_notation_" + league_id) !== null) localStorage.setItem("lh_notation_" + league_id, "1");
		var fetchPromises = [];
		var links = [];		
		for (let i = 0; i < reportLeague_ar.league.history.league.length; i++) {
			if (reportLeague_ar.league.history.league[i].year !== `${year}`) {
    				let url = reportLeague_ar.league.history.league[i].url;
    				url = url.replace('/home/', '/standings?L=');
    				links.push(url + '&PRINTER=1');
			}
		}
		fetchPromises = links.map((url) =>
			fetch(url)
			.then((response) => response.url)
			.catch((error) => {
				console.log('Error:', error);
				return null; // Resolve the promise with a null value in case of error
			})
		);
		// Wait for all fetch requests to complete
		Promise.all(fetchPromises)
			.then((responses) => {
				responses = responses.filter((response) => response !== null);
				// Map the responses to the corresponding indices in integratedHistory_ar
				responses.forEach((url, index) => {
					const yid = url.split('/')[3];
					const sid = url.split('/')[2].substr(3, 2);
					const lid = url.split('?L=')[1].split('&')[0];
					integratedHistory_ar[index] = {
						"yid": yid,
						'sid': sid,
						'lid': lid
					};					
					const lazyLoadTableTabs = (scriptLoaded, wrapperElement, getTableFn, getYtdPtsFn) => {
						if (scriptLoaded && wrapperElement.length) {
							getTableFn(yid, sid, lid);
							if (getYtdPtsFn) getYtdPtsFn(yid, sid, lid);
						}
					};
					lazyLoadTableTabs(load_tradesHistory_script, $('#trades-history-wrapper'), trh_getTradesTableLazyLoad);
					lazyLoadTableTabs(load_topsHistory_script, $('#tops-history-wrapper'), th_getTopsTableLazyLoad);
					lazyLoadTableTabs(load_playoffsHistory_script, $('#playoffs-history-wrapper'), ph_getPlayoffsTableLazyLoad);
					lazyLoadTableTabs(load_contractHistory_script, $('#contract-history-wrapper'), ch_getContractTableLazyLoad, shared_getYtdPtsLazyLoad);
					lazyLoadTableTabs(load_standingsHistory_script, $('#standings-history-wrapper'), sh_getStandingsTableLazyLoad);
					lazyLoadTableTabs(load_draftHistory_script, $('#draft-history-wrapper'), dh_getDraftTableLazyLoad, dh_accumulatePts ? dh_getYtdPtsLazyLoad : null);
				});
				const getHistoryTabsTable = (scriptLoaded, wrapperElement, buildTabsFn, getTableFn) => {
					if (scriptLoaded && wrapperElement.length) {
						buildTabsFn();
						getTableFn(year, baseURLDynamic.split('/')[2].substr(3, 2), league_id, true);
					}
				};
				getHistoryTabsTable(load_tradesHistory_script, $('#trades-history-wrapper'), trh_buildTabs, trh_getTradesTable);
				getHistoryTabsTable(load_topsHistory_script, $('#tops-history-wrapper'), th_buildTabs, th_getTopsTable);
				getHistoryTabsTable(load_playoffsHistory_script, $('#playoffs-history-wrapper'), ph_buildTabs, ph_getPlayoffsTable);
				getHistoryTabsTable(load_contractHistory_script, $('#contract-history-wrapper'), ch_buildTabs, ch_getContractTable);
				getHistoryTabsTable(load_standingsHistory_script, $('#standings-history-wrapper'), sh_buildTabs, sh_getStandingsTable);
				getHistoryTabsTable(load_draftHistory_script, $('#draft-history-wrapper'), dh_buildTabs, dh_getDraftTable);
				//console.log(integratedHistory_ar);
			})
			.catch(error => {
				console.log('Error:', error);
			});
	}




	//*********************************************************************************
	//
	//               CUSTOM TAB FUNCTION NORMALLY FOUND IN OUR HEADER
	//
	//*********************************************************************************
	function show_custom_tab_history(tab_id) {
		var done = false;
		var history_offset = parseInt(tab_id) - parseInt(parseInt(tab_id) / Math.pow(10, parseInt(tab_id).toString().length - 1)) * Math.pow(10, parseInt(tab_id).toString().length - 1);
		var history_offset = parseInt(history_offset / 100) * 100;
		if (history_offset === 1100) { //MAIN TAB SERIES
			jQuery(".hs-control-setting").hide();
			jQuery(".hs-control-setting-content").hide();
			jQuery("#tab_options_" + tab_id).show();
		}
		var counter = history_offset + parseInt(parseInt(tab_id) / Math.pow(10, parseInt(tab_id).toString().length - 1)) * Math.pow(10, parseInt(tab_id).toString().length - 1);
		while (!done) {
			var this_tab_content = document.getElementById("tabcontent" + counter);
			var this_tab = document.getElementById("tab" + counter);
			if (!this_tab_content) {
				done = true;
			} else {
				if (counter == parseInt(tab_id)) {
					this_tab_content.style.display = '';
					this_tab.className = "currenttab";
					document.getElementById("tab_title_" + (history_offset + parseInt(parseInt(tab_id) / Math.pow(10, parseInt(tab_id).toString().length - 1)) * Math.pow(10, parseInt(tab_id).toString().length - 1))).innerHTML = document.getElementById("tab" + tab_id).firstChild.text;
				} else {
					this_tab_content.style.display = 'none';
					this_tab.className = "";
				}
			}
			counter++;
		}
		try {
			setTimeout("doTableScrollShadowHistory(" + tab_id + ")", 50);
		} catch (er) {}
	}
	show_custom_tab_history(11100);
	//*********************************************************************************
	//
	//              CUSTOM SHADOW FUNCTIONS NORMALLY FOUND IN OUR FOOTER
	//
	//*********************************************************************************
	function doTableScrollShadowHistory(thisTab) {
		var target_id = '#tabcontent' + thisTab;
		var totalWidth = jQuery(target_id + " .hz-table-wrap").width();
		var tableWidth = jQuery(target_id + " .hz-main-table").width();
		var fixedWidth = jQuery(target_id + " .fixed-side").width();
		//jQuery(target_id+" .hz-main-table").parent().scroll(function (event) {
		jQuery(target_id + " .hz-main-table").parent().on('scroll', function (event) {
			var elemPos = $(target_id + " .hz-main-table").position();
			var scrollPos = $(target_id + " .hz-table-wrap").scrollLeft();
			var elementWidth = $(target_id + " .hz-clone").width();
			// MAX LEFT -> REMOVE LEFT SHADOW
			if (elemPos.left >= 0)
				$(target_id + " .fixed-side").addClass("hz-hide-shadow");
			else
				$(target_id + " .fixed-side").removeClass("hz-hide-shadow");
			// MAX RIGHT -> REMOVE RIGHT SHADOW
			if ((scrollPos + totalWidth) >= (elementWidth - 2))
				$(target_id + " .shadow-right").addClass("hz-hide-shadow");
			else
				$(target_id + " .shadow-right").removeClass("hz-hide-shadow");
		});
	}

	function doTableScrollHistory(which, target_id) {
		if (!document.getElementById(target_id)) return false;
		jQuery('#' + target_id + ' div.mobile-wrap table:first').addClass('hz-main-table').wrap('<div class="hz-table-wrap">');
		switch (which) {
			case 0:
			case 3:
				jQuery('#' + target_id + ' div.mobile-wrap .hz-table-wrap').closest('div.mobile-wrap').addClass('hz-table-scroll');
				jQuery('#' + target_id + ' div.mobile-wrap table tr:first').wrap('<thead></thead>');
				jQuery('#' + target_id + ' div.mobile-wrap table tr:first th:first').addClass('fixed-side hz-hide-shadow');
				jQuery('#' + target_id + ' div.mobile-wrap table thead').nextUntil('table').wrapAll('<tbody>');
				jQuery('#' + target_id + ' div.mobile-wrap table thead').unwrap();
				jQuery('#' + target_id + ' .hz-table-scroll tbody td:first-of-type').wrapInner('<th class="fixed-side hz-hide-shadow"></th>');
				jQuery('#' + target_id + ' tbody .fixed-side').unwrap();
				jQuery('#' + target_id + ' div.mobile-wrap table tbody th.lh_overall_franchise').addClass('fixed-side hz-hide-shadow');
				break;
			case 1:
				jQuery('#' + target_id + ' div.mobile-wrap table tr.weeklypointtotals').remove();
				jQuery('#' + target_id + ' div.mobile-wrap .hz-table-wrap').closest('div.mobile-wrap').addClass('hz-table-scroll fx-dbl-tbl');
				jQuery('#' + target_id + ' div.mobile-wrap table tr:first').wrap('<thead></thead>');
				jQuery('#' + target_id + ' div.mobile-wrap table tr:first th:first').addClass('fixed-side fx-dbl hz-hide-shadow');
				jQuery('#' + target_id + ' div.mobile-wrap table thead').nextUntil('table').wrapAll('<tbody>');
				jQuery('#' + target_id + ' div.mobile-wrap table thead').unwrap();
				jQuery('#' + target_id + ' .hz-table-scroll tbody td:first-of-type').wrapInner('<th class="fixed-side fx-dbl hz-hide-shadow"></th>');
				jQuery('#' + target_id + ' tbody .fixed-side').unwrap();
				jQuery('#' + target_id + ' div.mobile-wrap table .player').each(function () {
					$(this).prev("th").append(this);
				});
				jQuery(".fixed-side").find(".player").contents().unwrap();
				break;
			case 2:
				jQuery('#' + target_id + ' div.mobile-wrap .hz-table-wrap').closest('div.mobile-wrap').addClass('hz-table-scroll fx-dbl-tbl');
				jQuery('#' + target_id + ' div.mobile-wrap table tr:first').wrap('<thead></thead>');
				jQuery('#' + target_id + ' div.mobile-wrap table tbody tr th:first-of-type').addClass('fixed-side fx-dbl hz-hide-shadow');
				jQuery('#' + target_id + ' div.mobile-wrap table thead').nextUntil('table').wrapAll('<tbody>');
				jQuery('#' + target_id + ' div.mobile-wrap table thead').unwrap();
				break;
		}

		jQuery('#' + target_id + ' .hz-main-table').clone(true).appendTo('#' + target_id + ' .hz-table-scroll').addClass('hz-clone');
		jQuery(".hz-clone").each(function () {
			$(this).clone(true).appendTo($(this).parent()).addClass('hz_table_remove');
		});
		jQuery('.hz-clone td+td:last-of-type,.hz-clone th+th:last-of-type').addClass('shadow-right hz-hide-shadow');
		jQuery('.hz_table_remove tbody,.hz_table_remove thead').html('');
		jQuery('th.fixed-side').has('img.lh_franchise_img , img.franchiseicon').addClass('has-ficon');
	}

	//*********************************************************************************
	//
	//                  FUNCTIONS USED SUBMIT FORM TO CREATE/UPDATE HISTORY
	//
	//*********************************************************************************
	var iframe_check_count = 0;
	var iframe_loading_id;

	function lh_check_iframe_content() {
		if (iframe_check_count < 120) {
			try {
				//CHECK FOR CONTENT
				console.log("check if finished");
				var iframe_body = jQuery("#lh_iframe_form").contents().find("#body_pro_schedule").html();
				if (iframe_body.length > 0) { //THIS WILL TRIGGER ERROR FOR CROSS-SERVER ATTEMPT
					iframe_check_count = 0;
					jQuery('#' + iframe_loading_id).html('<i class="fa-regular fa-check fa-2xl" style="color:green" aria-hidden="true"></i>');

					//jQuery("#lh_iframe_wrapper").html('<iframe style="visibility:hidden;" onload="this.style.visibility = \'visible\';"></iframe>');  
					//	jQuery("#lh_iframe_wrapper").html('<iframe name="lh_iframe_form" id="lh_iframe_form" allowtransparency="true"></iframe>');
					//RELOAD JS FILES (NOT SURE IF THIS ACTUALLY WORKS)
					//APPEND LEAGUE HISTORY JS TO BODY
					jQuery("head").append('<scr' + 'ipt id="current_history_js" src="' + baseURLHistory + '/' + year + '/leagues/' + league_id + '/current.js?v=' + Math.random() + '" /></scr' + 'ipt>');
					jQuery("head").append('<scr' + 'ipt id="full_history_js" src="' + baseURLHistory + '/' + year + '/leagues/' + league_id + '/history.js?v=' + Math.random() + '" /></scr' + 'ipt>');
					try { //APPEND PLAYER HISTORY JS TO BODY (TRAP ERROR IF FILE IS MISSING)
						for (var i = 0; i < leagueHistory.history_links.length; i++) jQuery("head").append('<scr' + 'ipt id="player_history_' + leagueHistory.history_links[i].year + '" src="' + baseURLHistory + '/' + year + '/players/' + league_id + '/' + leagueHistory.history_links[i].year + '.js" /></scr' + 'ipt>');
					} catch (er) {}
					//UPDATE TABS AS NEW INSTALL
					lh_initiate(true);
				}
			} catch (er) {
				try {
					console.log("check for fatal error");
					//CHECK FOR FATAL ERROR
					var iframe_body = jQuery("#lh_iframe_form").contents().find("#body_injury").html();
					if (iframe_body.length > 0) { //THIS WILL TRIGGER ERROR FOR CROSS-SERVER ATTEMPT
						iframe_check_count = 0;
						jQuery('#' + iframe_loading_id).html('<i class="fa-regular fa-xmark fa-2xl" style="color:red" aria-hidden="true"></i><div style="font-weight:bold">FATAL ERROR</div>');
						//jQuery("#lh_iframe_wrapper").html('<iframe style="visibility:hidden;" onload="this.style.visibility = \'visible\';"></iframe>');  
						//jQuery("#lh_iframe_wrapper").html('<iframe name="lh_iframe_form" id="lh_iframe_form" allowtransparency="true"></iframe>');
					}
				} catch (er) {
					try {
						//CHECK FOR BAD FILE CONTENTS ERROR
						console.log("check for missing content");
						var iframe_body = jQuery("#lh_iframe_form").contents().find("#body_pro_matchup").html();
						if (iframe_body.length > 0) { //THIS WILL TRIGGER ERROR FOR CROSS-SERVER ATTEMPT
							iframe_check_count = 0;
							jQuery('#' + iframe_loading_id).html('<i class="fa-regular fa-triangle-exclamation fa-2xl" style="color:orange!important" aria-hidden="true"></i><div style="font-weight:bold">WARNING: MISSING CONTENT</div>');
							//jQuery("#lh_iframe_wrapper").html('<iframe style="visibility:hidden;" onload="this.style.visibility = \'visible\';"></iframe>');  
							//jQuery("#lh_iframe_wrapper").html('<iframe name="lh_iframe_form" id="lh_iframe_form" allowtransparency="true"></iframe>');
						}
					} catch (er) {
						console.log("check again in 5 seconds");
						if (iframe_check_count === 0)
							jQuery('#' + iframe_loading_id).html('<i class="fa-regular fa-gear fa-spin fa-2xl"></i><div id="loading_counter" style="font-weight:bold"></div>');
						else
							jQuery('#loading_counter').html(parseInt((iframe_check_count / 120) * 100) + '%');
						setTimeout("lh_check_iframe_content()", 1000 * 5); //CHECK AGAIN IN 5 SECONDS
						iframe_check_count++;
					}
				}
			}
		} else {
			//TAKES TOO LONG IE 5seconds*120iterations = 10 MINUTES
			console.log("too long");
			jQuery('#' + iframe_loading_id).html('<i class="fa-regular fa-xmark fa-2xl" style="color:red" aria-hidden="true"></i><div style="font-weight:bold">TOO LONG</div>');
			iframe_check_count = 0;
			iframe_loading_id = '';
			//jQuery("#lh_iframe_wrapper").html('<iframe name="lh_iframe_form" id="lh_iframe_form" allowtransparency="true" style="visibility:hidden" onload="this.style.visibility='visible'"></iframe>');
			// jQuery("#lh_iframe_wrapper").html('<iframe name="lh_iframe_form" id="lh_iframe_form" allowtransparency="true"></iframe>');
		}
	}

	function createFranchiseAbbrev(_year, _fid, dowrap) {
		if (lh_abbrev_override.hasOwnProperty(_year + '_' + _fid)) return lh_abbrev_override[_year + '_' + _fid];
		if (_fid === "FA")
			if (dowrap)
				return '<span class="lh_abbrev" title="Free Agent">-</span>';
			else
				return '-';
		var _name = leagueHistory['league_history_detail'][_year].franchises[_fid].name;
		var _abbrev = leagueHistory['league_history_detail'][_year].franchises[_fid].abbrev;
		if (_abbrev === null) {
			_abbrev = "";
			var _name_ar = _name.split(" ");
			if (_name_ar.length > 1)
				for (var i = 0; i < _name_ar.length; i++) _abbrev += _name_ar[i].substr(0, 1).toUpperCase();
		}
		if (_abbrev === "") _abbrev = _name.substr(0, lh_abbrev_max_length).toUpperCase();
		_abbrev = _abbrev.substr(0, lh_abbrev_max_length).toUpperCase();
		if (dowrap)
			return '<span class="lh_abbrev" title="' + _name + '">' + _abbrev + '</span>';
		else
			return _abbrev;
	}

	function mostRecent(which, _year, _fid) {
		if (!lh_use_most_recent_franchise_info || isDefunctFranchise(_year, _fid)) {
			switch (which) {
				case 0:
					return leagueHistory.league_history_detail[_year].franchises[_fid].name;
					break;
				case 1:
					return leagueHistory.league_history_detail[_year].franchises[_fid].icon;
					break;
				case 2:
					return leagueHistory.league_history_detail[_year].franchises[_fid].logo;
					break;
				case 3:
					return getFranchiseAbbrev(_year, _fid, false);
					break;
			}
		}
		//SINCE NOT DEFUNCT WE WANT MOST RECENT INFO WHICH IS CURRENT YEAR
		var reverse_fid = leagueHistory.reverse_lookup[_year + '_' + _fid];
		switch (which) {
			case 0:
				if (leagueHistory.league_history_detail[leagueHistory.years[0]].franchises[reverse_fid].name !== '')
					return leagueHistory.league_history_detail[leagueHistory.years[0]].franchises[reverse_fid].name;
				else
					return leagueHistory.league_history_detail[_year].franchises[_fid].name;
				break;
			case 1:
				if (leagueHistory.league_history_detail[leagueHistory.years[0]].franchises[reverse_fid].icon !== '')
					return leagueHistory.league_history_detail[leagueHistory.years[0]].franchises[reverse_fid].icon;
				else
					return leagueHistory.league_history_detail[_year].franchises[_fid].icon;
				break;
			case 2:
				if (leagueHistory.league_history_detail[leagueHistory.years[0]].franchises[reverse_fid].logo !== '')
					return leagueHistory.league_history_detail[leagueHistory.years[0]].franchises[reverse_fid].logo;
				else
					return leagueHistory.league_history_detail[_year].franchises[_fid].logo;
				break;
			case 3:
				if (leagueHistory.league_history_detail[leagueHistory.years[0]].franchises[reverse_fid].abbrev !== '')
					return getFranchiseAbbrev(leagueHistory.years[0], reverse_fid, false);
				else
					return getFranchiseAbbrev(_year, _fid, false);
				break;
			default:
				return '';
		}
	}

	function getFranchiseAbbrev(_year, _id, _parent, useAlt) {
		if (_parent) {
			try {
				if (lh_abbrev_override.hasOwnProperty(_year + '_' + leagueHistory.parent_lookup[_year + '_' + _id]))
					return lh_abbrev_override[_year + '_' + leagueHistory.parent_lookup[_year + '_' + _id]];
				else
					return leagueHistory.league_history_detail[_year].franchises[leagueHistory.parent_lookup[_year + '_' + _id]].name;
			} catch (er) {
				console.log(_year + " " + _id + " " + leagueHistory.fid_history_detail[_id][_year].fname);
				return leagueHistory.fid_history_detail[_id][_year].fname;
			}
		} else {
			if (useAlt && _id !== "FA") {
				switch (lh_abbrev_icon_logo) {
					case 0:
						return createFranchiseAbbrev(_year, _id, true);
						break;
					case 1:
					case 5:
						if (lh_abbrev_icon_logo === 1 || (lh_abbrev_icon_logo === 5 && !isDefunctFranchise(_year, _id))) {
							if (mostRecent(1, _year, _id) !== '')
								return '<img src="' + mostRecent(1, _year, _id) + '" class="lh_franchise_img lh_icon" title="' + mostRecent(0, _year, _id) + '" alt="' + mostRecent(0, _year, _id) + '" />';
							else if (mostRecent(2, _year, _id) !== '')
								return '<img src="' + mostRecent(2, _year, _id) + '" class="lh_franchise_img lh_icon_logo" title="' + mostRecent(0, _year, _id) + '" alt="' + mostRecent(0, _year, _id) + '" />';
							else
								return createFranchiseAbbrev(_year, _id, true);
						} else {
							return createFranchiseAbbrev(_year, _id, true);
						}
						break;
					case 2:
					case 6:
						if (lh_abbrev_icon_logo === 2 || (lh_abbrev_icon_logo === 6 && !isDefunctFranchise(_year, _id))) {
							if (mostRecent(2, _year, _id) !== '')
								return '<img src="' + mostRecent(2, _year, _id) + '" class="lh_franchise_img lh_logo" title="' + mostRecent(0, _year, _id) + '" alt="' + mostRecent(0, _year, _id) + '" />';
							else if (mostRecent(1, _year, _id) !== '')
								return '<img src="' + mostRecent(1, _year, _id) + '" class="lh_franchise_img lh__icon" title="' + mostRecent(0, _year, _id) + '" alt="' + mostRecent(0, _year, _id) + '" />';
							else
								return createFranchiseAbbrev(_year, _id, true);
						} else {
							return createFranchiseAbbrev(_year, _id, true);
						}
						break;
					case 3:
					case 7:
						if (lh_abbrev_icon_logo === 3 || (lh_abbrev_icon_logo === 3 && !isDefunctFranchise(_year, _id))) {
							if (mostRecent(1, _year, _id) !== '')
								return '<img src="' + mostRecent(1, _year, _id) + '" class="lh_franchise_img lh_icon" title="' + mostRecent(0, _year, _id) + '" alt="' + mostRecent(0, _year, _id) + '" /> ' + createFranchiseAbbrev(_year, _id, true);
							else if (mostRecent(2, _year, _id) !== '')
								return '<img src="' + mostRecent(2, _year, _id) + '" class="lh_franchise_img lh_icon_logo" title="' + mostRecent(0, _year, _id) + '" alt="' + mostRecent(0, _year, _id) + '" /> ' + createFranchiseAbbrev(_year, _id, true);
							else
								return createFranchiseAbbrev(_year, _id, true);
						} else {
							return createFranchiseAbbrev(_year, _id, true);
						}
						break;
					case 4:
					case 8:
						if (lh_abbrev_icon_logo === 4 || (lh_abbrev_icon_logo === 8 && !isDefunctFranchise(_year, _id))) {
							if (mostRecent(2, _year, _id) !== '')
								return '<img src="' + mostRecent(2, _year, _id) + '" class="lh_franchise_img lh_logo" title="' + mostRecent(0, _year, _id) + '" alt="' + mostRecent(0, _year, _id) + '" /> ' + createFranchiseAbbrev(_year, _id, true);
							else if (mostRecent(1, _year, _id) !== '')
								return '<img src="' + mostRecent(1, _year, _id) + '" class="lh_franchise_img lh__icon" title="' + mostRecent(0, _year, _id) + '" alt="' + mostRecent(0, _year, _id) + '" /> ' + createFranchiseAbbrev(_year, _id, true);
							else
								return createFranchiseAbbrev(_year, _id, true);
						} else {
							return createFranchiseAbbrev(_year, _id, true);
						}
						break;
					default:
						return createFranchiseAbbrev(_year, _id, true);
				}
			} else {
				return createFranchiseAbbrev(_year, _id, true);
			}
		}
	}

	function isDefunctFranchise(_year, _fid) {
		//FRANCHISES MAY HAVE MISSED SEASONS SO WE WANT TO SEE IF FRANCHISE EXISTED FOR THAT SEASON
		if (!leagueHistory.parent_lookup.hasOwnProperty(_year + "_" + _fid)) return true;
		try {
			var _name = leagueHistory.league_history_detail[_year].franchises[_fid].name;
			if (leagueHistory.defunct_franchise.hasOwnProperty(_name))
				return true;
			else
				return false;
		} catch (er) {}
		return false;
	}

	function getFranchiseName(_year, _id, _parent, useAlt) {
		if (_parent) {
			try {
				_p_fid = leagueHistory.parent_lookup[_year + '_' + _id];
				if (useAlt) {
					switch (lh_name_icon_logo) {
						case 0:
							return mostRecent(0, _year, _p_fid);
							break;
						case 1:
						case 5:
							if (lh_name_icon_logo === 1 || (lh_name_icon_logo === 5 && !isDefunctFranchise(_year, _p_fid))) {
								if (mostRecent(1, _year, _p_fid) !== '')
									return '<img src="' + mostRecent(1, _year, _p_fid) + '" class="lh_franchise_img lh_icon" title="' + mostRecent(0, _year, _p_fid) + '" alt="' + mostRecent(0, _year, _p_fid) + '" />';
								else if (mostRecent(2, _year, _p_fid) !== '')
									return '<img src="' + mostRecent(2, _year, _p_fid) + '" class="lh_franchise_img lh_icon_logo" title="' + mostRecent(0, _year, _p_fid) + '" alt="' + mostRecent(0, _year, _p_fid) + '" />';
								else
									return mostRecent(0, _year, _p_fid);

							} else {
								return mostRecent(0, _year, _p_fid);
							}
							break;
						case 2:
						case 6:
							if (lh_name_icon_logo === 2 || (lh_name_icon_logo === 6 && !isDefunctFranchise(_year, _p_fid))) {
								if (mostRecent(2, _year, _p_fid) !== '')
									return '<img src="' + mostRecent(2, _year, _p_fid) + '" class="lh_franchise_img lh_logo" title="' + mostRecent(0, _year, _p_fid) + '" alt="' + mostRecent(0, _year, _p_fid) + '" />';
								else if (mostRecent(1, _year, _p_fid) !== '')
									return '<img src="' + mostRecent(1, _year, _p_fid) + '" class="lh_franchise_img lh__icon" title="' + mostRecent(0, _year, _p_fid) + '" alt="' + mostRecent(0, _year, _p_fid) + '" />';
								else
									return mostRecent(0, _year, _p_fid);
							} else {
								return mostRecent(0, _year, _p_fid);
							}
							break;
						case 3:
						case 7:
							if (lh_name_icon_logo === 3 || (lh_name_icon_logo === 7 && !isDefunctFranchise(_year, _p_fid))) {
								if (mostRecent(1, _year, _p_fid) !== '')
									return '<img src="' + mostRecent(1, _year, _p_fid) + '" class="lh_franchise_img lh_icon" title="' + mostRecent(0, _year, _p_fid) + '" alt="' + mostRecent(0, _year, _p_fid) + '" /> ' + mostRecent(0, _year, _p_fid);
								else if (mostRecent(2, _year, _p_fid) !== '')
									return '<img src="' + mostRecent(2, _year, _p_fid) + '" class="lh_franchise_img lh_icon_logo" title="' + mostRecent(0, _year, _p_fid) + '" alt="' + mostRecent(0, _year, _p_fid) + '" /> ' + mostRecent(0, _year, _p_fid);
								else
									return mostRecent(0, _year, _p_fid);
							} else {
								return mostRecent(0, _year, _p_fid);
							}
							break;
						case 4:
						case 8:
							if (lh_name_icon_logo === 4 || (lh_name_icon_logo === 8 && !isDefunctFranchise(_year, _p_fid))) {
								if (mostRecent(2, _year, _p_fid) !== '')
									return '<img src="' + mostRecent(2, _year, _p_fid) + '" class="lh_franchise_img lh_logo" title="' + mostRecent(0, _year, _p_fid) + '" alt="' + mostRecent(0, _year, _p_fid) + '" /> ' + mostRecent(0, _year, _p_fid);
								else if (mostRecent(1, _year, _p_fid) !== '')
									return '<img src="' + mostRecent(1, _year, _p_fid) + '" class="lh_franchise_img lh_icon" title="' + mostRecent(0, _year, _p_fid) + '" alt="' + mostRecent(0, _year, _p_fid) + '" /> ' + mostRecent(0, _year, _p_fid);
								else
									return mostRecent(0, _year, _p_fid);
							} else {
								return mostRecent(0, _year, _p_fid);
							}
							break;
						default:
							return mostRecent(0, _year, _p_fid);
					}
				} else {
					return mostRecent(0, _year, _p_fid);
				}
			} catch (er) {
				console.log(_year + " " + _id + " " + leagueHistory.fid_history_detail[_id][_year].fname);
				if (leagueHistory.fid_history_detail[_id][_year].fname === null)
					return "?";
				else
					return leagueHistory.fid_history_detail[_id][_year].fname;
			}
		} else {
			try {
				if (useAlt) {
					switch (lh_name_icon_logo) {
						case 0:
							return mostRecent(0, _year, _id);
							break;
						case 1:
						case 5:
							if (lh_name_icon_logo === 1 || (lh_name_icon_logo === 5 && !isDefunctFranchise(_year, _id))) {
								if (mostRecent(1, _year, _id) !== '')
									return '<img src="' + mostRecent(1, _year, _id) + '" class="lh_franchise_img lh_icon" title="' + mostRecent(0, _year, _id) + '" alt="' + mostRecent(0, _year, _id) + '" />';
								else if (mostRecent(2, _year, _id) !== '')
									return '<img src="' + mostRecent(2, _year, _id) + '" class="lh_franchise_img lh_icon_logo" title="' + mostRecent(0, _year, _id) + '" alt="' + mostRecent(0, _year, _id) + '" />';
								else
									return mostRecent(0, _year, _id);
							} else {
								return mostRecent(0, _year, _id);
							}
							break;
						case 2:
						case 6:
							if (lh_name_icon_logo === 2 || (lh_name_icon_logo === 6 && !isDefunctFranchise(_year, _id))) {
								if (mostRecent(2, _year, _id) !== '')
									return '<img src="' + mostRecent(2, _year, _id) + '" class="lh_franchise_img lh_logo" title="' + mostRecent(0, _year, _id) + '" alt="' + mostRecent(0, _year, _id) + '" />';
								else if (mostRecent(1, _year, _id) !== '')
									return '<img src="' + mostRecent(1, _year, _id) + '" class="lh_franchise_img lh__icon" title="' + mostRecent(0, _year, _id) + '" alt="' + mostRecent(0, _year, _id) + '" />';
								else
									return mostRecent(0, _year, _id);
							} else {
								return mostRecent(0, _year, _id);
							}
							break;
						case 3:
						case 7:
							if (lh_name_icon_logo === 3 || (lh_name_icon_logo === 7 && !isDefunctFranchise(_year, _id))) {
								if (mostRecent(1, _year, _id) !== '')
									return '<img src="' + mostRecent(1, _year, _id) + '" class="lh_franchise_img lh_icon" title="' + mostRecent(0, _year, _id) + '" alt="' + mostRecent(0, _year, _id) + '" /> ' + mostRecent(0, _year, _id);
								else if (mostRecent(2, _year, _id) !== '')
									return '<img src="' + mostRecent(2, _year, _id) + '" class="lh_franchise_img lh_icon_logo" title="' + mostRecent(0, _year, _id) + '" alt="' + mostRecent(0, _year, _id) + '" /> ' + mostRecent(0, _year, _id);
								else
									return mostRecent(0, _year, _id);
							} else {
								return mostRecent(0, _year, _id);
							}
							break;
						case 4:
						case 8:
							if (lh_name_icon_logo === 4 || (lh_name_icon_logo === 8 && !isDefunctFranchise(_year, _id))) {
								if (mostRecent(2, _year, _id) !== '')
									return '<img src="' + mostRecent(2, _year, _id) + '" class="lh_franchise_img lh_logo" title="' + mostRecent(0, _year, _id) + '" alt="' + mostRecent(0, _year, _id) + '" /> ' + mostRecent(0, _year, _id);
								else if (mostRecent(1, _year, _id) !== '')
									return '<img src="' + mostRecent(1, _year, _id) + '" class="lh_franchise_img lh__icon" title="' + mostRecent(0, _year, _id) + '" alt="' + mostRecent(0, _year, _id) + '" /> ' + mostRecent(0, _year, _id);
								else
									return mostRecent(0, _year, _id);
							} else {
								return mostRecent(0, _year, _id);
							}
							break;
						default:
							return mostRecent(0, _year, _id);
					}
				} else {
					return mostRecent(0, _year, _id);
				}
			} catch (er) {
				if (leagueHistory.league_history_detail[_year].franchises[_id].name === null)
					return "?";
				else
					return leagueHistory.league_history_detail[_year].franchises[_id].name;
			}
		}
	}

	function lh_custom_historical_franchises(doAjax) {
		//FIRST CREATE HISTORICAL LINKS FILE BY ACCESSING PHP AND APPENDING RETURNED FILE
		if (doAjax) {
			jQuery('#lh_custom_historical_franchises_wrapper').attr("style", "display:inline-block;width:100%");
			var url = `${baseURLHistory}/createHistoricalLinks.php?year=${year}&league_id=${league_id}`;
			// THIS WILL GENERATE ERROR UPON COMPLETION BECAUSE OF THE CROSS-BROWSER CHECK BUT THAT IS FINE BECAUSE JS FILE WILL BE GENERATED
			fetch(url, {
					method: "GET",
					credentials: "include"
				})
				.then(response => {
					if (!response.ok) {
						throw new Error("Network response was not OK");
					}
					return response.json();
				})
				.then(data => {
					// Handle successful response here
					// ...
				})
				.catch(error => {
					$('head').append('<scr' + 'ipt src="' + baseURLHistory + '/' + year + '/leagues/' + league_id + '/links.js" /></scr' + 'ipt>');
					setTimeout('lh_custom_historical_franchises(false)', 700);
				});
		}
		//NEXT FILL IN TABLE USING HISTORICAL LINKS JS FILE IE NOT THE LEAGUEHISTORY JS FILE
		if (!doAjax) {
			var html = '';
			html += '<div class="mobile-wrap">';
			html += '<table align="center" cellspacing="1" class="report" id="custom_link_historical_franchises">';
			html += '<caption style="display:table-caption"><span>Custom Link Historical Franchises</span></caption>';
			html += '<tr>';
			var firstItem = true;
			for (var key in leagueLinks) {
				if (leagueLinks.hasOwnProperty(key)) {
					if (firstItem)
						html += '<th>' + leagueLinks[key].year + '</th>';
					else
						html += '<th><a href="' + leagueLinks[key].url + '" target="_blank">' + leagueLinks[key].year + '</a></th>';
					firstItem = false;
				}
			}
			var rowCount = 0;
			for (var fidkey in franchiseDatabase) {
				if (franchiseDatabase.hasOwnProperty(fidkey) && fidkey !== 'fid_0000') {
					var firstItem = true;
					if (rowCount % 2)
						html += '<tr class="eventablerow">';
					else
						html += '<tr class="oddtablerow">';
					for (var yearkey in leagueLinks) {
						if (leagueLinks.hasOwnProperty(yearkey)) {
							if (firstItem)
								html += '<td><a class="franchise_' + franchiseDatabase[fidkey].id + '" href="' + baseURLDynamic + '/' + year + '/options?L=' + league_id + '&F=' + franchiseDatabase[fidkey].id + '&O=01">' + franchiseDatabase[fidkey].name + '</a></td>';
							else {
								html += '<td>';
								html += '<select size="1" name="' + franchiseDatabase[fidkey].id + '_' + leagueLinks[yearkey].year + '">';
								html += '<option value>None</option>';
								for (var optionkey in leagueLinks[yearkey]['franchises']) {
									if (leagueLinks[yearkey]['franchises'].hasOwnProperty(optionkey)) {
										var option_id = leagueLinks[yearkey].year + '_' + leagueLinks[yearkey]['league_id'] + '_' + leagueLinks[yearkey]['franchises'][optionkey].id;
										var option_name = leagueLinks[yearkey]['franchises'][optionkey].name;
										var current_name = franchiseDatabase[fidkey].name;
										if (option_name.toLowerCase() === current_name.trim().toLowerCase())
											html += '<option value="' + option_id + '" selected="selected">' + option_name + '</option>';
										else
											html += '<option value="' + option_id + '">' + option_name + '</option>';
									}
								}
								html += '</select>';
								html += '</td>';
							}
							firstItem = false;
						}
					}
					html += '</tr>';
					rowCount++;
				}
			}
			html += '</tr>'
			html += '</table>';
			html += '</div>';

			jQuery('#lh_custom_historical_franchises_wrapper').removeAttr("style");
			jQuery('#lh_custom_historical_franchises_wrapper').html(html);
			doTableScrollHistory(3, "lh_custom_historical_franchises_wrapper");
		}
	}

	function doLeagueHistory(fullHistory) {
		historySavetoHPM();
		jQuery("#lh_iframe_wrapper").html('<iframe name="lh_iframe_form" id="lh_iframe_form" allowtransparency="true"></iframe>');
		var html = '';
		if (lh_open_form_in_iframe)
			html += '<form method="POST" id="create_history" name="create_history" target="lh_iframe_form" action="' + baseURLHistory + '/createHistory.php">';
		else
			html += '<form method="POST" id="create_history" name="create_history" target="_blank" action="' + baseURLHistory + '/createHistory.php">';
		html += '<input type="hidden" name="league_id" value="' + league_id + '" />';
		html += '<input type="hidden" name="year" value="' + year + '" />';
		html += '<input type="hidden" name="apikey" value="' + apiKey + '" />';
		html += '<input type="hidden" name="sid" value="' + baseURLDynamic.substr(baseURLDynamic.indexOf('www') + 3, 2) + '" />';
		html += '<input type="hidden" name="full_history" value="' + fullHistory + '" />';
		if (fullHistory) {
			html += getLeagueAwards();
			html += getLinkedFranchise();
		}
		if (!lh_open_form_in_iframe) html += '<input type="hidden" name="redirect" value="false" />';
		html += '<input type="hidden" name="initial" value="true" />';
		html += '</form>';
		jQuery("#html-form-content").html(html);
		jQuery("#create_history").submit();
		if (lh_open_form_in_iframe) {
			if (fullHistory)
				iframe_loading_id = 'lh_full_history_loading';
			else
				iframe_loading_id = 'lh_history_loading';
			iframe_check_count = 0;
			lh_check_iframe_content();
		}
	}

	function historySavetoHPM() {
		$.ajax({
			type: "GET",
			url: `${baseURLDynamic}/${year}/options?L=${league_id}&O=170&PRINTER=1`,
			xhrFields: {
				withCredentials: true
			},
			success: function (Data) {
				thisFormExists = $(Data).find('form[action=options]').html();
				if (!$.trim(thisFormExists)) {
					// form does not exist anylonger so do nothing
				} else {
					historicalLinkFormData = $(Data).find('form[action=options]').serialize();
					var hpm_txt = historicalLinkFormData + "&SAVE=Save+Linked+Franchises";
					var hpm_name = "#3000 Historical Link";
					var urlPOST = `${baseURLDynamic}/${year}/message?LEAGUE_ID=${league_id}&NAME=message3000`;
					$.ajax({
						url: urlPOST,
						xhrFields: {
							withCredentials: true
						},
						data: {
							MSG: hpm_txt,
							LABEL: hpm_name
						},
						cache: false,
						type: "POST",
						success: function (response) {},
						error: function (xhr) {}
					});
				}
			},
			error: function (xhr) {}
		});
	}

	function doPlayerHistory(fullHistory) {
		historySavetoHPM();
		jQuery("#lh_iframe_wrapper").html('<iframe name="lh_iframe_form" id="lh_iframe_form" allowtransparency="true"></iframe>');
		var html = '';
		if (lh_open_form_in_iframe)
			html += '<form method="POST" id="create_player_history" name="create_player_history" target="lh_iframe_form" action="' + baseURLHistory + '/createPlayerHistory.php">';
		else
			html += '<form method="POST" id="create_player_history" name="create_player_history" target="_blank" action="' + baseURLHistory + '/createPlayerHistory.php">';
		html += '<input type="hidden" name="league_id" value="' + league_id + '" />';
		html += '<input type="hidden" name="year" value="' + year + '" />';
		html += '<input type="hidden" name="apikey" value="' + apiKey + '" />';
		html += '<input type="hidden" name="sid" value="' + baseURLDynamic.substr(baseURLDynamic.indexOf('www') + 3, 2) + '" />';
		html += '<input type="hidden" name="full_history" value="' + fullHistory + '" />';
		if (!lh_open_form_in_iframe) html += '<input type="hidden" name="redirect" value="false" />';
		html += '<input type="hidden" name="initial" value="true" />';
		html += '</form>';
		jQuery("#html-form-content").html(html);
		jQuery("#create_player_history").submit();
		if (lh_open_form_in_iframe) {
			if (fullHistory)
				iframe_loading_id = 'lh_full_player_loading';
			else
				iframe_loading_id = 'lh_player_loading';
			iframe_check_count = 0;
			lh_check_iframe_content();
		}
	}

	function doLeagueHistoryReset() {
		jQuery("#lh_iframe_wrapper").html('<iframe name="lh_iframe_form" id="lh_iframe_form" allowtransparency="true"></iframe>');
		var html = '';
		if (lh_open_form_in_iframe)
			html += '<form method="POST" id="reset_history" name="reset_history" target="lh_iframe_form" action="' + baseURLHistory + '/createHistory.php">';
		else
			html += '<form method="POST" id="reset_history" name="reset_history" target="_blank" action="' + baseURLHistory + '/createHistory.php">';
		html += '<input type="hidden" name="league_id" value="' + league_id + '" />';
		html += '<input type="hidden" name="year" value="' + year + '" />';
		html += '<input type="hidden" name="reset" value="true" />';
		html += '<input type="hidden" name="apikey" value="' + apiKey + '" />';
		html += '<input type="hidden" name="sid" value="' + baseURLDynamic.substr(baseURLDynamic.indexOf('www') + 3, 2) + '" />';
		if (!lh_open_form_in_iframe) html += '<input type="hidden" name="redirect" value="false" />';
		html += '</form>';
		jQuery("#html-form-content").html(html);
		jQuery("#reset_history").submit();
	}

	function getLeagueAwards() {
		var html = '';
		var url = baseURLDynamic + "/" + year + "/options?L=" + league_id + "&O=202&PRINTER=1";
		$.ajax({
			url: url,
			type: "GET",
			dataType: "html",
			xhrFields: {
				withCredentials: true
			},
			async: false,
			success: function (data) {
				var firstItem = true;
				$(data).find('table tr').each(function () {
					if ($(this).find('td:nth-child(3) a').length > 0) {
						if (historicalAwards.hasOwnProperty($(this).find('td:nth-child(2)').text().trim())) {
							if (!firstItem) html += ',';
							html += $(this).find('td:nth-child(1)').text().trim() + '|';
							html += $(this).find('td:nth-child(2)').text().trim() + '|';
							html += $(this).find('td:nth-child(3) a').attr('href').substr($(this).find('td:nth-child(3) a').attr('href').indexOf("F=") + 2, 4);
							firstItem = false;
						}
					}
				});
			}
		});
		if (html !== '') html = '<input type="hidden" name="league_awards" value="' + html + '" />';
		return html;
	}

	function getLinkedFranchise() {
		var linkedFranchise = new Array();
		var linkedFranchiseYears = new Array();
		var linked_franchise_found = false;
		var html = '';
		if (document.getElementById('custom_link_historical_franchises')) {
			console.log("USING CUSTOM FRANCHISE LINKS");
			$('#lh_custom_historical_franchises_wrapper').find('table:first-child thead tr th').attr("attr", "th_cell");
			$('#lh_custom_historical_franchises_wrapper').find('table:first-child tbody tr th').attr("attr", "td_cell");
			$('#lh_custom_historical_franchises_wrapper').find('table:first-child tbody tr td').attr("attr", "td_cell");
			$('#lh_custom_historical_franchises_wrapper').find('table:first-child tr').each(function () {
				var th = 0;
				$(this).find('[attr=th_cell]').each(function () {
					linkedFranchiseYears.push($(this).text());
					th++;
				});
				var td = 0;
				var fid = "";
				$(this).find('[attr=td_cell]').each(function () {
					if (td === 0) {
						var fname = $(this).text().trim();
						var href = $(this).find('a').attr('href');
						fid = href.substr(href.indexOf("F=") + 2, 4);
						if (fname === '') fname = franchiseDatabase["fid_" + fid].name.trim();
						linked_franchise_found = true;
						linkedFranchise[fid] = new Array();
						for (var i = 0; i < linkedFranchiseYears.length; i++) {
							linkedFranchise[fid]["yr_" + linkedFranchiseYears[i]] = ({
								name: "-",
								id: "-"
							});
						}
						linkedFranchise[fid]["yr_" + linkedFranchiseYears[0]].name = fname;
						linkedFranchise[fid]["yr_" + linkedFranchiseYears[0]].id = fid;
					} else {
						//need to find selected if any
						if ($(this).find('select').val().length > 0) {
							linked_franchise_found = true;
							if (lh_auto_rename_linked_franchise)
								linkedFranchise[fid]["yr_" + linkedFranchiseYears[td]].name = linkedFranchise[fid]["yr_" + linkedFranchiseYears[0]].name;
							else
								linkedFranchise[fid]["yr_" + linkedFranchiseYears[td]].name = $(this).find('select option:selected').text().trim();
							linkedFranchise[fid]["yr_" + linkedFranchiseYears[td]].id = $(this).find('select').val().substr(-4);
						}
					}
					td++;
				});
			});
		} else {
			var url = baseURLDynamic + "/" + year + "/options?L=" + league_id + "&O=170&PRINTER=1";
			$.ajax({
				url: url,
				type: "GET",
				dataType: "html",
				xhrFields: {
					withCredentials: true
				},
				async: false,
				success: function (data) {
					$(data).find('table tr').each(function () {
						var th = 0;
						$(this).find('th').each(function () {
							linkedFranchiseYears.push($(this).text());
							th++;
						});
						var td = 0;
						var fid = "";
						$(this).find('td').each(function () {
							if (td === 0) {
								var fname = $(this).text().trim();
								var href = $(this).find('a').attr('href');
								fid = href.substr(href.indexOf("F=") + 2, 4);
								if (fname === '') fname = franchiseDatabase["fid_" + fid].name.trim();
								linked_franchise_found = true;
								linkedFranchise[fid] = new Array();
								for (var i = 0; i < linkedFranchiseYears.length; i++) {
									linkedFranchise[fid]["yr_" + linkedFranchiseYears[i]] = ({
										name: "-",
										id: "-"
									});
								}
								linkedFranchise[fid]["yr_" + linkedFranchiseYears[0]].name = fname;
								linkedFranchise[fid]["yr_" + linkedFranchiseYears[0]].id = fid;
							} else {
								//need to find selected if any
								if ($(this).find('select').val().length > 0) {
									linked_franchise_found = true;
									if (lh_auto_rename_linked_franchise)
										linkedFranchise[fid]["yr_" + linkedFranchiseYears[td]].name = linkedFranchise[fid]["yr_" + linkedFranchiseYears[0]].name;
									else
										linkedFranchise[fid]["yr_" + linkedFranchiseYears[td]].name = $(this).find('select option:selected').text().trim();
									linkedFranchise[fid]["yr_" + linkedFranchiseYears[td]].id = $(this).find('select').val().substr(-4);
								}
							}
							td++;
						});
					});
				}
			});
		}

		if (linked_franchise_found) {
			html += '<input type="hidden" name="years" value="';
			for (var i = 0; i < linkedFranchiseYears.length; i++) {
				if (i === linkedFranchiseYears.length - 1)
					html += linkedFranchiseYears[i];
				else
					html += linkedFranchiseYears[i] + ',';
			}
			html += '" />';

			html += '<input type="hidden" name="fid_list" value="';
			var firstItem = true;
			for (var key in linkedFranchise) {
				if (linkedFranchise.hasOwnProperty(key)) {
					if (!firstItem) html += ',';
					html += key;
					firstItem = false;
				}
			}
			html += '" />';

			for (var key in linkedFranchise) {
				if (linkedFranchise.hasOwnProperty(key)) {
					var html_fid = '<input type="hidden" name="fid_' + key + '" value="';
					var html_name = '<input type="hidden" name="name_' + key + '" value="';
					var firstItem = true;
					for (var key2 in linkedFranchise[key]) {
						if (linkedFranchise[key].hasOwnProperty(key2)) {
							if (!firstItem) {
								html_fid += ',';
								html_name += ',';
							}
							html_fid += linkedFranchise[key][key2].id;
							html_name += linkedFranchise[key][key2].name;
							firstItem = false;
						}
					}
					html_fid += '" />';
					html_name += '" />';
					html += html_fid;
					html += html_name;
				}
			}
		} else {
			//LINKED FRANCHISES NOT FOUND MOST LIKELY DUE DO NO LEAGUE HISTORY SO JUST USE CURRENT FRANCHISE NAMES
			html += '<input type="hidden" name="years" value="' + year + '" />';

			html += '<input type="hidden" name="fid_list" value="';
			var firstItem = true;
			for (var key in franchiseDatabase) {
				if (franchiseDatabase.hasOwnProperty(key) && key !== "fid_0000") {
					if (!firstItem) html += ',';
					html += franchiseDatabase[key].id;
					firstItem = false;
				}
			}
			html += '" />';

			for (var key in franchiseDatabase) {
				if (franchiseDatabase.hasOwnProperty(key) && key !== "fid_0000") {
					var html_fid = '<input type="hidden" name="fid_' + franchiseDatabase[key].id + '" value="';
					var html_name = '<input type="hidden" name="name_' + franchiseDatabase[key].id + '" value="';
					var firstItem = true;
					if (!firstItem) {
						html_fid += ',';
						html_name += ',';
					}
					html_fid += franchiseDatabase[key].id;
					html_name += franchiseDatabase[key].name;
					firstItem = false;
					html_fid += '" />';
					html_name += '" />';
					html += html_fid;
					html += html_name;
				}
			}
		}

		var firstItem = true;
		html += '<input type="hidden" name="fname_override" value="';
		for (var key in lh_fname_override) {
			if (lh_fname_override.hasOwnProperty(key)) {
				if (!firstItem) {
					html += ',';
				}
				html += key + '|' + lh_fname_override[key];
				firstItem = false;
			}
		}
		html += '" />';

		if (lh_auto_rename_linked_franchise) html += '<input type="hidden" name="rename" value="true" />';

		return html;
	}

	function getScoreDetails(_year, _week, _fid) {
		var _target_league_id = '';
		var _sid = '';
		var html = '';
		for (var i = 0; i < leagueHistory.history_links.length; i++) {
			if (parseInt(leagueHistory.history_links[i].year) === parseInt(_year)) {
				_sid = leagueHistory.history_links[i].url.substr(leagueHistory.history_links[i].url.indexOf('www') + 3, 2);
				_target_league_id = leagueHistory.history_links[i].url.substr(-5);
				break;
			}
		}
		if (_target_league_id !== '') {
			try {
				var url = `//www${_sid}.myfantasyleague.com/${_year}/weekly?L=${_target_league_id}&W=${_week}&PRINTER=1`;
				fetch(url, {
						credentials: 'include'
					})
					.then(function (response) {
						if (response.ok) {
							return response.text();
						} else {
							throw new Error('Network response was not OK');
						}
					})
					.then(function (data) {
						$(data).find('table caption span a.franchise_' + _fid).each(function () {
							$(this).closest('table').find('a').each(function () {
								$(this).removeAttr("href")
							});
							$(this).closest('table').find('a').each(function () {
								$(this).css("pointer-events", "none")
							});
							$(this).closest('table').find('tr.reportfooter td').html('');
							html += '<table align="center" cellspacing="1" class="report">' + $(this).closest('table').html() + '</table>';
							$("#ls-modal-1-header-content").html('Summary: ' + _year + ' Week ' + _week);
							$("#ls-modal-1-content").html(html);
							$("#ls-modal-1-content table").addClass("details_table");
							$('#ls-modal-1-content').scrollTop(0);
						});
					})
					.catch(function (error) {
						var _default_css = '';
						var _custom_css = '';
						var _skin_css = '';
						var _responsive_css = '';
						var _secured = 0;
						if (document.getElementById("default")) _default_css = jQuery("#default").attr("href").substr(jQuery("#default").attr("href").indexOf('skins'), jQuery("#default").attr("href").length);
						if (document.getElementById("custom")) _custom_css = jQuery("#custom").attr("href").substr(jQuery("#custom").attr("href").indexOf('//') + 2, jQuery("#custom").attr("href").length);
						if (document.getElementById("skin")) _skin_css = jQuery("#skin").attr("href").substr(jQuery("#skin").attr("href").indexOf('skins'), jQuery("#skin").attr("href").length);
						if (document.getElementById("responsive")) _responsive_css = jQuery("#responsive").attr("href").substr(jQuery("#responsive").attr("href").indexOf('skins'), jQuery("#responsive").attr("href").length);
						if (location.href.substr(0, 5) === 'https') var _secured = 1;
						_sid = location.href.substr(location.href.indexOf('www') + 3, 2);

						html += '<iframe id="iframe-summary-popup" class="iframe_tall" src="' + baseURLHistory + '/getScoreDetails.php?Y=' + _year + '&S=' + _sid + '&L=' + _target_league_id + '&W=' + _week + '&F=' + _fid + '&secured=' + _secured + '&custom=' + _custom_css + '&default=' + _default_css + '&skin=' + _skin_css + '&responsive=' + _responsive_css + '" frameBorder="0" allowtransparency="true" style="visibility:hidden;" onload="this.style.visibility = \'visible\';"></iframe>';
						$("#ls-modal-1-header-content").html('Summary: ' + _year + ' Week ' + _week);
						$("#ls-modal-1-content").html(html);
						$('#ls-modal-1-content').scrollTop(0);
					});

			} catch (er) {}
		}
	}

	function getPlayerScoreDetails(_year, _week, _pid) {
		var _target_league_id = '';
		var _sid = '';
		var html = '';
		for (var i = 0; i < leagueHistory.history_links.length; i++) {
			if (parseInt(leagueHistory.history_links[i].year) === parseInt(_year)) {
				_sid = leagueHistory.history_links[i].url.substr(leagueHistory.history_links[i].url.indexOf('www') + 3, 2);
				_target_league_id = leagueHistory.history_links[i].url.substr(-5);
				break;
			}
		}
		if (_target_league_id !== '') {
			try {
				var url = `//www${_sid}.myfantasyleague.com/${_year}/detailed?L=${_target_league_id}&W=${_week}&P=${_pid}&PRINTER=1`;
				fetch(url, {
						credentials: 'include'
					})
					.then(response => {
						if (!response.ok) {
							throw new Error("Network response was not ok");
						}
						return response.text();
					})
					.then(data => {
						$(data).find('table.report').each(function () {
							$(this).closest('table').find('a').each(function () {
								$(this).removeAttr("href")
							});
							$(this).closest('table').find('a').each(function () {
								$(this).css("pointer-events", "none")
							});
							html += '<table align="center" cellspacing="1" class="report">' + $(this).closest('table').html() + '</table>';
							$("#ls-modal-4-header-content").html('Breakdown: ' + _year + ' Week ' + _week);
							$("#ls-modal-4-content").html(html);
							$('#ls-modal-4-content').scrollTop(0);
						});
					})
					.catch(error => {
						var _default_css = '';
						var _custom_css = '';
						var _skin_css = '';
						var _responsive_css = '';
						var _secured = 0;
						if (document.getElementById("default")) _default_css = jQuery("#default").attr("href").substr(jQuery("#default").attr("href").indexOf('skins'), jQuery("#default").attr("href").length);
						if (document.getElementById("custom")) _custom_css = jQuery("#custom").attr("href").substr(jQuery("#custom").attr("href").indexOf('//') + 2, jQuery("#custom").attr("href").length);
						if (document.getElementById("skin")) _skin_css = jQuery("#skin").attr("href").substr(jQuery("#skin").attr("href").indexOf('skins'), jQuery("#skin").attr("href").length);
						if (document.getElementById("responsive")) _responsive_css = jQuery("#responsive").attr("href").substr(jQuery("#responsive").attr("href").indexOf('skins'), jQuery("#responsive").attr("href").length);
						if (location.href.substr(0, 5) === 'https') var _secured = 1;
						_sid = location.href.substr(location.href.indexOf('www') + 3, 2);
						html += '<iframe id="iframe-summary-popup" class="iframe_small" src="' + baseURLHistory + '/getPlayerScoreDetails.php?Y=' + _year + '&S=' + _sid + '&L=' + _target_league_id + '&W=' + _week + '&P=' + _pid + '&secured=' + _secured + '&custom=' + _custom_css + '&default=' + _default_css + '&skin=' + _skin_css + '&responsive=' + _responsive_css + '" frameBorder="0" allowtransparency="true" style="visibility:hidden;" onload="this.style.visibility = \'visible\';"></iframe>';
						$("#ls-modal-4-header-content").html('Breakdown: ' + _year + ' Week ' + _week);
						$("#ls-modal-4-content").html(html);
						$('#ls-modal-4-content').scrollTop(0);
					});
			} catch (er) {}
		}
	}
	//*********************************************************************************
	//
	//                  FUNCTIONS USED TO GENERATE REPORTS 
	//
	//*********************************************************************************
	function compare(a, b) {
		if (a.pct < b.pct) {
			return 1;
		}
		if (a.pct > b.pct) {
			return -1;
		}
		if (a.gp < b.gp) {
			return 1;
		}
		if (a.gp > b.gp) {
			return -1;
		}
		return 0;
	}
	var lh_global_position = "All";
	var lh_overall_season = "Regular";
	var lh_series_season = "Regular";
	var lh_player_season = "All";

	function lh_radio(which, global) {
		switch (global) {
			case 0:
				lh_global_position = which;
				jQuery(".players_radio_ckbox div").each(function () {
					if ($(this).text().toLowerCase() !== which.toLowerCase()) {
						$(this).find('input').prop('checked', false);
						$(this).find('label').removeAttr('class');
					} else {
						$(this).find('input').prop('checked', true);
						$(this).find('label').attr('class', 'pointer-events-none');
					}
				});
				create_html_players();
				break;
			case 1:
				lh_player_season = which;
				jQuery(".player_season_radio_ckbox div").each(function () {
					if ($(this).text().toLowerCase() !== which.toLowerCase()) {
						$(this).find('input').prop('checked', false);
						$(this).find('label').removeAttr('class');
					} else {
						$(this).find('input').prop('checked', true);
						$(this).find('label').attr('class', 'pointer-events-none');
					}
				});
				create_html_players();
				break;
			case 2:
				lh_teams_to_rank = which;
				localStorage.setItem("lh_rank_teams_" + league_id, which);
				jQuery(".teams_rank_radio_ckbox div").each(function () {
					if (parseInt($(this).text()) !== which) {
						$(this).find('input').prop('checked', false);
						$(this).find('label').removeAttr('class');
					} else {
						$(this).find('input').prop('checked', true);
						$(this).find('label').attr('class', 'pointer-events-none');
					}
				});
				create_html_team_points();
				break;
			case 3:
				lh_players_to_rank = which;
				localStorage.setItem("lh_rank_players_" + league_id, which);
				jQuery(".players_rank_radio_ckbox div").each(function () {
					if (parseInt($(this).text()) !== which) {
						$(this).find('input').prop('checked', false);
						$(this).find('label').removeAttr('class');
					} else {
						$(this).find('input').prop('checked', true);
						$(this).find('label').attr('class', 'pointer-events-none');
					}
				});
				create_html_players();
				break;
			case 4:
				lh_misc_to_rank = which;
				localStorage.setItem("lh_rank_misc_" + league_id, which);
				jQuery(".misc_rank_radio_ckbox div").each(function () {
					if (parseInt($(this).text()) !== which) {
						$(this).find('input').prop('checked', false);
						$(this).find('label').removeAttr('class');
					} else {
						$(this).find('input').prop('checked', true);
						$(this).find('label').attr('class', 'pointer-events-none');
					}
				});
				create_html_misc();
				break;
			case 5:
				lh_overall_season = which;
				jQuery(".overall_season_radio_ckbox div").each(function () {
					if ($(this).text().toLowerCase() !== which.toLowerCase()) {
						$(this).find('input').prop('checked', false);
						$(this).find('label').removeAttr('class');
					} else {
						$(this).find('input').prop('checked', true);
						$(this).find('label').attr('class', 'pointer-events-none');
					}
				});
				create_html_historical_records();
				break;
			case 6:
				lh_series_season = which;
				jQuery(".series_season_radio_ckbox div").each(function () {
					if ($(this).text().toLowerCase() !== which.toLowerCase()) {
						$(this).find('input').prop('checked', false);
						$(this).find('label').removeAttr('class');
					} else {
						$(this).find('input').prop('checked', true);
						$(this).find('label').attr('class', 'pointer-events-none');
					}
				});
				create_html_series_records();
				break;
		}
	}

	function lh_checkbox(which, checkbox, reverseCheck) {
		if (reverseCheck) {
			if (checkbox.checked) {
				jQuery(".lh_" + which + "_check").hide();
				localStorage.setItem("lh_" + which + "_" + league_id, "1");
			} else {
				jQuery(".lh_" + which + "_check").show();
				localStorage.setItem("lh_" + which + "_" + league_id, "0");
			}
		} else {
			if (checkbox.checked) {
				jQuery(".lh_" + which + "_check").show();
				localStorage.setItem("lh_" + which + "_" + league_id, "0");
			} else {
				jQuery(".lh_" + which + "_check").hide();
				localStorage.setItem("lh_" + which + "_" + league_id, "1");
			}
		}
		switch (which) {
			case 'multiple':
			case 'bye':
			case 'zero':
				create_html_team_points();
				break;
		}
	}

	function lh_pop_awards(fid, isDefunct) {
		var awards_category = new Array();
		for (var j = 0; j < leagueHistory.years.length; j++) {
			if (isDefunct) {
				try {
					if (leagueHistory.league_awards.hasOwnProperty(leagueHistory.years[j] + "_" + leagueHistory.defunct_franchise[fid][leagueHistory.years[j]].id)) {
						var awards_list = leagueHistory.league_awards[leagueHistory.years[j] + "_" + leagueHistory.defunct_franchise[fid][leagueHistory.years[j]].id].split("|");
						for (var k = 0; k < awards_list.length; k++) {
							if (historicalAwards.hasOwnProperty(awards_list[k])) {
								if (!awards_category.hasOwnProperty(awards_list[k])) awards_category[awards_list[k]] = '';
								if (awards_category[awards_list[k]] !== '') awards_category[awards_list[k]] += ', ';
								awards_category[awards_list[k]] += leagueHistory.years[j];
							}
						}
					}
				} catch (er) {}
			} else {
				try {
					if (leagueHistory.league_awards.hasOwnProperty(leagueHistory.years[j] + "_" + leagueHistory.fid_history_detail[fid][leagueHistory.years[j]].fid)) {
						var awards_list = leagueHistory.league_awards[leagueHistory.years[j] + "_" + leagueHistory.fid_history_detail[fid][leagueHistory.years[j]].fid].split("|");
						for (var k = 0; k < awards_list.length; k++) {
							if (historicalAwards.hasOwnProperty(awards_list[k])) {
								if (!awards_category.hasOwnProperty(awards_list[k])) awards_category[awards_list[k]] = '';
								if (awards_category[awards_list[k]] !== '') awards_category[awards_list[k]] += ', ';
								awards_category[awards_list[k]] += leagueHistory.years[j];
							}
						}
					}
				} catch (er) {}
			}
		}
		var html = '';
		var rowCount = 0;
		html += '<table align="center" cellspacing="1" class="report">';
		//html+= '<caption><span>Awards Won</span></caption>';
		html += '<tr><th class="lh-popup-award-name" style="text-align:left">Award</th><th class="lh-popup-award-year" style="text-align:left">Year(s) Won</th></tr>';
		html += '<tbody>';
		for (var key in historicalAwards) {
			if (awards_category.hasOwnProperty(key)) {
				if (rowCount % 2)
					html += '<tr class="eventablerow">';
				else
					html += '<tr class="oddtablerow">';
				html += '<td class="lh-popup-award-name">' + historicalAwards[key] + ' ' + key + '</td>';
				html += '<td class="lh-popup-award-year">' + awards_category[key] + '</td>';
				html += '</tr>';
				rowCount++;
			}
		}
		html += '</tbody>';
		html += '</table><br>';

		if (isDefunct)
			jQuery("#ls-modal-1-header-content").html(fid);
		else
			jQuery("#ls-modal-1-header-content").html(getFranchiseName(year, fid, false, false));
		jQuery("#ls-modal-1-content").html(html);
		jQuery('#ls-modal-1-content').scrollTop(0);
	}

	function lh_getAwards(fid, isDefunct) {
		var lh_awards_html = new Array();
		for (var key in historicalAwards) {
			if (historicalAwards.hasOwnProperty(key)) {
				lh_awards_html[key] = '';
			}
		}
		var award_found = false;
		for (var j = 0; j < leagueHistory.years.length; j++) {
			if (isDefunct) {
				try {
					if (leagueHistory.league_awards.hasOwnProperty(leagueHistory.years[j] + "_" + leagueHistory.defunct_franchise[fid][leagueHistory.years[j]].id)) {
						var awards_list = leagueHistory.league_awards[leagueHistory.years[j] + "_" + leagueHistory.defunct_franchise[fid][leagueHistory.years[j]].id].split("|");
						for (var k = 0; k < awards_list.length; k++) {
							if (historicalAwards.hasOwnProperty(awards_list[k])) {
								award_found = true;
								lh_awards_html[awards_list[k]] += '<span title="' + leagueHistory.years[j] + ' ' + awards_list[k] + '">' + historicalAwards[awards_list[k]] + '</span>';
							}
						}
					}
				} catch (er) {}
			} else {
				try {
					if (leagueHistory.league_awards.hasOwnProperty(leagueHistory.years[j] + "_" + leagueHistory.fid_history_detail[fid][leagueHistory.years[j]].fid)) {
						var awards_list = leagueHistory.league_awards[leagueHistory.years[j] + "_" + leagueHistory.fid_history_detail[fid][leagueHistory.years[j]].fid].split("|");
						for (var k = 0; k < awards_list.length; k++) {
							if (historicalAwards.hasOwnProperty(awards_list[k])) {
								award_found = true;
								lh_awards_html[awards_list[k]] += '<span title="' + leagueHistory.years[j] + ' ' + awards_list[k] + '">' + historicalAwards[awards_list[k]] + '</span>';
							}
						}
					}
				} catch (er) {
					console.log("LEAGUE AWARDS ERROR");
				}
			}
		}
		var html = '';
		if (award_found) {
			for (var key in lh_awards_html) {
				if (lh_awards_html.hasOwnProperty(key)) {
					html += lh_awards_html[key];
				}
			}
		}
		if (html === '')
			return html;
		else
			return '<div style="display:inline;cursor:pointer" onclick="lh_pop_awards(\'' + fid + '\',' + isDefunct + ')">' + html + '</div>';
	}

	function lh_get_matchup(fid, fid_opp, score, score_opp, at_vs, yearkey, week, isDefunct) {
		if (isDefunct)
			var linked_franchise = fid;
		else
			var linked_franchise = leagueHistory.fid_history_detail[fid][yearkey].fid;
		var _precision = parseInt(leagueHistory['league_history_detail']["" + year].precision);
		var html_1 = '';
		var html_2 = '';
		var rowCount_1 = 0;
		var rowCount_2 = 0;
		var player_tracker = new Array();
		html_1 += '<table align="center" cellspacing="1" class="report">';
		html_2 += '<table align="center" cellspacing="1" class="report">';
		html_1 += '<caption><span>' + getFranchiseName(yearkey, linked_franchise, false, false) + '</span></caption>';
		html_2 += '<caption><span>' + getFranchiseName(yearkey, fid_opp, false, false) + '</span></caption>';
		html_1 += '<tr><th class="lh-popup-name" style="text-align:left">Player</th><th class="lh-popup-points">Pts</th></tr>';
		html_2 += '<tr><th class="lh-popup-name" style="text-align:left">Player</th><th class="lh-popup-points">Pts</th></tr>';
		html_1 += '<tbody>';
		html_2 += '<tbody>';
		for (var j = 0; j < leagueHistory['league_history_detail']["" + year].positions.length; j++) {
			var _position_target = leagueHistory['league_history_detail']["" + year].positions[j];
			if (rowCount_1 === 0) var new_position_1 = false;
			else var new_position_1 = true;
			if (rowCount_2 === 0) var new_position_2 = false;
			else var new_position_2 = true;
			for (var pidkey in playerHistoryLeague[yearkey].pid) {
				if (playerHistoryLeague[yearkey].pid.hasOwnProperty(pidkey)) {
					if (playerHistoryLeague[yearkey].pid[pidkey].hasOwnProperty('wk_' + week)) {
						if (playerHistoryLeague[yearkey].pid[pidkey]['wk_' + week].hasOwnProperty('fid')) {
							for (var i = 0; i < playerHistoryLeague[yearkey].pid[pidkey]['wk_' + week].fid.length; i++) {
								if (playerHistoryLeague[yearkey].pid[pidkey]['wk_' + week].fid[i].fid === fid && playerHistoryLeague[yearkey].pid[pidkey]['wk_' + week].fid[i].sts === "S") {
									var _pid = pidkey.substring(4, pidkey.length);
									var _position = getPlayerPosition(_pid, yearkey);
									if (_position === _position_target && !player_tracker.hasOwnProperty(linked_franchise + "_" + _pid)) {
										if (new_position_1) var position_class = ' newposition';
										else var position_class = '';
										if (rowCount_1 % 2)
											html_1 += '<tr class="eventablerow' + position_class + '">';
										else
											html_1 += '<tr class="oddtablerow' + position_class + '">';
										html_1 += '<td class="lh-popup-name">' + getPlayerName(_pid, yearkey) + '</td>';
										if (playerHistoryLeague[yearkey].pid[pidkey]['wk_' + week].score === null)
											html_1 += '<td class="lh-popup-points" style="text-align:center"><a href="#" onclick="getPlayerScoreDetails(\'' + yearkey + '\',\'' + week + '\',\'' + _pid + '\')">-</a></td>';
										else
											html_1 += '<td class="lh-popup-points" style="text-align:center"><a href="#" onclick="getPlayerScoreDetails(\'' + yearkey + '\',\'' + week + '\',\'' + _pid + '\')">' + playerHistoryLeague[yearkey].pid[pidkey]['wk_' + week].score + '</a></td>';
										html_1 += '</tr>';
										new_position_1 = false;
										player_tracker[linked_franchise + "_" + _pid] = 1;
										rowCount_1++;
									}
								}
								if (playerHistoryLeague[yearkey].pid[pidkey]['wk_' + week].fid[i].fid === fid_opp && playerHistoryLeague[yearkey].pid[pidkey]['wk_' + week].fid[i].sts === "S") {
									var _pid = pidkey.substring(4, pidkey.length);
									var _position = getPlayerPosition(_pid, yearkey);
									if (_position === _position_target && !player_tracker.hasOwnProperty(fid_opp + "_" + _pid)) {
										if (new_position_2) var position_class = ' newposition';
										else var position_class = '';
										if (rowCount_2 % 2)
											html_2 += '<tr class="eventablerow' + position_class + '">';
										else
											html_2 += '<tr class="oddtablerow' + position_class + '">';
										html_2 += '<td class="lh-popup-name">' + getPlayerName(_pid, yearkey) + '</td>';
										if (playerHistoryLeague[yearkey].pid[pidkey]['wk_' + week].score === null)
											html_2 += '<td class="lh-popup-points" style="text-align:center"><a href="#" onclick="getPlayerScoreDetails(\'' + yearkey + '\',\'' + week + '\',\'' + _pid + '\')">-</a></td>';
										else
											html_2 += '<td class="lh-popup-points" style="text-align:center"><a href="#" onclick="getPlayerScoreDetails(\'' + yearkey + '\',\'' + week + '\',\'' + _pid + '\')">' + playerHistoryLeague[yearkey].pid[pidkey]['wk_' + week].score + '</a></td>';
										html_2 += '</tr>';
										new_position_2 = false;
										player_tracker[fid_opp + "_" + _pid] = 1;
										rowCount_2++;
									}
								}
							}
						}
					}
				}
			}
		}
		html_1 += '<tr><th style="text-align:left">Total</th><th>' + parseFloat(score).toFixed(_precision) + '</th>';
		html_2 += '<tr><th style="text-align:left">Total</th><th>' + parseFloat(score_opp).toFixed(_precision) + '</th>';
		html_1 += '</tbody></table>';
		html_2 += '</tbody></table>';
		jQuery("#ls-modal-3-header-content").html(yearkey + ' Week ' + week);
		jQuery("#ls-modal-3-content").html(html_1 + '<br />' + html_2);
		jQuery('#ls-modal-3-content').scrollTop(0);
	}

	function lh_get_franchise_schedule_history(fid, record, isDefunct) {
		var html_table = '';
		var _record_ar = new Array();
		var _first_season = -1;
		var _row_count;

		for (var i = 0; i < 3; i++) {
			_row_count = 0;
			html_table += '<p>';
			html_table += '<table align="center" cellspacing="1" class="report">';
			if (i === 0)
				html_table += '<caption><span>Regular Season</span></caption>';
			else if (i === 1)
				html_table += '<caption><span>Playoffs</span></caption>';
			else
				html_table += '<caption><span>Overall</span></caption>';
			var _totals = ({
				'gp': 0,
				'w': 0,
				'l': 0,
				't': 0,
				'pf': 0,
				'pa': 0
			});
			html_table += '<tr><th class="lh-popup-year">Year</th><th class="lh-popup-record">W-L-T</th><th class="lh-popup-pf">PF</th><th class="lh-popup-pa">PA</th></tr>';
			html_table += '<tbody>';
			for (var j = 0; j < leagueHistory.years.length; j++) {
				_record_ar = [];
				try {
					if (i === 0)
						_record_ar = lh_overall_record_ar[fid][leagueHistory.years[j]].regular;
					else if (i === 1)
						_record_ar = lh_overall_record_ar[fid][leagueHistory.years[j]].playoff;
					else
						_record_ar = lh_overall_record_ar[fid][leagueHistory.years[j]].overall;
				} catch (er) {
					//_record_ar = ({ 'gp':0 , 'w':0 , 'l':0 , 't':0 , 'pf':0 , 'pa':0 });
					continue;
				}
				if (_first_season === -1) _first_season = leagueHistory.years[j];
				if (_record_ar.gp === 0) continue;
				var w_l_t = _record_ar.w + "-" + _record_ar.l + "-" + _record_ar.t;
				if (_row_count % 2)
					html_table += '<tr class="eventablerow">';
				else
					html_table += '<tr class="oddtablerow">';
				html_table += '<td class="lh-popup-year" style="text-align:center">' + leagueHistory.years[j] + '</td>';
				html_table += '<td class="lh-popup-record" style="text-align:center"><span style="cursor:pointer" onclick="lh_get_franchise_schedule(\'' + fid + '\',' + j + ',\'' + leagueHistory.years[j] + '\',\'' + w_l_t + '\',false)"><a style="text-decoration:underline">' + w_l_t + '</a></span></td>';
				if (lh_precision_override !== -1) {
					html_table += '<td class="lh-popup-pf" style="text-align:center">' + _record_ar.pf.toFixed(lh_precision_override) + '</td>';
					html_table += '<td class="lh-popup-pa" style="text-align:center">' + _record_ar.pa.toFixed(lh_precision_override) + '</td>';
				} else {
					var _precision = parseInt(leagueHistory['league_history_detail']["" + year].precision);
					html_table += '<td class="lh-popup-pf" style="text-align:center">' + _record_ar.pf.toFixed(_precision) + '</td>';
					html_table += '<td class="lh-popup-pa" style="text-align:center">' + _record_ar.pa.toFixed(_precision) + '</td>';
				}
				html_table += '</tr>';
				_totals.gp += _record_ar.gp;
				_totals.w += _record_ar.w;
				_totals.l += _record_ar.l;
				_totals.t += _record_ar.t;
				_totals.pf += _record_ar.pf;
				_totals.pa += _record_ar.pa;
				_row_count++;
			}
			var w_l_t = _totals.w + "-" + _totals.l + "-" + _totals.t;
			if (_row_count % 2)
				html_table += '<tr class="eventablerow" style="font-weight:bold">';
			else
				html_table += '<tr class="oddtablerow" style="font-weight:bold">';
			html_table += '<td class="lh-popup-year" style="text-align:center">Total</td>';
			html_table += '<td class="lh-popup-record" style="text-align:center">' + w_l_t + '</td>';
			if (lh_precision_override !== -1) {
				html_table += '<td class="lh-popup-pf" style="text-align:center">' + _totals.pf.toFixed(lh_precision_override) + '</td>';
				html_table += '<td class="lh-popup-pa" style="text-align:center">' + _totals.pa.toFixed(lh_precision_override) + '</td>';
			} else {
				var _precision = parseInt(leagueHistory['league_history_detail']["" + year].precision);
				html_table += '<td class="lh-popup-pf" style="text-align:center">' + _totals.pf.toFixed(_precision) + '</td>';
				html_table += '<td class="lh-popup-pa" style="text-align:center">' + _totals.pa.toFixed(_precision) + '</td>';
			}
			html_table += '</tr>';
			html_table += '</tbody>';
			html_table += '</table>';
			html_table += '</p>';
		}

		var linked_name = getFranchiseName(_first_season, fid, false, false);
		//var linked_abbrev = createFranchiseAbbrev(_first_season,fid,false);
		var html = '';
		html += '<div class="ls-popup-matchup" style="text-align:center;font-weight:bold;font-size:0.938rem">' + linked_name + '</div>';
		//html+= '<div class="ls-popup-matchup-record" style="text-align:center;font-style:italic">(' + record + ')</span></div>';
		html += html_table;
		jQuery("#ls-modal-1-header-content").html('Franchise Historical Record');
		jQuery("#ls-modal-1-content").html(html);
		jQuery('#ls-modal-1-content').scrollTop(0);
	}

	function lh_get_franchise_schedule(fid, yearindex, yearkey, record, isDefunct) {
		var html_regular = '';
		var html_playoff = '';
		if (isDefunct)
			var linked_franchise = fid;
		else
			var linked_franchise = leagueHistory.fid_history_detail[fid][yearkey].fid;
		var linked_name = getFranchiseName(yearkey, linked_franchise, false, false);
		//var linked_abbrev = createFranchiseAbbrev(yearkey,linked_franchise,false);
		var linked_abbrev = mostRecent(3, yearkey, linked_franchise);
		if (parseInt(yearkey) === year) {
			for (var i = 0; i < leagueHistory['series_record'][yearkey][fid].length; i++) {
				switch (leagueHistory["series_record"][yearkey][fid][i].result) {
					case "W":
						var _class = "lh_popup_win";
						var _style = "width:1.25rem;display:inline-block;text-align:center";
						break;
					case "L":
						var _class = "lh_popup_loss";
						var _style = "width:1.25rem;display:inline-block;text-align:center";
						break;
					case null:
					case "T":
						var _class = "lh_popup_tie";
						var _style = "width:1.25rem;display:inline-block;text-align:center";
						break;
				}
				var week = parseInt(leagueHistory["series_record"][yearkey][fid][i].week) < 10 ? "0" + leagueHistory["series_record"][yearkey][fid][i].week : leagueHistory["series_record"][yearkey][fid][i].week;
				var at_vs = leagueHistory["series_record"][yearkey][fid][i].is_home === 1 ? " vs " : " at ";
				var historic_opp = leagueHistory["series_record"][yearkey][fid][i].opp;
				if (historic_opp === "BYE" || historic_opp === "AVG") {
					var historic_opp_name = historic_opp;
					var historic_opp_score = '';
				} else {
					var historic_opp_name = getFranchiseName(yearkey, historic_opp, false, false);
					var historic_opp_score = leagueHistory["series_record"][yearkey][fid][i].opp_score;
				}
				if (leagueHistory["series_record"][yearkey][fid][i].result === null)
					var game_result = "T";
				else
					var game_result = leagueHistory["series_record"][yearkey][fid][i].result;
				if (leagueHistory["series_record"][yearkey][fid][i].regular === "1")
					html_regular += '<li class="ls-popup-player-li" style="cursor:pointer" onclick="lh_get_matchup(\'' + fid + '\',\'' + historic_opp + '\',\'' + leagueHistory["series_record"][yearkey][fid][i].score + '\',\'' + historic_opp_score + '\',\'' + at_vs + '\',\'' + yearkey + '\',' + week + ',' + isDefunct + ')">Week ' + week + ':<span class="lh_popup_result ' + _class + '" style="' + _style + '">' + game_result + '</span>' + linked_abbrev + ' ' + leagueHistory["series_record"][yearkey][fid][i].score + at_vs + historic_opp_score + ' ' + historic_opp_name + '</li>';
				else
					html_playoff += '<li class="ls-popup-player-li" style="cursor:pointer" onclick="lh_get_matchup(\'' + fid + '\',\'' + historic_opp + '\',\'' + leagueHistory["series_record"][yearkey][fid][i].score + '\',\'' + historic_opp_score + '\',\'' + at_vs + '\',\'' + yearkey + '\',' + week + ',' + isDefunct + ')">Week ' + week + ':<span class="lh_popup_result ' + _class + '" style="' + _style + '">' + game_result + '</span>' + linked_abbrev + ' ' + leagueHistory["series_record"][yearkey][fid][i].score + at_vs + historic_opp_score + ' ' + historic_opp_name + '</li>';
			}
		} else {
			if (isDefunct)
				var _fid = fid + "_defunct";
			else
				var _fid = fid;
			for (var i = 0; i < leagueHistory['series_record'][yearkey][_fid].length; i++) {
				switch (leagueHistory["series_record"][yearkey][_fid][i].result) {
					case "W":
						var _class = "lh_popup_win";
						var _style = "width:1.25rem;display:inline-block;text-align:center";
						break;
					case "L":
						var _class = "lh_popup_loss";
						var _style = "width:1.25rem;display:inline-block;text-align:center";
						break;
					case null:
					case "T":
						var _class = "lh_popup_tie";
						var _style = "width:1.25rem;display:inline-block;text-align:center";
						break;
				}
				var week = parseInt(leagueHistory["series_record"][yearkey][_fid][i].week) < 10 ? "0" + leagueHistory["series_record"][yearkey][_fid][i].week : leagueHistory["series_record"][yearkey][_fid][i].week;
				var at_vs = leagueHistory["series_record"][yearkey][_fid][i].is_home === 1 ? " vs " : " at ";
				var historic_opp = leagueHistory["series_record"][yearkey][_fid][i].historic_opp;
				if (historic_opp === "BYE" || historic_opp === "AVG") {
					var historic_opp_name = historic_opp;
					var historic_opp_score = '';
				} else {
					var historic_opp_name = getFranchiseName(yearkey, historic_opp, false, false);
					var historic_opp_score = leagueHistory["series_record"][yearkey][_fid][i].opp_score;
				}
				if (leagueHistory["series_record"][yearkey][_fid][i].result === null)
					var game_result = "T";
				else
					var game_result = leagueHistory["series_record"][yearkey][_fid][i].result;
				if (leagueHistory["series_record"][yearkey][_fid][i].regular === "1")
					html_regular += '<li class="ls-popup-player-li" style="cursor:pointer" onclick="lh_get_matchup(\'' + fid + '\',\'' + historic_opp + '\',\'' + leagueHistory["series_record"][yearkey][_fid][i].score + '\',\'' + historic_opp_score + '\',\'' + at_vs + '\',\'' + yearkey + '\',' + week + ',' + isDefunct + ')">Week ' + week + ':<span class="lh_popup_result ' + _class + '" style="' + _style + '">' + game_result + '</span>' + linked_abbrev + ' ' + leagueHistory["series_record"][yearkey][_fid][i].score + at_vs + historic_opp_score + ' ' + historic_opp_name + '</li>';
				else
					html_playoff += '<li class="ls-popup-player-li" style="cursor:pointer" onclick="lh_get_matchup(\'' + fid + '\',\'' + historic_opp + '\',\'' + leagueHistory["series_record"][yearkey][_fid][i].score + '\',\'' + historic_opp_score + '\',\'' + at_vs + '\',\'' + yearkey + '\',' + week + ',' + isDefunct + ')">Week ' + week + ':<span class="lh_popup_result ' + _class + '" style="' + _style + '">' + game_result + '</span>' + linked_abbrev + ' ' + leagueHistory["series_record"][yearkey][_fid][i].score + at_vs + historic_opp_score + ' ' + historic_opp_name + '</li>';
			}
		}
		var html = '';
		html += '<div class="ls-popup-matchup" style="text-align:center;font-weight:bold;font-size:0.938rem">' + yearkey + ' ' + getFranchiseName(yearkey, linked_franchise, false, false) + ' <span class="lh_franchise_schedule_abbrev">(' + linked_abbrev + ')</span></div>';
		html += '<div class="ls-popup-matchup-record" style="text-align:center;font-style:italic">(' + record + ')</span></div>';
		html += '<p>';
		html += '<ul class="ls-popup-position-ul"><span style="font-weight:bold;width:100%;display:inline-block;margin-bottom:0.313rem;text-indent:0.313rem;font-size:0.875rem">Regular Season</span>';
		if (html_regular === '')
			html += '<li class="ls-popup-player-li ls-popup-player-li-none">no matchups found</li>';
		else
			html += html_regular;
		html += '</ul>';
		html += '</p>';
		html += '<p>';
		html += '<ul class="ls-popup-position-ul"><span style="font-weight:bold;width:100%;display:inline-block;margin-bottom:0.313rem;text-indent:0.313rem;font-size:0.875rem">Playoffs</span>';
		if (html_playoff === '')
			html += '<li class="ls-popup-player-li ls-popup-player-li-none">no matchups found</li>';
		else
			html += html_playoff;
		html += '</ul>';
		html += '</p>';
		jQuery("#ls-modal-2-header-content").html('Franchise Schedule');
		jQuery("#ls-modal-2-content").html(html);
		jQuery('#ls-modal-2-content').scrollTop(0);
	}

	function lh_apply_tab_settings() {
		var html = '';
		html += 'League History';
		//OVERALL RECORD
		html += '<div id="tab_options_11100" class="hs-control-setting" style="display:none">';
		html += '<div class="hs_toggle_settings" style="pointer-events:auto;float:right;margin-right:0.188rem"><i class="fa-regular fa-gears" aria-hidden="true"></i> Settings</div>';
		html += '<div class="hs-control-setting-content">';
		html += '<div class="history-selections">';
		html += '<span class="lh_settings_title_ckbox" style="display:block;padding-bottom:0.313rem">';
		html += '<span class="lh_settings_title" style="font-size:0.813rem;margin-right:0.313rem">Filter: </span>';
		if (localStorage["lh_defunct_" + league_id] === "1")
			html += '<div style="pointer-events:auto"><input type="checkbox" name="lh_defunct_checkbox" id="lh_defunct_checkbox" onclick="lh_checkbox(\'defunct\',this,false);jQuery(\'#lh_defunct_checkbox2\').prop(\'checked\',this.checked)"><label for="lh_defunct_checkbox">Defunct</label></div>';
		else
			html += '<div style="pointer-events:auto"><input type="checkbox" name="lh_defunct_checkbox" id="lh_defunct_checkbox" checked="checked" onclick="lh_checkbox(\'defunct\',this,false);jQuery(\'#lh_defunct_checkbox2\').prop(\'checked\',this.checked)"><label for="lh_defunct_checkbox">Defunct</label></div>';
		if (localStorage["lh_award_" + league_id] === "1")
			html += '<div style="pointer-events:auto"><input type="checkbox" name="lh_award_checkbox" id="lh_award_checkbox" onclick="lh_checkbox(\'award\',this,false)"><label for="lh_award_checkbox" style="margin-right:0">Awards</label></div>';
		else
			html += '<div style="pointer-events:auto"><input type="checkbox" name="lh_award_checkbox" id="lh_award_checkbox" checked="checked" onclick="lh_checkbox(\'award\',this,false)"><label for="lh_award_checkbox" style="margin-right:0">Awards</label></div>';
		if (!lh_auto_rename_linked_franchise) {
			if (localStorage["lh_notation_" + league_id] === "1")
				html += '<div style="pointer-events:auto"><input type="checkbox" name="lh_notation_checkbox" id="lh_notation_checkbox" onclick="lh_checkbox(\'notation\',this,false)"><label for="lh_notation_checkbox">Notations</label></div>';
			else
				html += '<div style="pointer-events:auto"><input type="checkbox" name="lh_notation_checkbox" id="lh_notation_checkbox" checked="checked" onclick="lh_checkbox(\'notation\',this,false)"><label for="lh_notation_checkbox">Notations</label></div>';
		}
		html += '</span>';
		html += '<span class="overall_season_radio_ckbox">';
		html += '<span class="lh_settings_title" style="font-size:0.813rem;margin-right:0.313rem">Fantasy Season: </span>';
		html += '<div style="pointer-events:auto"><input' + (lh_overall_season === "All" ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_overall_allseason_checkbox" name="lh_overall_allseason_checkbox" onclick="lh_radio(\'All\',5)"><label for="lh_overall_allseason_checkbox"' + (lh_overall_season === "All" ? ' class="pointer-events-none"' : '') + '>All</label></div>';
		html += '<div style="pointer-events:auto"><input' + (lh_overall_season === "Regular" ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_overall_regular_checkbox" name="lh_overall_regular_checkbox" onclick="lh_radio(\'Regular\',5)"><label for="lh_overall_regular_checkbox"' + (lh_overall_season === "Regular" ? ' class="pointer-events-none"' : '') + '>Regular</label></div>';
		html += '<div style="pointer-events:auto"><input' + (lh_overall_season === "Playoff" ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_overall_playoff_checkbox" name="lh_overall_playoff_checkbox" onclick="lh_radio(\'Playoff\',5)"><label for="lh_overall_playoff_checkbox"' + (lh_overall_season === "Playoff" ? ' class="pointer-events-none"' : '') + ' style="margin-right:0">Playoff</label></div>';
		html += '</span>';
		html += '</div>';
		html += '</div>';
		html += '</div>';
		//SERIES RECORD
		html += '<div id="tab_options_11101" class="hs-control-setting" style="display:none">';
		html += '<div class="hs_toggle_settings" style="pointer-events:auto;float:right;margin-right:0.188rem"><i class="fa-regular fa-gears" aria-hidden="true"></i> Settings</div>';
		html += '<div class="hs-control-setting-content">';
		html += '<div class="series-selections">';
		//html+= '<div class="series-selections">';
		html += '<span class="lh_settings_title_ckbox" style="display:block;padding-bottom:0.313rem">';
		html += '<span class="lh_settings_title" style="font-size:0.813rem;margin-right:0.313rem">Filter: </span>';
		if (localStorage["lh_defunct_" + league_id] === "1")
			html += '<div style="pointer-events:auto"><input type="checkbox" name="lh_defunct_checkbox2" id="lh_defunct_checkbox2" onclick="lh_checkbox(\'defunct\',this,false);jQuery(\'#lh_defunct_checkbox\').prop(\'checked\',this.checked)"><label for="lh_defunct_checkbox2" style="margin-right:0">Defunct</label></div>';
		else
			html += '<div style="pointer-events:auto"><input type="checkbox" name="lh_defunct_checkbox2" id="lh_defunct_checkbox2" checked="checked" onclick="lh_checkbox(\'defunct\',this,false);jQuery(\'#lh_defunct_checkbox\').prop(\'checked\',this.checked)"><label for="lh_defunct_checkbox2" style="margin-right:0">Defunct</label></div>';
		html += '</span>';
		html += '<span class="series_season_radio_ckbox">';
		html += '<span class="lh_settings_title" style="font-size:0.813rem;margin-right:0.313rem">Filter: </span>';
		html += '<div style="pointer-events:auto"><input' + (lh_series_season === "All" ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_series_allseason_checkbox" name="lh_series_allseason_checkbox" onclick="lh_radio(\'All\',6)"><label for="lh_series_allseason_checkbox"' + (lh_overall_season === "All" ? ' class="pointer-events-none"' : '') + '>All</label></div>';
		html += '<div style="pointer-events:auto"><input' + (lh_series_season === "Regular" ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_series_regular_checkbox" name="lh_series_regular_checkbox" onclick="lh_radio(\'Regular\',6)"><label for="lh_series_regular_checkbox"' + (lh_overall_season === "Regular" ? ' class="pointer-events-none"' : '') + '>Regular</label></div>';
		html += '<div style="pointer-events:auto"><input' + (lh_series_season === "Playoff" ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_series_playoff_checkbox" name="lh_series_playoff_checkbox" onclick="lh_radio(\'Playoff\',6)"><label for="lh_series_playoff_checkbox"' + (lh_overall_season === "Playoff" ? ' class="pointer-events-none"' : '') + ' style="margin-right:0">Playoff</label></div>';
		html += '</span>';

		html += '</div>';
		html += '</div>';
		html += '</div>';
		//TEAM POINTS
		html += '<div id="tab_options_11102" class="hs-control-setting" style="display:none">';
		html += '<div class="hs_toggle_settings" style="pointer-events:auto;float:right;margin-right:0.188rem"><i class="fa-regular fa-gears" aria-hidden="true"></i> Settings</div>';
		html += '<div class="hs-control-setting-content">';
		html += '<div class="team-selections">';
		html += '<span style="display:block;padding-bottom:0.313rem">';
		html += '<span class="lh_settings_title" style="font-size:0.813rem;margin-right:0.313rem">Include Pts From: </span>';
		if (localStorage["lh_multiple_" + league_id] === "1") //REVERSE CHECK
			html += '<div style="pointer-events:auto"><input type="checkbox" name="lh_multiple_checkbox" id="lh_multiple_checkbox" checked="checked" onclick="lh_checkbox(\'multiple\',this,true)"><label for="lh_multiple_checkbox">Multiple</label></div>';
		else
			html += '<div style="pointer-events:auto"><input type="checkbox" name="lh_multiple_checkbox" id="lh_multiple_checkbox" onclick="lh_checkbox(\'multiple\',this,true)"><label for="lh_multiple_checkbox">Multiple</label></div>';
		if (localStorage["lh_bye_" + league_id] === "1") //REVERSE CHECK
			html += '<div style="pointer-events:auto"><input type="checkbox" name="lh_bye_checkbox" id="lh_bye_checkbox" checked="checked" onclick="lh_checkbox(\'bye\',this,true)"><label for="lh_bye_checkbox">Bye</label></div>';
		else
			html += '<div style="pointer-events:auto"><input type="checkbox" name="lh_bye_checkbox" id="lh_bye_checkbox" onclick="lh_checkbox(\'bye\',this,true)"><label for="lh_bye_checkbox">Bye</label></div>';
		if (localStorage["lh_zero_" + league_id] === "1") //REVERSE CHECK
			html += '<div style="pointer-events:auto"><input type="checkbox" name="lh_zero_checkbox" id="lh_zero_checkbox" checked="checked" onclick="lh_checkbox(\'zero\',this,true)"><label for="lh_zero_checkbox" style="margin-right:0">Zero</label></div>';
		else
			html += '<div style="pointer-events:auto"><input type="checkbox" name="lh_zero_checkbox" id="lh_zero_checkbox" onclick="lh_checkbox(\'zero\',this,true)"><label for="lh_zero_checkbox" style="margin-right:0">Zero</label></div>';
		html += '</span>';

		html += '<span class="teams_rank_radio_ckbox">';
		html += '<span class="lh_settings_title" style="font-size:0.813rem;margin-right:0.313rem">Teams to Rank: </span>';
		html += '<div style="pointer-events:auto"><input' + (lh_teams_to_rank === 10 ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_teams_rank_10_checkbox" name="lh_teams_rank_10_checkbox" onclick="lh_radio(10,2)"><label for="lh_teams_rank_10_checkbox"' + (lh_teams_to_rank === 10 ? ' class="pointer-events-none" ' : ' ') + '>10</label></div>';
		html += '<div style="pointer-events:auto"><input' + (lh_teams_to_rank === 25 ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_teams_rank_25_checkbox" name="lh_teams_rank_25_checkbox" onclick="lh_radio(25,2)"><label for="lh_teams_rank_25_checkbox"' + (lh_teams_to_rank === 25 ? ' class="pointer-events-none" ' : ' ') + '>25</label></div>';
		html += '<div style="pointer-events:auto"><input' + (lh_teams_to_rank === 50 ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_teams_rank_50_checkbox" name="lh_teams_rank_50_checkbox" onclick="lh_radio(50,2)"><label for="lh_teams_rank_50_checkbox"' + (lh_teams_to_rank === 50 ? ' class="pointer-events-none" ' : ' ') + '>50</label></div>';
		html += '<div style="pointer-events:auto"><input' + (lh_teams_to_rank === 100 ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_teams_rank_100_checkbox" name="lh_teams_rank_100_checkbox" onclick="lh_radio(100,2)"><label for="lh_teams_rank_100_checkbox"' + (lh_teams_to_rank === 100 ? ' class="pointer-events-none" ' : ' ') + '>100</label></div>';
		html += '</span>';

		html += '</div>';
		html += '</div>';
		html += '</div>';
		//PLAYER
		html += '<div id="tab_options_11103" class="hs-control-setting" style="display:none">';
		html += '<div class="hs_toggle_settings" style="pointer-events:auto;float:right;margin-right:0.188rem"><i class="fa-regular fa-gears" aria-hidden="true"></i> Settings</div>';
		html += '<div class="hs-control-setting-content">';
		html += '<div class="player-selections">';
		html += '<span class="players_radio_ckbox" style="display:block;padding-bottom:0.313rem">';
		html += '<span class="lh_settings_title" style="font-size:0.813rem;margin-right:0.313rem">Position: </span>';
		html += '<div style="pointer-events:auto"><input' + (lh_global_position === "All" ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_all_checkbox" name="lh_all_checkbox" onclick="lh_radio(\'All\',0)"><label for="lh_all_checkbox" class="pointer-events-none">All</label></div>';
		for (var i = 0; i < leagueHistory['league_history_detail']["" + year].positions.length; i++) {
			var _position = leagueHistory['league_history_detail']["" + year].positions[i];
			html += '<div style="pointer-events:auto"><input' + (lh_global_position === _position ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_' + _position.toLowerCase() + '_checkbox" name="lh_' + _position.toLowerCase() + '_checkbox" onclick="lh_radio(\'' + _position + '\',0)"><label for="lh_' + _position.toLowerCase() + '_checkbox">' + _position + '</label></div>';
		}
		html += '</span>';
		html += '<span class="player_season_radio_ckbox" style="display:block;padding-bottom:0.313rem">';
		html += '<span class="lh_settings_title" style="font-size:0.813rem;margin-right:0.313rem">Fantasy Season: </span>';
		html += '<div style="pointer-events:auto"><input' + (lh_player_season === "All" ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_player_allseason_checkbox" name="lh_player_allseason_checkbox" onclick="lh_radio(\'All\',1)"><label for="lh_player_allseason_checkbox" class="pointer-events-none">All</label></div>';
		html += '<div style="pointer-events:auto"><input' + (lh_player_season === "Regular" ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_player_regular_checkbox" name="lh_player_regular_checkbox" onclick="lh_radio(\'Regular\',1)"><label for="lh_player_regular_checkbox">Regular</label></div>';
		html += '<div style="pointer-events:auto"><input' + (lh_player_season === "Playoff" ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_player_playoff_checkbox" name="lh_player_playoff_checkbox" onclick="lh_radio(\'Playoff\',1)"><label for="lh_player_playoff_checkbox" style="margin-right:0">Playoff</label></div>';
		html += '</span>';

		html += '<span class="players_rank_radio_ckbox">';
		html += '<span class="lh_settings_title" style="font-size:0.813rem;margin-right:0.313rem">Players to Rank: </span>';
		html += '<div style="pointer-events:auto"><input' + (lh_players_to_rank === 10 ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_players_rank_10_checkbox" name="lh_players_rank_10_checkbox" onclick="lh_radio(10,3)"><label for="lh_players_rank_10_checkbox"' + (lh_players_to_rank === 10 ? ' class="pointer-events-none" ' : ' ') + '>10</label></div>';
		html += '<div style="pointer-events:auto"><input' + (lh_players_to_rank === 25 ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_players_rank_25_checkbox" name="lh_players_rank_25_checkbox" onclick="lh_radio(25,3)"><label for="lh_players_rank_25_checkbox"' + (lh_players_to_rank === 25 ? ' class="pointer-events-none" ' : ' ') + '>25</label></div>';
		html += '<div style="pointer-events:auto"><input' + (lh_players_to_rank === 50 ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_players_rank_50_checkbox" name="lh_players_rank_50_checkbox" onclick="lh_radio(50,3)"><label for="lh_players_rank_50_checkbox"' + (lh_players_to_rank === 50 ? ' class="pointer-events-none" ' : ' ') + '>50</label></div>';
		html += '<div style="pointer-events:auto"><input' + (lh_players_to_rank === 100 ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_players_rank_100_checkbox" name="lh_players_rank_100_checkbox" onclick="lh_radio(100,3)"><label for="lh_players_rank_100_checkbox"' + (lh_players_to_rank === 100 ? ' class="pointer-events-none" ' : ' ') + '>100</label></div>';
		html += '<div style="pointer-events:auto"><input' + (lh_players_to_rank === 500 ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_players_rank_500_checkbox" name="lh_players_rank_500_checkbox" onclick="lh_radio(500,3)"><label for="lh_players_rank_500_checkbox"' + (lh_players_to_rank === 500 ? ' class="pointer-events-none" ' : ' ') + '>500</label></div>';
		html += '</span>';

		html += '</div>';
		html += '</div>';
		html += '</div>';
		//MISC
		html += '<div id="tab_options_11104" class="hs-control-setting" style="display:none">';
		html += '<div class="hs_toggle_settings" style="pointer-events:auto;float:right;margin-right:0.188rem"><i class="fa-regular fa-gears" aria-hidden="true"></i> Settings</div>';
		html += '<div class="hs-control-setting-content">';
		html += '<div class="misc-selections">';

		html += '<span class="misc_rank_radio_ckbox">';
		html += '<span class="lh_settings_title" style="font-size:0.813rem;margin-right:0.313rem">Teams to Rank: </span>';
		html += '<div style="pointer-events:auto"><input' + (lh_misc_to_rank === 10 ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_misc_rank_10_checkbox" name="lh_misc_rank_10_checkbox" onclick="lh_radio(10,4)"><label for="lh_misc_rank_10_checkbox"' + (lh_misc_to_rank === 10 ? ' class="pointer-events-none" ' : ' ') + '>10</label></div>';
		html += '<div style="pointer-events:auto"><input' + (lh_misc_to_rank === 25 ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_misc_rank_25_checkbox" name="lh_misc_rank_25_checkbox" onclick="lh_radio(25,4)"><label for="lh_misc_rank_25_checkbox"' + (lh_misc_to_rank === 25 ? ' class="pointer-events-none" ' : ' ') + '>25</label></div>';
		html += '<div style="pointer-events:auto"><input' + (lh_misc_to_rank === 50 ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_misc_rank_50_checkbox" name="lh_misc_rank_50_checkbox" onclick="lh_radio(50,4)"><label for="lh_misc_rank_50_checkbox"' + (lh_misc_to_rank === 50 ? ' class="pointer-events-none" ' : ' ') + '>50</label></div>';
		html += '<div style="pointer-events:auto"><input' + (lh_misc_to_rank === 100 ? ' checked="checked" ' : ' ') + 'type="checkbox" id="lh_misc_rank_100_checkbox" name="lh_misc_rank_100_checkbox" onclick="lh_radio(100,4)"><label for="lh_misc_rank_100_checkbox"' + (lh_misc_to_rank === 100 ? ' class="pointer-events-none" ' : ' ') + '>100</label></div>';
		html += '</span>';

		html += '</div>';
		html += '</div>';
		html += '</div>';
		jQuery('.lh-main-caption-span').html(html);

		jQuery('.hs_toggle_settings').on("click", function () {
			$('.hs-control-setting-content').slideToggle('slow');
		});
	}

	function update_defunct_franchises() {
		var defunct_franchises = new Array();
		//LOOP THROUGH DEFUNCT FRANCHISES TO CREATE defunct_franchises
		for (var yearkey in leagueHistory['defunct_franchise']) {
			if (leagueHistory['defunct_franchise'].hasOwnProperty(yearkey)) {
				for (var namekey in leagueHistory['defunct_franchise'][yearkey]) {
					if (leagueHistory['defunct_franchise'][yearkey].hasOwnProperty(namekey)) {
						if (!defunct_franchises.hasOwnProperty(namekey)) {
							defunct_franchises[namekey] = new Array();
							defunct_franchises[namekey]["overall"] = ({
								"gp": 0,
								"w": 0,
								"l": 0,
								"t": 0,
								"pf": 0,
								"pa": 0
							});
							defunct_franchises[namekey]["regular"] = ({
								"gp": 0,
								"w": 0,
								"l": 0,
								"t": 0,
								"pf": 0,
								"pa": 0
							});
						}
						defunct_franchises[namekey]['overall']['gp'] += leagueHistory['defunct_franchise'][yearkey][namekey]['gp'];
						defunct_franchises[namekey]['overall']['w'] += leagueHistory['defunct_franchise'][yearkey][namekey]['w'];
						defunct_franchises[namekey]['overall']['l'] += leagueHistory['defunct_franchise'][yearkey][namekey]['l'];
						defunct_franchises[namekey]['overall']['t'] += leagueHistory['defunct_franchise'][yearkey][namekey]['t'];
						defunct_franchises[namekey]['overall']['pf'] += leagueHistory['defunct_franchise'][yearkey][namekey]['pf'];
						defunct_franchises[namekey]['overall']['pa'] += leagueHistory['defunct_franchise'][yearkey][namekey]['pa'];
						defunct_franchises[namekey][yearkey] = new Array();
						defunct_franchises[namekey][yearkey]['id'] = leagueHistory['defunct_franchise'][yearkey][namekey]['id'];
						defunct_franchises[namekey][yearkey]['gp'] = leagueHistory['defunct_franchise'][yearkey][namekey]['gp'];
						defunct_franchises[namekey][yearkey]['w'] = leagueHistory['defunct_franchise'][yearkey][namekey]['w'];
						defunct_franchises[namekey][yearkey]['l'] = leagueHistory['defunct_franchise'][yearkey][namekey]['l'];
						defunct_franchises[namekey][yearkey]['t'] = leagueHistory['defunct_franchise'][yearkey][namekey]['t'];
						defunct_franchises[namekey][yearkey]['pf'] = leagueHistory['defunct_franchise'][yearkey][namekey]['pf'];
						defunct_franchises[namekey][yearkey]['pa'] = leagueHistory['defunct_franchise'][yearkey][namekey]['pa'];
					}
				}
			}
		}
		//NOW APPLY NEW ARRAY TO ORIGINAL ARRAY
		leagueHistory['defunct_franchise'] = new Array();
		leagueHistory['defunct_franchise'] = defunct_franchises;
	}

	function update_overall_record() {
		var defunct_name_key = new Array();
		for (var fname in leagueHistory.defunct_franchise) {
			if (leagueHistory.defunct_franchise.hasOwnProperty(fname)) {
				for (var yearkey in leagueHistory.defunct_franchise[fname]) {
					if (leagueHistory.defunct_franchise[fname].hasOwnProperty(yearkey) && yearkey !== "overall") {
						var fid = leagueHistory.defunct_franchise[fname][yearkey].id;
						if (!defunct_name_key.hasOwnProperty(fid)) defunct_name_key[fid] = new Array();
						defunct_name_key[fid][yearkey] = fname;
					}
				}
			}
		}
		for (var yearkey in leagueHistory.season_record) {
			if (leagueHistory.season_record.hasOwnProperty(yearkey)) {
				for (var fid in leagueHistory.season_record[yearkey]) {
					if (leagueHistory.season_record[yearkey].hasOwnProperty(fid)) {
						var parent_fid = "";
						if (leagueHistory.reverse_lookup.hasOwnProperty(yearkey + '_' + fid))
							parent_fid = leagueHistory.reverse_lookup[yearkey + '_' + fid];
						else
							try {
								parent_fid = defunct_name_key[fid][yearkey];
							} catch (er) {}
						if (parent_fid !== '') {
							if (!lh_overall_record_ar.hasOwnProperty(parent_fid)) lh_overall_record_ar[parent_fid] = ({
								"overall": ({
									'gp': 0,
									'w': 0,
									'l': 0,
									't': 0,
									'pf': 0,
									'pa': 0
								}),
								"regular": ({
									'gp': 0,
									'w': 0,
									'l': 0,
									't': 0,
									'pf': 0,
									'pa': 0
								}),
								"playoff": ({
									'gp': 0,
									'w': 0,
									'l': 0,
									't': 0,
									'pf': 0,
									'pa': 0
								})
							});

							lh_overall_record_ar[parent_fid][yearkey] = leagueHistory.season_record[yearkey][fid];

							lh_overall_record_ar[parent_fid].overall.gp += leagueHistory.season_record[yearkey][fid].overall.gp;
							lh_overall_record_ar[parent_fid].overall.w += leagueHistory.season_record[yearkey][fid].overall.w;
							lh_overall_record_ar[parent_fid].overall.l += leagueHistory.season_record[yearkey][fid].overall.l;
							lh_overall_record_ar[parent_fid].overall.t += leagueHistory.season_record[yearkey][fid].overall.t;
							lh_overall_record_ar[parent_fid].overall.pf += leagueHistory.season_record[yearkey][fid].overall.pf;
							lh_overall_record_ar[parent_fid].overall.pa += leagueHistory.season_record[yearkey][fid].overall.pa;

							lh_overall_record_ar[parent_fid].regular.gp += leagueHistory.season_record[yearkey][fid].regular.gp;
							lh_overall_record_ar[parent_fid].regular.w += leagueHistory.season_record[yearkey][fid].regular.w;
							lh_overall_record_ar[parent_fid].regular.l += leagueHistory.season_record[yearkey][fid].regular.l;
							lh_overall_record_ar[parent_fid].regular.t += leagueHistory.season_record[yearkey][fid].regular.t;
							lh_overall_record_ar[parent_fid].regular.pf += leagueHistory.season_record[yearkey][fid].regular.pf;
							lh_overall_record_ar[parent_fid].regular.pa += leagueHistory.season_record[yearkey][fid].regular.pa;

							lh_overall_record_ar[parent_fid].playoff.gp += leagueHistory.season_record[yearkey][fid].playoff.gp;
							lh_overall_record_ar[parent_fid].playoff.w += leagueHistory.season_record[yearkey][fid].playoff.w;
							lh_overall_record_ar[parent_fid].playoff.l += leagueHistory.season_record[yearkey][fid].playoff.l;
							lh_overall_record_ar[parent_fid].playoff.t += leagueHistory.season_record[yearkey][fid].playoff.t;
							lh_overall_record_ar[parent_fid].playoff.pf += leagueHistory.season_record[yearkey][fid].playoff.pf;
							lh_overall_record_ar[parent_fid].playoff.pa += leagueHistory.season_record[yearkey][fid].playoff.pa;
						}
					}
				}
			}
		}
	}

	function sort_defunct_franchises() {
		try {
			var defunct_franchises_sort = new Array();
			for (var key in leagueHistory['defunct_franchise']) {
				if (leagueHistory['defunct_franchise'].hasOwnProperty(key)) {
					var win_pct = (lh_overall_record_ar[key].regular.w + lh_overall_record_ar[key].regular.t / 2) / lh_overall_record_ar[key].regular.gp;
					defunct_franchises_sort.push(({
						"nameKey": key,
						"pct": win_pct,
						"gp": lh_overall_record_ar[key].regular.gp,
						"w": lh_overall_record_ar[key].regular.w,
						"t": lh_overall_record_ar[key].regular.t
					}));
				}
			}
			//SORT DEFUNCT FRANCHISES BY WIN PCT
			defunct_franchises_sort.sort(function (a, b) {
				if (a.pct > b.pct) return -1;
				if (a.pct < b.pct) return 1;
				if (a.gp > b.gp) return -1;
				if (a.gp < b.gp) return 1;
				if (a.w > b.w) return -1;
				if (a.w < b.w) return 1;
				if (a.nameKey < b.nameKey) return -1;
				if (a.nameKey > b.nameKey) return 1;
			});
			var defunct_franchises_sorted = new Array();
			for (var i = 0; i < defunct_franchises_sort.length; i++) {
				defunct_franchises_sorted[defunct_franchises_sort[i].nameKey] = leagueHistory['defunct_franchise'][defunct_franchises_sort[i].nameKey];
			}
			//NOW APPLY NEW SORTED ARRAY TO ORIGINAL ARRAY
			leagueHistory['defunct_franchise'] = new Array();
			leagueHistory['defunct_franchise'] = defunct_franchises_sorted;
		} catch (er) {}
	}

	function create_html_historical_records() {
		//create win % array and the sort
		var fid_winpct = new Array();
		var _record_ar = new Array();
		for (var key in franchiseDatabase) {
			if (franchiseDatabase.hasOwnProperty(key) && key !== "fid_0000") {
				var fid = franchiseDatabase[key].id;
				try {
					switch (lh_overall_season) {
						case "All":
							_record_ar = lh_overall_record_ar[fid].overall;
							break;
						case "Regular":
							_record_ar = lh_overall_record_ar[fid].regular;
							break;
						case "Playoff":
							_record_ar = lh_overall_record_ar[fid].playoff;
							break;
					}

					var fid_pct = (_record_ar.w + _record_ar.t / 2) / _record_ar.gp;
				} catch (er) {
					//ERROR FOR NEW FRANCHISE WITHOUT HISTORY
					lh_overall_record_ar[fid] = ({
						"overall": ({
							'gp': 0,
							'w': 0,
							'l': 0,
							't': 0,
							'pf': 0,
							'pa': 0
						}),
						"regular": ({
							'gp': 0,
							'w': 0,
							'l': 0,
							't': 0,
							'pf': 0,
							'pa': 0
						}),
						"playoff": ({
							'gp': 0,
							'w': 0,
							'l': 0,
							't': 0,
							'pf': 0,
							'pa': 0
						})
					});
					_record_ar = ({
						'gp': 0,
						'w': 0,
						'l': 0,
						't': 0,
						'pf': 0,
						'pa': 0
					});
					var fid_pct = 0;
				}
				fid_winpct.push({
					id: fid,
					pct: fid_pct,
					gp: _record_ar.gp
				});
			}
		}
		fid_winpct.sort(compare);

		var html = '';
		html += '<div id="historical_records_wrapper">';
		html += '<div class="mobile-wrap">';
		html += '<table align="center" cellspacing="1" class="report"  id="historical_records">';
		html += '<tr><th class="lh_overall_franchise" style="text-align:left;padding:0 0.313rem">Franchise</th><th class="lh_overall_pct">Win %</th><th class="lh_overall_gp">GP</th><th class="lh_overall_record">Overall</th>';
		if (localStorage["lh_award_" + league_id] === "1")
			html += '<th class="lh_overall_awards lh_award_check" style="display:none">Awards</th>';
		else
			html += '<th class="lh_overall_awards lh_award_check">Awards</th>';
		for (var i = 0; i < leagueHistory.years.length; i++) {
			html += '<th class="lh_year_record"><a href="' + leagueHistory.history_links[i].url + '" target="_blank">' + leagueHistory.years[i] + '</a></th>';
		}
		html += '</tr>';
		var lh_notations = new Array();
		var lh_notation_count = 0;
		for (var i = 0; i < fid_winpct.length; i++) {
			var fid = fid_winpct[i].id;
			if (lh_franchise_id === fid) var lh_my_franchise = " myfranchise";
			else var lh_my_franchise = '';
			if (i % 2)
				html += '<tr class="eventablerow active_fran' + lh_my_franchise + '">';
			else
				html += '<tr class="oddtablerow active_fran' + lh_my_franchise + '">';
			html += '<td class="fname lh_franchise" style="text-align:left;white-space:nowrap;"><a class="franchise_' + fid + '" href="' + baseURLDynamic + '/' + year + '/options?L=' + league_id + '&F=' + fid + '&O=01">' + getFranchiseName(yearStr, fid, false, true) + '</a></td>';
			html += '<td class="lh_overall_pct" style="text-align:center;">' + fid_winpct[i].pct.toFixed(3) + '</td>';
			html += '<td class="lh_overall_gp" style="text-align:center;">' + fid_winpct[i].gp + '</td>';
			_record_ar = [];
			try {
				switch (lh_overall_season) {
					case "All":
						_record_ar = lh_overall_record_ar[fid].overall;
						break;
					case "Regular":
						_record_ar = lh_overall_record_ar[fid].regular;
						break;
					case "Playoff":
						_record_ar = lh_overall_record_ar[fid].playoff;
						break;
				}
			} catch (er) {
				_record_ar = ({
					'gp': 0,
					'w': 0,
					'l': 0,
					't': 0,
					'pf': 0,
					'pa': 0
				});
			}

			if (_record_ar.gp === 0)
				html += '<td class="lh_overall_record" style="text-align:center;white-space:nowrap;">' + lh_no_record + '</td>';
			else
				html += '<td class="lh_overall_record" style="text-align:center;white-space:nowrap;cursor:pointer" onclick="lh_get_franchise_schedule_history(\'' + fid + '\',\'' + _record_ar.w + "-" + _record_ar.l + "-" + _record_ar.t + '\',false)"><a style="text-decoration:underline">' + _record_ar.w + "-" + _record_ar.l + "-" + _record_ar.t + '</a></td>';
			if (localStorage["lh_award_" + league_id] === "1")
				html += '<td class="lh_overall_awards lh_award_check" style="text-align:center;display:none">' + lh_getAwards(fid, false) + '</td>';
			else
				html += '<td class="lh_overall_awards lh_award_check" style="text-align:center;">' + lh_getAwards(fid, false) + '</td>';
			for (var j = 0; j < leagueHistory.years.length; j++) {
				var lh_notation_html = '';
				if (leagueHistory.fid_history_detail[fid][leagueHistory.years[j]].fname !== "-") {
					if (getFranchiseName(yearStr, fid, false, false).trim().toLowerCase() !== getFranchiseName(leagueHistory.years[j], fid, true, false).trim().toLowerCase()) {
						if (!lh_notations.hasOwnProperty(fid + "_" + getFranchiseName(leagueHistory.years[j], fid, true, false).trim().toLowerCase())) {
							lh_notation_count++;
							lh_notations[fid + "_" + getFranchiseName(leagueHistory.years[j], fid, true, false).trim().toLowerCase()] = ({
								id: fid,
								old_id: franchiseDatabase["fid_" + fid].fid,
								fname: getFranchiseName(yearStr, fid, false, false).trim(),
								old_fname: getFranchiseName(leagueHistory.years[j], fid, true, false).trim(),
								notation: lh_notation_count
							});
						}
						lh_notation_html = '<span class="lh_notation" style="vertical-align:top;font-size:xx-small;color:red;font-weight:bold;padding-left:0.063rem;padding-right:0.063rem">' + lh_notations[fid + "_" + getFranchiseName(leagueHistory.years[j], fid, true, false).trim().toLowerCase()].notation + '</span>';
					}
				}
				html += '<td class="lh_year_record" style="text-align:center;white-space:nowrap;">';

				_record_ar = [];
				try {
					switch (lh_overall_season) {
						case "All":
							_record_ar = lh_overall_record_ar[fid][leagueHistory.years[j]].overall;
							break;
						case "Regular":
							_record_ar = lh_overall_record_ar[fid][leagueHistory.years[j]].regular;
							break;
						case "Playoff":
							_record_ar = lh_overall_record_ar[fid][leagueHistory.years[j]].playoff;
							break;
					}
				} catch (er) {
					_record_ar = ({
						'gp': 0,
						'w': 0,
						'l': 0,
						't': 0,
						'pf': 0,
						'pa': 0
					});
				}
				var w_l_t = _record_ar.w + "-" + _record_ar.l + "-" + _record_ar.t;
				if (_record_ar.gp === 0)
					html += lh_no_record;
				else
					html += '<span class="lh_get_franchise_schedule" style="cursor:pointer" onclick="lh_get_franchise_schedule(\'' + fid + '\',' + j + ',\'' + leagueHistory.years[j] + '\',\'' + w_l_t + '\',false)"><a style="text-decoration:underline">' + w_l_t + '</a></span>';

				if (!lh_auto_rename_linked_franchise) {
					if (localStorage["lh_notation_" + league_id] === "1")
						html += '<span class="lh_notation_check" style="display:none">' + lh_notation_html + '</span>';
					else
						html += '<span class="lh_notation_check">' + lh_notation_html + '</span>';
				}
				html += '</td>';
			}
			html += '</tr>';
		}
		//DEFUNCT FRANCHISES
		if (localStorage["lh_defunct_" + league_id] === "1")
			html += '<tr class="lh_defunct_check rowheader" style="display:none"><th class="lh_overall_franchise" style="text-align:left">Defunct Franchises</th><th class="lh_overall_pct">Win %</th><th class="lh_overall_gp">GP</th><th class="lh_overall_record">Overall</th>';
		else
			html += '<tr class="lh_defunct_check rowheader"><th class="lh_overall_franchise" style="text-align:left">Defunct Franchises</th><th class="lh_overall_pct">Win %</th><th class="lh_overall_gp">GP</th><th class="lh_overall_record">Overall</th>';
		if (localStorage["lh_award_" + league_id] === "1")
			html += '<th class="lh_overall_pct lh_award_check" style="display:none">Awards</th>';
		else
			html += '<th class="lh_overall_pct lh_award_check">Awards</th>';
		for (var i = 0; i < leagueHistory.years.length; i++) {
			html += '<th class="lh_year_record"><a href="' + leagueHistory.history_links[i].url + '" target="_blank">' + leagueHistory.years[i] + '</a></th>';
		}
		html += '</tr>';
		var rowCount = 0;
		for (var key in leagueHistory.defunct_franchise) {
			if (leagueHistory.defunct_franchise.hasOwnProperty(key)) {
				if (rowCount % 2)
					if (localStorage["lh_defunct_" + league_id] === "1")
						html += '<tr class="eventablerow lh_defunct_check" style="display:none">';
					else
						html += '<tr class="eventablerow lh_defunct_check">';
				else
				if (localStorage["lh_defunct_" + league_id] === "1")
					html += '<tr class="oddtablerow lh_defunct_check" style="display:none">';
				else
					html += '<tr class="oddtablerow lh_defunct_check">';
				html += '<td class="fname lh_franchise" style="text-align:left;white-space:nowrap;">' + key + '</td>';

				try {
					switch (lh_overall_season) {
						case "All":
							_record_ar = lh_overall_record_ar[key].overall;
							break;
						case "Regular":
							_record_ar = lh_overall_record_ar[key].regular;
							break;
						case "Playoff":
							_record_ar = lh_overall_record_ar[key].playoff;
							break;
					}
				} catch (er) {
					_record_ar = ({
						'gp': 0,
						'w': 0,
						'l': 0,
						't': 0,
						'pf': 0,
						'pa': 0
					});
				}

				var win_pct = (_record_ar.w + _record_ar.t / 2) / _record_ar.gp;
				html += '<td class="lh_overall_pct" style="text-align:center;">' + win_pct.toFixed(3) + '</td>';
				html += '<td class="lh_overall_gp" style="text-align:center;">' + _record_ar.gp + '</td>';
				if (_record_ar.gp === 0)
					html += '<td class="lh_overall_record" style="text-align:center;white-space:nowrap;">' + lh_no_record + '</td>';
				else
					html += '<td class="lh_overall_record" style="text-align:center;white-space:nowrap;">' + _record_ar.w + "-" + _record_ar.l + "-" + _record_ar.t + '</td>';
				if (localStorage["lh_award_" + league_id] === "1")
					html += '<td class="lh_overall_awards lh_award_check" style="text-align:center;white-space:nowrap;display:none">' + lh_getAwards(key, true) + '</td>';
				else
					html += '<td class="lh_overall_awards lh_award_check" style="text-align:center;white-space:nowrap;">' + lh_getAwards(key, true) + '</td>';
				for (var i = 0; i < leagueHistory.years.length; i++) {
					if (leagueHistory.defunct_franchise[key].hasOwnProperty(leagueHistory.years[i])) {
						var fid = leagueHistory.defunct_franchise[key][leagueHistory.years[i]].id;
						html += '<td class="lh_year_record" style="text-align:center;white-space:nowrap;">';
						try {
							switch (lh_overall_season) {
								case "All":
									_record_ar = lh_overall_record_ar[key][leagueHistory.years[i]].overall;
									break;
								case "Regular":
									_record_ar = lh_overall_record_ar[key][leagueHistory.years[i]].regular;
									break;
								case "Playoff":
									_record_ar = lh_overall_record_ar[key][leagueHistory.years[i]].playoff;
									break;
							}
						} catch (er) {
							_record_ar = ({
								'gp': 0,
								'w': 0,
								'l': 0,
								't': 0,
								'pf': 0,
								'pa': 0
							});
						}

						var w_l_t = _record_ar.w + "-" + _record_ar.l + "-" + _record_ar.t;
						if (_record_ar.gp === 0)
							html += lh_no_record;
						else
							html += '<span class="lh_get_franchise_schedule" style="cursor:pointer" onclick="lh_get_franchise_schedule(\'' + fid + '\',' + j + ',\'' + leagueHistory.years[i] + '\',\'' + w_l_t + '\',true)"><a style="text-decoration:underline">' + w_l_t + '</a></span>';
						html += '</td>';
					} else {
						html += '<td class="lh_year_record" style="text-align:center;white-space:nowrap;">' + lh_no_record + '</td>';
					}
				}
				html += '</tr>';
				rowCount++;
			}
		}
		html += '</table>'
		html += '</div>';
		html += '</div>';
		var awards_legend_html = '';
		for (var key in historicalAwards) {
			if (historicalAwards.hasOwnProperty(key)) {
				awards_legend_html += '<li class="lh_award_li">';
				awards_legend_html += '<span class="lh_award lh_award_li_award">' + historicalAwards[key] + '</span>';
				awards_legend_html += '<span class="lh_award lh_award_li_note">' + key + '</span>';
				awards_legend_html += '</li>';
			}
		}
		if (awards_legend_html !== '') {
			if (localStorage["lh_award_" + league_id] === "1")
				html += '<div class="mobile-wrap lh_award_check" style="display:none">';
			else
				html += '<div class="mobile-wrap lh_award_check">';
			html += '<ul class="lh_award_ul" style="list-style-type:none;margin-left:0.313rem"><span class="lh_award_caption" style="font-weight:bold;display:block;margin-bottom:0.188rem">League Awards</span>';
			html += awards_legend_html;
			html += '</ul>';
			html += '</div>';
		}

		if (!lh_auto_rename_linked_franchise) {
			if (lh_notation_count > 0) {
				if (localStorage["lh_notation_" + league_id] === "1")
					html += '<div class="mobile-wrap lh_notation_check" style="display:none">';
				else
					html += '<div class="mobile-wrap lh_notation_check">';
				html += '<ul class="lh_notation_ul" style="list-style-type:none"><span class="lh_notation_caption" style="font-weight:bold;display:block;margin-bottom:0.188rem">Historical Franchise Name Changes</span>';
				for (var key in lh_notations) {
					if (lh_notations.hasOwnProperty(key)) {
						html += '<li class="lh_notation_li">';
						html += '<span class="lh_notation lh_notation_li_notation" style="color:red;font-weight:bold">' + lh_notations[key].notation + '</span>';
						html += '<span class="lh_notation lh_notation_li_note">' + lh_notations[key].fname + ' was known as ' + lh_notations[key].old_fname + '</span>';
						html += '</li>';
					}
				}
				html += '</ul>';
				html += '</div>';
			}
		}

		jQuery("#historical_records_content").html(html);
		jQuery('.lh_defunct_check').prev('.active_fran').addClass('fran-last');
		//if(!lh_is_new_install) show_custom_tab_history(11100);
		if (lh_initial_run) show_custom_tab_history(11100);
		lh_initial_run = false;
		doTableScrollHistory(3, "historical_records_wrapper");
	}

	function lh_get_series_record(fid1, fid2, isPopup) {
		var html_regular = '';
		var html_playoff = '';
		var series_record = ({
			w: 0,
			l: 0,
			t: 0
		});
		var series_record_regular = ({
			w: 0,
			l: 0,
			t: 0
		});
		var series_record_playoff = ({
			w: 0,
			l: 0,
			t: 0
		});
		var record_found = false;
		var record_regular_found = false;
		var record_playoff_found = false;
		for (var yearkey in leagueHistory["series_record"]) {
			if (leagueHistory["series_record"].hasOwnProperty(yearkey)) {
				for (var key in leagueHistory["series_record"][yearkey]) {
					if (leagueHistory["series_record"][yearkey].hasOwnProperty(key)) {
						if (isNaN(parseInt(fid1)) || fid1.length !== 4) { //DEFUNCT FRANCHISE
							if (leagueHistory.defunct_franchise.hasOwnProperty(fid1)) {
								if (leagueHistory.defunct_franchise[fid1].hasOwnProperty(yearkey)) {
									var _fid1 = leagueHistory.defunct_franchise[fid1][yearkey].id;
									if (key === (_fid1 + "_defunct")) {
										for (var i = 0; i < leagueHistory["series_record"][yearkey][key].length; i++) {
											if (leagueHistory["series_record"][yearkey][key][i].opp === fid2) {
												record_found = true;
												if (leagueHistory["series_record"][yearkey][key][i].regular === "1")
													record_regular_found = true;
												else
													record_playoff_found = true;
												switch (leagueHistory["series_record"][yearkey][key][i].result) {
													case "W":
														series_record.w++;
														if (leagueHistory["series_record"][yearkey][key][i].regular === "1")
															series_record_regular.w++;
														else
															series_record_playoff.w++;
														var _class = "lh_popup_win";
														var _style = "width:1.25rem;display:inline-block;text-align:center";
														break;
													case "L":
														series_record.l++;
														if (leagueHistory["series_record"][yearkey][key][i].regular === "1")
															series_record_regular.l++;
														else
															series_record_playoff.l++;
														var _class = "lh_popup_loss";
														var _style = "width:1.25rem;display:inline-block;text-align:center";
														break;
													case "T":
														series_record.t++;
														if (leagueHistory["series_record"][yearkey][key][i].regular === "1")
															series_record_regular.t++;
														else
															series_record_playoff.t++;
														var _class = "lh_popup_tie";
														var _style = "width:1.25rem;display:inline-block;text-align:center";
														break;
												}
												var week = parseInt(leagueHistory["series_record"][yearkey][key][i].week) < 10 ? "0" + leagueHistory["series_record"][yearkey][key][i].week : leagueHistory["series_record"][yearkey][key][i].week;
												var at_vs = leagueHistory["series_record"][yearkey][key][i].is_home === 1 ? " vs " : " at ";
												if (leagueHistory["series_record"][yearkey][key][i].regular === "1")
													html_regular += '<li class="ls-popup-player-li" style="cursor:pointer" onclick="lh_get_matchup(\'' + _fid1 + '\',\'' + fid2 + '\',\'' + leagueHistory["series_record"][yearkey][key][i].score + '\',\'' + leagueHistory["series_record"][yearkey][key][i].opp_score + '\',\'' + at_vs + '\',\'' + yearkey + '\',' + week + ',true)">' + yearkey + ' Week ' + week + ':<span class="lh_popup_result ' + _class + '" style="' + _style + '">' + leagueHistory["series_record"][yearkey][key][i].result + '</span>' + getFranchiseAbbrev(yearkey, _fid1, false, false) + ' ' + leagueHistory["series_record"][yearkey][key][i].score + at_vs + franchiseDatabase["fid_" + fid2].abbrev + ' ' + leagueHistory["series_record"][yearkey][key][i].opp_score + '</li>';
												else
													html_playoff += '<li class="ls-popup-player-li" style="cursor:pointer" onclick="lh_get_matchup(\'' + _fid1 + '\',\'' + fid2 + '\',\'' + leagueHistory["series_record"][yearkey][key][i].score + '\',\'' + leagueHistory["series_record"][yearkey][key][i].opp_score + '\',\'' + at_vs + '\',\'' + yearkey + '\',' + week + ',true)">' + yearkey + ' Week ' + week + ':<span class="lh_popup_result ' + _class + '" style="' + _style + '">' + leagueHistory["series_record"][yearkey][key][i].result + '</span>' + getFranchiseAbbrev(yearkey, _fid1, false, false) + ' ' + leagueHistory["series_record"][yearkey][key][i].score + at_vs + franchiseDatabase["fid_" + fid2].abbrev + ' ' + leagueHistory["series_record"][yearkey][key][i].opp_score + '</li>';
											}
										}
									}
								}
							}
						} else {
							if (key === fid1) {
								for (var i = 0; i < leagueHistory["series_record"][yearkey][key].length; i++) {
									if (leagueHistory["series_record"][yearkey][key][i].opp === fid2) {
										record_found = true;
										switch (leagueHistory["series_record"][yearkey][key][i].result) {
											case "W":
												series_record.w++;
												if (leagueHistory["series_record"][yearkey][key][i].regular === "1")
													series_record_regular.w++;
												else
													series_record_playoff.w++;
												var _class = "lh_popup_win";
												var _style = "width:1.25rem;display:inline-block;text-align:center";
												break;
											case "L":
												series_record.l++;
												if (leagueHistory["series_record"][yearkey][key][i].regular === "1")
													series_record_regular.l++;
												else
													series_record_playoff.l++;
												var _class = "lh_popup_loss";
												var _style = "width:1.25rem;display:inline-block;text-align:center";
												break;
											case "T":
												series_record.t++;
												if (leagueHistory["series_record"][yearkey][key][i].regular === "1")
													series_record_regular.t++;
												else
													series_record_playoff.t++;
												var _class = "lh_popup_tie";
												var _style = "width:1.25rem;display:inline-block;text-align:center";
												break;
										}
										var week = parseInt(leagueHistory["series_record"][yearkey][key][i].week) < 10 ? "0" + leagueHistory["series_record"][yearkey][key][i].week : leagueHistory["series_record"][yearkey][key][i].week;
										var at_vs = leagueHistory["series_record"][yearkey][key][i].is_home === 1 ? " vs " : " at ";
										if (leagueHistory["series_record"][yearkey][key][i].regular === "1")
											html_regular += '<li class="ls-popup-player-li" style="cursor:pointer" onclick="lh_get_matchup(\'' + fid1 + '\',\'' + fid2 + '\',\'' + leagueHistory["series_record"][yearkey][key][i].score + '\',\'' + leagueHistory["series_record"][yearkey][key][i].opp_score + '\',\'' + at_vs + '\',\'' + yearkey + '\',' + week + ',false)">' + yearkey + ' Week ' + week + ':<span class="lh_popup_result ' + _class + '" style="' + _style + '">' + leagueHistory["series_record"][yearkey][key][i].result + '</span>' + franchiseDatabase["fid_" + fid1].abbrev + ' ' + leagueHistory["series_record"][yearkey][key][i].score + at_vs + franchiseDatabase["fid_" + fid2].abbrev + ' ' + leagueHistory["series_record"][yearkey][key][i].opp_score + '</li>';
										else
											html_playoff += '<li class="ls-popup-player-li" style="cursor:pointer" onclick="lh_get_matchup(\'' + fid1 + '\',\'' + fid2 + '\',\'' + leagueHistory["series_record"][yearkey][key][i].score + '\',\'' + leagueHistory["series_record"][yearkey][key][i].opp_score + '\',\'' + at_vs + '\',\'' + yearkey + '\',' + week + ',false)">' + yearkey + ' Week ' + week + ':<span class="lh_popup_result ' + _class + '" style="' + _style + '">' + leagueHistory["series_record"][yearkey][key][i].result + '</span>' + franchiseDatabase["fid_" + fid1].abbrev + ' ' + leagueHistory["series_record"][yearkey][key][i].score + at_vs + franchiseDatabase["fid_" + fid2].abbrev + ' ' + leagueHistory["series_record"][yearkey][key][i].opp_score + '</li>';
									}
								}
							}
						}
					}
				}
			}
		}
		if (isPopup) {
			var html = '';
			if (isNaN(parseInt(fid1))) { //DEFUNCT FRANCHISE
				html += '<div class="ls-popup-matchup" style="text-align:center;font-weight:bold;font-size:0.938rem">' + fid1 + ' vs ' + franchiseDatabase["fid_" + fid2].name + '</div>';
			} else {
				html += '<div class="ls-popup-matchup" style="text-align:center;font-weight:bold;font-size:0.938rem">' + franchiseDatabase["fid_" + fid1].name + ' vs ' + franchiseDatabase["fid_" + fid2].name + '</div>';
			}
			if ((series_record.w + series_record.l + series_record.t) === 0)
				html += '<div class="ls-popup-matchup-record" style="text-align:center;font-style:italic">(' + lh_no_record + ')</div>';
			else
				html += '<div class="ls-popup-matchup-record" style="text-align:center;font-style:italic">(' + series_record.w + "-" + series_record.l + "-" + series_record.t + ')</div>';
			html += '<p>';
			html += '<ul class="ls-popup-position-ul"><span style="font-weight:bold;width:100%;display:inline-block;margin-bottom:0.313rem;text-indent:0.313rem;font-size:0.875rem">Regular Season</span>';
			if (html_regular === '')
				html += '<li class="ls-popup-player-li ls-popup-player-li-none">no matchups found</li>';
			else
				html += html_regular;
			html += '</ul>';
			html += '</p>';
			html += '<p>';
			html += '<ul class="ls-popup-position-ul"><span style="font-weight:bold;width:100%;display:inline-block;margin-bottom:0.313rem;text-indent:0.313rem;font-size:0.875rem">Playoffs</span>';
			if (html_playoff === '')
				html += '<li class="ls-popup-player-li ls-popup-player-li-none">no matchups found</li>';
			else
				html += html_playoff;
			html += '</ul>';
			html += '</p>';
			jQuery("#ls-modal-2-header-content").html('Series Record');
			jQuery("#ls-modal-2-content").html(html);
			jQuery('#ls-modal-2-content').scrollTop(0);
		} else {
			switch (lh_series_season) {
				case "All":
					if (record_found)
						return series_record.w + "-" + series_record.l + "-" + series_record.t;
					else
						return lh_no_record;
					break;
				case "Regular":
					if (record_found)
						return series_record_regular.w + "-" + series_record_regular.l + "-" + series_record_regular.t;
					else
						return lh_no_record;
					break;
				case "Playoff":
					if (record_found)
						return series_record_playoff.w + "-" + series_record_playoff.l + "-" + series_record_playoff.t;
					else
						return lh_no_record;
					break;
			}
		}
	}

	function create_html_series_records() {
		var html = '';
		html += '<div id="series_records_wrapper">';
		html += '<div class="mobile-wrap">';
		html += '<table align="center" cellspacing="1" class="report" id="series_records">';
		html += '<tr><th class="lh_overall_franchise" style="text-align:left;padding:0 0.313rem">Franchise</th>';
		for (var key in franchiseDatabase) {
			if (franchiseDatabase.hasOwnProperty(key) && key !== "fid_0000") {
				html += '<th class="lh_abbrev">' + franchiseDatabase[key].abbrev + '</th>';
			}
		}
		html += '</tr>';
		var rowCount = 0;
		for (var key in franchiseDatabase) {
			if (franchiseDatabase.hasOwnProperty(key) && key !== "fid_0000") {
				var fid = franchiseDatabase[key].id;
				if (lh_franchise_id === fid) var lh_my_franchise = " myfranchise";
				else var lh_my_franchise = '';
				if (rowCount % 2)
					html += '<tr class="eventablerow active_fran' + lh_my_franchise + '">';
				else
					html += '<tr class="oddtablerow active_fran' + lh_my_franchise + '">';
				html += '<td class="fname lh_franchise" style="text-align:left;white-space:nowrap;"><a class="franchise_' + fid + '" href="' + baseURLDynamic + '/' + year + '/options?L=' + league_id + '&F=' + fid + '&O=01">' + getFranchiseName(yearStr, fid, false, true) + '</a></td>';
				for (var key2 in franchiseDatabase) {
					if (franchiseDatabase.hasOwnProperty(key2) && key2 !== "fid_0000") {
						var fid2 = franchiseDatabase[key2].id;
						if (fid === fid2)
							html += '<td id="lh_series_' + fid + '_' + fid2 + '" class="lh_series_td lh_series_same_team" style="text-align:center"><i class="fa-regular fa-rectangle-xmark" aria-hidden="true" style="font-size: 1rem"></i></td>';
						else
							html += '<td id="lh_series_' + fid + '_' + fid2 + '" class="lh_series_td" style="text-align:center;cursor:pointer" onclick="lh_get_series_record(\'' + fid + '\',\'' + fid2 + '\',true)"><a style="text-decoration:underline">' + lh_get_series_record(fid, fid2, false) + '</a></td>';
					}
				}
				html += '</tr>';
				rowCount++;
			}
		}
		//DEFUNCT FRANCHISES
		if (localStorage["lh_defunct_" + league_id] === "1")
			html += '<tr class="lh_defunct_check rowheader" style="display:none"><th class="lh_overall_franchise" style="text-align:left">Defunct Franchises</th>';
		else
			html += '<tr class="lh_defunct_check rowheader"><th class="lh_overall_franchise" style="text-align:left">Defunct Franchises</th>';
		for (var key in franchiseDatabase) {
			if (franchiseDatabase.hasOwnProperty(key) && key !== "fid_0000") {
				html += '<th class="lh_abbrev">' + franchiseDatabase[key].abbrev + '</th>';
			}
		}
		html += '</tr>';
		var rowCount = 0;
		for (var key in leagueHistory.defunct_franchise) {
			if (leagueHistory.defunct_franchise.hasOwnProperty(key)) {
				//key will be defunct franchise name
				if (rowCount % 2)
					if (localStorage["lh_defunct_" + league_id] === "1")
						html += '<tr class="eventablerow lh_defunct_check" style="display:none">';
					else
						html += '<tr class="eventablerow lh_defunct_check">';
				else
				if (localStorage["lh_defunct_" + league_id] === "1")
					html += '<tr class="oddtablerow lh_defunct_check" style="display:none">';
				else
					html += '<tr class="oddtablerow lh_defunct_check">';
				html += '<td class="fname lh_franchise" style="text-align:left;white-space:nowrap;">' + key + '</td>';
				for (var key2 in franchiseDatabase) {
					if (franchiseDatabase.hasOwnProperty(key2) && key2 !== "fid_0000") {
						var fid2 = franchiseDatabase[key2].id;
						html += '<td id="lh_series_' + key + '_' + fid2 + '" class="lh_series_td" style="text-align:center;cursor:pointer" onclick="lh_get_series_record(\'' + key + '\',\'' + fid2 + '\',true)"><a style="text-decoration:underline">' + lh_get_series_record(key, fid2, false) + '</a></td>';
					}
				}
				html += '</tr>';
				rowCount++;
			}
		}

		html += '</table>';
		html += '</div>';
		html += '</div>';
		jQuery("#series_records_content").html(html);
		jQuery('.lh_defunct_check').prev('.active_fran').addClass('fran-last');
		doTableScrollHistory(3, "series_records_wrapper");
	}

	function create_html_team_points_table(_ar, _id, _caption, which) {
		var html = '';

		html += '<div class="mobile-wrap lh-bottom-line">';
		html += '<table align="center" cellspacing="1" class="report" id="' + _id + '">';
		html += '<caption style="display:table-caption"><span>' + _caption + '</span></caption>';
		html += '<tr>';
		html += '<th class="lh_rank" style="width:1.875rem;padding:0 0.188rem">Rank</th><th class="lh_franchise" style="text-align:left;padding:0 0.313rem;">Franchise</th>';
		if (which < 2) html += '<th class="lh_year" style="text-align:center;width:3.125rem">Year</th>';
		if (which < 1) html += '<th class="lh_week" style="text-align:center;width:3.125rem">Week</th>';
		if (which === 1) html += '<th class="lh_season_gp" style="text-align:center;width:3.125rem">GP</th>';
		if (which === 2) html += '<th class="lh_season" style="text-align:center;width:3.75rem">Seasons</th>';
		if (which === 2) html += '<th class="lh_season_avg" style="text-align:center;width:3.125rem">Avg</th>';
		html += '<th class="lh_points" style="text-align:center;width:4.375rem">Points</th>';
		html += '</tr>';

		var _rank = 1;
		//var _isTied = '';
		var _teams_to_rank = lh_teams_to_rank;
		var _rank_adjust = 0;
		var _row = 0;
		for (var i = 0; i < _ar.length; i++) {
			//SHOULD NEVER HAPPEN BUT IN CASE IT DOES AVOID BAD FRANCHISE ID
			if (leagueHistory.league_history_detail[_ar[i].year].franchises[_ar[i].fid.substr(0, 4)] === undefined) {
				_teams_to_rank++;
				_rank_adjust++;
				continue;
			}
			//DOUBLE CHECK TO AVOID ZEROES
			if (localStorage["lh_zero_" + league_id] === "0" && _ar[i].score === 0) {
				_teams_to_rank++;
				_rank_adjust++;
				continue;
			}
			//FOR SINGLE SEASON FRANCHISS COULD HAVE ZERO GAMES PLAYED IN PLAYOFFS WITH SCORE ZERO
			if (which === 1 && _ar[i].gp === 0) {
				_teams_to_rank++;
				_rank_adjust++;
				continue;
			}
			var lh_my_franchise = '';
			if (leagueHistory.reverse_lookup.hasOwnProperty(_ar[i].year + '_' + _ar[i].fid))
				if (leagueHistory.reverse_lookup[_ar[i].year + '_' + _ar[i].fid] === lh_franchise_id) lh_my_franchise = ' myfranchise';
			if (_row % 2)
				html += '<tr class="eventablerow' + lh_my_franchise + '">';
			else
				html += '<tr class="oddtablerow' + lh_my_franchise + '">';

			if ((i - _rank_adjust) === 0) {
				_rank = (i - _rank_adjust) + 1;
			} else {
				if (_ar[i].score === _ar[i - (1 + _rank_adjust)].score)
					_rank = '<i class="fa-regular fa-minus" aria-hidden="true" style="font-size:0.625rem"></i>';
				else
					_rank = (i - _rank_adjust) + 1;
			}

			html += '<td class="lh_rank" style="width:1.875rem;text-align:center;padding:0 0.188rem">' + _rank + '</td>';
			html += '<td class="lh_franchise" style="text-align:left;padding:0 0.313rem">' + getFranchiseName(_ar[i].year, _ar[i].fid.substr(0, 4), false, true) + '</td>';
			if (which < 2) html += '<td class="lh_year" style="text-align:center;width:3.125rem">' + _ar[i].year + '</td>';
			if (which < 1) html += '<td class="lh_week" style="text-align:center;width:3.125rem">' + _ar[i].week + '</td>';
			if (which === 2) {
				var seasons = 0;
				for (var yearkey in leagueHistory.fid_history_detail[_ar[i].fid]) {
					if (leagueHistory.fid_history_detail[_ar[i].fid].hasOwnProperty(yearkey)) {
						if (leagueHistory.fid_history_detail[_ar[i].fid][yearkey].fid !== '-') seasons++;
					}
				}
				html += '<td class="lh_week" style="text-align:center">' + seasons + '</td>';
			}
			if (which === 1) html += '<td class="lh_season_gp" style="text-align:center;width:3.125rem">' + _ar[i].gp + '</td>';
			if (which === 2) html += '<td class="lh_season_avg" style="text-align:center;width:3.125rem">' + (_ar[i].score / seasons).toFixed(lh_precision) + '</td>';
			if (which === 0)
				html += '<td class="lh_points" style="text-align:center;width:4.375rem"><a href="#get_score_details" onclick="getScoreDetails(\'' + _ar[i].year + '\',\'' + _ar[i].week + '\',\'' + _ar[i].fid + '\')">' + _ar[i].score.toFixed(lh_precision) + '</a></td>';
			else if (which === 1)
				html += '<td class="lh_points" style="text-align:center;width:4.375rem"><a href="#get_score_details_season" onclick="lh_get_franchise_schedule(\'' + _ar[i].fid + '\',' + i + ',\'' + _ar[i].year + '\',\'' + _ar[i].score.toFixed(lh_precision) + '\',' + isDefunctFranchise(_ar[i].year, _ar[i].fid) + ')">' + _ar[i].score.toFixed(lh_precision) + '</a></td>';
			else
				html += '<td class="lh_points" style="text-align:center;width:4.375rem"><a href="#get_score_details_all_seasons" onclick="lh_get_franchise_schedule_history(\'' + _ar[i].fid + '\',\'' + _ar[i].score.toFixed(lh_precision) + '\',false)">' + _ar[i].score.toFixed(lh_precision) + '</a></td>';
			html += '</tr>';
			if (i === (_teams_to_rank - 1)) break;
			_row++;
		}
		html += '</table>';
		html += '</div>';
		return html;
	}

	function create_html_team_points() {
		var total_points_week = new Array();
		var total_points_season = new Array();
		var total_points_history = new Array(); //ONLY APPLICABLE FOR ACTIVE FRANCHISES
		var game_tracker = new Array();
		var last_regular_week_tracker = new Array();
		//LOOP THROUGH SERIES RECORDS AND GET ALL SCORES
		//LEAGUE HISTORY SERIES RECORD
		for (var yearkey in leagueHistory["series_record"]) {
			if (leagueHistory["series_record"].hasOwnProperty(yearkey)) {
				for (var fidkey in leagueHistory["series_record"][yearkey]) {
					if (leagueHistory["series_record"][yearkey].hasOwnProperty(fidkey)) {
						for (var i = 0; i < leagueHistory["series_record"][yearkey][fidkey].length; i++) {
							var _week = leagueHistory["series_record"][yearkey][fidkey][i].week;
							var _fidkey = fidkey.substr(0, 4);
							if (fidkey.length > 4)
								var _fid = fidkey.substr(0, 4); //IN CASE OF DEFUNCT FRANCHISE
							else
								var _fid = leagueHistory.fid_history_detail[fidkey][yearkey].fid;
							var _fid_opp = leagueHistory["series_record"][yearkey][fidkey][i].historic_opp;
							var _score = parseInt(parseFloat(leagueHistory["series_record"][yearkey][fidkey][i].score) * lh_precision_multiplier) / lh_precision_multiplier;
							var _score_opp = parseInt(parseFloat(leagueHistory["series_record"][yearkey][fidkey][i].opp_score) * lh_precision_multiplier) / lh_precision_multiplier;
							var _result = leagueHistory["series_record"][yearkey][fidkey][i].result;
							var _regular = parseInt(leagueHistory["series_record"][yearkey][fidkey][i].regular);
							if (_regular === 1) last_regular_week_tracker[yearkey] = _week;

							if (localStorage["lh_multiple_" + league_id] === "1" || !game_tracker.hasOwnProperty(yearkey + '_' + _week + '_' + _fid)) {
								if (localStorage["lh_zero_" + league_id] === "1" || _score !== 0) {
									if (!total_points_season.hasOwnProperty(_fid)) total_points_season[_fid] = new Array();
									if (!total_points_season[_fid].hasOwnProperty(yearkey)) total_points_season[_fid][yearkey] = ({
										regular: 0,
										playoff: 0,
										regular_gp: 0,
										playoff_gp: 0
									});
									if (_regular === 1) {
										total_points_season[_fid][yearkey].regular += _score;
										total_points_season[_fid][yearkey].regular_gp++;
									} else {
										total_points_season[_fid][yearkey].playoff += _score;
										total_points_season[_fid][yearkey].playoff_gp++;
									}

									if (fidkey.length === 4) { //IF DEFUNCT IE >4 THEN DON'T DO FULL HISTORY
										if (!total_points_history.hasOwnProperty(_fidkey)) total_points_history[_fidkey] = ({
											regular: 0,
											playoff: 0,
											regular_gp: 0,
											playoff_gp: 0
										});
										if (_regular === 1) {
											total_points_history[_fidkey].regular += _score;
											total_points_history[_fidkey].regular_gp++;
										} else {
											total_points_history[_fidkey].playoff += _score;
											total_points_history[_fidkey].playoff_gp++;
										}
									}

									total_points_week.push({
										year: yearkey,
										week: _week,
										fidkey: _fidkey,
										fid: _fid,
										fid_opp: _fid_opp,
										score: _score,
										score_opp: _score_opp,
										result: _result,
										regular: _regular
									});
									game_tracker[yearkey + '_' + _week + '_' + _fid] = 1;
								}
							}
						}
					}
				}
			}
		}
		//CURRENT HISTORY SERIES RECORD
		var _year = "" + year;
		for (var fidkey in leagueHistory["series_record"][_year]) {
			if (leagueHistory["series_record"][_year].hasOwnProperty(fidkey)) {
				for (var i = 0; i < leagueHistory["series_record"][_year][fidkey].length; i++) {
					var _week = leagueHistory["series_record"][_year][fidkey][i].week;
					var _fid = fidkey;
					var _fidkey = fidkey;
					var _fid_opp = leagueHistory["series_record"][_year][fidkey][i].opp;
					var _score = parseInt(parseFloat(leagueHistory["series_record"][_year][fidkey][i].score) * lh_precision_multiplier) / lh_precision_multiplier;
					var _score_opp = parseInt(parseFloat(leagueHistory["series_record"][_year][fidkey][i].opp_score) * lh_precision_multiplier) / lh_precision_multiplier;
					var _result = leagueHistory["series_record"][_year][fidkey][i].result;
					var _regular = parseInt(leagueHistory["series_record"][_year][fidkey][i].regular);
					if (_regular === 1) last_regular_week_tracker[_year] = _week;

					if (localStorage["lh_multiple_" + league_id] === "1" || !game_tracker.hasOwnProperty(_year + '_' + _week + '_' + _fid)) {
						if (localStorage["lh_zero_" + league_id] === "1" || _score !== 0) {
							if (!total_points_season.hasOwnProperty(_fid)) total_points_season[_fid] = new Array();
							if (!total_points_season[_fid].hasOwnProperty(_year)) total_points_season[_fid][_year] = ({
								regular: 0,
								playoff: 0,
								regular_gp: 0,
								playoff_gp: 0
							})
							if (_regular === 1) {
								total_points_season[_fid][_year].regular += _score;
								total_points_season[_fid][_year].regular_gp++;
							} else {
								total_points_season[_fid][_year].playoff += _score;
								total_points_season[_fid][_year].playoff_gp++;
							}

							// NO DEFUNCT FOR CURRENT HISTORY
							if (!total_points_history.hasOwnProperty(_fidkey)) total_points_history[_fidkey] = ({
								regular: 0,
								playoff: 0,
								regular_gp: 0,
								playoff_gp: 0
							});
							if (_regular === 1) {
								total_points_history[_fidkey].regular += _score;
								total_points_history[_fidkey].regular_gp++;
							} else {
								total_points_history[_fidkey].playoff += _score;
								total_points_history[_fidkey].playoff_gp++;
							}

							total_points_week.push({
								year: _year,
								week: _week,
								fidkey: _fidkey,
								fid: _fid,
								fid_opp: _fid_opp,
								score: _score,
								score_opp: _score_opp,
								result: _result,
								regular: _regular
							});
							game_tracker[_year + '_' + _week + '_' + _fid] = 1;
						}
					}
				}
			}
		}
		if (localStorage["lh_bye_" + league_id] === "1") {
			//LEAGUE HISTORY BYE GAMES
			for (var yearkey in leagueHistory['weekly_score']) {
				if (leagueHistory['weekly_score'].hasOwnProperty(yearkey)) {
					if (last_regular_week_tracker.hasOwnProperty(yearkey))
						var last_regular_week = parseInt(last_regular_week_tracker[yearkey]);
					else
						var last_regular_week = parseInt(leagueHistory['league_history_detail'][yearkey].last_week);
					for (var fidkey in leagueHistory['weekly_score'][yearkey]) {
						if (leagueHistory['weekly_score'][yearkey].hasOwnProperty(fidkey)) {
							for (var weekkey in leagueHistory['weekly_score'][yearkey][fidkey]) {
								if (leagueHistory['weekly_score'][yearkey][fidkey].hasOwnProperty(weekkey)) {
									var _fidkey = fidkey.substr(0, 4);
									if (fidkey.length > 4)
										var _fid = fidkey.substr(0, 4); //IN CASE OF DEFUNCT FRANCHISE
									else
										var _fid = leagueHistory.fid_history_detail[fidkey][yearkey].fid;
									var _score = parseInt(parseFloat(leagueHistory['weekly_score'][yearkey][fidkey][weekkey]) * lh_precision_multiplier) / lh_precision_multiplier;
									if (!game_tracker.hasOwnProperty(yearkey + '_' + weekkey + '_' + _fid)) {
										if (localStorage["lh_zero_" + league_id] === "1" || _score !== 0) {
											if (!total_points_season.hasOwnProperty(_fid)) total_points_season[_fid] = new Array();
											if (!total_points_season[_fid].hasOwnProperty(yearkey)) total_points_season[_fid][yearkey] = ({
												regular: 0,
												playoff: 0,
												regular_gp: 0,
												playoff_gp: 0
											});
											if (parseInt(weekkey) <= last_regular_week) {
												total_points_season[_fid][yearkey].regular += _score;
												total_points_season[_fid][yearkey].regular_gp++;
											} else {
												total_points_season[_fid][yearkey].playoff += _score;
												total_points_season[_fid][yearkey].playoff_gp++;
											}

											if (fidkey.length === 4) { //IF DEFUNCT IE >4 THEN DON'T DO FULL HISTORY
												if (!total_points_history.hasOwnProperty(_fidkey)) total_points_history[_fidkey] = ({
													regular: 0,
													playoff: 0,
													regular_gp: 0,
													playoff_gp: 0
												});
												if (parseInt(weekkey) <= last_regular_week) {
													total_points_history[_fidkey].regular += _score;
													total_points_history[_fidkey].regular_gp++;
												} else {
													total_points_history[_fidkey].playoff += _score;
													total_points_history[_fidkey].playoff_gp++;
												}
											}

											if (parseInt(weekkey) <= last_regular_week)
												total_points_week.push({
													year: yearkey,
													week: weekkey,
													fidkey: _fidkey,
													fid: _fid,
													fid_opp: 'BYE',
													score: _score,
													regular: '1'
												});
											else
												total_points_week.push({
													year: yearkey,
													week: weekkey,
													fidkey: _fidkey,
													fid: _fid,
													fid_opp: 'BYE',
													score: _score,
													regular: '0'
												});
										}
									}
								}
							}
						}
					}
				}
			}
			//CURRENT HISTORY BYE GAMES
			var _year = "" + year;
			if (last_regular_week_tracker.hasOwnProperty(_year))
				var last_regular_week = parseInt(last_regular_week_tracker[_year]);
			else
				var last_regular_week = parseInt(leagueHistory['league_history_detail'][_year].last_week);
			for (var fidkey in leagueHistory['weekly_score'][_year]) {
				if (leagueHistory['weekly_score'][_year].hasOwnProperty(fidkey)) {
					for (var weekkey in leagueHistory['weekly_score'][_year][fidkey]) {
						if (leagueHistory['weekly_score'][_year][fidkey].hasOwnProperty(weekkey)) {
							var _fidkey = fidkey.substr(0, 4);
							var _fid = fidkey.substr(0, 4); //IN CASE OF DEFUNCT FRANCHISE
							var _score = parseInt(parseFloat(leagueHistory['weekly_score'][_year][fidkey][weekkey]) * lh_precision_multiplier) / lh_precision_multiplier;
							if (!game_tracker.hasOwnProperty(_year + '_' + weekkey + '_' + _fid)) {
								if (localStorage["lh_zero_" + league_id] === "1" || _score !== 0) {
									if (!total_points_season.hasOwnProperty(_fid)) total_points_season[_fid] = new Array();
									if (!total_points_season[_fid].hasOwnProperty(_year)) total_points_season[_fid][_year] = ({
										regular: 0,
										playoff: 0,
										regular_gp: 0,
										playoff_gp: 0
									});
									if (parseInt(weekkey) <= last_regular_week) {
										total_points_season[_fid][_year].regular += _score;
										total_points_season[_fid][_year].regular_gp++;
									} else {
										total_points_season[_fid][_year].playoff += _score;
										total_points_season[_fid][_year].playoff_gp++;
									}

									// NO DEFUNCT FOR CURRENT HISTORY
									if (!total_points_history.hasOwnProperty(_fidkey)) total_points_history[_fidkey] = ({
										regular: 0,
										playoff: 0,
										regular_gp: 0,
										playoff_gp: 0
									});
									if (parseInt(weekkey) <= last_regular_week) {
										total_points_history[_fidkey].regular += _score;
										total_points_history[_fidkey].regular_gp++;
									} else {
										total_points_history[_fidkey].playoff += _score;
										total_points_history[_fidkey].playoff_gp++;
									}

									if (parseInt(weekkey) <= last_regular_week)
										total_points_week.push({
											year: _year,
											week: weekkey,
											fidkey: _fidkey,
											fid: _fid,
											fid_opp: 'BYE',
											score: _score,
											regular: '1'
										});
									else
										total_points_week.push({
											year: _year,
											week: weekkey,
											fidkey: _fidkey,
											fid: _fid,
											fid_opp: 'BYE',
											score: _score,
											regular: '0'
										});
								}
							}
						}
					}
				}
			}
		}

		var html = '';
		html += '<div id="team_points_wrapper">';
		html += '<div id="myfantasyleague_tabs" class="hs_tabs_wrap">';
		html += '<div class="toggle_tabs">';
		html += '<table class="report">';
		html += '<tbody>';
		html += '<tr>';
		html += '<td>';
		html += '<div class="myfantasyleague_tabmenu">';
		html += '<span id="tab_title_11200">11200</span>';
		html += '<input id="sub11200" type="checkbox">';
		html += '<label for="sub11200"><span></span></label>';
		html += '<ul id="homepagetabs">';
		html += '<li id="tab11200" onclick="javascript:show_custom_tab_history(\'11200\');"><a class="no-sub">All Seasons<input id="sub11200" type="checkbox"><label for="sub11200"></label></a></li>';
		html += '<li id="tab11201" onclick="javascript:show_custom_tab_history(\'11201\');"><a class="no-sub">Single Season<input id="sub11200" type="checkbox"><label for="sub11200"></label></a></li>';
		html += '<li id="tab11202" onclick="javascript:show_custom_tab_history(\'11202\');"><a class="no-sub">Single Week<input id="sub11200" type="checkbox"><label for="sub11200"></label></a></li>';
		html += '</ul>';
		html += '</div>';
		html += '</td>';
		html += '</tr>';
		html += '</tbody>';
		html += '</table>';

		html += '<div class="tabs_scroll" style="position:relative">';
		html += '<div id="tabcontent11200" class="homepagetabcontent">';
		html += '<table style="width:100%;border:0;box-shadow:none;margin:0;padding:0">';
		html += '<tbody>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//CAREER HIGH ALL
		var temp_ar = new Array();
		for (var fidkey in total_points_history)
			if (total_points_history.hasOwnProperty(fidkey)) temp_ar.push({
				fid: fidkey,
				year: "" + year,
				score: (total_points_history[fidkey].regular + total_points_history[fidkey].playoff)
			});
		temp_ar.sort(function (a, b) {
			return b.score - a.score
		});
		html += create_html_team_points_table(temp_ar, 'history_points_most_all', 'Most Points Scored - All Seasons', 2);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//CAREER LOW ALL
		temp_ar.sort(function (a, b) {
			return a.score - b.score
		});
		html += create_html_team_points_table(temp_ar, 'history_points_fewest_all', 'Fewest Points Scored - All Season', 2);

		html += '</td>';
		html += '</tr>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//CAREER HIGH ALL REGULAR SEASON
		var temp_ar = new Array();
		for (var fidkey in total_points_history)
			if (total_points_history.hasOwnProperty(fidkey)) temp_ar.push({
				fid: fidkey,
				year: "" + year,
				score: total_points_history[fidkey].regular
			});
		temp_ar.sort(function (a, b) {
			return b.score - a.score
		});
		html += create_html_team_points_table(temp_ar, 'history_points_most_all_regular', 'Most Pts All Seasons - Regular Season', 2);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//CAREER LOW ALL REGULAR
		temp_ar.sort(function (a, b) {
			return a.score - b.score
		});
		html += create_html_team_points_table(temp_ar, 'history_points_fewest_all_regular', 'Fewest Pts All Seasons - Regular Season', 2);

		html += '</td>';
		html += '</tr>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//CAREER HIGH ALL PLAYOFF
		var temp_ar = new Array();
		for (var fidkey in total_points_history)
			if (total_points_history.hasOwnProperty(fidkey)) temp_ar.push({
				fid: fidkey,
				year: "" + year,
				score: total_points_history[fidkey].playoff
			});
		temp_ar.sort(function (a, b) {
			return b.score - a.score
		});
		html += create_html_team_points_table(temp_ar, 'history_points_most_all_playoff', 'Most Pts All Seasons - Playoff', 2);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//CAREER LOW PLAYOFF
		temp_ar.sort(function (a, b) {
			return a.score - b.score
		});
		html += create_html_team_points_table(temp_ar, 'history_points_fewest_all_playoff', 'Fewest Pts All Seasons - Playoff', 2);

		html += '</td>';
		html += '</tr>';
		html += '</tbody>';
		html += '</table>';
		html += '</div>';
		html += '<div id="tabcontent11201" class="homepagetabcontent">';
		html += '<table style="width:100%;border:0;box-shadow:none;margin:0;padding:0">';
		html += '<tbody>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//SEASON HIGH ALL
		var temp_ar = new Array();
		for (var fidkey in total_points_season)
			if (total_points_season.hasOwnProperty(fidkey))
				for (var yearkey in total_points_season[fidkey])
					if (total_points_season[fidkey].hasOwnProperty(yearkey)) temp_ar.push({
						fid: fidkey,
						year: yearkey,
						score: (total_points_season[fidkey][yearkey].regular + total_points_season[fidkey][yearkey].playoff),
						gp: (total_points_season[fidkey][yearkey].regular_gp + total_points_season[fidkey][yearkey].playoff_gp)
					});
		temp_ar.sort(function (a, b) {
			return b.score - a.score
		});
		html += create_html_team_points_table(temp_ar, 'season_points_most_all', 'Most Points Scored - Season', 1);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//SEASON LOW ALL
		temp_ar.sort(function (a, b) {
			return a.score - b.score
		});
		html += create_html_team_points_table(temp_ar, 'season_points_fewest_all', 'Fewest Points Scored - Season', 1);

		html += '</td>';
		html += '</tr>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//SEASON HIGH REGULAR SEASON
		var temp_ar = new Array();
		for (var fidkey in total_points_season)
			if (total_points_season.hasOwnProperty(fidkey))
				for (var yearkey in total_points_season[fidkey])
					if (total_points_season[fidkey].hasOwnProperty(yearkey)) temp_ar.push({
						fid: fidkey,
						year: yearkey,
						score: total_points_season[fidkey][yearkey].regular,
						gp: total_points_season[fidkey][yearkey].regular_gp
					});
		temp_ar.sort(function (a, b) {
			return b.score - a.score
		});
		html += create_html_team_points_table(temp_ar, 'season_points_most_regular', 'Most Pts Season - Regular Season', 1);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//SEASON LOW REGULAR SEASON
		temp_ar.sort(function (a, b) {
			return a.score - b.score
		});
		html += create_html_team_points_table(temp_ar, 'season_points_fewest_regular', 'Fewest Pts Season - Regular Season', 1);

		html += '</td>';
		html += '</tr>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//SEASON HIGH PLAYOFF
		var temp_ar = new Array();
		for (var fidkey in total_points_season)
			if (total_points_season.hasOwnProperty(fidkey))
				for (var yearkey in total_points_season[fidkey])
					if (total_points_season[fidkey].hasOwnProperty(yearkey)) temp_ar.push({
						fid: fidkey,
						year: yearkey,
						score: total_points_season[fidkey][yearkey].playoff,
						gp: total_points_season[fidkey][yearkey].playoff_gp
					});
		temp_ar.sort(function (a, b) {
			return b.score - a.score
		});
		html += create_html_team_points_table(temp_ar, 'season_points_most_playoff', 'Most Pts Season - Playoff', 1);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//SEASON LOW PLAYOFF
		temp_ar.sort(function (a, b) {
			return a.score - b.score
		});
		html += create_html_team_points_table(temp_ar, 'season_points_fewest_playoff', 'Fewest Pts Season - Playoff', 1);

		html += '</td>';
		html += '</tr>';
		html += '</tbody>';
		html += '</table>';
		html += '</div>';
		html += '<div id="tabcontent11202" class="homepagetabcontent">';
		html += '<table style="width:100%;border:0;box-shadow:none;margin:0;padding:0">';
		html += '<tbody>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//WEEKLY HIGH ALL
		total_points_week.sort(function (a, b) {
			return b.score - a.score
		});
		html += create_html_team_points_table(total_points_week, 'week_points_most_all', 'Most Pts Week - Any Week', 0);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//WEEKLY LOW ALL
		total_points_week.sort(function (a, b) {
			return a.score - b.score
		});
		html += create_html_team_points_table(total_points_week, 'week_points_fewest_all', 'Fewest Pts Week - Any Week', 0);

		html += '</td>';
		html += '</tr>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//WEEKLY HIGH REGULAR
		total_points_week.sort(function (a, b) {
			if (a.regular > b.regular) return -1;
			else if (a.regular < b.regular) return 1;
			else return b.score - a.score;
		});
		html += create_html_team_points_table(total_points_week, 'week_points_most_regular', 'Most Pts Week - Regular Season', 0);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//WEEKLY LOW REGULAR
		total_points_week.sort(function (a, b) {
			if (a.regular > b.regular) return -1;
			else if (a.regular < b.regular) return 1;
			else return a.score - b.score;
		});
		html += create_html_team_points_table(total_points_week, 'week_points_fewest_all', 'Fewest Pts Week - Regular Season', 0);

		html += '</td>';
		html += '</tr>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//WEEKLY HIGH PLAYOFF
		total_points_week.sort(function (a, b) {
			if (b.regular > a.regular) return -1;
			else if (b.regular < a.regular) return 1;
			else return b.score - a.score;
		});
		html += create_html_team_points_table(total_points_week, 'week_points_most_regular', 'Most Pts Week - Playoffs', 0);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//WEEKLY LOW PLAYOFF
		total_points_week.sort(function (a, b) {
			if (b.regular > a.regular) return -1;
			else if (b.regular < a.regular) return 1;
			else return a.score - b.score;
		});
		html += create_html_team_points_table(total_points_week, 'week_points_fewest_all', 'Fewest Pts Week - Playoffs', 0);

		html += '</td>';
		html += '</tr>';
		html += '</tbody>';
		html += '</table>';
		html += '</div>';
		html += '</div>';
		html += '</div>';
		html += '</div>';
		html += '</div>';
		var selected_tab = 11200;
		if (jQuery("#tab11201").hasClass('currenttab')) selected_tab = 11201;
		if (jQuery("#tab11202").hasClass('currenttab')) selected_tab = 11202;
		jQuery("#team_points_content").html(html);
		show_custom_tab_history(selected_tab);
	}

	function create_html_misc_table(_ar, _id, _caption, which) {
		var html = '';

		html += '<div class="mobile-wrap lh-bottom-line">';
		html += '<table align="center" cellspacing="1" class="report" id="' + _id + '">';
		html += '<caption style="display:table-caption"><span>' + _caption + '</span></caption>';
		html += '<tr>';
		html += '<th class="lh_rank" style="width:1.875rem;padding:0 0.188rem">Rank</th>';
		if (which < 2) html += '<th class="lh_franchise" style="text-align:left;padding:0 0.313rem;">Franchise Away/Home</th>';
		if (which === 2) html += '<th class="lh_franchise" style="text-align:left;padding:0 0.313rem;">Franchise</th>';
		if (which < 2) html += '<th class="lh_points" style="text-align:center;width:4.375rem">Pts</th>';
		html += '<th class="lh_year" style="text-align:center;width:3.125rem">Year</th>';
		if (which < 2) html += '<th class="lh_week" style="text-align:center;width:3.125rem">Week</th>';
		if (which === 2) html += '<th class="lh_week" style="text-align:center;width:3.125rem">Start Week</th>';
		if (which === 2) html += '<th class="lh_week" style="text-align:center;width:3.125rem">End Week</th>';
		if (which === 0) html += '<th class="lh_points" style="text-align:center;width:4.375rem">Combined</th>';
		if (which === 1) html += '<th class="lh_points" style="text-align:center;width:4.375rem">Difference</th>';
		if (which === 2) html += '<th class="lh_points" style="text-align:center;width:4.375rem">Streak</th>';
		html += '</tr>';

		var _rank = 1;
		//var _isTied = '';
		var _teams_to_rank = lh_misc_to_rank;
		var _rank_adjust = 0;
		var _row = 0;
		for (var i = 0; i < _ar.length; i++) {
			//SHOULD NEVER HAPPEN BUT IN CASE IT DOES AVOID BAD FRANCHISE ID

			if (which === 2) {
				if (leagueHistory.league_history_detail[_ar[i].year].franchises[_ar[i].fid.substr(0, 4)] === undefined) {
					_teams_to_rank++;
					_rank_adjust++;
					continue;
				}
			} else {
				if (leagueHistory.league_history_detail[_ar[i].year].franchises[_ar[i].home.substr(0, 4)] === undefined || leagueHistory.league_history_detail[_ar[i].year].franchises[_ar[i].away.substr(0, 4)] === undefined) {
					_teams_to_rank++;
					_rank_adjust++;
					continue;
				}
			}
			var lh_my_franchise = '';
			if (which === 2) {
				if (leagueHistory.reverse_lookup.hasOwnProperty(_ar[i].year + '_' + _ar[i].fid))
					if (leagueHistory.reverse_lookup[_ar[i].year + '_' + _ar[i].fid] === lh_franchise_id) lh_my_franchise = ' myfranchise';
			} else {
				if (leagueHistory.reverse_lookup.hasOwnProperty(_ar[i].year + '_' + _ar[i].away))
					if (leagueHistory.reverse_lookup[_ar[i].year + '_' + _ar[i].away] === lh_franchise_id) lh_my_franchise = ' myfranchise';
				if (leagueHistory.reverse_lookup.hasOwnProperty(_ar[i].year + '_' + _ar[i].home))
					if (leagueHistory.reverse_lookup[_ar[i].year + '_' + _ar[i].home] === lh_franchise_id) lh_my_franchise = ' myfranchise';
			}
			if (_row % 2)
				html += '<tr class="eventablerow' + lh_my_franchise + '">';
			else
				html += '<tr class="oddtablerow' + lh_my_franchise + '">';

			if ((i - _rank_adjust) === 0) {
				_rank = (i - _rank_adjust) + 1;
			} else {
				if ((which === 0 && _ar[i].total === _ar[i - 1].total) || (which === 1 && _ar[i].spread === _ar[i - 1].spread) || (which === 2 && _ar[i].streak === _ar[i - 1].streak))
					_rank = '<i class="fa-regular fa-minus" aria-hidden="true" style="font-size:0.625rem"></i>';
				else
					_rank = (i - _rank_adjust) + 1;
			}
			if (which === 2) {
				html += '<td class="lh_rank" style="width:1.875rem;text-align:center;padding:0 0.188rem">' + _rank + '</td>';
				html += '<td class="lh_franchise" style="text-align:left;padding:0 0.313rem">' + getFranchiseName(_ar[i].year, _ar[i].fid.substr(0, 4), false, true) + '</td>';
				html += '<td class="lh_year" style="text-align:center;width:3.125rem">' + _ar[i].year + '</td>';
				html += '<td class="lh_week" style="text-align:center;width:3.125rem">' + _ar[i].start_week + '</td>';
				html += '<td class="lh_week" style="text-align:center;width:3.125rem">' + _ar[i].end_week + '</td>';
				html += '<td class="lh_points" style="text-align:center;width:4.375rem">' + _ar[i].streak + '</td>';
			} else {
				html += '<td class="lh_rank" rowspan="2" style="width:1.875rem;text-align:center;padding:0 0.188rem">' + _rank + '</td>';
				html += '<td class="lh_franchise" style="text-align:left;padding:0 0.313rem">' + getFranchiseName(_ar[i].year, _ar[i].away.substr(0, 4), false, true) + '</td>';
				html += '<td class="lh_points" style="text-align:center;width:4.375rem"><a href="#get_score_details" onclick="getScoreDetails(\'' + _ar[i].year + '\',\'' + _ar[i].week + '\',\'' + _ar[i].away + '\')">' + _ar[i].away_score.toFixed(lh_precision) + '</a></td>';
				html += '<td class="lh_year" rowspan="2" style="text-align:center;width:3.125rem">' + _ar[i].year + '</td>';
				html += '<td class="lh_week" rowspan="2" style="text-align:center;width:3.125rem">' + _ar[i].week + '</td>';
				if (which === 0) html += '<td class="lh_points" rowspan="2" style="text-align:center;width:4.375rem">' + _ar[i].total.toFixed(lh_precision) + '</td>';
				if (which === 1) html += '<td class="lh_points" rowspan="2" style="text-align:center;width:4.375rem">' + _ar[i].spread.toFixed(lh_precision) + '</td>';
				html += '</tr>';
				if (_row % 2)
					html += '<tr class="eventablerow' + lh_my_franchise + '">';
				else
					html += '<tr class="oddtablerow' + lh_my_franchise + '">';
				html += '<td class="lh_franchise" style="text-align:left;padding:0 0.313rem">' + getFranchiseName(_ar[i].year, _ar[i].home.substr(0, 4), false, true) + '</td>';
				html += '<td class="lh_points" style="text-align:center;width:4.375rem"><a href="#get_score_details" onclick="getScoreDetails(\'' + _ar[i].year + '\',\'' + _ar[i].week + '\',\'' + _ar[i].home + '\')">' + _ar[i].home_score.toFixed(lh_precision) + '</a></td>';
			}
			html += '</tr>';


			if (i === (_teams_to_rank - 1)) break;
			_row++;
		}
		html += '</table>';
		html += '</div>';
		return html;
	}

	function create_html_misc() {
		var win_streak = new Array();
		var lose_streak = new Array();
		var season_streak = new Array();
		var is_end_regular_applied = false;
		var current_streak = '';
		var combined = ({
			season: new Array(),
			regular: new Array(),
			playoff: new Array()
		});
		var game_tracker = new Array();
		var last_regular_week_tracker = new Array();
		//LOOP THROUGH SERIES RECORDS AND GET ALL SCORES
		//LEAGUE HISTORY SERIES RECORD
		for (var yearkey in leagueHistory["series_record"]) {
			if (leagueHistory["series_record"].hasOwnProperty(yearkey)) {
				season_streak = [];
				for (var fidkey in leagueHistory["series_record"][yearkey]) {
					if (leagueHistory["series_record"][yearkey].hasOwnProperty(fidkey)) {
						is_end_regular_applied = false;
						current_streak = '';
						for (var i = 0; i < leagueHistory["series_record"][yearkey][fidkey].length; i++) {
							var _week = leagueHistory["series_record"][yearkey][fidkey][i].week;
							var _fidkey = fidkey.substr(0, 4);
							if (fidkey.length > 4)
								var _fid = fidkey.substr(0, 4); //IN CASE OF DEFUNCT FRANCHISE
							else
								var _fid = leagueHistory.fid_history_detail[fidkey][yearkey].fid;
							var _fid_opp = leagueHistory["series_record"][yearkey][fidkey][i].historic_opp;
							var _result = leagueHistory["series_record"][yearkey][fidkey][i].result;
							var _regular = parseInt(leagueHistory["series_record"][yearkey][fidkey][i].regular);
							if (_regular === 1) last_regular_week_tracker[yearkey] = _week;
							//STREAKS
							if (season_streak[_fid] === undefined) season_streak[_fid] = ({
								winning: 0,
								losing: 0,
								start_week: _week,
								end_week: _week
							});
							if (_regular === 1) {
								//UPDATE STREAK
								if (_result === "T") {
									win_streak.push({
										streak: season_streak[_fid].winning,
										fid: _fid,
										year: yearkey,
										start_week: season_streak[_fid].start_week,
										end_week: season_streak[_fid].end_week
									});
									lose_streak.push({
										streak: season_streak[_fid].losing,
										fid: _fid,
										year: yearkey,
										start_week: season_streak[_fid].start_week,
										end_week: season_streak[_fid].end_week
									});
									season_streak[_fid].winning = 0;
									season_streak[_fid].losing = 0;
									season_streak[_fid].start_week = _week;
									season_streak[_fid].end_week = _week;
									current_streak = "T";
								}
								if (_result === "W") {
									season_streak[_fid].winning++;
									lose_streak.push({
										streak: season_streak[_fid].losing,
										fid: _fid,
										year: yearkey,
										start_week: season_streak[_fid].start_week,
										end_week: season_streak[_fid].end_week
									});
									season_streak[_fid].losing = 0;
									if (season_streak[_fid].winning > 1) {
										season_streak[_fid].end_week = _week;
									} else {
										season_streak[_fid].start_week = _week;
										season_streak[_fid].end_week = _week;
									}
									current_streak = "W";
								}
								if (_result === "L") {
									season_streak[_fid].losing++;
									win_streak.push({
										streak: season_streak[_fid].winning,
										fid: _fid,
										year: yearkey,
										start_week: season_streak[_fid].start_week,
										end_week: season_streak[_fid].end_week
									});
									season_streak[_fid].winning = 0;
									if (season_streak[_fid].losing > 1) {
										season_streak[_fid].end_week = _week;
									} else {
										season_streak[_fid].start_week = _week;
										season_streak[_fid].end_week = _week;
									}
									current_streak = "L";
								}
							} else {
								//END OF SEASON STREAK
								if (!is_end_regular_applied) {
									if (current_streak === 'W') win_streak.push({
										streak: season_streak[_fid].winning,
										fid: _fid,
										year: yearkey,
										start_week: season_streak[_fid].start_week,
										end_week: season_streak[_fid].end_week
									});
									if (current_streak === 'L') lose_streak.push({
										streak: season_streak[_fid].losing,
										fid: _fid,
										year: yearkey,
										start_week: season_streak[_fid].start_week,
										end_week: season_streak[_fid].end_week
									});
									season_streak[_fid].winning = 0;
									season_streak[_fid].losing = 0;
								}
								is_end_regular_applied = true;
							}

							//COMBINED AND DIFFERENCE SCORING
							if (game_tracker[yearkey + "_" + _week + "_" + _fid + "_" + _fid_opp] === undefined) {
								var _score = parseInt(parseFloat(leagueHistory["series_record"][yearkey][fidkey][i].score) * lh_precision_multiplier) / lh_precision_multiplier;
								var _score_opp = parseInt(parseFloat(leagueHistory["series_record"][yearkey][fidkey][i].opp_score) * lh_precision_multiplier) / lh_precision_multiplier;
								var _is_home = parseInt(leagueHistory["series_record"][yearkey][fidkey][i].is_home);

								if (_is_home === 1)
									combined.season.push({
										total: (_score + _score_opp),
										spread: Math.abs(_score - _score_opp),
										year: yearkey,
										week: _week,
										home: _fid,
										away: _fid_opp,
										home_score: _score,
										away_score: _score_opp
									});
								else
									combined.season.push({
										total: (_score + _score_opp),
										spread: Math.abs(_score - _score_opp),
										year: yearkey,
										week: _week,
										home: _fid_opp,
										away: _fid,
										home_score: _score_opp,
										away_score: _score
									});
								if (_regular === 1)
									if (_is_home === 1)
										combined.regular.push({
											total: (_score + _score_opp),
											spread: Math.abs(_score - _score_opp),
											year: yearkey,
											week: _week,
											home: _fid,
											away: _fid_opp,
											home_score: _score,
											away_score: _score_opp
										});
									else
										combined.regular.push({
											total: (_score + _score_opp),
											spread: Math.abs(_score - _score_opp),
											year: yearkey,
											week: _week,
											home: _fid_opp,
											away: _fid,
											home_score: _score_opp,
											away_score: _score
										});
								else
								if (_is_home === 1)
									combined.playoff.push({
										total: (_score + _score_opp),
										spread: Math.abs(_score - _score_opp),
										year: yearkey,
										week: _week,
										home: _fid,
										away: _fid_opp,
										home_score: _score,
										away_score: _score_opp
									});
								else
									combined.playoff.push({
										total: (_score + _score_opp),
										spread: Math.abs(_score - _score_opp),
										year: yearkey,
										week: _week,
										home: _fid_opp,
										away: _fid,
										home_score: _score_opp,
										away_score: _score
									});


								game_tracker[yearkey + "_" + _week + "_" + _fid + "_" + _fid_opp] = 1;
								game_tracker[yearkey + "_" + _week + "_" + _fid_opp + "_" + _fid] = 1;
							}
						}
					}
				}
			}
		}

		var html = '';

		html += '<div id="misc_wrapper">';

		html += '<div id="myfantasyleague_tabs" class="hs_tabs_wrap">';
		html += '<div class="toggle_tabs">';
		html += '<table class="report">';
		html += '<tbody>';
		html += '<tr>';
		html += '<td>';
		html += '<div class="myfantasyleague_tabmenu">';
		html += '<span id="tab_title_11300">11300</span>';
		html += '<input id="sub11300" type="checkbox">';
		html += '<label for="sub11300"><span></span></label>';
		html += '<ul id="homepagetabs">';
		html += '<li id="tab11300" onclick="javascript:show_custom_tab_history(\'11300\');"><a class="no-sub">Combined Points<input id="sub11300" type="checkbox"><label for="sub11300"></label></a></li>';
		html += '<li id="tab11301" onclick="javascript:show_custom_tab_history(\'11301\');"><a class="no-sub">Point Difference<input id="sub11300" type="checkbox"><label for="sub11300"></label></a></li>';
		html += '<li id="tab11302" onclick="javascript:show_custom_tab_history(\'11302\');"><a class="no-sub">Streaks<input id="sub11300" type="checkbox"><label for="sub11300"></label></a></li>';
		html += '</ul>';
		html += '</div>';
		html += '</td>';
		html += '</tr>';
		html += '</tbody>';
		html += '</table>';

		html += '<div class="tabs_scroll" style="position:relative">';
		html += '<div id="tabcontent11300" class="homepagetabcontent">';

		html += '<table style="width:100%;border:0;box-shadow:none;margin:0;padding:0">';
		html += '<tbody>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//COMBINED HIGHEST SEASON
		combined.season.sort(function (a, b) {
			return b.total - a.total
		});
		html += create_html_misc_table(combined.season, 'combined_most_all', 'Most Combined', 0);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//COMBINED LOWEST SEASON
		combined.season.sort(function (a, b) {
			return a.total - b.total
		});
		html += create_html_misc_table(combined.season, 'combined_fewest_all', 'Fewest Combined', 0);

		html += '</td>';
		html += '</tr>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//COMBINED HIGHEST REGULAR
		combined.regular.sort(function (a, b) {
			return b.total - a.total
		});
		html += create_html_misc_table(combined.regular, 'combined_most_regular', 'Most Combined - Regular Season', 0);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//COMBINED LOWEST REGULAR
		combined.regular.sort(function (a, b) {
			return a.total - b.total
		});
		html += create_html_misc_table(combined.regular, 'combined_fewest_regular', 'Fewest Combined - Regular Season', 0);

		html += '</td>';
		html += '</tr>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//COMBINED HIGHEST PLAYOFF
		combined.playoff.sort(function (a, b) {
			return b.total - a.total
		});
		html += create_html_misc_table(combined.playoff, 'combined_most_playoff', 'Most Combined - Playoff', 0);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//COMBINED LOWEST PLAYOFF
		combined.playoff.sort(function (a, b) {
			return a.total - b.total
		});
		html += create_html_misc_table(combined.playoff, 'combined_fewest_playoff', 'Fewest Combined - Playoff', 0);

		html += '</td>';
		html += '</tr>';
		html += '</tbody>';
		html += '</table>';

		html += '</div>';
		html += '<div id="tabcontent11301" class="homepagetabcontent">';
		html += '<table style="width:100%;border:0;box-shadow:none;margin:0;padding:0">';
		html += '<tbody>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//DIFFERENCE HIGHEST SEASON
		combined.season.sort(function (a, b) {
			return b.spread - a.spread
		});
		html += create_html_misc_table(combined.season, 'difference_largest_all', 'Largest Difference', 1);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//DIFFERENCE LOWEST SEASON
		combined.season.sort(function (a, b) {
			return a.spread - b.spread
		});
		html += create_html_misc_table(combined.season, 'difference_smallest_all', 'Smallest Difference', 1);

		html += '</td>';
		html += '</tr>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//DIFFERENCE HIGHEST REGULAR
		combined.regular.sort(function (a, b) {
			return b.spread - a.spread
		});
		html += create_html_misc_table(combined.regular, 'difference_largest_regular', 'Largest Difference - Regular Season', 1);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//DIFFERENCE LOWEST REGULAR
		combined.regular.sort(function (a, b) {
			return a.spread - b.spread
		});
		html += create_html_misc_table(combined.regular, 'difference_smallest_regular', 'Smallest Difference - Regular Season', 1);

		html += '</td>';
		html += '</tr>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//DIFFERENCE HIGHEST PLAYOFF
		combined.playoff.sort(function (a, b) {
			return b.spread - a.spread
		});
		html += create_html_misc_table(combined.playoff, 'difference_largest_playoff', 'Largest Difference - Playoff', 1);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//DIFFERENCE LOWEST PLAYOFF
		combined.playoff.sort(function (a, b) {
			return a.spread - b.spread
		});
		html += create_html_misc_table(combined.playoff, 'difference_smallest_playoff', 'Smallest Difference - Playoff', 1);

		html += '</td>';
		html += '</tr>';
		html += '</tbody>';
		html += '</table>';

		html += '</div>';
		html += '<div id="tabcontent11302" class="homepagetabcontent">';
		html += '<table style="width:100%;border:0;box-shadow:none;margin:0;padding:0">';
		html += '<tbody>'
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//WIN STREAK REGULAR SEASON
		win_streak.sort(function (a, b) {
			return b.streak - a.streak
		});
		html += create_html_misc_table(win_streak, 'longest_win_streak_regular', 'Longest Winning - Regular Season', 2);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//LOSING STREAK REGULAR SEASON
		lose_streak.sort(function (a, b) {
			return b.streak - a.streak
		});
		html += create_html_misc_table(lose_streak, 'longest_lose_streak_regular', 'Longest Losing - Regular Season', 2);

		html += '</td>';
		html += '</tr>';
		html += '</tbody>';
		html += '</table>';
		html += '</div>';

		html += '</div>';
		html += '</div>';
		html += '</div>';
		html += '</div>';

		var selected_tab = 11300;
		if (jQuery("#tab11301").hasClass('currenttab')) selected_tab = 11301;
		if (jQuery("#tab11302").hasClass('currenttab')) selected_tab = 11302;
		jQuery("#misc_content").html(html);
		show_custom_tab_history(selected_tab);
	}

	function getPlayerPosition(_pid, _year) {
		try {
			return playerHistory[_year]["pid_" + _pid].position;
		} catch (er) {
			return "?";
		}
	}

	function getPlayerName(_pid, _year, _week, _fid) {
		var rstr = '';
		if (_week !== undefined) {
			try {
				for (var i = 0; i < playerHistoryLeague[_year].pid["pid_" + _pid]["wk_" + _week].fid.length; i++) {
					if (playerHistoryLeague[_year].pid["pid_" + _pid]["wk_" + _week].fid[i].fid === _fid) {
						switch (playerHistoryLeague[_year].pid["pid_" + _pid]["wk_" + _week].fid[i].rstr) {
							case "R":
								rstr = '';
								break;
							case "T":
								rstr = ' <span class="warning playerHistory_taxi" title="Taxi Squad">TS</span>';
								break;
							case "I":
								rstr = ' <span class="warning playerHistory_ir" title="Injured Reserve">IR</span>';
								break;
							default:
								rstr = '';
						}
					}
				}
			} catch (er) {}
		}
		try {
			return playerHistory[_year]["pid_" + _pid].name + " " + playerHistory[_year]["pid_" + _pid].team + " " + playerHistory[_year]["pid_" + _pid].position + rstr;
		} catch (er) {
			return _year + "_" + _pid;
		}
	}

	function getPlayerSeasonDetails(_year, _pid) {
		var _playerScore = new Array();
		var _precision = parseInt(leagueHistory['league_history_detail']["" + year].precision);
		var _regular_s = 0;
		var _regular_ns = 0;
		var _regular_nr = 0;
		var _playoff_s = 0;
		var _playoff_ns = 0;
		var _playoff_nr = 0;
		for (var i = 0; i < lh_playerScore_ar.length; i++) {
			if (lh_playerScore_ar[i].pid === _pid && lh_playerScore_ar[i].year === _year) {
				_playerScore.push({
					score: lh_playerScore_ar[i].score,
					fid: lh_playerScore_ar[i].fid,
					week: parseInt(lh_playerScore_ar[i].week),
					regular: lh_playerScore_ar[i].regular,
					status: lh_playerScore_ar[i].status
				});
			}
		}
		_playerScore.sort(function (a, b) {
			return a.week - b.week
		});
		var html = '';
		var playoffFound = false;
		html += '<table align="center" cellspacing="1" class="report">';
		html += '<tr class="oddtablerow lh-regular-header" style="font-weight:bold;font-size:0.938rem"><td colspan="4">Fantasy Regular Season</td></tr>';
		html += '<tr><th style="width:3.125rem;text-align:center">Week</th><th style="text-align:left">Franchise</th><th style="text-align:center">Status</th><th style="width:3.125rem;text-align:center">Pts</th></tr>';
		html += '<tbody>';
		var rowCount = 0;
		var weekCount = 1;
		for (var i = 0; i < _playerScore.length; i++) {
			if (!playoffFound && _playerScore[i].regular === "0") {
				html += '<tr class="player-total-row player-total-row-total"><th colspan="3" style="text-align:right">Regular Season Total: </th><th style="text-align:center">' + (_regular_s + _regular_ns + _regular_nr).toFixed(_precision) + '</th></tr>';
				html += '<tr class="player-total-row player-total-row-starter"><th colspan="3" style="text-align:right;font-size:0.75rem">as Starter: </th><th style="text-align:center;font-size:0.75rem">' + (_regular_s).toFixed(_precision) + '</th></tr>';
				html += '<tr class="player-total-row player-total-row-non-starter"><th colspan="3" style="text-align:right;font-size:0.75rem">as Non-Starter: </th><th style="text-align:center;;font-size:0.75rem">' + (_regular_ns).toFixed(_precision) + '</th></tr>';
				html += '<tr class="player-total-row player-total-row-non-roster"><th colspan="3" style="text-align:right;font-size:0.75rem">as Non-Roster: </th><th style="text-align:center;;font-size:0.75rem">' + (_regular_nr).toFixed(_precision) + '</th></tr>';
				html += '<tr class="oddtablerow lh-playoff-header" style="font-weight:bold;font-size:0.938rem"><td colspan="4">Fantasy Playoffs</td></tr>';
				html += '<tr><th style="width:3.125rem;text-align:center">Week</th><th style="text-align:left">Franchise</th><th style="text-align:center">Status</th><th style="width:3.125rem;text-align:center">Pts</th></tr>';
				playoffFound = true;
			}
			if (_playerScore[i].week < weekCount) continue; //IGNORE DOUBLE-HEADER WEEKS
			if (_playerScore[i].week > weekCount) {
				for (j = 0; j < (_playerScore[i].week - weekCount); j++) {
					if (rowCount % 2)
						html += '<tr class="eventablerow">';
					else
						html += '<tr class="oddtablerow">';
					html += '<td style="text-align:center">' + (weekCount + j) + '</td>';
					html += '<td class="lh_dnp" style="text-align:left;font-style:italic">- DNP -</td>';
					html += '<td style="text-align:center">-</td>';
					html += '<td style="text-align:center">-</td>';
					html += '</tr>';
					rowCount++;
				}
				weekCount = _playerScore[i].week;
			}
			if (rowCount % 2)
				html += '<tr class="eventablerow">';
			else
				html += '<tr class="oddtablerow">';
			html += '<td style="text-align:center">' + _playerScore[i].week + '</td>';
			if (_playerScore[i].fid === "FA") {
				html += '<td style="text-align:left;font-style:italic">- FA -</td>';
				html += '<td style="text-align:center">-</td>';
				if (playoffFound)
					_playoff_nr += parseFloat(_playerScore[i].score);
				else
					_regular_nr += parseFloat(_playerScore[i].score);
			} else {
				html += '<td style="text-align:left">' + getFranchiseName(_year, _playerScore[i].fid, false, true) + '</td>';
				html += '<td style="text-align:center">' + _playerScore[i].status + '</td>';
				if (_playerScore[i].status === "S")
					if (playoffFound)
						_playoff_s += parseFloat(_playerScore[i].score);
					else
						_regular_s += parseFloat(_playerScore[i].score);
				else
				if (playoffFound)
					_playoff_ns += parseFloat(_playerScore[i].score);
				else
					_regular_ns += parseFloat(_playerScore[i].score);
			}

			html += '<td style="text-align:center"><a href="#get_player_score_details" onclick="getPlayerScoreDetails(\'' + _year + '\',\'' + _playerScore[i].week + '\',\'' + _pid + '\')">' + parseFloat(_playerScore[i].score).toFixed(_precision) + '</a></td>';
			html += '</tr>';
			rowCount++;
			weekCount++;
		}
		html += '<tr class="player-total-row player-total-row-total"><th colspan="3" style="text-align:right">Playoff Total: </th><th style="text-align:center">' + (_playoff_s + _playoff_ns + _playoff_nr).toFixed(_precision) + '</th></tr>';
		html += '<tr class="player-total-row player-total-row-starter"><th colspan="3" style="text-align:right;font-size:0.75rem">as Starter: </th><th style="text-align:center;font-size:0.75rem">' + (_playoff_s).toFixed(_precision) + '</th></tr>';
		html += '<tr class="player-total-row player-total-row-non-starter"><th colspan="3" style="text-align:right;font-size:0.75rem">as Non-Starter: </th><th style="text-align:center;font-size:0.75rem">' + (_playoff_ns).toFixed(_precision) + '</th></tr>';
		html += '<tr class="player-total-row player-total-row-non-roster"><th colspan="3" style="text-align:right;font-size:0.75rem">as Non-Roster: </th><th style="text-align:center;font-size:0.75rem">' + (_playoff_nr).toFixed(_precision) + '</th></tr>';
		html += '</tbody>';
		html += '</table><br>';
		jQuery("#ls-modal-3-header-content").html('<table align="center" cellspacing="1" class="report"><caption><span>' + getPlayerName(_pid, _year) + '</span></caption></table><span style="padding-left:1.25rem">Weekly Pts: ' + _year + '</span>');
		jQuery("#ls-modal-3-content").html(html);
		jQuery('#ls-modal-3-content').scrollTop(0);
	}

	function getPlayerCareerDetails(_pid) {
		//lh_playerScoreSeason_ar[yearkey][pidkey] = ({ pt:0 , gp:0 , pt_s:0 , gp_s:0 , pt_ns:0 , gp_ns:0 , pt_nr:0 , gp_nr:0 , year:yearkey });
		var _playerScoreSeason = new Array();
		var _s = 0;
		var _ns = 0;
		var _nr = 0;
		var _gp = 0;
		var _precision = parseInt(leagueHistory['league_history_detail']["" + year].precision);
		var _year = '';
		for (var yearkey in lh_playerScoreSeason_ar) {
			if (lh_playerScoreSeason_ar.hasOwnProperty(yearkey)) {
				if (lh_playerScoreSeason_ar[yearkey].hasOwnProperty("pid_" + _pid)) {
					_year = yearkey;
					_playerScoreSeason.push({
						year: parseInt(yearkey),
						pt: lh_playerScoreSeason_ar[yearkey]["pid_" + _pid].pt,
						gp: lh_playerScoreSeason_ar[yearkey]["pid_" + _pid].gp,
						s: lh_playerScoreSeason_ar[yearkey]["pid_" + _pid].pt_s,
						ns: lh_playerScoreSeason_ar[yearkey]["pid_" + _pid].pt_ns,
						nr: lh_playerScoreSeason_ar[yearkey]["pid_" + _pid].pt_nr
					});
				}
			}
		}
		_playerScoreSeason.sort(function (a, b) {
			return a.year - b.year
		});
		var html = '';
		html += '<table align="center" cellspacing="1" class="report">';
		html += '<tr><th>Year</th><th>GP</th><th>Starter</th><th>Non-Starter</th><th>Non-Roster</th><th>Total</th></tr>';
		html += '<tbody>';
		var rowCount = 0;
		for (var i = 0; i < _playerScoreSeason.length; i++) {
			if (rowCount % 2)
				html += '<tr class="eventablerow">';
			else
				html += '<tr class="oddtablerow">';
			html += '<td style="text-align:center">' + _playerScoreSeason[i].year + '</td>';
			html += '<td style="text-align:center">' + _playerScoreSeason[i].gp + '</td>';
			html += '<td style="text-align:center">' + _playerScoreSeason[i].s.toFixed(_precision) + '</td>';
			html += '<td style="text-align:center">' + _playerScoreSeason[i].ns.toFixed(_precision) + '</td>';
			html += '<td style="text-align:center">' + _playerScoreSeason[i].nr.toFixed(_precision) + '</td>';
			html += '<td style="text-align:center"><a href="#get_player_season_details" onclick="getPlayerSeasonDetails(\'' + _playerScoreSeason[i].year + '\',\'' + _pid + '\')">' + _playerScoreSeason[i].pt.toFixed(_precision) + '</td>';
			html += '</tr>';
			_s += _playerScoreSeason[i].s;
			_ns += _playerScoreSeason[i].ns;
			_nr += _playerScoreSeason[i].nr;
			_gp += _playerScoreSeason[i].gp;
			rowCount++;
		}
		html += '<tr>';
		html += '<th>Total</td>';
		html += '<th>' + _gp + '</td>';
		html += '<th>' + _s.toFixed(_precision) + '</td>';
		html += '<th>' + _ns.toFixed(_precision) + '</td>';
		html += '<th>' + _nr.toFixed(_precision) + '</td>';
		html += '<th>' + (_s + _ns + _nr).toFixed(_precision) + '</td>';
		html += '</tr>';
		html += '</tbody>';
		html += '</table><br>';
		jQuery("#ls-modal-2-header-content").html('<table align="center" cellspacing="1" class="report"><caption><span>' + getPlayerName(_pid, _year) + '</span></caption></table><span style="padding-left:1.25rem">Points by Season</span>');
		jQuery("#ls-modal-2-content").html(html);
		jQuery('#ls-modal-2-content').scrollTop(0);
	}

	function create_html_players_table(_ar, _id, _caption, which) {
		var html = '';

		html += '<div class="mobile-wrap lh-bottom-line">';
		html += '<table align="center" cellspacing="1" class="report" id="' + _id + '">';
		html += '<caption style="display:table-caption"><span>' + _caption + '</span></caption>';
		html += '<tr>';
		html += '<th class="lh_rank" style="width:1.875rem;padding:0 0.188rem">Rank</th>';
		html += '<th class="lh_franchise" style="text-align:left;padding:0 0.313rem;">Player</th>';
		if (which < 4) html += '<th class="lh_abbrev" style="text-align:center;padding:0 0.313rem;">MFL</th>';
		if (which < 5)
			html += '<th class="lh_year" style="text-align:center;width:3.125rem">Year</th>';
		else {
			html += '<th class="lh_year" style="text-align:center;width:3.125rem">Start</th>';
			html += '<th class="lh_year" style="text-align:center;width:3.125rem">End</th>';
		}
		if (which < 4)
			html += '<th class="lh_week" style="text-align:center;width:3.125rem">Week</th>';
		else
			html += '<th class="lh_gp" style="text-align:center;width:3.125rem">GP</th>';
		html += '<th class="lh_points" style="text-align:center;width:4.375rem">Pts</th>';
		html += '</tr>';

		var _precision = parseInt(leagueHistory['league_history_detail']["" + year].precision);
		var _rank = 1;
		var _players_to_rank = lh_players_to_rank;
		var _rank_adjust = 0;
		var _row = 0;
		for (var i = 0; i < _ar.length; i++) {
			if (which === 1) { //LOOKING FOR STARTERS ONLY
				if (_ar[i].status !== "S") {
					_players_to_rank++;
					_rank_adjust++;
					continue;
				}
			}
			if (which === 2) { //LOOKING FOR NON-STARTERS ONLY
				if (_ar[i].status === "S" || _ar[i].fid === "FA") {
					_players_to_rank++;
					_rank_adjust++;
					continue;
				}
			}
			if (which === 3) { //LOOKING FOR NON-ROSTER ONLY
				if (_ar[i].fid !== "FA") {
					_players_to_rank++;
					_rank_adjust++;
					continue;
				}
			}
			if (lh_global_position !== "All" && lh_global_position !== getPlayerPosition(_ar[i].pid, _ar[i].year)) {
				_players_to_rank++;
				_rank_adjust++;
				continue;
			}
			if (which < 4) {
				if (lh_player_season !== "All") {
					if ((lh_player_season === 'Regular' && _ar[i].regular === "0") || (lh_player_season === 'Playoff' && _ar[i].regular === "1")) {
						_players_to_rank++;
						_rank_adjust++;
						continue;
					}
				}
			}


			var lh_my_franchise = '';
			if (which < 4)
				if (leagueHistory.reverse_lookup.hasOwnProperty(_ar[i].year + '_' + _ar[i].fid))
					if (leagueHistory.reverse_lookup[_ar[i].year + '_' + _ar[i].fid] === lh_franchise_id) lh_my_franchise = ' myfranchise';

			if (_row % 2)
				html += '<tr class="eventablerow' + lh_my_franchise + '">';
			else
				html += '<tr class="oddtablerow' + lh_my_franchise + '">';

			if ((i - _rank_adjust) === 0) {
				_rank = (i - _rank_adjust) + 1;
			} else {
				if (_ar[i].score === _ar[i - (1 + _rank_adjust)].score)
					_rank = '<i class="fa-regular fa-minus" aria-hidden="true" style="font-size:0.625rem"></i>';
				else
					_rank = (i - _rank_adjust) + 1;
			}
			html += '<td class="lh_rank" style="width:1.875rem;text-align:center;padding:0 0.188rem">' + _rank + '</td>';
			html += '<td class="lh_franchise" style="text-align:left;padding:0 0.313rem">' + getPlayerName(_ar[i].pid, _ar[i].year, _ar[i].week, _ar[i].fid) + '</td>';
			if (which < 4) html += '<td class="lh_abbrev" style="text-align:center;padding:0 0.313rem">' + getFranchiseAbbrev(_ar[i].year, _ar[i].fid, false, true, _ar[i].week) + '</td>';
			if (which < 5)
				html += '<td class="lh_year" style="text-align:center;width:3.125rem">' + _ar[i].year + '</td>';
			else {
				html += '<td class="lh_year" style="text-align:center;width:3.125rem">' + _ar[i].start_year + '</td>';
				if (parseInt(_ar[i].year) === year)
					html += '<td class="lh_year" style="text-align:center;width:3.125rem">-</td>';
				else
					html += '<td class="lh_year" style="text-align:center;width:3.125rem">' + _ar[i].year + '</td>';
			}
			if (which < 4)
				html += '<td class="lh_week" style="text-align:center;width:3.125rem">' + _ar[i].week + '</td>';
			else
				html += '<td class="lh_week" style="text-align:center;width:3.125rem">' + _ar[i].gp + '</td>';

			if (which < 4)
				html += '<td class="lh_points" style="text-align:center;width:4.375rem"><a href="#get_player_score_details" onclick="getPlayerScoreDetails(\'' + _ar[i].year + '\',\'' + _ar[i].week + '\',\'' + _ar[i].pid + '\')">' + _ar[i].score.toFixed(_precision) + '</a></td>';
			else if (which === 4)
				html += '<td class="lh_points" style="text-align:center;width:4.375rem"><a href="#get_player_season_details" onclick="getPlayerSeasonDetails(\'' + _ar[i].year + '\',\'' + _ar[i].pid + '\')">' + (_ar[i].score).toFixed(_precision) + '</a></td>';
			else if (which === 5)
				html += '<td class="lh_points" style="text-align:center;width:4.375rem"><a href="#get_player_career_details" onclick="getPlayerCareerDetails(\'' + _ar[i].pid + '\')">' + (_ar[i].score).toFixed(_precision) + '</td>';
			html += '</tr>';

			if (i === (_players_to_rank - 1)) break;
			_row++;
		}
		html += '</table>';
		html += '</div>';
		return html;
	}

	function create_html_players() {
		lh_playerScore_ar = [];
		lh_playerScoreSeason_ar = [];
		lh_playerScoreCareer_ar = [];
		for (var yearkey in playerHistoryLeague) {
			if (playerHistoryLeague.hasOwnProperty(yearkey)) {
				for (var pidkey in playerHistoryLeague[yearkey]['pid']) {
					if (playerHistoryLeague[yearkey]['pid'].hasOwnProperty(pidkey)) {
						if (pidkey !== "pid_") {
							if (!lh_playerScoreSeason_ar.hasOwnProperty(yearkey)) lh_playerScoreSeason_ar[yearkey] = new Array();
							if (!lh_playerScoreSeason_ar[yearkey].hasOwnProperty(pidkey)) lh_playerScoreSeason_ar[yearkey][pidkey] = ({
								pt: 0,
								gp: 0,
								pt_s: 0,
								gp_s: 0,
								pt_ns: 0,
								gp_ns: 0,
								pt_nr: 0,
								gp_nr: 0,
								year: yearkey
							});
							if (!lh_playerScoreCareer_ar.hasOwnProperty(pidkey)) lh_playerScoreCareer_ar[pidkey] = ({
								pt: 0,
								gp: 0,
								pt_s: 0,
								gp_s: 0,
								pt_ns: 0,
								gp_ns: 0,
								pt_nr: 0,
								gp_nr: 0,
								year: yearkey,
								start_year: yearkey
							});
							for (var weekkey in playerHistoryLeague[yearkey]['pid'][pidkey]) {
								if (playerHistoryLeague[yearkey]['pid'][pidkey].hasOwnProperty(weekkey)) {
									if (playerHistoryLeague[yearkey]['pid'][pidkey][weekkey].score !== null) {
										var _score = parseFloat(playerHistoryLeague[yearkey]['pid'][pidkey][weekkey].score);
										var _pid = pidkey.substring(4, pidkey.length);
										var _week = weekkey.substring(3, weekkey.length);
										var _regular = playerHistoryLeague[yearkey]['regular'][weekkey];
										//LAST WEEK IN LEAGUE_HISTORY_DETAIL WILL TAKE PRECEDENCE FOR REGULAR SEASON
										try {
											if (parseInt(weekkey.substr(3, 2)) <= parseInt(leagueHistory.league_history_detail[yearkey].last_week)) _regular = "1";
											else _regular = "0";
										} catch (er) {}
										for (var i = 0; i < playerHistoryLeague[yearkey]['pid'][pidkey][weekkey].fid.length; i++) {
											var _fid = playerHistoryLeague[yearkey]['pid'][pidkey][weekkey].fid[i].fid;
											var _status = playerHistoryLeague[yearkey]['pid'][pidkey][weekkey].fid[i].sts;
											lh_playerScore_ar.push({
												score: _score,
												pid: _pid,
												year: yearkey,
												week: _week,
												regular: _regular,
												fid: _fid,
												status: _status
											});
											if (i === 0) {
												if (lh_player_season === "All" || (lh_player_season === "Regular" && _regular === "1") || (lh_player_season === "Playoff" && _regular === "0")) {
													lh_playerScoreSeason_ar[yearkey][pidkey].pt += _score;
													lh_playerScoreSeason_ar[yearkey][pidkey].gp++;
													lh_playerScoreSeason_ar[yearkey][pidkey].year = yearkey;
													lh_playerScoreCareer_ar[pidkey].pt += _score;
													lh_playerScoreCareer_ar[pidkey].gp++;
													lh_playerScoreCareer_ar[pidkey].year = yearkey;
													if (_fid === "FA") {
														lh_playerScoreSeason_ar[yearkey][pidkey].pt_nr += _score;
														lh_playerScoreSeason_ar[yearkey][pidkey].gp_nr++;
														lh_playerScoreCareer_ar[pidkey].pt_nr += _score;
														lh_playerScoreCareer_ar[pidkey].gp_nr++;
													} else if (_status === "S") {
														lh_playerScoreSeason_ar[yearkey][pidkey].pt_s += _score;
														lh_playerScoreSeason_ar[yearkey][pidkey].gp_s++;
														lh_playerScoreCareer_ar[pidkey].pt_s += _score;
														lh_playerScoreCareer_ar[pidkey].gp_s++;
													} else {
														lh_playerScoreSeason_ar[yearkey][pidkey].pt_ns += _score;
														lh_playerScoreSeason_ar[yearkey][pidkey].gp_ns++;
														lh_playerScoreCareer_ar[pidkey].pt_ns += _score;
														lh_playerScoreCareer_ar[pidkey].gp_ns++;
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}

		var html = '';
		html += '<div id="players_wrapper">';
		html += '<div id="myfantasyleague_tabs" class="hs_tabs_wrap">';
		html += '<div class="toggle_tabs">';
		html += '<table class="report">';
		html += '<tbody>';
		html += '<tr>';
		html += '<td>';
		html += '<div class="myfantasyleague_tabmenu">';
		html += '<span id="tab_title_11400">11400</span>';
		html += '<input id="sub11400" type="checkbox">';
		html += '<label for="sub11400"><span></span></label>';
		html += '<ul id="homepagetabs">';
		html += '<li id="tab11400" onclick="javascript:show_custom_tab_history(\'11400\');"><a class="no-sub">Single Week<input id="sub11400" type="checkbox"><label for="sub11400"></label></a></li>';
		html += '<li id="tab11401" onclick="javascript:show_custom_tab_history(\'11401\');"><a class="no-sub">Single Season<input id="sub11400" type="checkbox"><label for="sub11400"></label></a></li>';
		html += '<li id="tab11402" onclick="javascript:show_custom_tab_history(\'11402\');"><a class="no-sub">Career<input id="sub11400" type="checkbox"><label for="sub11400"></label></a></li>';
		html += '</ul>';
		html += '</div>';
		if (lh_first_player_season !== '') html += '<div class="note-first-player-season" style="font-style:italic;font-size:0.688rem">Note: Player Stats go back to the ' + lh_first_player_season + ' season.</div>';

		html += '</td>';
		html += '</tr>';
		html += '</tbody>';
		html += '</table>';
		html += '<div class="tabs_scroll" style="position:relative">';
		html += '<div id="tabcontent11400" class="homepagetabcontent">';

		html += '<table style="width:100%;border:0;box-shadow:none;margin:0;padding:0">';
		html += '<tbody>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//PLAYER WEEK ANY STATUS
		lh_playerScore_ar.sort(function (a, b) {
			return b.score - a.score
		});
		html += create_html_players_table(lh_playerScore_ar, 'player_week_any_position_any_status', 'Most Points - Any Status', 0);
		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//PLAYER WEEK STARTER
		html += create_html_players_table(lh_playerScore_ar, 'player_week_any_position_starter', 'Most Points - Starter', 1);

		html += '</td>';
		html += '</tr>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//PLAYER WEEK ANY NON STARTER
		html += create_html_players_table(lh_playerScore_ar, 'player_week_any_position_nonstarter', 'Most Points - Non-Starter', 2);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//PLAYER WEEK NOT ON ROSTER
		html += create_html_players_table(lh_playerScore_ar, 'player_week_any_position_nonroster', 'Most Points - Non-Roster', 3);

		html += '</td>';
		html += '</tr>';
		html += '</tbody>';
		html += '</table>';

		html += '</div>';
		html += '<div id="tabcontent11401" class="homepagetabcontent">';
		html += '<table style="width:100%;border:0;box-shadow:none;margin:0;padding:0">';
		html += '<tbody>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//PLAYER SEASON
		var temp_ar = new Array();
		temp_ar['all'] = new Array();
		temp_ar['s'] = new Array();
		temp_ar['ns'] = new Array();
		temp_ar['nr'] = new Array();
		for (var yearkey in lh_playerScoreSeason_ar) {
			if (lh_playerScoreSeason_ar.hasOwnProperty(yearkey)) {
				for (var pidkey in lh_playerScoreSeason_ar[yearkey]) {
					if (lh_playerScoreSeason_ar[yearkey].hasOwnProperty(pidkey)) {
						temp_ar['all'].push({
							score: lh_playerScoreSeason_ar[yearkey][pidkey].pt,
							gp: lh_playerScoreSeason_ar[yearkey][pidkey].gp,
							pid: pidkey.substring(4, pidkey.length),
							year: lh_playerScoreSeason_ar[yearkey][pidkey].year
						});
						temp_ar['s'].push({
							score: lh_playerScoreSeason_ar[yearkey][pidkey].pt_s,
							gp: lh_playerScoreSeason_ar[yearkey][pidkey].gp_s,
							pid: pidkey.substring(4, pidkey.length),
							year: lh_playerScoreSeason_ar[yearkey][pidkey].year
						});
						temp_ar['ns'].push({
							score: lh_playerScoreSeason_ar[yearkey][pidkey].pt_ns,
							gp: lh_playerScoreSeason_ar[yearkey][pidkey].gp_ns,
							pid: pidkey.substring(4, pidkey.length),
							year: lh_playerScoreSeason_ar[yearkey][pidkey].year
						});
						temp_ar['nr'].push({
							score: lh_playerScoreSeason_ar[yearkey][pidkey].pt_nr,
							gp: lh_playerScoreSeason_ar[yearkey][pidkey].gp_nr,
							pid: pidkey.substring(4, pidkey.length),
							year: lh_playerScoreSeason_ar[yearkey][pidkey].year
						});
					}
				}
			}
		}
		temp_ar['all'].sort(function (a, b) {
			return b.score - a.score
		});
		html += create_html_players_table(temp_ar['all'], 'player_season_any_position_any_status', 'Most Points - Any Status', 4);
		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//PLAYER SEASON STARTER
		temp_ar['s'].sort(function (a, b) {
			return b.score - a.score
		});
		html += create_html_players_table(temp_ar['s'], 'player_season_any_position_starter', 'Most Points - Starter', 4);

		html += '</td>';
		html += '</tr>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//PLAYER SEASON ANY NON STARTER
		temp_ar['ns'].sort(function (a, b) {
			return b.score - a.score
		});
		html += create_html_players_table(temp_ar['ns'], 'player_season_any_position_nonstarter', 'Most Points - Non-Starter', 4);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//PLAYER SEASON NOT ON ROSTER
		temp_ar['nr'].sort(function (a, b) {
			return b.score - a.score
		});
		html += create_html_players_table(temp_ar['nr'], 'player_season_any_position_nonroster', 'Most Points - Non-Roster', 4);

		html += '</td>';
		html += '</tr>';
		html += '</tbody>';
		html += '</table>';

		html += '</div>';
		html += '<div id="tabcontent11402" class="homepagetabcontent">';
		html += '<table style="width:100%;border:0;box-shadow:none;margin:0;padding:0">';
		html += '<tbody>'
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//PLAYER CAREER
		var temp_ar = new Array();
		temp_ar['all'] = new Array();
		temp_ar['s'] = new Array();
		temp_ar['ns'] = new Array();
		temp_ar['nr'] = new Array();
		for (var pidkey in lh_playerScoreCareer_ar) {
			if (lh_playerScoreCareer_ar.hasOwnProperty(pidkey)) {
				temp_ar['all'].push({
					score: lh_playerScoreCareer_ar[pidkey].pt,
					gp: lh_playerScoreCareer_ar[pidkey].gp,
					pid: pidkey.substring(4, pidkey.length),
					year: lh_playerScoreCareer_ar[pidkey].year,
					start_year: lh_playerScoreCareer_ar[pidkey].start_year
				});
				temp_ar['s'].push({
					score: lh_playerScoreCareer_ar[pidkey].pt_s,
					gp: lh_playerScoreCareer_ar[pidkey].gp_s,
					pid: pidkey.substring(4, pidkey.length),
					year: lh_playerScoreCareer_ar[pidkey].year,
					start_year: lh_playerScoreCareer_ar[pidkey].start_year
				});
				temp_ar['ns'].push({
					score: lh_playerScoreCareer_ar[pidkey].pt_ns,
					gp: lh_playerScoreCareer_ar[pidkey].gp_ns,
					pid: pidkey.substring(4, pidkey.length),
					year: lh_playerScoreCareer_ar[pidkey].year,
					start_year: lh_playerScoreCareer_ar[pidkey].start_year
				});
				temp_ar['nr'].push({
					score: lh_playerScoreCareer_ar[pidkey].pt_nr,
					gp: lh_playerScoreCareer_ar[pidkey].gp_nr,
					pid: pidkey.substring(4, pidkey.length),
					year: lh_playerScoreCareer_ar[pidkey].year,
					start_year: lh_playerScoreCareer_ar[pidkey].start_year
				});
			}
		}
		temp_ar['all'].sort(function (a, b) {
			return b.score - a.score
		});
		html += create_html_players_table(temp_ar['all'], 'player_career_any_position_any_status', 'Most Points - Any Status', 5);
		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//PLAYER SEASON STARTER
		temp_ar['s'].sort(function (a, b) {
			return b.score - a.score
		});
		html += create_html_players_table(temp_ar['s'], 'player_career_any_position_starter', 'Most Points - Starter', 5);

		html += '</td>';
		html += '</tr>';
		html += '<tr>';
		html += '<td class="mobile-view" width="50%">';

		//PLAYER SEASON ANY NON STARTER
		temp_ar['ns'].sort(function (a, b) {
			return b.score - a.score
		});
		html += create_html_players_table(temp_ar['ns'], 'player_career_any_position_nonstarter', 'Most Points - Non-Starter', 5);

		html += '</td>';
		html += '<td class="mobile-view" width="50%">';

		//PLAYER SEASON NOT ON ROSTER
		temp_ar['nr'].sort(function (a, b) {
			return b.score - a.score
		});
		html += create_html_players_table(temp_ar['nr'], 'player_career_any_position_nonroster', 'Most Points - Non-Roster', 5);

		html += '</td>';
		html += '</tr>';
		html += '</tbody>';
		html += '</table>';
		html += '</div>';

		html += '</div>';
		html += '</div>';
		html += '</div>';
		html += '</div>';

		var selected_tab = 11400;
		if (jQuery("#tab11401").hasClass('currenttab')) selected_tab = 11401;
		if (jQuery("#tab11402").hasClass('currenttab')) selected_tab = 11402;
		jQuery("#player_content").html(html);
		show_custom_tab_history(selected_tab);
	}

	var lh_interval;
	var lh_interval_count = 0;

	function leagueHistoryWait() {
		lh_interval_count++;
		var allLoaded = true;
		if (typeof leagueHistory === "undefined") allLoaded = false;
		if (typeof playerHistoryLeague === "undefined") allLoaded = false;
		if (allLoaded)
			if (!leagueHistory.hasOwnProperty("weekly_score")) allLoaded = false;
		if (allLoaded)
			if (!leagueHistory.hasOwnProperty("league_awards")) allLoaded = false;
		if (allLoaded) {
			for (var i = 0; i < leagueHistory.history_links.length; i++) {
				if (!allLoaded) break;
				if (!leagueHistory.weekly_score.hasOwnProperty(leagueHistory.history_links[i].year)) allLoaded = false;
				if (allLoaded)
					if (!playerHistoryLeague.hasOwnProperty(leagueHistory.history_links[i].year)) allLoaded = false;
			}
		}
		if (allLoaded || lh_interval_count > 100) {
			if (lh_interval_count > 100) console.log("NOTE: Some history files failed to load!");
			clearInterval(lh_interval);
			if (lh_precision_override !== -1)
				lh_precision = lh_precision_override;
			else
				lh_precision = parseInt(leagueHistory['league_history_detail']["" + year].precision);
			lh_precision_multiplier = Math.pow(10, lh_precision);
			lh_apply_tab_settings();
			update_defunct_franchises();
			update_overall_record();
			sort_defunct_franchises();
			create_html_historical_records();
			create_html_series_records();
			create_html_team_points();
			create_html_misc();
			create_html_players();
		}
	}

	function lh_fatal_error() {
		if (typeof franchise_id !== "undefined")
			show_custom_tab_history(11105);
		else
			show_custom_tab_history(11100);
	}
	var lh_append_league_files;

	function lh_append_script(season, path) {
		return new Promise((resolve, reject) => {
			const scriptElement = document.createElement('script');
			if (path === 'leagues') {
				scriptElement.id = `league_history_${season}`;
			} else if (path === 'players') {
				scriptElement.id = `player_history_${season}`;
			}
			scriptElement.src = `${baseURLHistory}/${year}/${path}/${league_id}/${season}.js`;
			scriptElement.onload = resolve;
			scriptElement.onerror = reject;
			document.head.appendChild(scriptElement);
		});
	}

	async function lh_initiate() {
		if (typeof leagueHistory === 'undefined') {
			let errorMessage;
			if (typeof franchise_id !== 'undefined' && franchise_id === '0000') {
				show_custom_tab_history(11105);
				errorMessage = `<h3 class="warning" style="max-width:31.25rem;margin:0 auto">Your league's history has failed to load. If you have just updated to a new season, open the Admin tab and run the history and player updates for this season.</h3>`;
			} else {
				errorMessage = `<h3 class="warning" style="max-width:31.25rem;margin:0 auto">Your league's history has failed to load. This is most likely occurring because your commissioner has not updated history for this season or the server for which files are stored is currently down. Please try again later.</h3>`;
			}
			document.querySelector('.failure_message').innerHTML = errorMessage;
		} else {
			try {
				if (!leagueHistory.hasOwnProperty("league_awards")) {
					await new Promise((resolve, reject) => {
						const scriptElement = document.createElement('script');
						scriptElement.src = `${baseURLHistory}/${year}/leagues/${league_id}/league_awards.js`;
						scriptElement.onload = resolve;
						scriptElement.onerror = reject;
						document.head.appendChild(scriptElement);
					});
				}
				const historyLinks = leagueHistory.history_links;
				const scripts = [];
				for (let i = 0; i < historyLinks.length; i++) {
					scripts.push(lh_append_script(historyLinks[i].year, 'leagues'));
					scripts.push(lh_append_script(historyLinks[i].year, 'players'));
				}
				await Promise.allSettled(scripts);
				lh_interval = setInterval(leagueHistoryWait, 50);
			} catch (error) {
				console.error('Error occurred while appending files:', error);
			}
		}
	}

	function history_script_ListenerCheck() {
		history_script_trigger_count++;
		//CHECK IF BOTH THE FIVE MINUTE AND DAILY CACHE HAVE FULLY LOADED
		if (typeof reportFiveMinuteFullyLoaded !== "undefined" && typeof reportDailyFullyLoaded !== "undefined") {
			if (reportFiveMinuteFullyLoaded && reportDailyFullyLoaded) {
				clearInterval(history_script_Listener);
				if (!history_script_trigger_ran) trigger_history_script();
			}
		}
		if (history_script_trigger_count > 100) {
			clearInterval(history_script_Listener);
			console.log("Stop trying history_script after 10 seconds");
		}
	}

	if (history_script_trigger_ran === undefined) var history_script_trigger_ran = false;
	if (history_script_trigger_count === undefined) var history_script_trigger_count = 0;
	if (history_script_Listener === undefined) var history_script_Listener = setInterval("history_script_ListenerCheck()", 100);

	if (typeof franchise_id !== "undefined") {
		if (franchise_id === '0000' && lh_commish_franchise_id !== '')
			lh_franchise_id = lh_commish_franchise_id;
		else
			lh_franchise_id = franchise_id;
		if (franchise_id === "0000") {
			jQuery("#tab11105").removeAttr("style");
		}
	}

	// Detect mobile devices and remove custom scrollbar
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		var style = document.createElement('style');
		document.head.appendChild(style);
		style.sheet.insertRule('.hz-table-scroll table{padding-bottom:0!important}');
	}
	setTimeout(function () {
		if (typeof franchise_id !== 'undefined') {
			if (franchise_id === '0000') {
				$('.failure_message').html('<h3 class="warning" style="max-width:31.25rem;margin:0 auto">Your leagues history has failed to load. If you have just updated to a new season , open the Admin tab and run the history and player updates for this season.</h3>');
			} else {
				$('.failure_message').html('<h3 class="warning" style="max-width:31.25rem;margin:0 auto">Your leagues history has failed to load. This is most likely occuring because your commissioner has not updated history for this season or the server for which files are stored is currently down. Please try back later.</h3>');
			}
		} else {
			$('.failure_message').html('<h3 class="warning" style="max-width:31.25rem;margin:0 auto">Your leagues history has failed to load. Please try back later.</h3>');
		}
	}, 10000);


	// DRAFT HISTORY
	if ((load_draftHistory_script) && ($('#draft-history-wrapper').length)) {
		//DRAFT HISTORY VERSION NUMBER
		console.log('DRAFT HISTORY LAST UPDATED 10-26-21');
		//INCLUDE TABLE SORT IF NOT ALREADY LOADED
		if (typeof tableSortInstalled === "undefined") {
			jQuery("head").append('<scr' + 'ipt type="text/javascript" src="https://www.mflscripts.com/mfl-apps/tableSort/script.js"></scr' + 'ipt>');
			var tableSortInstalled = true;
		}
		if (dh_Mobile === undefined) var dh_Mobile = false;
		if (dh_Ovr === undefined) var dh_Ovr = false;
		if (dh_Date === undefined) var dh_Date = false;
		if (dh_Elapse === undefined) var dh_Elapse = false;
		if (dh_Comments === undefined) var dh_Comments = false;
		if (dh_sortArrow === undefined) var dh_sortArrow = 'white';
		if (dh_accumulatePts === undefined) var dh_accumulatePts = false;

		//CREATE DRAFT HISTORY TABS
		var draftHistoryData_ar = [];
		var draftHistoryYtdPts_ar = [];
		var dh_filterPosition = '';
		var dh_filterFranchise = '';
		var dh_filterHeader = [];

		//ADD NAVIGATION FOR HISTORY REPORTS
		$('.historyNav,.leagueTabNav,.draftTabNav').show();
		$('.historyNav.mobileNavs').hide();
		$('head').append('<style>@media only screen and (max-width: 29em){.historyNav{display:none!important}.historyNav.mobileNavs{display:block!important}}</style>');

		function dh_buildTabs() {
			var html = '';
			html += '<div id="myfantasyleague_tabs" class="dh_tabs_wrap"><table class="homepagemodule report" id="draft_tab_reports" cellspacing="1" align="center"><caption><span class="dh-main-caption-span">' + year + ' DRAFT RESULTS</span><span><div id="dh_options_11100" class="dh-control-setting" style=""><div class="dh_toggle_settings" style="pointer-events:auto;float:right;margin-right:0.188rem"><i class="fa-regular fa-gears" aria-hidden="true"></i> Filters</div><div id="draft_options"></div></div></span></caption><tbody></tbody></table>';
			html += '<div class="dh_toggle_tabs dh-main-toggle-tabs">';
			html += '<table class="report">';
			html += '<tbody>';
			html += '<tr>';
			html += '<td>';
			html += '<div class="myfantasyleague_tabmenu historyTabYears">';
			html += '<span id="dh_title_11100" style="z-index:1">' + year + '</span><input id="dh_11100" type="checkbox"><label for="dh_11100"><span></span></label>';
			html += '<ul id="homepagetabs" class="dh-tabs-menu">';
			html += '<li id="dh_11100" class="currenttab" onclick="dh_getDraftTable(\'' + year + '\',\'' + baseURLDynamic.split('/')[2].substr(3, 2) + '\',\'' + league_id + '\')"><a class="no-sub">' + year + '</a></li>';
			var tab_i = 1;
			for (var i = integratedHistory_ar.length - 1; i >= 0; i--) {
				var tab_id = '0' + tab_i;
				html += '<li id="dh_111' + tab_id.substr(-2) + '" class="" onclick="dh_getDraftTable(\'' + integratedHistory_ar[i].yid + '\',\'' + integratedHistory_ar[i].sid + '\',\'' + integratedHistory_ar[i].lid + '\')"><a>' + integratedHistory_ar[i].yid + '</a></li>';
				tab_i++;
			}
			html += '</ul>';
			html += '</div>';
			html += '</td>';
			html += '</tr>';
			html += '</tbody>';
			html += '</table>';
			html += '<div id="draft_loader"><center style="position:relative;height:12.5rem;padding-top:1.25rem">Loading Draft History . . .<br><br><div class="MFLPlayerPopupLoader" style="margin:0 auto"></div></center></div>';
			html += '<div class="dh_tabs_scroll" style="position:relative;display:none"></div>';
			html += '</div>';
			html += '</div>';
			$('#draft-history-wrapper').append(html);
		}

		function dh_trackColumnSorting(column) {
			if (dh_filterHeader[0] === undefined || dh_filterHeader[0] !== column) {
				dh_filterHeader[0] = column;
				dh_filterHeader[1] = 1;
			} else
				dh_filterHeader[1] = dh_filterHeader[1] * (-1);
		}

		function dh_doDraftTable(data, yid, sid) {
			if (!$.trim(data)) {
				$('.dh_tabs_scroll').html('<span class="warning" style="text-align:center;display:block">Error Getting Draft For Selected Season.<br>This is probably due to the selected season not being supported to cross browser requests.<br>The MFL site for this season MUST be HTTPS.<br>You will have to enable SSL for the selected season.<br>Also make sure the selected season is NOT set to private !.</span>');
			} else {
				var formOptions = $(data).find('form[action="options"]').appendTo('#draft_options');
				$('#draft_options').html(formOptions);
				var buildTableDeluxe = $(data).find('h3:contains("Show"):contains("Draft"):contains("Results")');
				$(data).find('.report:first').appendTo('.dh_tabs_scroll').attr('id', 'draftHistortable').addClass('tablesorter');
				buildTableDeluxe.attr('data-year', yid);
				buildTableDeluxe.attr('data-server', sid);
				$('.dh_tabs_scroll').prepend(buildTableDeluxe);
				if (!$('.dh_tabs_scroll h3 a').length) $('.dh_tabs_scroll h3').remove();
				$('.dh_tabs_scroll th:last-child').each(function () {
					if ($(this).text().match('Comments')) {
						$('#draftHistortable tr:first th:last-child').addClass('comments-col');
						$('#draftHistortable tr.oddtablerow,#draftHistortable tr.eventablerow').each(function () {
							$(this).find('td:last-child').addClass('comments-col');
						});
					} else {
						$('#draftHistortable tr:first th:last-child').after('<th class="comments-col">Comments</th>');
						$('#draftHistortable tr.oddtablerow,#draftHistortable tr.eventablerow').each(function () {
							$(this).find('td:last-child').after('<td class="comments-col"></td>');
						});
					}
				});

				if ($('th.points + th.points').length) {

				} else {
					$('th.timestamp + th.points').after('"<th class="points">Points</th>');
					$('td.timestamp + td.points').after('"<td class="points totalpoints">0</td>');
				}

				// update pts column to get 
				$("#draftHistortable tr").each(function () {
					var pts = $(this).find('td:eq(6)').text();
					if (pts === "-") pts = "0";
					$(this).find('td:eq(6)').text(pts);
				});
				if (precision !== 0) {
					$("#draftHistortable tr").each(function () {
						$(this).find('td:eq(6)').text(parseFloat($(this).find('td:eq(6)').text(), 10).toFixed(precision));
					});
				}

				if (parseInt(yid) !== year && dh_accumulatePts) {
					$('#draftHistortable tr:first th:eq(6)').after('<th class="points ctd-pts" title="Career Pts to Date">CPts</th>');
					$('#draftHistortable tr.oddtablerow,#draftHistortable tr.eventablerow').each(function () {
						$(this).find('td:eq(6)').after('<td class="points ctd-pts"></td>');
					});
				}
				//add onclick event to th to track header sorting
				var column = 0;
				$('#draftHistortable tr:first').find('th').each(function () {
					$(this).attr("onclick", 'dh_trackColumnSorting(' + column + ')');
					column++;
				});
				var dh_num = 0;
				$('#draftHistortable:first tr th').each(function () {
					if ($(this).attr('colspan')) {
						dh_num += +$(this).attr('colspan');
					} else {
						dh_num++;
					}
				});

				$('#draftHistortable caption').remove();
				$('#draftHistortable tr:first').wrap('<thead>');
				$('#draftHistortable thead').insertBefore('#draftHistortable tbody');
				$('#draftHistortable thead th').wrapInner('<div class="tablesorter-header-inner"></div>');
				$('<tbody style="display:none"><tr><td colspan=' + dh_num + '></td></tr></tbody>').insertBefore('#draftHistortable tbody');

				// Sum points
				$('#draftHistortable tbody:last tr td:nth-of-type(7)').addClass('totalpoints');
				let pointsum = 0;
				let pointsumr = 0;
				let ctdsum = 0;
				let ctdsumr = 0;

				if (parseInt(yid) !== year && dh_accumulatePts) {
					$('<tfoot><tr class="totalscore-row oddtablerow"><th></th><th></th><th></th><th></th><th></th><th></th><th class="totalscore" style="text-align:center!important">' + pointsumr + '</th><th class="totalctdscore"style="text-align:center!important">' + ctdsumr + '</th><th class="last_total"></th></tr></tfoot>').insertAfter('#draftHistortable tbody:last');
					$('head').append('<style>#draftHistortable th.totalscore:before{content:"Total Points:";position:absolute;margin-left:-6.25rem}</style>');
				} else {
					$('<tfoot><tr class="totalscore-row oddtablerow"><th></th><th></th><th></th><th></th><th></th><th></th><th class="totalscore" style="text-align:center!important">' + pointsumr + '</th><th class="last_total"></th></tr></tfoot>').insertAfter('#draftHistortable tbody:last');
					$('head').append('<style>#draftHistortable th.totalscore:before{content:"Total Points:";position:absolute;margin-left:-6.25rem}</style>');
				}

				// sort documents https://mottie.github.io/tablesorter/docs/
				$(function () {
					sumPoints(yid);
					// initialize the tablesorter plugin
					$("#draftHistortable").tablesorter();

					// bind to sort events
					$("#draftHistortable")
						.bind("sortStart", function (e, table) {
							//$("#overlay").show();
						})
						.bind("sortEnd", function (e, table) {
							sumPoints(yid);
							dh_applyRowClass();
						});
				});


				$('#draft_options select[name="POSITION"] option').val(function (i, v) {
					return v.replace(/\+/g, ",tr.dr_pos_");
				});
				$('#draft_options select[name="POSITION"] option[value="*"]').text('Position');
				$('#draft_options select[name="FRANCHISE"] option[value="0000"]').text('Franchise');
				//$('#draftHistortable td.points').text(function (i, v) {
				//	return v.replace("-", "0");
				//});
				$('#draft_options form input[type="submit"]').remove();
				$("#draft-history-wrapper td.franchisename a").each(function () {
					var href = $(this).attr('href');
					var id = href.substr(href.indexOf("F=") + 2, 4);
					$(this).closest('tr').not('.totalscore-row').addClass('dr_fran_' + id);
				});
				$("#draft-history-wrapper td.player a").each(function () {
					var href = $(this).attr('class');
					var id = href.substr(href.indexOf("position_") + 9, href.length);
					$(this).closest('tr').not('.totalscore-row').addClass('fran_filtered pos_filtered dr_pos_' + id);
				});
				$('#draft_options select[name="POSITION"]').change(function () {
					if ($(this).val() === '*') dh_filterPosition = '';
					else dh_filterPosition = $(this).val();
					var optionPos = $(this).val().toLowerCase();
					$('tr[class*="dr_pos_"]').removeClass('pos_filtered').hide();
					$('tr.dr_pos_' + optionPos).addClass('pos_filtered').show();
					$('tr[class*="dr_fran_"]').not('.fran_filtered').hide();
					if ($(this).val() == "*") {
						$('tr[class*="dr_pos_"]').addClass('pos_filtered').show();
						$('tr[class*="dr_pos_"]').not('.fran_filtered').hide();
					}
					dh_applyRowClass();
					sumPoints(yid);
				});
				$('#draft_options select[name="FRANCHISE"]').change(function () {
					var optionFran = $(this).val().toLowerCase();
					if (optionFran === '0000') dh_filterFranchise = '';
					else dh_filterFranchise = optionFran;
					$('tr[class*="dr_fran_"]').removeClass('fran_filtered').hide();
					$('tr.dr_fran_' + optionFran).addClass('fran_filtered').show();
					$('tr[class*="dr_fran_"]').not('.pos_filtered').hide();
					if ($(this).val() == "0000") {
						$('tr[class*="dr_fran_"]').addClass('fran_filtered').show();
						$('tr[class*="dr_fran_"]').not('.pos_filtered').hide();
					}
					dh_applyRowClass();
					sumPoints(yid);
				});

				var thisYear = parseInt(yid);
				$('.dh-main-caption-span').text(thisYear + ' Draft Results');

				$('.dh-main-toggle-tabs li').click(function () {
					dh_applyRowClass();
					$('.dh-main-toggle-tabs li').removeClass('currenttab');
					$(this).addClass('currenttab');
					$('.dh-main-toggle-tabs span[id*="dh_title_"]').html(thisYear);
					$('#dh_11100').prop('checked', false);
				});
				if ($("#draftHistortable td.franchisename:first").length) {
					if (thisYear == year) {
						$('#draftHistortable td a').attr('href', function (i, href) {
							return href.replace('&PRINTER=1', '');
						});
						$('#draft_style_pointer').remove();
						try {
							MFLPlayerPopupNewsIcon('draft-history-wrapper')
						} catch (er) {};
					} else {
						if ($("#draft_style_pointer").length == 0) {
							$('head').append('<style id="draft_style_pointer">#draft-history-wrapper table td a{pointer-events:none!important;text-decoration:none!important}</style>')
						}
					}
				} else {
					$('#draftHistortable').html('<h3 style="padding:1.875rem 0.313rem">No Draft Results For Selected Season</h3>');
				}

				if (parseInt(yid) !== year && dh_accumulatePts) {
					$("#draftHistortable tbody:eq(1) tr").each(function () {
						try {
							var pid = $(this).find("td.player a").attr("href").replace("&PRINTER=1", "").split("=")[2];
						} catch (er) {
							var pid = '';
						}
						var career_pts = 0;
						if (draftHistoryYtdPts_ar.hasOwnProperty("pid_" + pid)) {
							for (var year_key in draftHistoryYtdPts_ar["pid_" + pid]) {
								if (parseInt(year_key.substr(-4)) >= parseInt(yid)) {
									career_pts += parseFloat(draftHistoryYtdPts_ar["pid_" + pid][year_key], 10);
								}
							}
						}
						$(this).find("td.ctd-pts").html(career_pts.toFixed(precision));
					});
				}

				$('#draft_loader').hide();
				$('.dh_tabs_scroll').show();
				$('#draftHistortable td.comments-col').html(function (i, html) {
					return html.replace(/&nbsp;/g, '');
				});
				$('#draftHistortable td.comments-col').html(function (i, html) {
					return html.replace(/NaN/g, '');
				});
				$('#draftHistortable td.comments-col:empty').addClass('empty_comments');
				$('#draftHistortable td.comments-col').not('td.empty_comments').wrapInner('<div class="dh_comments_cell"></div>');
				$('#draftHistortable th.comments-col').html('<i class="fa-regular fa-comments" aria-hidden="true"></i>');
				$('#draftHistortable td.comments-col').append('<i class="fa-regular fa-comments" aria-hidden="true"></i>');

				// add franchise names when logos used so sort will work for franchise
				$('#draftHistortable td.franchisename img').each(function () {
					var alt = $(this).attr("alt");
					$(this).parents('td').append('<span style="display:none">' + alt + '</span>');
				});
				// if position or franchise filter has been set then re-filter
				if (dh_filterFranchise !== '') $('#draft_options select[name="FRANCHISE"]').val(dh_filterFranchise).trigger('change');
				if (dh_filterPosition !== '') $('#draft_options select[name="POSITION"]').val(dh_filterPosition).trigger('change');
				if (dh_filterHeader[0] !== undefined) {
					$("#draftHistortable").tablesorter().trigger("sorton", [
						[
							[dh_filterHeader[0], "n"]
						]
					]);
					if (dh_filterHeader[1] === -1) $("#draftHistortable").tablesorter().trigger("sorton", [
						[
							[dh_filterHeader[0], "n"]
						]
					]);
				}
			}
		}

		// DELUXE LEAUGE CLICK CONFERENCE TO GET NEW DRAFT REPORT FORM
		$(document).on('click', '.dh_tabs_scroll h3 a', function (e) {
			e.preventDefault();
			var targetForm = $(this);
			var yid = $('.dh_tabs_scroll h3').attr('data-year');
			var sid = $('.dh_tabs_scroll h3').attr('data-server');
			var url = `https://www${sid}.myfantasyleague.com/${yid}/${targetForm.attr('href')}`;
			$.ajax({
				type: "GET",
				url: url,
				xhrFields: {
					withCredentials: true
				},
				success: function (data) {
					$('.dh_tabs_scroll').html('');
					var formOptions = $(data).find('form[action="options"]').appendTo('#draft_options');
					$('#draft_options').html(formOptions);
					var buildTableDeluxe = $(data).find('h3:contains("Show"):contains("Draft"):contains("Results")');
					$(data).find('.report:first').appendTo('.dh_tabs_scroll').attr('id', 'draftHistortable').addClass('tablesorter');
					buildTableDeluxe.attr('data-year', yid)
					buildTableDeluxe.attr('data-server', sid)
					$('.dh_tabs_scroll').prepend(buildTableDeluxe);
					if (!$('.dh_tabs_scroll h3 a').length) $('.dh_tabs_scroll h3').remove();
					$('.dh_tabs_scroll th:last-child').each(function () {
						if ($(this).text().match('Comments')) {
							$('#draftHistortable tr:first th:last-child').addClass('comments-col');
							$('#draftHistortable tr.oddtablerow,#draftHistortable tr.eventablerow').each(function () {
								$(this).find('td:last-child').addClass('comments-col');
							});
						} else {
							$('#draftHistortable tr:first th:last-child').after('<th class="comments-col">Comments</th>');
							$('#draftHistortable tr.oddtablerow,#draftHistortable tr.eventablerow').each(function () {
								$(this).find('td:last-child').after('<td class="comments-col"></td>');
							});
						}
					});

					// update pts column to get 
					$("#draftHistortable tr").each(function () {
						var pts = $(this).find('td:eq(6)').text();
						if (pts === "-") pts = "0";
						$(this).find('td:eq(6)').text(pts);
					});
					if (precision !== 0) {
						$("#draftHistortable tr").each(function () {
							$(this).find('td:eq(6)').text(parseFloat($(this).find('td:eq(6)').text(), 10).toFixed(precision));
						});
					}

					if (parseInt(yid) !== year && dh_accumulatePts) {
						$('#draftHistortable tr:first th:eq(6)').after('<th class="points ctd-pts" title="Career Pts to Date">CPts</th>');
						$('#draftHistortable tr.oddtablerow,#draftHistortable tr.eventablerow').each(function () {
							$(this).find('td:eq(6)').after('<td class="points ctd-pts"></td>');
						});
					}
					//add onclick event to th to track header sorting
					var column = 0;
					$('#draftHistortable tr:first').find('th').each(function () {
						$(this).attr("onclick", 'dh_trackColumnSorting(' + column + ')');
						column++;
					});
					var dh_num = 0;
					$('#draftHistortable:first tr th').each(function () {
						if ($(this).attr('colspan')) {
							dh_num += +$(this).attr('colspan');
						} else {
							dh_num++;
						}
					});

					$('#draftHistortable caption').remove();
					$('#draftHistortable tr:first').wrap('<thead>');
					$('#draftHistortable thead').insertBefore('#draftHistortable tbody');
					$('#draftHistortable thead th').wrapInner('<div class="tablesorter-header-inner"></div>');
					$('<tbody style="display:none"><tr><td colspan=' + dh_num + '></td></tr></tbody>').insertBefore('#draftHistortable tbody');

					// Sum points
					$('#draftHistortable tbody:last tr td:nth-of-type(7)').addClass('totalpoints');
					let pointsum = 0;
					let pointsumr = 0;
					let ctdsum = 0;
					let ctdsumr = 0;

					if (parseInt(yid) !== year && dh_accumulatePts) {
						$('<tfoot><tr class="totalscore-row oddtablerow"><th></th><th></th><th></th><th></th><th></th><th></th><th class="totalscore" style="text-align:center!important">' + pointsumr + '</th><th class="totalctdscore"style="text-align:center!important">' + ctdsumr + '</th><th class="last_total"></th></tr></tfoot>').insertAfter('#draftHistortable tbody:last');
						$('head').append('<style>#draftHistortable th.totalscore:before{content:"Total Points:";position:absolute;margin-left:-6.25rem}</style>');
					} else {
						$('<tfoot><tr class="totalscore-row oddtablerow"><th></th><th></th><th></th><th></th><th></th><th></th><th class="totalscore" style="text-align:center!important">' + pointsumr + '</th><th class="last_total"></th></tr></tfoot>').insertAfter('#draftHistortable tbody:last');
						$('head').append('<style>#draftHistortable th.totalscore:before{content:"Total Points:";position:absolute;margin-left:-6.25rem}</style>');
					}

					// sort documents https://mottie.github.io/tablesorter/docs/
					$(function () {
						sumPoints(yid);
						// initialize the tablesorter plugin
						$("#draftHistortable").tablesorter();

						// bind to sort events
						$("#draftHistortable")
							.bind("sortStart", function (e, table) {
								//$("#overlay").show();
							})
							.bind("sortEnd", function (e, table) {
								sumPoints(yid);
								dh_applyRowClass();
							});
					});


					$('#draft_options select[name="POSITION"] option').val(function (i, v) {
						return v.replace(/\+/g, ",tr.dr_pos_");
					});
					$('#draft_options select[name="POSITION"] option[value="*"]').text('Position');
					$('#draft_options select[name="FRANCHISE"] option[value="0000"]').text('Franchise');
					//$('#draftHistortable td.points').text(function (i, v) {
					//	return v.replace("-", "0");
					//});
					$('#draft_options form input[type="submit"]').remove();
					$("#draft-history-wrapper td.franchisename a").each(function () {
						var href = $(this).attr('href');
						var id = href.substr(href.indexOf("F=") + 2, 4);
						$(this).closest('tr').not('.totalscore-row').addClass('dr_fran_' + id);
					});
					$("#draft-history-wrapper td.player a").each(function () {
						var href = $(this).attr('class');
						var id = href.substr(href.indexOf("position_") + 9, href.length);
						$(this).closest('tr').not('.totalscore-row').addClass('fran_filtered pos_filtered dr_pos_' + id);
					});
					$('#draft_options select[name="POSITION"]').change(function () {
						if ($(this).val() === '*') dh_filterPosition = '';
						else dh_filterPosition = $(this).val();
						var optionPos = $(this).val().toLowerCase();
						$('tr[class*="dr_pos_"]').removeClass('pos_filtered').hide();
						$('tr.dr_pos_' + optionPos).addClass('pos_filtered').show();
						$('tr[class*="dr_fran_"]').not('.fran_filtered').hide();
						if ($(this).val() == "*") {
							$('tr[class*="dr_pos_"]').addClass('pos_filtered').show();
							$('tr[class*="dr_pos_"]').not('.fran_filtered').hide();
						}
						dh_applyRowClass();
						sumPoints(yid);
					});
					$('#draft_options select[name="FRANCHISE"]').change(function () {
						var optionFran = $(this).val().toLowerCase();
						if (optionFran === '0000') dh_filterFranchise = '';
						else dh_filterFranchise = optionFran;
						$('tr[class*="dr_fran_"]').removeClass('fran_filtered').hide();
						$('tr.dr_fran_' + optionFran).addClass('fran_filtered').show();
						$('tr[class*="dr_fran_"]').not('.pos_filtered').hide();
						if ($(this).val() == "0000") {
							$('tr[class*="dr_fran_"]').addClass('fran_filtered').show();
							$('tr[class*="dr_fran_"]').not('.pos_filtered').hide();
						}
						dh_applyRowClass();
						sumPoints(yid);
					});

					var thisYear = parseInt(yid);
					$('.dh-main-caption-span').text(thisYear + ' Draft Results');

					$('.dh-main-toggle-tabs li').click(function () {
						dh_applyRowClass();
						$('.dh-main-toggle-tabs li').removeClass('currenttab');
						$(this).addClass('currenttab');
						$('.dh-main-toggle-tabs span[id*="dh_title_"]').html(thisYear);
						$('#dh_11100').prop('checked', false);
					});
					if ($("#draftHistortable td.franchisename:first").length) {
						if (thisYear == year) {
							$('#draftHistortable td a').attr('href', function (i, href) {
								return href.replace('&PRINTER=1', '');
							});
							$('#draft_style_pointer').remove();
							try {
								MFLPlayerPopupNewsIcon('draft-history-wrapper')
							} catch (er) {};
						} else {
							if ($("#draft_style_pointer").length == 0) {
								$('head').append('<style id="draft_style_pointer">#draft-history-wrapper table td a{pointer-events:none!important;text-decoration:none!important}</style>')
							}
						}
					} else {
						$('#draftHistortable').html('<h3 style="padding:1.875rem 0.313rem">No Draft Results For Selected Season</h3>');
					}

					if (parseInt(yid) !== year && dh_accumulatePts) {
						$("#draftHistortable tbody:eq(1) tr").each(function () {
							try {
								var pid = $(this).find("td.player a").attr("href").replace("&PRINTER=1", "").split("=")[2];
							} catch (er) {
								var pid = '';
							}
							var career_pts = 0;
							if (draftHistoryYtdPts_ar.hasOwnProperty("pid_" + pid)) {
								for (var year_key in draftHistoryYtdPts_ar["pid_" + pid]) {
									if (parseInt(year_key.substr(-4)) >= parseInt(yid)) {
										career_pts += parseFloat(draftHistoryYtdPts_ar["pid_" + pid][year_key], 10);
									}
								}
							}
							$(this).find("td.ctd-pts").html(career_pts.toFixed(precision));
						});
					}

					$('#draft_loader').hide();
					$('.dh_tabs_scroll').show();
					$('#draftHistortable td.comments-col').html(function (i, html) {
						return html.replace(/&nbsp;/g, '');
					});
					$('#draftHistortable td.comments-col').html(function (i, html) {
						return html.replace(/NaN/g, '');
					});
					$('#draftHistortable td.comments-col:empty').addClass('empty_comments');
					$('#draftHistortable td.comments-col').not('td.empty_comments').wrapInner('<div class="dh_comments_cell"></div>');
					$('#draftHistortable th.comments-col').html('<i class="fa-regular fa-comments" aria-hidden="true"></i>');
					$('#draftHistortable td.comments-col').append('<i class="fa-regular fa-comments" aria-hidden="true"></i>');

					// add franchise names when logos used so sort will work for franchise
					$('#draftHistortable td.franchisename img').each(function () {
						var alt = $(this).attr("alt");
						$(this).parents('td').append('<span style="display:none">' + alt + '</span>');
					});
					// if position or franchise filter has been set then re-filter
					if (dh_filterFranchise !== '') $('#draft_options select[name="FRANCHISE"]').val(dh_filterFranchise).trigger('change');
					if (dh_filterPosition !== '') $('#draft_options select[name="POSITION"]').val(dh_filterPosition).trigger('change');
					if (dh_filterHeader[0] !== undefined) {
						$("#draftHistortable").tablesorter().trigger("sorton", [
							[
								[dh_filterHeader[0], "n"]
							]
						]);
						if (dh_filterHeader[1] === -1) $("#draftHistortable").tablesorter().trigger("sorton", [
							[
								[dh_filterHeader[0], "n"]
							]
						]);
					}
				}
			});
		});

		function dh_applyRowClass() {
			$('#draftHistortable tr:visible:odd').removeClass('eventablerow').addClass('oddtablerow');
			$('#draftHistortable tr:visible:even').removeClass('oddtablerow').addClass('eventablerow');
		}

		function sumPoints(yid) {
			pointsum = 0;
			pointsumr = 0;
			$('#draftHistortable tr:visible .totalpoints').each(function () {
				var val = $.trim($(this).text());
				if (val) {
					val = parseFloat(val.replace(/^\$/, ""));
					pointsum += !isNaN(val) ? val : 0;
					pointsumr = pointsum.toFixed(precision);
				}
			});
			$('#draftHistortable tr:visible .totalscore').html(pointsumr);
			if (parseInt(yid) !== year && dh_accumulatePts) {
				ctdsum = 0;
				ctdsumr = 0;
				$('#draftHistortable tr:visible .ctd-pts').each(function () {
					var val = $.trim($(this).text());
					if (val) {
						val = parseFloat(val.replace(/^\$/, ""));
						ctdsum += !isNaN(val) ? val : 0;
						ctdsumr = ctdsum.toFixed(precision);
					}
				});
				$('#draftHistortable tr .totalctdscore').html(ctdsumr);
			}
		}

		function dh_getDraftTable(yid, sid, lid, isInitial) {
			$('.dh_tabs_scroll').html(''); //CLEAR DIV
			if (isInitial) {
				fetch(`https://www${sid}.myfantasyleague.com/${yid}/options?L=${lid}&O=17&PRINTER=1`, {
						credentials: 'include'
					})
					.then(response => {
						if (!response.ok) {
							throw new Error("Network response was not ok");
						}
						return response.text();
					})
					.then(data => {
						draftHistoryData_ar["yid_" + yid] = data;
						dh_doDraftTable(data, yid, sid);
						if (dh_accumulatePts) dh_getYtdPtsLazyLoad(yid, sid, lid);
					})
					.catch(error => {
						console.log("Error Getting Draft For: " + yid);
					});
			} else {
				dh_doDraftTable(draftHistoryData_ar["yid_" + yid], yid, sid);
			}
		}


		function dh_getDraftTableLazyLoad(yid, sid, lid) {
			fetch(`https://www${sid}.myfantasyleague.com/${yid}/options?L=${lid}&O=17&PRINTER=1`, {
					credentials: 'include'
				})
				.then(response => {
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					return response.text();
				})
				.then(data => {
					draftHistoryData_ar["yid_" + yid] = data;
				})
				.catch(error => {
					console.log("Error Getting Draft For: " + yid);
				});
		}


		function dh_getYtdPtsLazyLoad(yid, sid, lid) {
			fetch(`https://www${sid}.myfantasyleague.com/${yid}/export?TYPE=playerScores&L=${lid}&APIKEY=&W=YTD&JSON=1`, {
					credentials: 'include'
				})
				.then(response => {
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					return response.json();
				})
				.then(data => {
					for (var i = 0; i < data.playerScores.playerScore.length; i++) {
						if (!draftHistoryYtdPts_ar.hasOwnProperty("pid_" + data.playerScores.playerScore[i].id)) draftHistoryYtdPts_ar["pid_" + data.playerScores.playerScore[i].id] = [];
						draftHistoryYtdPts_ar["pid_" + data.playerScores.playerScore[i].id]["yid_" + yid] = data.playerScores.playerScore[i].score;
					}
				})
				.catch(error => {
					console.log("Error Getting YTD Points For: " + yid);
				});
		}

		$(document).on('click', '.dh_toggle_settings', function () {
			$('#draft_options').slideToggle('slow');
		});
		$('head').append('<style>#draftHistortable th,#draftHistortable td{text-align:left}#draftHistortable th:nth-child(1),#draftHistortable td:nth-child(1),#draftHistortable th:nth-child(2),#draftHistortable td:nth-child(2),#draftHistortable th:nth-child(7),#draftHistortable td:nth-child(7),#draftHistortable th.ctd-pts,#draftHistortable td.ctd-pts{text-align:center}#draftHistortable .franchiseicon[src*="mini-"]{width:unset!important;min-width:unset!important;max-width:unset!important;height:unset!important;min-height:unset!important;max-height:unset!important;max-width:15.625rem!important;min-width:8.125rem!important}#draftHistortable .franchiseicon{height:100%;width:auto;max-height:2.5rem}#draftHistortable th.comments-col{pointer-events:none!important;background-image:none!important}#draftHistortable.tablesorter th{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#draftHistortable.tablesorter th:focus{outline:none!important}#draftHistortable th:nth-child(1){width:3.75rem}#draftHistortable td:last-child{white-space:pre-wrap}#draftHistortable th:nth-child(2){width:3.125rem}#draft_options select{width:5.625rem!important;font-size:0.875rem!important;padding:0!important}.dh_comments_cell{display:none;position:absolute;margin-left:-15.625rem;font-size:0.875rem;padding:0.313rem;border-radius:0.313rem;z-index:99999;float:left;width:15.625rem;margin-top:-0.5rem}#draftHistortable td.comments-col{cursor:pointer;text-align:center}#draftHistortable th.comments-col{text-align:center;padding:0!important}#draftHistortable td.comments-col:hover .dh_comments_cell{display:block;cursor:pointer}#draftHistortable td.empty_comments{opacity:.3;cursor:default}#draft_options select{pointer-events:auto}#draft_options form{padding:0!important;font-size:0.75rem}#draft_options{display:none;text-align:center;line-height:0}.dh-control-setting{font-size: 0.938rem;cursor: pointer;font-weight: normal;display: inline}#draftHistortable tr.totalscore-row th{background-image:none!important}#draftHistortable th:nth-child(1){width:3.438rem!important;max-width:3.438rem!important}#draftHistortable .ctd-pts{width:5rem!important;max-width:5rem!important}#draftHistortable .comments-col{width:2.5rem!important;max-width:2.5rem!important}#draftHistortable .points{width:6.25rem!important;max-width:6.25rem!important}#draftHistortable .points + .points{width:5rem!important;max-width:5rem!important}#draftHistortable .points:nth-child(2){width:3.125rem!important;max-width:3.125rem!important}#draftHistortable .franchisename{width:12.5rem!important;max-width:12.5rem!important}#draftHistortable.tablesorter .header, #draftHistortable.tablesorter .tablesorter-header {background-image:none!important;padding: 0.125rem;cursor: pointer;}#draftHistortable div {white-space:nowrap}#draftHistortable div.dh_comments_cell{white-space:unset}#draftHistortable th div{display:inline-flex;align-items:center;margin:0!important;padding:0!important;text-indent:0!important}#draftHistortable th.comments-col div:after{display:none!important}@media (hover:none) {#draft_options select{width:6.25rem!important;font-size:1rem!important;}}</style>');
		if (dh_Mobile) {
			$('head').append('<style>@media (max-width:40.625em){#draftHistortable,#draftHistortable tbody,#draftHistortable th,#draftHistortable td,#draftHistortable tr{display:block}#draftHistortable tr[class*="dr_pos_"]:last-child{border-bottom:0!important}#draftHistortable th{position:absolute;top:-9999rem;left:-9999rem}#draftHistortable td{position:relative;text-align:left!important;min-height:2.125rem}#draftHistortable td:before{width:6.25rem;text-align:right;display:inline-block;margin-right:0.625rem}#draft-history-wrapper table.report td textarea{width:100%}#draftHistortable td:nth-of-type(1):before{content:"Pick\\00a0:\\00a0"}#draftHistortable td.points:before{content:"Overall Pick\\00a0:\\00a0"}#draftHistortable td.franchisename:before{content:"Franchise\\00a0:\\00a0"}#draftHistortable td.player:before{content:"Selection\\00a0:\\00a0"}#draftHistortable td.timestamp:before{content:"Date\/Time : "}#draftHistortable td.timestamp + td.points:before{content:"Elaspsed Time\\00a0:\\00a0"}#draftHistortable td.points + td.points:before{content:"Points\\00a0:\\00a0"}#draftHistortable td:last-of-type:before{content:"Comments\\00a0:\\00a0"}#draftHistortable td.franchisename{padding-left:7.063rem}#draftHistortable td.franchisename:before{margin-left:-6.25rem;padding-right:0.625rem;margin-right:0}#draftHistortable td.comments-col{white-space:nowrap}#draftHistortable .dh_comments_cell{margin-left:8.313rem;margin-top:-1.875rem;width:12.5rem;white-space:pre-wrap}tr.totalscore-row{display:none!important}#draftHistortable .franchisename,#draftHistortable .points:nth-child(2),#draftHistortable .points,#draftHistortable .points + .points{width: unset!important;max-width: unset!important}#draftHistortable td.ctd-pts:before{content: "CPts\\00a0:\\00a0"!important}}</style>');
		}
		if (!dh_Ovr) {
			$('head').append('<style>#draftHistortable th:nth-child(2),#draftHistortable td:nth-child(2){display:none!important}</style>');
		}
		if (!dh_Date) {
			$('head').append('<style>#draftHistortable th:nth-child(5),#draftHistortable td:nth-child(5){display:none!important}</style>');
		}
		if (!dh_Elapse) {
			$('head').append('<style>#draftHistortable th:nth-child(6),#draftHistortable td:nth-child(6){display:none!important}</style>');
		}
		if (!dh_Comments) {
			$('head').append('<style>#draftHistortable th.comments-col,#draftHistortable td.comments-col{display:none!important}#draftHistortable tr.totalscore-row th.last_total{display:none!important}</style>');
		}
		if (dh_sortArrow == 'white') {
			$('head').append('<style>#draftHistortable th div:after {content: url(data:image/gif;base64,R0lGODlhFQAJAIAAAP///////yH5BAEAAAEALAAAAAAVAAkAAAIXjI+AywnaYnhUMoqt3gZXPmVg94yJVQAAOw==);width:1rem;margin-left:-0.188rem!important}#draftHistortable.tablesorter .headerSortUp div:after,#draftHistortable.tablesorter .tablesorter-headerSortUp div:after,#draftHistortable.tablesorter .tablesorter-headerAsc div:after {content: url(data:image/gif;base64,R0lGODlhFQAEAIAAAP///////yH5BAEAAAEALAAAAAAVAAQAAAINjI8Bya2wnINUMopZAQA7)}#draftHistortable.tablesorter .headerSortDown div:after,#draftHistortable.tablesorter .tablesorter-headerSortDown div:after,#draftHistortable.tablesorter .tablesorter-headerDesc div:after {content: url(data:image/gif;base64,R0lGODlhFQAEAIAAAP///////yH5BAEAAAEALAAAAAAVAAQAAAINjB+gC+jP2ptn0WskLQA7)}</style>')
		}
		if (dh_sortArrow == 'black') {
			$('head').append('<style>#draftHistortable th div:after{content: url(data:image/gif;base64,R0lGODlhFQAJAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAkAAAIXjI+AywnaYnhUMoqt3gZXPmVg94yJVQAAOw==);width:1rem;margin-left:-0.188rem!important}#draftHistortable.tablesorter .headerSortUp div:after,#draftHistortable.tablesorter .tablesorter-headerSortUp div:after,#draftHistortable.tablesorter .tablesorter-headerAsc div:after{content: url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjI8Bya2wnINUMopZAQA7)}#draftHistortable.tablesorter .headerSortDown div:after,#draftHistortable.tablesorter .tablesorter-headerSortDown div:after,#draftHistortable.tablesorter .tablesorter-headerDesc div:after{content: url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjB+gC+jP2ptn0WskLQA7)}</style>')
		}
	}


	// STANDINGS HISTORY
	if ((load_standingsHistory_script) && ($('#standings-history-wrapper').length)) {

		//STANDINGS HISTORY VERSION NUMBER
		console.log('STANDINGS HISTORY LAST UPDATED 10-29-21');

		//CREATE STANDINGS HISTORY TABS
		var standingsHistoryData_ar = [];

		//ADD NAVIGATION FOR HISTORY REPORTS
		$('.historyNav,.leagueTabNav,.standingsTabNav').show();
		$('.historyNav.mobileNavs').hide();
		$('head').append('<style>@media only screen and (max-width: 29em){.historyNav{display:none!important}.historyNav.mobileNavs{display:block!important}}</style>');

		$('head').append('<style>.sh_tabs_scroll td.franchisename,.sh_tabs_scroll td.ficonname,.sh_tabs_scroll td.fname{width:10.625rem;min-width:10.625rem;max-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}</style>')

		function sh_buildTabs() {
			var html = '';
			html += '<div id="myfantasyleague_tabs" class="sh_tabs_wrap"><table class="homepagemodule report" id="standings_history_table" cellspacing="1" align="center"><caption><span class="sh-main-caption-span">' + year + ' Standings</span></caption><tbody></tbody></table>';
			html += '<div class="sh_toggle_tabs sh-main-toggle-tabs">';
			html += '<table class="report">';
			html += '<tbody>';
			html += '<tr>';
			html += '<td>';
			html += '<div class="myfantasyleague_tabmenu historyTabYears">';
			html += '<span id="sh_title_11100" style="z-index:1">' + year + '</span><input id="sh_11100" type="checkbox"><label for="sh_11100"><span></span></label>';
			html += '<ul id="homepagetabs" class="sh-tabs-menu">';
			html += '<li id="sh_11100" class="currenttab" onclick="sh_getStandingsTable(\'' + year + '\',\'' + baseURLDynamic.split('/')[2].substr(3, 2) + '\',\'' + league_id + '\')"><a class="no-sub">' + year + '</a></li>';
			var tab_i = 1;
			for (var i = integratedHistory_ar.length - 1; i >= 0; i--) {
				var tab_id = '0' + tab_i;
				html += '<li id="sh_111' + tab_id.substr(-2) + '" class="" onclick="sh_getStandingsTable(\'' + integratedHistory_ar[i].yid + '\',\'' + integratedHistory_ar[i].sid + '\',\'' + integratedHistory_ar[i].lid + '\')"><a>' + integratedHistory_ar[i].yid + '</a></li>';
				tab_i++;
			}
			html += '</ul>';
			html += '</div>';
			html += '</td>';
			html += '</tr>';
			html += '</tbody>';
			html += '</table>';
			html += '<div id="standings_loader"><center style="position:relative;height:12.5rem;padding-top:1.25rem">Loading Standings History . . .<br><br><div class="MFLPlayerPopupLoader" style="margin:0 auto"></div></center></div>';
			html += '<div class="sh_tabs_scroll" style="position:relative;display:none"></div>';
			html += '</div>';
			html += '</div>';
			$('#standings-history-wrapper').append(html);
		}

		function sh_dostandingsTable(data, yid) {
			if (!$.trim(data)) {
				$('.sh_tabs_scroll').html('<span class="warning" style="text-align:center;display:block">Error Getting Standings For Selected Season.<br>This is probably due to the selected season not being supported to cross browser requests.<br>The MFL site for this season MUST be HTTPS.<br>You will have to enable SSL for the selected season.<br>Also make sure the selected season is NOT set to private !.</span>');
			} else {
				var thisYear = parseInt(yid);
				$(data).find('.report:eq(0)').appendTo('.sh_tabs_scroll').attr('id', 'standings');
				$('#standings caption').remove();

				$('#standings td.points').text(function (i, v) {
					return v.replace("-", "0");
				});

				$('.sh-main-caption-span').text(thisYear + ' Standings');

				$('.sh-main-toggle-tabs li').click(function () {
					$('.sh-main-toggle-tabs li').removeClass('currenttab');
					$(this).addClass('currenttab');
					$('.sh-main-toggle-tabs span[id*="sh_title_"]').html(thisYear);
					$('#sh_11100').prop('checked', false);
				});

				if ($("#standings td.franchisename:first").length || $("#standings td.fname:first").length || $("#standings td.ficonname:first").length || $("#standings td.ficon:first").length) {
					if (thisYear == year) {
						$('#standings td a').attr('href', function (i, href) {
							return href.replace('&PRINTER=1', '');
						});
						$('#standings_style_pointer').remove();
					} else {
						if ($("#standings_style_pointer").length == 0) {
							$('head').append('<style id="standings_style_pointer">#standings-history-wrapper table td a{pointer-events:none!important;text-decoration:none!important}</style>')
						}
					}
				} else {
					$('#standings').html('<h3 style="padding:1.875rem 0.313rem">No Standings For Selected Season</h3>');
				}

				if (parseInt(yid) !== year) {
					$("#standings tbody:eq(1) tr").each(function () {
						try {
							var pid = $(this).find("td.player a").attr("href").replace("&PRINTER=1", "").split("=")[2];
						} catch (er) {
							var pid = '';
						}
					});
				}

				$('#standings_loader').hide();
				$('.sh_tabs_scroll').show();
			}
		}

		function sh_getStandingsTable(yid, sid, lid, isInitial) {
			$('.sh_tabs_scroll').html(''); //CLEAR DIV
			if (isInitial) {
				fetch(`https://www${sid}.myfantasyleague.com/${yid}/standings?L=${lid}&PRINTER=1`, {
						credentials: 'include'
					})
					.then(response => {
						if (!response.ok) {
							throw new Error(`Error getting standings for: ${yid}`);
						}
						return response.text();
					})
					.then(data => {
						standingsHistoryData_ar[`yid_${yid}`] = data;
						sh_dostandingsTable(data, yid);
					})
					.catch(error => {
						console.log(error);
					});
			} else {
				sh_dostandingsTable(standingsHistoryData_ar[`yid_${yid}`], yid);
			}
		}

		function sh_getStandingsTableLazyLoad(yid, sid, lid) {
			fetch(`https://www${sid}.myfantasyleague.com/${yid}/standings?L=${lid}&PRINTER=1`, {
					credentials: 'include'
				})
				.then(response => {
					if (!response.ok) {
						throw new Error(`Error getting standings for: ${yid}`);
					}
					return response.text();
				})
				.then(data => {
					standingsHistoryData_ar[`yid_${yid}`] = data;
				})
				.catch(error => {
					console.log(error);
				});
		}
	}


	// CONTRACTS HISTORY
	if ((load_contractHistory_script) && ($('#contract-history-wrapper').length)) {

		//CONTRACT HISTORY VERSION NUMBER
		console.log('CONTRACT HISTORY LAST UPDATED 10-28-21');

		//INCLUDE TABLE SORT IF NOT ALREADY LOADED
		if (typeof tableSortInstalled === "undefined") {
			jQuery("head").append('<scr' + 'ipt type="text/javascript" src="https://www.mflscripts.com/mfl-apps/tableSort/script.js"></scr' + 'ipt>');
			var tableSortInstalled = true;
		}

		if (ch_Injury === undefined) var ch_Injury = false;
		if (ch_Salary === undefined) var ch_Salary = true;
		if (ch_Year === undefined) var ch_Year = true;
		if (ch_Status === undefined) var ch_Status = true;
		if (ch_Info === undefined) var ch_Info = true;
		if (ch_salaryDecimal === undefined) var ch_salaryDecimal = -1;
		if (ch_sortArrow === undefined) var ch_sortArrow = 'white';

		//CREATE CONTRACT HISTORY TABS
		var contractHistoryData_ar = [];
		var sharedHistoryYtdPts_ar = [];
		//var ch_decimals = 0;
		var ch_filterPosition = '';
		var ch_filterFranchise = '';
		var ch_filterHeader = [];

		//ADD NAVIGATION FOR HISTORY REPORTS
		$('.historyNav,.leagueTabNav,.contractsTabNav').show();
		$('.historyNav.mobileNavs').hide();
		$('head').append('<style>@media only screen and (max-width: 29em){.historyNav{display:none!important}.historyNav.mobileNavs{display:block!important}}</style>');

		function ch_buildTabs() {
			var html = '';
			html += '<div id="myfantasyleague_tabs" class="ch_tabs_wrap"><table class="homepagemodule report" id="contract_tab_reports" cellspacing="1" align="center"><caption><span class="ch-main-caption-span">' + year + ' Contract Summary</span></caption><tbody></tbody></table>';
			html += '<div class="ch_toggle_tabs ch-main-toggle-tabs">';
			html += '<table class="report">';
			html += '<tbody>';
			html += '<tr>';
			html += '<td>';
			html += '<div class="myfantasyleague_tabmenu historyTabYears">';
			html += '<span id="ch_title_11100" style="z-index:1">' + year + '</span><input id="ch_11100" type="checkbox"><label for="ch_11100"><span></span></label>';
			html += '<ul id="homepagetabs" class="ch-tabs-menu">';
			html += '<li id="ch_11100" class="currenttab" onclick="ch_getContractTable(\'' + year + '\',\'' + baseURLDynamic.split('/')[2].substr(3, 2) + '\',\'' + league_id + '\')"><a class="no-sub">' + year + '</a></li>';
			var tab_i = 1;
			for (var i = integratedHistory_ar.length - 1; i >= 0; i--) {
				var tab_id = '0' + tab_i;
				html += '<li id="ch_111' + tab_id.substr(-2) + '" class="" onclick="ch_getContractTable(\'' + integratedHistory_ar[i].yid + '\',\'' + integratedHistory_ar[i].sid + '\',\'' + integratedHistory_ar[i].lid + '\')"><a>' + integratedHistory_ar[i].yid + '</a></li>';
				tab_i++;
			}
			html += '</ul>';
			html += '</div>';
			html += '</td>';
			html += '</tr>';
			html += '</tbody>';
			html += '</table>';
			html += '<div id="contract_loader"><center style="position:relative;height:12.5rem;padding-top:1.25rem">Loading Contract History . . .<br><br><div class="MFLPlayerPopupLoader" style="margin:0 auto"></div></center></div>';
			html += '<div class="ch_tabs_scroll" style="position:relative;display:none"></div>';
			html += '</div>';
			html += '</div>';
			$('#contract-history-wrapper').append(html);
		}

		function ch_trackColumnSorting(column) {
			if (ch_filterHeader[0] === undefined || ch_filterHeader[0] !== column) {
				ch_filterHeader[0] = column;
				ch_filterHeader[1] = 1;
			} else
				ch_filterHeader[1] = ch_filterHeader[1] * (-1);
		}

		function ch_doContractTable(data, yid) {
			if (!$.trim(data)) {
				$('.ch_tabs_scroll').html('<span class="warning" style="text-align:center;display:block">Error Getting Contracts For Selected Season.<br>This is probably due to the selected season not being supported to cross browser requests.<br>The MFL site for this season MUST be HTTPS.<br>You will have to enable SSL for the selected season.<br>Also make sure the selected season is NOT set to private !.</span>');
			} else {
				$(data).find('.report:first').appendTo('.ch_tabs_scroll').attr('id', 'contractHistortable').addClass('tablesorter');
				//mfl erroneously has td.contractinfo identified twice where the first instance in each tr should be td.contractstatus
				$('#contractHistortable tr').find('th.contractinfo:eq(0),td.contractinfo:eq(0)').each(function () {
					$(this).removeClass('contractinfo').addClass('contractstatus');
				});
				//insert Pts column
				$('#contractHistortable tr:first th.salary').after('<th class="ytd-pts">Pts</th>');
				$('#contractHistortable tr.oddtablerow,#contractHistortable tr.eventablerow').each(function () {
					$(this).find('td.salary').after('<td class="ytd-pts"></td>');
				});

				// run custom function (this is something new I might start adding)
				ch_customFunction();

				//add onclick event to th to track header sorting and unwrap <a> in th
				var column = 0;
				$('#contractHistortable tr:first').find('th').each(function () {
					$(this).find("a").replaceWith($(this).find("a").text());
					$(this).attr("onclick", 'ch_trackColumnSorting(' + column + ')');
					column++;
				});
				//remove reportfooter
				$('#contractHistortable tr.reportfooter').remove();
				//remove default row if it exists
				$('#contractHistortable tr:last-child').not('.oddtablerow').not('.eventablerow').remove();

				var ch_num = 0;
				$('#contractHistortable:first tr th').each(function () {
					if ($(this).attr('colspan')) {
						ch_num += +$(this).attr('colspan');
					} else {
						ch_num++;
					}
				});

				$('#contractHistortable caption').remove();
				$('#contractHistortable tr:first').wrap('<thead>');
				$('#contractHistortable thead').insertBefore('#contractHistortable tbody');
				$('#contractHistortable thead th').wrapInner('<div class="tablesorter-header-inner"></div>');
				$('<tbody style="display:none"><tr><td colspan=' + ch_num + '></td></tr></tbody>').insertBefore('#contractHistortable tbody');

				// sort documents https://mottie.github.io/tablesorter/docs/
				$(function () {
					// initialize the tablesorter plugin
					$("#contractHistortable").tablesorter();
					// bind to sort events
					$("#contractHistortable")
						.bind("sortStart", function (e, table) {
							//$("#overlay").show();
						})
						.bind("sortEnd", function (e, table) {
							ch_applyRowClass();
						});
				});

				$("#contract-history-wrapper td.player a").each(function () {
					var href = $(this).attr('class');
					var id = href.substr(href.indexOf("position_") + 9, href.length);
					$(this).closest('tr').addClass('fran_filtered pos_filtered cr_pos_' + id);
				});

				var thisYear = parseInt(yid);
				$('.ch-main-caption-span').text(thisYear + ' Contract Summary');

				$('.ch-main-toggle-tabs li').click(function () {
					ch_applyRowClass();
					$('.ch-main-toggle-tabs li').removeClass('currenttab');
					$(this).addClass('currenttab');
					$('.ch-main-toggle-tabs span[id*="ch_title_"]').html(thisYear);
					$('#ch_11100').prop('checked', false);
				});

				if ($("#contractHistortable td.player:first").length) {
					if (thisYear == year) {
						$('#contractHistortable td a').attr('href', function (i, href) {
							return href.replace('&PRINTER=1', '');
						});
						$('#contract_style_pointer').remove();
						try {
							MFLPlayerPopupNewsIcon('contract-history-wrapper')
						} catch (er) {};
					} else {
						if ($("#contract_style_pointer").length == 0) {
							$('head').append('<style id="contract_style_pointer">#contract-history-wrapper table td a{pointer-events:none!important;text-decoration:none!important}</style>')
						}
					}
				} else {
					$('#contractHistortable').html('<h3 style="padding:1.875rem 0.313rem">No Contract Summary For Selected Season</h3>');
				}

				// update pts column
				$("#contractHistortable tbody:eq(1) tr").each(function () {
					try {
						var pid = $(this).find("td.player a").attr("href").replace("&PRINTER=1", "").split("=")[2];
					} catch (er) {
						var pid = '';
					}
					if (sharedHistoryYtdPts_ar.hasOwnProperty("pid_" + pid)) {
						if (sharedHistoryYtdPts_ar["pid_" + pid].hasOwnProperty("yid_" + yid)) {
							$(this).find("td.ytd-pts").html(sharedHistoryYtdPts_ar["pid_" + pid]["yid_" + yid]);
						}
					}
				});
				// update salary column if ch_salaryDecimal is set
				if (ch_salaryDecimal !== -1) {
					if (ch_salaryDecimal > 0 && ch_salaryDecimal < 4) {
						$("#contractHistortable tbody:eq(1) tr").each(function () {
							var salary = $(this).find('td.salary').text();
							if (salary.indexOf(".") === -1) {
								if (salary.indexOf("m") !== -1) $(this).find('td.salary').text(salary.replace("m", "." + "0000".substr(ch_salaryDecimal * (-1)) + "m"));
								else if (salary.indexOf("k") !== -1) $(this).find('td.salary').text(salary.replace("k", "." + "0000".substr(ch_salaryDecimal * (-1)) + "k"));
								else $(this).find('td.salary').text(salary + "." + "0000".substr(ch_salaryDecimal * (-1)));
							}
						});
					}
				}

				$('#contract_loader').hide();
				$('.ch_tabs_scroll').show();

				// add franchise names when logos used so sort will work for franchise
				$('#contractHistortable td.franchisename img').each(function () {
					var alt = $(this).attr("alt");
					$(this).parents('td').append('<span style="display:none">' + alt + '</span>');
				});

				// if position or franchise filter has been set then re-filter
				if (ch_filterFranchise !== '') $('#contract_options select[name="FRANCHISE"]').val(ch_filterFranchise).trigger('change');
				if (ch_filterPosition !== '') $('#contract_options select[name="POSITION"]').val(ch_filterPosition).trigger('change');
				if (ch_filterHeader[0] !== undefined) {
					$("#contractHistortable").tablesorter().trigger("sorton", [
						[
							[ch_filterHeader[0], "n"]
						]
					]);
					if (ch_filterHeader[1] === -1) $("#contractHistortable").tablesorter().trigger("sorton", [
						[
							[ch_filterHeader[0], "n"]
						]
					]);
				}
			}
		}

		function ch_customFunction() {
			//this will be a user-defined function.  I find it helpful for unique setups
			return false;
		}

		function ch_getContractTable(yid, sid, lid, isInitial) {
			$('.ch_tabs_scroll').html(''); // CLEAR DIV
			if (isInitial) {
				fetch(`https://www${sid}.myfantasyleague.com/${yid}/reports?L=${lid}&R=SALARIES&POS=&PRINTER=1&PAGE=ALL`, {
						credentials: 'include'
					})
					.then(response => {
						if (!response.ok) {
							throw new Error(`Error getting contracts for: ${yid}`);
						}
						return response.text();
					})
					.then(data => {
						contractHistoryData_ar[`yid_${yid}`] = data;
						shared_getYtdPtsLazyLoad(yid, sid, lid);
						ch_doContractTable(data, yid);
					})
					.catch(error => {
						console.log(error);
					});
			} else {
				ch_doContractTable(contractHistoryData_ar[`yid_${yid}`], yid);
			}
		}

		function ch_getContractTableLazyLoad(yid, sid, lid) {
			fetch(`https://www${sid}.myfantasyleague.com/${yid}/reports?L=${lid}&R=SALARIES&POS=&PRINTER=1&PAGE=ALL`, {
					credentials: 'include'
				})
				.then(response => {
					if (!response.ok) {
						throw new Error(`Error getting contracts for: ${yid}`);
					}
					return response.text();
				})
				.then(data => {
					contractHistoryData_ar[`yid_${yid}`] = data;
				})
				.catch(error => {
					console.log(error);
				});
		}

		function shared_getYtdPtsLazyLoad(yid, sid, lid) {
			const url = `https://www${sid}.myfantasyleague.com/${yid}/export?TYPE=playerScores&L=${lid}&APIKEY=&W=YTD&JSON=1`;

			fetch(url, {
					credentials: 'include'
				})
				.then(response => {
					if (!response.ok) {
						throw new Error(`Error getting YTD points for: ${yid}`);
					}
					return response.json();
				})
				.then(data => {
					for (var i = 0; i < data.playerScores.playerScore.length; i++) {
						if (!sharedHistoryYtdPts_ar.hasOwnProperty("pid_" + data.playerScores.playerScore[i].id)) sharedHistoryYtdPts_ar["pid_" + data.playerScores.playerScore[i].id] = [];
						sharedHistoryYtdPts_ar["pid_" + data.playerScores.playerScore[i].id]["yid_" + yid] = data.playerScores.playerScore[i].score;
					}
				})
				.catch(error => {
					console.log(error);
				});
		}

		function ch_applyRowClass() {
			$('#contractHistortable tbody tr:odd').removeClass('eventablerow').addClass('oddtablerow');
			$('#contractHistortable tbody tr:even').removeClass('oddtablerow').addClass('eventablerow');
		}

		$('head').append('<style>#contractHistortable .franchiseicon[src*="mini-"]{width:unset!important;min-width:unset!important;max-width:unset!important;height:unset!important;min-height:unset!important;max-height:unset!important;max-width:15.625rem!important;min-width:8.125rem!important}#contractHistortable .franchiseicon{height:100%;width:auto;max-height:2.5rem}#contractHistortable.tablesorter th{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#contractHistortable.tablesorter th:focus{outline:none!important}#contractHistortable .points{width:6.25rem!important;max-width:6.25rem!important}#contractHistortable .points + .points{width:5rem!important;max-width:5rem!important}.ch_tabs_scroll .player,.ch_tabs_scroll .player + td{width: 12.5rem;min-width: 12.5rem;max-width: 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap}.ch_tabs_scroll .points{width: 3.125rem!important;max-width: 3.125rem!important}.ch_tabs_scroll th,.ch_tabs_scroll td{text-align:center!important}#contractHistortable.tablesorter .header, #contractHistortable.tablesorter .tablesorter-header {background-image:none!important;padding:0.125rem;cursor:pointer;}#contractHistortable div {white-space:nowrap}#contractHistortable th div{display:inline-flex;align-items:center;margin:0!important;padding:0!important;text-indent:0!important}.ch_tabs_scroll .player,.ch_tabs_scroll td.player + td,.ch_tabs_scroll th.player + th{text-align:left!important}</style>');

		if (!ch_Injury) {
			$('head').append('<style>#contractHistortable th:nth-child(4),#contractHistortable td:nth-child(4){display:none!important}</style>')
		}

		if (!ch_Salary) { //was nth-child(5)
			$('head').append('<style>#contractHistortable th.salary,#contractHistortable td.salary{display:none!important}</style>')
		}

		if (!ch_Year) { //was nth-child(6)
			$('head').append('<style>#contractHistortable th.contractyear,#contractHistortable td.contractyear{display:none!important}</style>')
		}

		if (!ch_Status) { //was nth-child(7)
			$('head').append('<style>#contractHistortable th.contractstatus,#contractHistortable td.contractstatus{display:none!important}</style>')
		}

		if (!ch_Info) { //was nth-child(8)
			$('head').append('<style>#contractHistortable th.contractinfo,#contractHistortable td.contractinfo{display:none!important}</style>')
		}

		if (ch_sortArrow == 'white') {
			$('head').append('<style>#contractHistortable th div:after {content: url(data:image/gif;base64,R0lGODlhFQAJAIAAAP///////yH5BAEAAAEALAAAAAAVAAkAAAIXjI+AywnaYnhUMoqt3gZXPmVg94yJVQAAOw==);width:1rem;margin-left:-0.188rem!important}#contractHistortable.tablesorter .headerSortUp div:after,#contractHistortable.tablesorter .tablesorter-headerSortUp div:after,#contractHistortable.tablesorter .tablesorter-headerAsc div:after {content: url(data:image/gif;base64,R0lGODlhFQAEAIAAAP///////yH5BAEAAAEALAAAAAAVAAQAAAINjI8Bya2wnINUMopZAQA7)}#contractHistortable.tablesorter .headerSortDown div:after,#contractHistortable.tablesorter .tablesorter-headerSortDown div:after,#contractHistortable.tablesorter .tablesorter-headerDesc div:after {content: url(data:image/gif;base64,R0lGODlhFQAEAIAAAP///////yH5BAEAAAEALAAAAAAVAAQAAAINjB+gC+jP2ptn0WskLQA7)}</style>')
		}
		if (ch_sortArrow == 'black') {
			$('head').append('<style>#contractHistortable th div:after{content: url(data:image/gif;base64,R0lGODlhFQAJAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAkAAAIXjI+AywnaYnhUMoqt3gZXPmVg94yJVQAAOw==);width:1rem;margin-left:-0.188rem!important}#contractHistortable.tablesorter .headerSortUp div:after,#contractHistortable.tablesorter .tablesorter-headerSortUp div:after,#contractHistortable.tablesorter .tablesorter-headerAsc div:after{content: url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjI8Bya2wnINUMopZAQA7)}#contractHistortable.tablesorter .headerSortDown div:after,#contractHistortable.tablesorter .tablesorter-headerSortDown div:after,#contractHistortable.tablesorter .tablesorter-headerDesc div:after{content: url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjB+gC+jP2ptn0WskLQA7)}</style>')
		}
	}


	// PLAYOFFS HISTORY
	if ((load_playoffsHistory_script) && ($('#playoffs-history-wrapper').length)) {

		//PLAYOFFS HISTORY VERSION NUMBER
		console.log('PLAYOFFS HISTORY LAST UPDATED 10-29-21');

		//CREATE PLAYOFFS HISTORY TABS
		var playoffsHistoryData_ar = [];

		//ADD NAVIGATION FOR HISTORY REPORTS
		$('.historyNav,.leagueTabNav,.playoffsTabNav').show();
		$('.historyNav.mobileNavs').hide();
		$('head').append('<style>.ph_tabs_scroll caption{padding:0.25rem;line-height:unset}.ph_tabs_scroll caption span{font-size:0.875rem}.ph_tabs_scroll .playoffbracket{table-layout:fixed}.ph_tabs_scroll .playoffbracket a,.ph_tabs_scroll .playoffbracket img{pointer-events:none;text-decoration:none}@media only screen and (max-width: 29em){.historyNav{display:none!important}.historyNav.mobileNavs{display:block!important}}</style>');

		function ph_buildTabs() {
			var html = '';
			html += '<div id="myfantasyleague_tabs" class="ph_tabs_wrap"><table class="homepagemodule report" id="playoffs_history_table" cellspacing="1" align="center"><caption><span class="ph-main-caption-span">' + year + ' Playoffs</span></caption><tbody></tbody></table>';
			html += '<div class="ph_toggle_tabs ph-main-toggle-tabs">';
			html += '<table class="report">';
			html += '<tbody>';
			html += '<tr>';
			html += '<td>';
			html += '<div class="myfantasyleague_tabmenu historyTabYears">';
			html += '<span id="ph_title_11100" style="z-index:1">' + year + '</span><input id="ph_11100" type="checkbox"><label for="ph_11100"><span></span></label>';
			html += '<ul id="homepagetabs" class="ph-tabs-menu">';
			html += '<li id="ph_11100" class="currenttab" onclick="ph_getPlayoffsTable(\'' + year + '\',\'' + baseURLDynamic.split('/')[2].substr(3, 2) + '\',\'' + league_id + '\')"><a class="no-sub">' + year + '</a></li>';
			var tab_i = 1;
			for (var i = integratedHistory_ar.length - 1; i >= 0; i--) {
				var tab_id = '0' + tab_i;
				html += '<li id="ph_111' + tab_id.substr(-2) + '" class="" onclick="ph_getPlayoffsTable(\'' + integratedHistory_ar[i].yid + '\',\'' + integratedHistory_ar[i].sid + '\',\'' + integratedHistory_ar[i].lid + '\')"><a>' + integratedHistory_ar[i].yid + '</a></li>';
				tab_i++;
			}
			html += '</ul>';
			html += '</div>';
			html += '</td>';
			html += '</tr>';
			html += '</tbody>';
			html += '</table>';
			html += '<div id="playoffs_loader"><center style="position:relative;height:12.5rem;padding-top:1.25rem">Loading Playoffs History . . .<br><br><div class="MFLPlayerPopupLoader" style="margin:0 auto"></div></center></div>';
			html += '<div class="ph_tabs_scroll" style="position:relative;display:none"></div>';
			html += '</div>';
			html += '</div>';
			$('#playoffs-history-wrapper').append(html);
		}

		function ph_doplayoffsTable(data, yid) {
			if (!$.trim(data)) {
				$('.ph_tabs_scroll').html('<span class="warning" style="text-align:center;display:block">Error Getting Playoffs For Selected Season.<br>This is probably due to the selected season not being supported to cross browser requests.<br>The MFL site for this season MUST be HTTPS.<br>You will have to enable SSL for the selected season.<br>Also make sure the selected season is NOT set to private !.</span>');
			} else {
				$(data).find('.playoffbracket').appendTo('.ph_tabs_scroll').attr('id', 'playoffs');
				$('.ph-main-toggle-tabs li').click(function () {
					$('.ph-main-toggle-tabs li').removeClass('currenttab');
					$(this).addClass('currenttab');
					var ph_year = $(this).text();
					$('.ph-main-toggle-tabs span[id*="ph_title_"]').html(ph_year);
					$('#ph_11100').prop('checked', false);
					$('.ph-main-caption-span').text(ph_year + ' Playoffs');
				});
				$('#playoffs_loader').hide();
				$('.ph_tabs_scroll').show();
			}
		}

		function ph_getPlayoffsTable(yid, sid, lid, isInitial) {
			$('.ph_tabs_scroll').html(''); //CLEAR DIV

			if (isInitial) {
				fetch(`https://www${sid}.myfantasyleague.com/${yid}/options?L=${lid}&O=79&PRINTER=1`, {
						credentials: 'include'
					})
					.then(response => {
						if (!response.ok) {
							throw new Error(`Error getting playoff for: ${yid}`);
						}
						return response.text();
					})
					.then(data => {
						playoffsHistoryData_ar[`yid_${yid}`] = data;
						ph_doplayoffsTable(data, yid);
					})
					.catch(error => {
						console.log(error);
					});
			} else {
				ph_doplayoffsTable(playoffsHistoryData_ar[`yid_${yid}`], yid);
			}
		}


		function ph_getPlayoffsTableLazyLoad(yid, sid, lid) {
			fetch(`https://www${sid}.myfantasyleague.com/${yid}/options?L=${lid}&O=79&PRINTER=1`, {
					credentials: 'include'
				})
				.then(response => {
					if (!response.ok) {
						throw new Error(`Error getting playoff for: ${yid}`);
					}
					return response.text();
				})
				.then(data => {
					playoffsHistoryData_ar[`yid_${yid}`] = data;
				})
				.catch(error => {
					console.log(error);
				});
		}

	}


	// TOPS HISTORY
	if ((load_topsHistory_script) && ($('#tops-history-wrapper').length)) {

		//TOPS HISTORY VERSION NUMBER
		console.log('TOPS HISTORY LAST UPDATED 10-26-21');

		//INCLUDE TABLE SORT IF NOT ALREADY LOADED
		if (typeof tableSortInstalled === "undefined") {
			jQuery("head").append('<scr' + 'ipt type="text/javascript" src="https://www.mflscripts.com/mfl-apps/tableSort/script.js"></scr' + 'ipt>');
			var tableSortInstalled = true;
		}

		if (th_sortArrow === undefined) var th_sortArrow = 'white';
		if (top_show === undefined) var top_show = '250';

		//CREATE TOPS HISTORY TABS
		var topsHistoryData_ar = [];
		var th_filterPosition = '';
		var th_filterHeader = [];

		//ADD NAVIGATION FOR HISTORY REPORTS
		$('.historyNav,.leagueTabNav,.topsTabNav').show();
		$('.historyNav.mobileNavs').hide();
		$('head').append('<style>@media only screen and (max-width: 29em){.historyNav{display:none!important}.historyNav.mobileNavs{display:block!important}}</style>');

		function th_buildTabs() {
			var html = '';
			html += '<div id="myfantasyleague_tabs" class="th_tabs_wrap"><table class="homepagemodule report" id="tops_tab_reports" cellspacing="1" align="center"><caption><span class="th-main-caption-span">' + year + ' TOP PLAYERS</span><span><div id="th_options_11100" class="th-control-setting" style=""><div class="th_toggle_settings" style="pointer-events:auto;float:right;margin-right:0.188rem"><i class="fa-regular fa-gears" aria-hidden="true"></i> Filters</div><div id="tops_options"></div></div></span></caption><tbody></tbody></table>';
			html += '<div class="th_toggle_tabs th-main-toggle-tabs">';
			html += '<table class="report">';
			html += '<tbody>';
			html += '<tr>';
			html += '<td>';
			html += '<div class="myfantasyleague_tabmenu historyTabYears">';
			html += '<span id="th_title_11100" style="z-index:1">' + year + '</span><input id="th_11100" type="checkbox"><label for="th_11100"><span></span></label>';
			html += '<ul id="homepagetabs" class="th-tabs-menu">';
			html += '<li id="th_11100" class="currenttab" onclick="th_getTopsTable(\'' + year + '\',\'' + baseURLDynamic.split('/')[2].substr(3, 2) + '\',\'' + league_id + '\')"><a class="no-sub">' + year + '</a></li>';
			var tab_i = 1;
			for (var i = integratedHistory_ar.length - 1; i >= 0; i--) {
				var tab_id = '0' + tab_i;
				html += '<li id="th_111' + tab_id.substr(-2) + '" class="" onclick="th_getTopsTable(\'' + integratedHistory_ar[i].yid + '\',\'' + integratedHistory_ar[i].sid + '\',\'' + integratedHistory_ar[i].lid + '\')"><a>' + integratedHistory_ar[i].yid + '</a></li>';
				tab_i++;
			}
			html += '</ul>';
			html += '</div>';
			html += '</td>';
			html += '</tr>';
			html += '</tbody>';
			html += '</table>';
			html += '<div id="tops_loader"><center style="position:relative;height:12.5rem;padding-top:1.25rem">Loading Top Players History . . .<br><br><div class="MFLPlayerPopupLoader" style="margin:0 auto"></div></center></div>';
			html += '<div class="th_tabs_scroll" style="position:relative;display:none"></div>';
			html += '</div>';
			html += '</div>';
			$('#tops-history-wrapper').append(html);
		}

		function th_trackColumnSorting(column) {
			if (th_filterHeader[0] === undefined || th_filterHeader[0] !== column) {
				th_filterHeader[0] = column;
				th_filterHeader[1] = 1;
			} else
				th_filterHeader[1] = th_filterHeader[1] * (-1);
		}

		function th_doTopsTable(data, yid) {
			if (!$.trim(data)) {
				$('.th_tabs_scroll').html('<span class="warning" style="text-align:center;display:block">Error Getting Top Players For Selected Season.<br>This is probably due to the selected season not being supported to cross browser requests.<br>The MFL site for this season MUST be HTTPS.<br>You will have to enable SSL for the selected season.<br>Also make sure the selected season is NOT set to private !.</span>');
			} else {
				var formOptions = $(data).find('form select[name="POSITION"]').appendTo('#tops_options');
				$('#tops_options').html(formOptions);
				$('#tops_options').prepend("SHOW ONLY ");
				$('#tops_options select[name="POSITION"] option[value="(R)"],#tops_options select[name="POSITION"] option[value*="|"]').remove();
				$(data).find('.report').appendTo('.th_tabs_scroll').attr('id', 'topsHistortable').addClass('tablesorter');
				$('#topsHistortable caption,#topsHistortable tr:first,#topsHistortable .status,#topsHistortable .week').remove();

				//add onclick event to th to track header sorting
				var column = 0;
				$('#topsHistortable tr:first').find('th').each(function () {
					$(this).attr("onclick", 'th_trackColumnSorting(' + column + ')');
					column++;
				});

				var th_num = 0;
				$('#topsHistortable:first tr th').each(function () {
					if ($(this).attr('colspan')) {
						th_num += +$(this).attr('colspan');
					} else {
						th_num++;
					}
				});

				$('#topsHistortable tr:first').wrap('<thead>');
				$('#topsHistortable thead a').contents().unwrap();
				$('#topsHistortable thead th').wrapInner('<div class="tablesorter-header-inner"></div>');
				$('#topsHistortable thead th.player').append('<input type="text" id="searchFilter" onkeyup="topsSearch()" placeholder="Search Player" title="Enter Players Last Name" style="pointer-events:auto;width:6.25rem;min-width:auto;padding:0;margin:0;font-size:0.75rem;margin-left:0.625rem;">');
				$('#topsHistortable thead').insertBefore('#topsHistortable tbody');
				$('<tbody style="display:none"><tr><td colspan=' + th_num + '></td></tr></tbody>').insertBefore('#topsHistortable tbody');
				$('#topsHistortable td[align="center"]:has(b)').addClass('bye-week').html('');
				$('#topsHistortable td').each(function () {
					if ($(this).html() == '&nbsp;') {
						$(this).html('');
						$(this).addClass('td-blank');
					}
				});

				// sort documents https://mottie.github.io/tablesorter/docs/
				$(function () {
					// initialize the tablesorter plugin
					$("#topsHistortable").tablesorter();
					$("#topsHistortable")
						.bind("sortStart", function (e, table) {
							//$("#overlay").show();
						})
						.bind("sortEnd", function (e, table) {
							th_applyRowClass();
						});
				});

				$('#tops_options select[name="POSITION"] option').val(function (i, v) {
					return v.replace(/\+/g, ",tr.th_pos_");
				});

				$('#tops_options select[name="POSITION"] option[value="*"]').text('Position');

				$("#tops-history-wrapper td.player a").each(function () {
					var href = $(this).attr('class');
					var id = href.substr(href.indexOf("position_") + 9, href.length);
					$(this).closest('tr').addClass('fran_filtered pos_filtered th_pos_' + id);
				});

				$('#tops_options select[name="POSITION"]').change(function () {
					if ($(this).val() === '*') th_filterPosition = '';
					else th_filterPosition = $(this).val();
					var optionPos = $(this).val().toLowerCase();
					$('tr[class*="th_pos_"]').removeClass('pos_filtered').hide();
					$('tr.th_pos_' + optionPos).addClass('pos_filtered').show();
					if ($(this).val() == "*") {
						$('tr[class*="th_pos_"]').addClass('pos_filtered').show();
					}
					th_applyRowClass();
				});

				var thisYear = parseInt(yid);
				$('.th-main-caption-span').text(thisYear + ' Top Players');

				$('.th-main-toggle-tabs li').click(function () {
					th_applyRowClass();
					$('.th-main-toggle-tabs li').removeClass('currenttab');
					$(this).addClass('currenttab');
					$('.th-main-toggle-tabs span[id*="th_title_"]').html(thisYear);
					$('#th_11100').prop('checked', false);
				});

				if ($("#topsHistortable td.player:first").length) {
					if (thisYear == year) {
						$('#topsHistortable td a').attr('href', function (i, href) {
							return href.replace('&PRINTER=1', '');
						});
						$('#tops_style_pointer').remove();
						try {
							MFLPlayerPopupNewsIcon('tops-history-wrapper')
						} catch (er) {};
					} else {
						if ($("#tops_style_pointer").length == 0) {
							$('head').append('<style id="tops_style_pointer">#topsHistortable td a{pointer-events:none!important;text-decoration:none!important}</style>')
						}
					}
				} else {
					$('#topsHistortable').html('<h3 style="padding:1.875rem 0.313rem">No Top Players For Selected Season</h3>');
				}

				// if position or franchise filter has been set then re-filter
				if (th_filterPosition !== '') $('#tops_options select[name="POSITION"]').val(th_filterPosition).trigger('change');
				if (th_filterHeader[0] !== undefined) {
					$("#topsHistortable").tablesorter().trigger("sorton", [
						[
							[th_filterHeader[0], "n"]
						]
					]);
					if (th_filterHeader[1] === -1) $("#topsHistortable").tablesorter().trigger("sorton", [
						[
							[th_filterHeader[0], "n"]
						]
					]);
				}

				const topSpansearch = textContent => Object.assign(
					document.createElement("span"), {
						textContent
					}
				)
				const filter = {
					acceptNode: node =>
						node.data.includes(",") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
				}
				document.querySelectorAll("#topsHistortable td.player").forEach(td => {
					const treeWalker = document.createTreeWalker(
						td,
						NodeFilter.SHOW_TEXT,
						filter,
						false
					)
					let node
					while (node = treeWalker.nextNode()) {
						// split the text on comma, keeping the delimiter
						const chunks = node.data.split(/(?=,)/)

						// keep the last chunk as-is
						const last = chunks.pop()

						// replace the text node with the new node set
						node.replaceWith(...chunks.map(topSpansearch), last)
					}
				});

				$('#tops_loader').hide();
				$('.th_tabs_scroll').show();
			}
		}

		function topsSearch() {
			var input, filter, table, tr, td, i, txtValue;
			input = document.getElementById("searchFilter");
			filter = input.value.toUpperCase();
			table = document.getElementById("topsHistortable");
			tr = table.getElementsByTagName("tr");
			for (i = 0; i < tr.length; i++) {
				td = tr[i].getElementsByTagName("span")[0];
				if (td) {
					txtValue = td.textContent || td.innerText;
					if (txtValue.toUpperCase().indexOf(filter) > -1) {
						tr[i].style.display = "";
					} else {
						tr[i].style.display = "none";
					}
				}
			}
			th_applyRowClass();
		}

		function th_applyRowClass() {
			$('#topsHistortable tr:visible:odd').removeClass('eventablerow').addClass('oddtablerow');
			$('#topsHistortable tr:visible:even').removeClass('oddtablerow').addClass('eventablerow');
		}

		function th_getTopsTable(yid, sid, lid, isInitial) {
			$('.th_tabs_scroll').html(''); //CLEAR DIV

			if (isInitial) {
				fetch(`https://www${sid}.myfantasyleague.com/${yid}/top?L=${lid}&SEARCHTYPE=BASIC&COUNT=${top_show}&YEAR=${yid}&START_WEEK=1&END_WEEK=${AllGamesCount}&CATEGORY=overall&POSITION=*&DISPLAY=points&TEAM=*&PRINTER=1`, {
						credentials: 'include'
					})
					.then(response => {
						if (!response.ok) {
							throw new Error(`Error getting top players for: ${yid}`);
						}
						return response.text();
					})
					.then(data => {
						topsHistoryData_ar[`yid_${yid}`] = data;
						th_doTopsTable(data, yid);
					})
					.catch(error => {
						console.log(error);
					});
			} else {
				th_doTopsTable(topsHistoryData_ar[`yid_${yid}`], yid);
			}
		}


		function th_getTopsTableLazyLoad(yid, sid, lid) {
			fetch(`https://www${sid}.myfantasyleague.com/${yid}/top?L=${lid}&SEARCHTYPE=BASIC&COUNT=${top_show}&YEAR=${yid}&START_WEEK=1&END_WEEK=${AllGamesCount}&CATEGORY=overall&POSITION=*&DISPLAY=points&TEAM=*&PRINTER=1`, {
					credentials: 'include'
				})
				.then(response => {
					if (!response.ok) {
						throw new Error(`Error getting top players for: ${yid}`);
					}
					return response.text();
				})
				.then(data => {
					topsHistoryData_ar[`yid_${yid}`] = data;
				})
				.catch(error => {
					console.log(error);
				});
		}


		$(document).on('click', '.th_toggle_settings', function () {
			$('#tops_options').slideToggle('slow');
		});

		$('head').append('<style>#topsHistortable.tablesorter th{-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#topsHistortable.tablesorter th:focus{outline:none!important}#topsHistortable th:nth-child(1){width:3.438rem!important;max-width:3.438rem!important}#topsHistortable.tablesorter .header, #topsHistortable.tablesorter .tablesorter-header {background-image:none!important;padding: 0.125rem;cursor: pointer;}#topsHistortable div{white-space:nowrap}#topsHistortable th div{display:inline-flex;align-items:center;margin:0!important;padding:0!important;text-indent:0!important}#topsHistortable th,#topsHistortable td{text-align:center!important}#topsHistortable .player{max-width:12.5rem;width:12.5rem;min-width:12.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:left!important}#topsHistortable th.rank div:before{content:"Rk"}#tops_options{display:none;text-align:center;line-height:0;font-size:0.75rem}#tops_options select{pointer-events:auto;width:5.625rem!important;font-size:0.875rem!important;padding:0!important;}.th-control-setting{font-size:0.938rem;cursor:pointer;font-weight:400;display:inline}#topsHistortable td.bye-week:before{content:"B";font-weight:bold}#topsHistortable td.td-blank:before{content:"\\00D8"}</style>');

		if (th_sortArrow == 'white') {
			$('head').append('<style>#topsHistortable th div:after {content: url(data:image/gif;base64,R0lGODlhFQAJAIAAAP///////yH5BAEAAAEALAAAAAAVAAkAAAIXjI+AywnaYnhUMoqt3gZXPmVg94yJVQAAOw==);width:1rem;margin-left:-0.188rem!important}#topsHistortable.tablesorter .headerSortUp div:after,#topsHistortable.tablesorter .tablesorter-headerSortUp div:after,#topsHistortable.tablesorter .tablesorter-headerAsc div:after {content: url(data:image/gif;base64,R0lGODlhFQAEAIAAAP///////yH5BAEAAAEALAAAAAAVAAQAAAINjI8Bya2wnINUMopZAQA7)}#topsHistortable.tablesorter .headerSortDown div:after,#topsHistortable.tablesorter .tablesorter-headerSortDown div:after,#topsHistortable.tablesorter .tablesorter-headerDesc div:after {content: url(data:image/gif;base64,R0lGODlhFQAEAIAAAP///////yH5BAEAAAEALAAAAAAVAAQAAAINjB+gC+jP2ptn0WskLQA7)}</style>')
		}

		if (th_sortArrow == 'black') {
			$('head').append('<style>#topsHistortable th div:after{content: url(data:image/gif;base64,R0lGODlhFQAJAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAkAAAIXjI+AywnaYnhUMoqt3gZXPmVg94yJVQAAOw==);width:1rem;margin-left:-0.188rem!important}#topsHistortable.tablesorter .headerSortUp div:after,#topsHistortable.tablesorter .tablesorter-headerSortUp div:after,#topsHistortable.tablesorter .tablesorter-headerAsc div:after{content: url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjI8Bya2wnINUMopZAQA7)}#topsHistortable.tablesorter .headerSortDown div:after,#topsHistortable.tablesorter .tablesorter-headerSortDown div:after,#topsHistortable.tablesorter .tablesorter-headerDesc div:after{content: url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjB+gC+jP2ptn0WskLQA7)}</style>')
		}

	}


	// TRADES HISTORY
	if ((load_tradesHistory_script) && ($('#trades-history-wrapper').length)) {

		//TRADES HISTORY VERSION NUMBER
		console.log('TRADES HISTORY LAST UPDATED 11-02-21');

		//CREATE TRADES HISTORY TABS
		var tradesHistoryData_ar = [];

		//ADD NAVIGATION FOR HISTORY REPORTS
		$('.historyNav,.leagueTabNav,.tradesTabNav').show();
		$('.historyNav.mobileNavs').hide();
		$('head').append('<style>.trh_tabs_scroll caption{padding:0.25rem;line-height:unset}.trh_tabs_scroll caption span{font-size:0.875rem}#tradesHistortable td{vertical-align:top;}#tradesHistortable li{pointer-events:none;}#tradesHistortable .trades-team-wrapper{font-weight:bold;font-size:0.875rem;}#tradesHistortable .oddtablerow td ul,#tradesHistortable .eventablerow td ul{list-style-type:revert;}#tradesHistortable .oddtablerow ul li,#tradesHistortable .eventablerow ul li{list-style-type:none;}#tradesHistortable .oddtablerow ul li ul li,#tradesHistortable .eventablerow ul li ul li{list-style-type:disc;}#tradesHistortable .oddtablerow td ul li:before,#tradesHistortable .eventablerow td ul li:before{content:initial;font-family:initial;padding-right:initial;margin-left:intiial;}#tradesHistortable .trades-no-trades{text-align:center;padding:1.25rem}.trade-assets-wrapper li{padding-left:0.188rem}#tradesHistortable td,#tradesHistortable th{text-align:left}#tradesHistortable td.rank,#tradesHistortable th.rank{text-align:center;width:3.125rem}#tradesHistortable span.warning{font-weight:bold;font-size:1rem}#tradesHistortable tr.reportfooter td{text-align:center}#tradesHistortable th.transaction{text-indent:1.25rem}#trades_options select{pointer-events:auto}#trades_options{display:none;text-align:center;line-height:0;font-size:0.75rem}.trh-control-setting{font-size:0.938rem;cursor:pointer;font-weight:400;display:inline}#trades_options select{width:5.625rem!important;font-size:0.875rem!important;padding:0!important}@media only screen and (max-width: 29em){.historyNav{display:none!important}.historyNav.mobileNavs{display:block!important}}</style>');

		function trh_buildTabs() {
			var html = '';
			html += '<div id="myfantasyleague_tabs" class="trh_tabs_wrap"><table class="homepagemodule report" id="trades_history_table" cellspacing="1" align="center"><caption><span class="trh-main-caption-span">' + year + ' Trades</span><span><div id="trh_options_11100" class="trh-control-setting" style=""><div class="trh_toggle_settings" style="pointer-events:auto;float:right;margin-right:0.188rem"><i class="fa-regular fa-gears" aria-hidden="true"></i> Filters</div><div id="trades_options"></div></div></span></caption><tbody></tbody></table>';
			html += '<div class="trh_toggle_tabs trh-main-toggle-tabs">';
			html += '<table class="report">';
			html += '<tbody>';
			html += '<tr>';
			html += '<td>';
			html += '<div class="myfantasyleague_tabmenu historyTabYears">';
			html += '<span id="trh_title_11100" style="z-index:1">' + year + '</span><input id="trh_11100" type="checkbox"><label for="trh_11100"><span></span></label>';
			html += '<ul id="homepagetabs" class="trh-tabs-menu">';
			html += '<li id="trh_11100" class="currenttab" onclick="trh_getTradesTable(\'' + year + '\',\'' + baseURLDynamic.split('/')[2].substr(3, 2) + '\',\'' + league_id + '\')"><a class="no-sub">' + year + '</a></li>';
			var tab_i = 1;
			for (var i = integratedHistory_ar.length - 1; i >= 0; i--) {
				var tab_id = '0' + tab_i;
				html += '<li id="trh_111' + tab_id.substr(-2) + '" class="" onclick="trh_getTradesTable(\'' + integratedHistory_ar[i].yid + '\',\'' + integratedHistory_ar[i].sid + '\',\'' + integratedHistory_ar[i].lid + '\')"><a>' + integratedHistory_ar[i].yid + '</a></li>';
				tab_i++;
			}
			html += '</ul>';
			html += '</div>';
			html += '</td>';
			html += '</tr>';
			html += '</tbody>';
			html += '</table>';
			html += '<div id="trades_loader"><center style="position:relative;height:12.5rem;padding-top:1.25rem">Loading Trades History . . .<br><br><div class="MFLPlayerPopupLoader" style="margin:0 auto"></div></center></div>';
			html += '<div class="trh_tabs_scroll" style="position:relative;display:none"></div>';
			html += '</div>';
			html += '</div>';
			$('#trades-history-wrapper').append(html);
		}

		function trh_doTradesTable(data, yid) {
			if (!$.trim(data)) {
				$('.trh_tabs_scroll').html('<span class="warning" style="text-align:center;display:block">Error Getting Trades For Selected Season.<br>This is probably due to the selected season not being supported to cross browser requests.<br>The MFL site for this season MUST be HTTPS.<br>You will have to enable SSL for the selected season.<br>Also make sure the selected season is NOT set to private !.</span>');
			} else {
				$(data).find('.report').appendTo('.trh_tabs_scroll').attr('id', 'tradesHistortable');
				//LOOP AND REMOVE ANY FAILED TRADES
				$('#tradesHistortable tr').each(function () {
					if ($(this).find('td:eq(2)').text() === 'Trade Failed') $(this).remove();
				});
				//REMOVE FRANCHISE COLUMN SINCE NOT NECESSARY
				$('#tradesHistortable tr').each(function () {
					$(this).find("th:eq(1),td:eq(1)").remove();
				});
				//REMOVE TYPE COLUMN SINCE ALL TRADES
				$('#tradesHistortable tr').each(function () {
					$(this).find("th:eq(1),td:eq(1)").remove();
				});
				//FOR EACH ROW REMOVE ALL <A> TAGS
				var trade_found = false;
				$('#tradesHistortable tr').find('td').each(function () {
					trade_found = true;
					$(this).find("a").each(function () {
						if ($(this).text() !== '')
							$(this).replaceWith($(this).text());
						else if ($(this).find("img").attr('alt') !== '')
							$(this).replaceWith($(this).find("img").attr('alt'));
					});
				});

				$('.trh-control-setting #trades_options').append('FRANCHISE <select id="teamselect" name="TEAMSELECT" size="1"><option id="allteamselect" value="Team">Team</option></select>');

				//FOR EACH TRANSACTION BREAK IT UP INTO LIST ITEMS
				if (trade_found) {
					$('#tradesHistortable tr').find('td:eq(1)').each(function () {
						$(this).html($(this).html().replace(/\<li\>/g, '<li><span class="trades-team-wrapper">').replace(/gave up /g, 'gave up</span><ul class="trade-assets-wrapper">').replace(/\<\/li\>/g, '</ul></li>'));
						var trade_assets1 = $(this).find('ul.trade-assets-wrapper:eq(0)').text();
						var trade_assets2 = $(this).find('ul.trade-assets-wrapper:eq(1)').text();
						//console.log(trade_assets1+" "+trade_assets2);
						var trade_assets1_ar = trade_assets1.split(';');
						var trade_assets2_ar = trade_assets2.split(';');
						var html = '';
						for (var i = 0; i < trade_assets1_ar.length; i++) {
							html += '<li>' + trade_assets1_ar[i].trim() + '</li>';
						}
						$(this).find('ul.trade-assets-wrapper:eq(0)').html(html);
						var html = '';
						for (var i = 0; i < trade_assets2_ar.length; i++) {
							html += '<li>' + trade_assets2_ar[i].trim() + '</li>';
						}
						$(this).find('ul.trade-assets-wrapper:eq(1)').html(html);
					});
				} else {
					$('#tradesHistortable').html('<h3 style="padding:1.875rem 0.313rem">No Trades For Selected Season</h3>');
				}

				var thisYear = parseInt(yid);
				$('.trh-main-caption-span').text(thisYear + ' Trades');

				$('.trh-main-toggle-tabs li').click(function () {
					$('.trh-main-toggle-tabs li').removeClass('currenttab');
					$(this).addClass('currenttab');
					$('.trh-main-toggle-tabs span[id*="trh_title_"]').html(thisYear);
					$('#trh_11100').prop('checked', false);
				});

				$(document).on('change', '#teamselect', function (index) {
					let teamval = $(this).find('option:selected').text();
					$('#tradesHistortable:visible .oddtablerow, #tradesHistortable:visible .eventablerow').hide();
					$('#tradesHistortable:visible').find('.trades-team-wrapper:contains(' + teamval + ')').closest('tr').show();
					if (teamval == 'Team') {
						$('#tradesHistortable:visible .oddtablerow, #tradesHistortable:visible .eventablerow').show();
					}
					$('#tradesHistortable tr:visible:odd.eventablerow').addClass('oddtablerow').removeClass('eventablerow');
					$('#tradesHistortable tr:visible:even.oddtablerow').addClass('eventablerow').removeClass('oddtablerow');
				});

				$('#trades_loader').hide();
				$('.trh_tabs_scroll').show();
				trh_getTeamsOptions();
			}
		}

		function trh_getTradesTable(yid, sid, lid, isInitial) {
			$('.trh_tabs_scroll, .trh-control-setting #trades_options').html(''); //CLEAR DIV

			if (isInitial) {
				fetch(`https://www${sid}.myfantasyleague.com/${yid}/options?L=${lid}&O=03&TYPE=TRADE&DAYS=99999&PRINTER=1`, {
						credentials: 'include'
					})
					.then(response => {
						if (!response.ok) {
							throw new Error(`Error getting trades for: ${yid}`);
						}
						return response.text();
					})
					.then(data => {
						tradesHistoryData_ar[`yid_${yid}`] = data;
						trh_doTradesTable(data, yid);
					})
					.catch(error => {
						console.log(error);
					});
			} else {
				trh_doTradesTable(tradesHistoryData_ar[`yid_${yid}`], yid);
			}
		}

		function trh_getTeamsOptions() {
			$('#trades_options #teamselect .teamoption').remove();
			let team = [];
			let teams = [];
			team.length = 0;
			teams.length = 0;
			$('#tradesHistortable:visible .trades-team-wrapper').each(function () {
				theteam = $(this).text().replace(' gave up', '');
				team.push(theteam);
			});
			$.each(team, function (i, el) {
				if ($.inArray(el, teams) === -1) teams.push(el);
			});
			let teamList;
			$.each(teams, function (i, el) {
				teamList = '<option class="teamoption" value="' + teams[i] + '">' + teams[i] + '</option>';
				$('#allteamselect').after(teamList);
			});
		}

		function trh_getTradesTableLazyLoad(yid, sid, lid) {
			const url = `https://www${sid}.myfantasyleague.com/${yid}/options?L=${lid}&O=03&TYPE=TRADE&DAYS=99999&PRINTER=1`;

			fetch(url, {
					credentials: 'include'
				})
				.then(response => response.text())
				.then(data => {
					tradesHistoryData_ar[`yid_${yid}`] = data;
				})
				.catch(error => {
					console.log(`Error Getting Trades For: ${yid}`);
				});
		}
		$(document).on('click', '.trh_toggle_settings', function () {
			$('#trades_options').slideToggle('slow');
		});
	}
	var isTabClicked = false;
	$('body').on('click', '.historyTabYears ul#homepagetabs li', function () {
		if (!isTabClicked) {
			isTabClicked = true;
			var currentHistoryTabYear = $(this).text().trim();
			$('.historyTabYears ul#homepagetabs li').each(function () {
				if ($(this).text().trim() === currentHistoryTabYear && !$(this).hasClass('active')) {
					var tabToClick = $(this);
					setTimeout(function () {
						tabToClick.click();
					}, 100);
				}
			});
			setTimeout(function () {
				$('.historyTabYears span').text(currentHistoryTabYear);
				isTabClicked = false; // Reset the flag to allow clicks again
			}, 1000); // Adjust the timeout duration as needed
		}
	});

	$('body').on('click', '.leagueTabNav.inactive', function () {
		$('#standings-history-wrapper,#draft-history-wrapper,#contract-history-wrapper,#playoffs-history-wrapper,#tops-history-wrapper,#trades-history-wrapper').hide();
		$('#league-history-wrapper').show();
		$('.leagueTabNav').removeClass('inactive').addClass('currenttab');
		$('.standingsTabNav,.draftTabNav,.contractsTabNav,.playoffsTabNav,.topsTabNav,.tradesTabNav').removeClass('currenttab').addClass('inactive');
	});

	$('body').on('click', '.draftTabNav.inactive', function () {
		$('#league-history-wrapper,#standings-history-wrapper,#contract-history-wrapper,#playoffs-history-wrapper,#tops-history-wrapper,#trades-history-wrapper').hide();
		$('#draft-history-wrapper').show();
		$('.draftTabNav').removeClass('inactive').addClass('currenttab');
		$('.leagueTabNav,.standingsTabNav,.contractsTabNav,.playoffsTabNav,.topsTabNav,.tradesTabNav').removeClass('currenttab').addClass('inactive');
	});

	$('body').on('click', '.standingsTabNav.inactive', function () {
		$('#league-history-wrapper,#draft-history-wrapper,#contract-history-wrapper,#playoffs-history-wrapper,#tops-history-wrapper,#trades-history-wrapper').hide();
		$('#standings-history-wrapper').show();
		$('.standingsTabNav').removeClass('inactive').addClass('currenttab');
		$('.leagueTabNav,.draftTabNav,.contractsTabNav,.playoffsTabNav,.topsTabNav,.tradesTabNav').removeClass('currenttab').addClass('inactive');
	});

	$('body').on('click', '.contractsTabNav.inactive', function () {
		$('#league-history-wrapper,#draft-history-wrapper,#standings-history-wrapper,#playoffs-history-wrapper,#tops-history-wrapper,#trades-history-wrapper').hide();
		$('#contract-history-wrapper').show();
		$('.contractsTabNav').removeClass('inactive').addClass('currenttab');
		$('.leagueTabNav,.draftTabNav,.standingsTabNav,.playoffsTabNav,.topsTabNav,.tradesTabNav').removeClass('currenttab').addClass('inactive');
	});

	$('body').on('click', '.playoffsTabNav.inactive', function () {
		$('#league-history-wrapper,#draft-history-wrapper,#standings-history-wrapper,#contract-history-wrapper,#tops-history-wrapper,#trades-history-wrapper').hide();
		$('#playoffs-history-wrapper').show();
		$('.playoffsTabNav').removeClass('inactive').addClass('currenttab');
		$('.leagueTabNav,.draftTabNav,.standingsTabNav,.contractsTabNav,.topsTabNav,.tradesTabNav').removeClass('currenttab').addClass('inactive');
	});

	$('body').on('click', '.topsTabNav.inactive', function () {
		$('#league-history-wrapper,#draft-history-wrapper,#standings-history-wrapper,#contract-history-wrapper,#playoffs-history-wrapper,#trades-history-wrapper').hide();
		$('#tops-history-wrapper').show();
		$('.topsTabNav').removeClass('inactive').addClass('currenttab');
		$('.leagueTabNav,.draftTabNav,.standingsTabNav,.contractsTabNav,.playoffsTabNav,.tradesTabNav').removeClass('currenttab').addClass('inactive');
	});

	$('body').on('click', '.tradesTabNav.inactive', function () {
		$('#league-history-wrapper,#draft-history-wrapper,#standings-history-wrapper,#contract-history-wrapper,#playoffs-history-wrapper,#tops-history-wrapper').hide();
		$('#trades-history-wrapper').show();
		$('.tradesTabNav').removeClass('inactive').addClass('currenttab');
		$('.leagueTabNav,.draftTabNav,.standingsTabNav,.contractsTabNav,.playoffsTabNav,.topsTabNav').removeClass('currenttab').addClass('inactive');
		trh_getTeamsOptions();
	});

	//SHOW HIDE FUNCTIONS
	$('body').on('click', '.lh_overall_record a,.lh_overall_awards div,a[href="#get_score_details_all_seasons"],a[href="#get_score_details"]', function () {
		const Historypop1 = document.querySelector('#ls-modal-1-container .ls-modal-content');
		const Historypop2 = document.querySelector('#ls-modal-2-container .ls-modal-content');
		const Historypop3 = document.querySelector('#ls-modal-3-container .ls-modal-content');
		const Historypop4 = document.querySelector('#ls-modal-4-container .ls-modal-content');
		$('#ls-modal-1-container').show();
		$('#ls-modal-1-container').addClass('popOpen_one');
		$('#ls-modal-2-container,#ls-modal-3-container,#ls-modal-4-container').hide();
		//if(jQuery('div[id*="ls-modal-"]').is(':visible')){$('html').css('overflow','hidden')}else{$('html').css('overflow','')};
		if (jQuery('div[id*="ls-modal-"]').is(':visible')) {
			try {
				bodyScrollLock.disableBodyScroll(Historypop1);
				bodyScrollLock.disableBodyScroll(Historypop2);
				bodyScrollLock.disableBodyScroll(Historypop3);
				bodyScrollLock.disableBodyScroll(Historypop4);
			} catch (er) {};
		} else {
			bodyScrollLock.clearAllBodyScrollLocks();
		};
	});
	$('body').on('click', '#ls-modal-1-container,#ls-modal-1-container .ls-modal-content.ls-history-modal span.close', function () {
		const Historypop1 = document.querySelector('#ls-modal-1-container .ls-modal-content');
		const Historypop2 = document.querySelector('#ls-modal-2-container .ls-modal-content');
		const Historypop3 = document.querySelector('#ls-modal-3-container .ls-modal-content');
		const Historypop4 = document.querySelector('#ls-modal-4-container .ls-modal-content');
		$('#ls-modal-1-container').hide();
		$('#ls-modal-1-container').removeClass('popOpen_one');
		//if(jQuery('div[id*="ls-modal-"]').is(':visible')){$('html').css('overflow','hidden')}else{$('html').css('overflow','')};
		if (jQuery('div[id*="ls-modal-"]').is(':visible')) {
			try {
				bodyScrollLock.disableBodyScroll(Historypop1);
				bodyScrollLock.disableBodyScroll(Historypop2);
				bodyScrollLock.disableBodyScroll(Historypop3);
				bodyScrollLock.disableBodyScroll(Historypop4);
			} catch (er) {};
		} else {
			bodyScrollLock.clearAllBodyScrollLocks();
		};
	});
	$('body').on('click', '.lh_get_franchise_schedule,.lh_series_td[onclick*="lh_get_series_record"],.lh-popup-record span,a[href="#get_score_details_season"],a[href="#get_player_career_details"]', function () {
		const Historypop1 = document.querySelector('#ls-modal-1-container .ls-modal-content');
		const Historypop2 = document.querySelector('#ls-modal-2-container .ls-modal-content');
		const Historypop3 = document.querySelector('#ls-modal-3-container .ls-modal-content');
		const Historypop4 = document.querySelector('#ls-modal-4-container .ls-modal-content');
		$('#ls-modal-2-container').show();
		$('#ls-modal-2-container').addClass('popOpen_two');
		$('#ls-modal-1-container,#ls-modal-3-container,#ls-modal-4-container').hide();
		//if(jQuery('div[id*="ls-modal-"]').is(':visible')){$('html').css('overflow','hidden')}else{$('html').css('overflow','')};
		if (jQuery('div[id*="ls-modal-"]').is(':visible')) {
			try {
				bodyScrollLock.disableBodyScroll(Historypop1);
				bodyScrollLock.disableBodyScroll(Historypop2);
				bodyScrollLock.disableBodyScroll(Historypop3);
				bodyScrollLock.disableBodyScroll(Historypop4);
			} catch (er) {};
		} else {
			bodyScrollLock.clearAllBodyScrollLocks();
		};
	});
	$('body').on('click', '#ls-modal-2-container,#ls-modal-2-container .ls-modal-content.ls-history-modal span.close', function () {
		const Historypop1 = document.querySelector('#ls-modal-1-container .ls-modal-content');
		const Historypop2 = document.querySelector('#ls-modal-2-container .ls-modal-content');
		const Historypop3 = document.querySelector('#ls-modal-3-container .ls-modal-content');
		const Historypop4 = document.querySelector('#ls-modal-4-container .ls-modal-content');
		$('#ls-modal-2-container').hide();
		$('#ls-modal-2-container').removeClass('popOpen_two');
		$('.popOpen_one').show();
		//if(jQuery('div[id*="ls-modal-"]').is(':visible')){$('html').css('overflow','hidden')}else{$('html').css('overflow','')};
		if (jQuery('div[id*="ls-modal-"]').is(':visible')) {
			try {
				bodyScrollLock.disableBodyScroll(Historypop1);
				bodyScrollLock.disableBodyScroll(Historypop2);
				bodyScrollLock.disableBodyScroll(Historypop3);
				bodyScrollLock.disableBodyScroll(Historypop4);
			} catch (er) {};
		} else {
			bodyScrollLock.clearAllBodyScrollLocks();
		};
	});
	$('body').on('click', '.ls-popup-player-li,a[href="#get_player_season_details"]', function () {
		const Historypop1 = document.querySelector('#ls-modal-1-container .ls-modal-content');
		const Historypop2 = document.querySelector('#ls-modal-2-container .ls-modal-content');
		const Historypop3 = document.querySelector('#ls-modal-3-container .ls-modal-content');
		const Historypop4 = document.querySelector('#ls-modal-4-container .ls-modal-content');
		$('#ls-modal-3-container').show();
		$('#ls-modal-3-container').addClass('popOpen_three');
		$('#ls-modal-1-container,#ls-modal-2-container,#ls-modal-4-container').hide();
		//if(jQuery('div[id*="ls-modal-"]').is(':visible')){$('html').css('overflow','hidden')}else{$('html').css('overflow','')};
		if (jQuery('div[id*="ls-modal-"]').is(':visible')) {
			try {
				bodyScrollLock.disableBodyScroll(Historypop1);
				bodyScrollLock.disableBodyScroll(Historypop2);
				bodyScrollLock.disableBodyScroll(Historypop3);
				bodyScrollLock.disableBodyScroll(Historypop4);
			} catch (er) {};
		} else {
			bodyScrollLock.clearAllBodyScrollLocks();
		};
	});
	$('body').on('click', '#ls-modal-3-container,#ls-modal-3-container .ls-modal-content.ls-history-modal span.close', function () {
		const Historypop1 = document.querySelector('#ls-modal-1-container .ls-modal-content');
		const Historypop2 = document.querySelector('#ls-modal-2-container .ls-modal-content');
		const Historypop3 = document.querySelector('#ls-modal-3-container .ls-modal-content');
		const Historypop4 = document.querySelector('#ls-modal-4-container .ls-modal-content');
		$('#ls-modal-3-container').hide();
		$('#ls-modal-3-container').removeClass('popOpen_three');
		$('.popOpen_two').show();
		//if(jQuery('div[id*="ls-modal-"]').is(':visible')){$('html').css('overflow','hidden')}else{$('html').css('overflow','')};
		if (jQuery('div[id*="ls-modal-"]').is(':visible')) {
			try {
				bodyScrollLock.disableBodyScroll(Historypop1);
				bodyScrollLock.disableBodyScroll(Historypop2);
				bodyScrollLock.disableBodyScroll(Historypop3);
				bodyScrollLock.disableBodyScroll(Historypop4);
			} catch (er) {};
		} else {
			bodyScrollLock.clearAllBodyScrollLocks();
		};
	});
	$('body').on('click', '.lh-popup-points a,a[href="#get_player_score_details"]', function () {
		const Historypop1 = document.querySelector('#ls-modal-1-container .ls-modal-content');
		const Historypop2 = document.querySelector('#ls-modal-2-container .ls-modal-content');
		const Historypop3 = document.querySelector('#ls-modal-3-container .ls-modal-content');
		const Historypop4 = document.querySelector('#ls-modal-4-container .ls-modal-content');
		$('#ls-modal-4-container').show();
		$('#ls-modal-4-container').addClass('popOpen_four');
		$('#ls-modal-1-container,#ls-modal-2-container,#ls-modal-3-container').hide();
		//if(jQuery('div[id*="ls-modal-"]').is(':visible')){$('html').css('overflow','hidden')}else{$('html').css('overflow','')};
		if (jQuery('div[id*="ls-modal-"]').is(':visible')) {
			try {
				bodyScrollLock.disableBodyScroll(Historypop1);
				bodyScrollLock.disableBodyScroll(Historypop2);
				bodyScrollLock.disableBodyScroll(Historypop3);
				bodyScrollLock.disableBodyScroll(Historypop4);
			} catch (er) {};
		} else {
			bodyScrollLock.clearAllBodyScrollLocks();
		};
	});
	$('body').on('click', '#ls-modal-4-container,#ls-modal-4-container .ls-modal-content.ls-history-modal span.close', function () {
		const Historypop1 = document.querySelector('#ls-modal-1-container .ls-modal-content');
		const Historypop2 = document.querySelector('#ls-modal-2-container .ls-modal-content');
		const Historypop3 = document.querySelector('#ls-modal-3-container .ls-modal-content');
		const Historypop4 = document.querySelector('#ls-modal-4-container .ls-modal-content');
		$('#ls-modal-4-container').hide();
		$('#ls-modal-4-container').removeClass('popOpen_four');
		$('.popOpen_three').show();
		//if(jQuery('div[id*="ls-modal-"]').is(':visible')){$('html').css('overflow','hidden')}else{$('html').css('overflow','')};
		if (jQuery('div[id*="ls-modal-"]').is(':visible')) {
			try {
				bodyScrollLock.disableBodyScroll(Historypop1);
				bodyScrollLock.disableBodyScroll(Historypop2);
				bodyScrollLock.disableBodyScroll(Historypop3);
				bodyScrollLock.disableBodyScroll(Historypop4);
			} catch (er) {};
		} else {
			bodyScrollLock.clearAllBodyScrollLocks();
		};
	});
	$('body').on('click', '.ls-modal-content.ls-history-modal:not(.ls-modal-content.ls-history-modal span.close)', function (e) {
		e.stopPropagation()
	});
} // END HISTORY SCRIPT


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// IR REPORT SCRIPT  https://www.mflscripts.com/mfl-apps/injuredReserve/IRreport/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
if ((load_irReport_script) && ($('#irReport').length)) {
	if (ir_offseason_hide === undefined) var ir_offseason_hide = false;
	if (deactivate_all_offseason === undefined) var deactivate_all_offseason = false;
	if ((is_offseason && ir_offseason_hide) || (is_offseason && deactivate_all_offseason)) {
		$('#irReport').parent('.mobile-wrap').remove();
		$('#irReport').remove();
		console.log("Offseason - IR Report Script");
	} else {

		//console.log("IR REPORT SCRIPT LAST UPDATED 11-1-21");

		if (irReport_qualifier === undefined) var irReport_qualifier = ({
			"Q": false,
			"D": false,
			"O": true,
			"I": true,
			"C": true,
			"H": true,
			"S": false
		});
		if (irReport_byeWeekException === undefined) var irReport_byeWeekException = true;
		if (irReport_includeHistory === undefined) var irReport_includeHistory = true;
		if (irReport_franchiseNameIconLogo === undefined) var irReport_franchiseNameIconLogo = 0; // 0:name; 1:icon; 2:logo; 3:icon+name; 4:logo+name)
		if (irReport_violationAfterPlayerLock === undefined) var irReport_violationAfterPlayerLock = "Player is ineligible for IR and will be cut from roster";
		if (irReport_violationBeforePlayerLock === undefined) var irReport_violationBeforePlayerLock = "WARNING: Player must be activated before kickoff or will be cut from roster";
		if (irReport_deactivationDate === undefined) var irReport_deactivationDate = false;
		if (irReport_activationDate === undefined) var irReport_activationDate = 0;
		if (irReport_allInjuries === undefined) var irReport_allInjuries = false;
		if (irReportPid_ar === undefined) var irReportPid_ar = new Array();

		jQuery("head").append('<scr' + 'ipt type="text/javascript" src="//mflscripts.com/mfl-apps/injury_history/json/injuryTracker2.js?rand=' + currentServerTime + '"></scr' + 'ipt>');

		//START SIMPLE MODAL
		jQuery("body").append('<div id="ir-report-modal-container" class="ir-report-modal"><div class="ir-report-modal-content"><div class="ir-report-modal-header"><span class="close" onclick="jQuery(\'#ir-report-modal-container\').removeAttr(\'style\');const irReportpop = document.querySelector(\'#ir-report-modal-content\');try {bodyScrollLock.enableBodyScroll(irReportpop);} catch(er) {};">X</span><h2 id="ir-report-modal-header-content"></h2></div><div class="ir-report-modal-body"><p id="ir-report-modal-content" style="margin-top:0"></p></div></div></div>');

		jQuery('head').append('<style>.ir-report-modal{display:none;position:fixed;z-index:99999;padding-top:1.875rem;left:0;top:0;width:100%;height:100%;overflow:auto;background: rgba(0, 0, 0, .7)}@-webkit-keyframes animatetop{from{top:-18.75rem;opacity:0}to{top:0;opacity:1}}@keyframes animatetop{from{top:-18.75rem;opacity:0}to{top:0;opacity:1}}.ir-report-modal-body{padding:0.625rem;padding-bottom:0.063rem;font-size:0.813rem;}#ir-report-modal-content li,#ir-report-modal-content ul{margin:0;padding:0;list-style:none}#ir-report-modal-content .ir-report-popup-position-li{font-weight:700;font-size:0.875rem;padding-left:0.313rem}#ir-report-modal-content .ir-report-popup-player-li{position:relative;padding-left:0.5rem}#ir-report-modal-content .ir-report-popup-player-li:last-child{border:0}#ir-report-modal-content .ir-report-popup-stats{font-style:italic;display:block;font-size:0.688rem;line-height:0.688rem;font-weight:400;padding:0.125rem 0;padding-left:0.188rem;max-width:21.875rem}#ir-report-modal-content span.ir-report-popup-points{text-indent:0;display:inline;position:absolute;top:50%;-ms-transform:translateY(-50%);transform:translateY(-50%);right:0.313rem;font-weight:700;font-size:0.813rem;border:0}#ir-report_modal-content{padding:0 0.625rem;}.ir-report-injury{padding-left:0.25rem;padding-right:0.25rem;border-radius:0.25rem;display:inline-block;min-width:6.25rem;text-align:center}.ir-report-healthy{color:white;background-color:green}.ir-report-questionable{color:black;background-color:yellow}.ir-report-doubtful{color:black;background-color:orange}.ir-report-out{color:white;background-color:red}.ir-report-modal-content{position:relative;padding:0;-webkit-animation-name:animatetop;-webkit-animation-duration:.4s;animation-name:animatetop;animation-duration:.4s;max-width:25rem;width:90%;border-radius:0.188rem;margin:auto}.ir-report-modal-header{padding:0.188rem;background:none;color:#000}#ir-report-modal-content{overflow-x:auto;max-height:65vh;}.ir-return-time{font-size:x-small;font-style:italic;display:block}@media only screen and (max-width: 35em){#irReport .rank{display:none!important}#irReport table,#irReport tbody,#irReport th,#irReport td,#irReport tr{display:block}#irReport th{position:absolute;top:-9999rem;left:-9999rem}#irReport td:before{position:absolute;left:0.375rem;padding-right:0.313rem;white-space:nowrap;font-size:0.75rem}#irReport td{padding-left:6.563rem!important;border:0!important;box-shadow:none!important;position:relative;text-align:left!important;width:100%!important}#irReport td:before{width:5.938rem;text-align:right;top:50%;transform:translateY(-50%)}#irReport td.ir_faicon i{margin-top:0.188rem}#irReport{max-height:21.875rem}#irReport td.ir_franchise:before{content:"Franchise :"}#irReport td.player:before{content:"Player :";margin-top:-0.125rem}#irReport td.ir_faicon:before{content:"Injury History :"}#irReport td.ir_deactivation:before{content:"Placed on IR :"}#irReport td.ir_activation:before{content:"Eligible Return :"}#irReport td.ir_kickoff:before{content:"Kickoff :"}#irReport td.ir_status:before{content:"Status :"}#irReport td.ir_details:before{content:"Details :"}.ir-return-time{display:inline}#irReport tbody{max-height:21.875rem;overflow:auto}#irReport thead{display:inline!important}#irReport thead tr{width:100%;display:table;}#irReport thead tr th{top:auto;left:auto;position:relative}}@media only screen and (max-width: 26.25em){#ir-report-modal-content td{text-align:center;float:left;width:100%;padding:0}#ir-report-modal-content td.ir_td{padding-bottom:0.188rem}}#IR_Report td{white-space:nowrap}#IR_Report td:first-of-type{width:1%}@media only screen and (max-width: 25em){#eligible-wrapper{display:block}}@media only screen and (max-width: 19.938em){#eligible-wrapper{display:none}}</style>');

		jQuery("#ir-report-modal-container").on("click", function () {
			$("#ir-report-modal-container").css('display', 'none');
			const irReportpop = document.querySelector('#ir-report-modal-content');
			try {
				bodyScrollLock.enableBodyScroll(irReportpop);
			} catch (er) {};
		});
		jQuery(".ir-report-modal-content").on("click", function (e) {
			e.stopPropagation();
		});

		///////////////////////////////////////////////////////////////////////////////////////////////////
		//
		//                                IR REPORT CUSTOM FUNCTIONS
		//
		///////////////////////////////////////////////////////////////////////////////////////////////////

		async function doMFL_liveSchedule() {
			var getIRWeek = completedWeek + 1;
			if (completedWeek === endWeek || completedWeek > endWeek) getIRWeek = endWeek
			// WE ARE NOT CACHING LIVE NFL SCHEDULE SO WE NEED TO READ IT EACH TIME
			if (dbDebug)
				if (dbDebugDetail) console.log("Api Call: nflSchedule App:IR Report Week:" + (getIRWeek));
				else console.log("Api Call");
			try {
				await reportNflScheduleAPI(getIRWeek);
				mfl_liveSchedule = ({
					"nfl": []
				})
				const property = `w_${getIRWeek}`;
				const nflScheduleAR = reportNflSchedule_ar[property].nflSchedule;
				if (nflScheduleAR.hasOwnProperty("matchup")) {
					if (nflScheduleAR.matchup.hasOwnProperty("kickoff")) { //ONLY ONE MATCHUP
						mfl_liveSchedule.nfl[nflScheduleAR.matchup.team[0].id] = ({
							"kickoff": data.nflSchedule.matchup.kickoff
						});
						mfl_liveSchedule.nfl[nflScheduleAR.matchup.team[1].id] = ({
							"kickoff": nflScheduleAR.matchup.kickoff
						});
					} else {
						for (var i = 0; i < nflScheduleAR.matchup.length; i++) {
							mfl_liveSchedule.nfl[nflScheduleAR.matchup[i].team[0].id] = ({
								"kickoff": nflScheduleAR.matchup[i].kickoff
							});
							mfl_liveSchedule.nfl[nflScheduleAR.matchup[i].team[1].id] = ({
								"kickoff": nflScheduleAR.matchup[i].kickoff
							});
						}
					}
				}
			} catch (error) {
				console.log("No Schedule For NFL Week Requested - doMFL_liveSchedule");
			}
		}

		function doIRReportArrays() {
			try {
				for (var i = 0; i < reportTransactions_ar.transactions.transaction.length; i++) {
					if (reportTransactions_ar.transactions.transaction[i].type === "IR" && reportTransactions_ar.transactions.transaction[i].deactivated !== "") {
						var tempArray = reportTransactions_ar.transactions.transaction[i].deactivated.split(",");
						for (var j = 0; j < tempArray.length; j++) {
							if (tempArray[j] > 0) {
								if (irReportPid_ar["pid_" + tempArray[j]] === undefined) irReportPid_ar["pid_" + tempArray[j]] = parseInt(reportTransactions_ar.transactions.transaction[i].timestamp);
							}
						}
					}
				}
			} catch (er) {}
		}

		function doIRReport_InjuryHistory(pid) {
    			if (!habmanInjuryTracker.injuries.injury["pid_" + pid]) {
 				alert("This player has no current injury status")
        			return false;
    			}
			var html = '';
			html += '<table align="center" cellspacing="1" class="report" id="popup-history-table">';
			html += '<tr><th colspan="2">Listed Chronologically</th></tr>';
			for (var j = 0; j < habmanInjuryTracker.injuries.injury["pid_" + pid].records.length; j++) {
				var injClass = '';
				switch (habmanInjuryTracker.injuries.injury["pid_" + pid].records[j].injCode) {
					case "-":
						injClass = 'healthy';
						break;
					case "Q":
						injClass = 'questionable';
						break;
					case "D":
						injClass = 'doubtful';
						break;
					case "O":
						injClass = 'out';
						break;
					case "I":
						injClass = 'out';
						break;
					case "S":
						injClass = 'out';
						break;
					case "C":
						injClass = 'out';
						break;
					case "H":
						injClass = 'out';
						break;
				}
				if (j % 2) var _class = 'eventablerow';
				else var _class = 'oddtablerow';
				if (habmanInjuryTracker.injuries.injury["pid_" + pid].records[j].injCode === "-")
					html += '<tr class="' + _class + '"><td>Wk ' + ('0' + habmanInjuryTracker.injuries.injury["pid_" + pid].records[j].week).substr(-2) + ' ' + formatMFLDate(new Date(parseInt(habmanInjuryTracker.injuries.injury["pid_" + pid].records[j].timestamp) * 1000), "ddd MMM dd hh:mmtt") + ' </td><td class="ir_td"><span class="ir-report-injury ir-report-' + injClass + '">' + habmanInjuryTracker.injuries.injury["pid_" + pid].records[j].injDetail + '</span></td></tr>';
				else
					html += '<tr class="' + _class + '"><td>Wk ' + ('0' + habmanInjuryTracker.injuries.injury["pid_" + pid].records[j].week).substr(-2) + ' ' + formatMFLDate(new Date(parseInt(habmanInjuryTracker.injuries.injury["pid_" + pid].records[j].timestamp) * 1000), "ddd MMM dd hh:mmtt") + ' </td><td class="ir_td"><span class="ir-report-injury ir-report-' + injClass + '">' + habmanInjuryTracker.injuries.injury["pid_" + pid].records[j].injCode + ' ' + habmanInjuryTracker.injuries.injury["pid_" + pid].records[j].injDetail + '</span></td></tr>';
			}
			html += '</tbody></table>';
			if (!mfl_liveSchedule.nfl.hasOwnProperty(playerDatabase["pid_" + pid].team))
				html += '<br><span style="font-style:italic;display:block;text-align:center">Note: Player for week ' + (completedWeek + 1) + ' is an NFL Free Agent or is on a bye</span>';
			else
				html += '<br><span style="font-style:italic;display:block;text-align:center">Note: ' + playerDatabase["pid_" + pid].team + ' week ' + (completedWeek + 1) + ' kickoff is on ' + formatMFLDate(new Date(parseInt(mfl_liveSchedule.nfl[playerDatabase["pid_" + pid].team].kickoff) * 1000), "ddd MMM d") + ' at ' + formatMFLDate(new Date(parseInt(mfl_liveSchedule.nfl[playerDatabase["pid_" + pid].team].kickoff) * 1000), "h:mmtt") + '</span>';

			jQuery("#ir-report-modal-header-content").html('' + playerDatabase["pid_" + pid].name + ' ' + playerDatabase["pid_" + pid].team + ' ' + playerDatabase["pid_" + pid].position + '');
			jQuery("#ir-report-modal-content").html(html);
			jQuery("#ir-report-modal-container").attr('style', 'display:block');
			jQuery('#ir-report-modal-content').scrollTop(0);
			const irReportpop = document.querySelector('#ir-report-modal-content');
			try {
				bodyScrollLock.disableBodyScroll(irReportpop);
			} catch (er) {};
		}

		function checkStatusIRReport(kickoffStatus, codeStatus) {
			if (irReport_byeWeekException && kickoffStatus === "Bye") return true;
			if (irReport_qualifier.hasOwnProperty(codeStatus))
				return irReport_qualifier[codeStatus];
			else
				return false;
		}

		function getFranchiseIRReport(fid) {
			switch (irReport_franchiseNameIconLogo) {
				case 0:
					return franchiseDatabase['fid_' + fid].name;
					break;
				case 1:
					if (franchiseDatabase['fid_' + fid].icon !== '')
						return '<img class="franchise_icon" src="' + franchiseDatabase['fid_' + fid].icon + '" title="' + franchiseDatabase['fid_' + fid].name + '" alt="' + franchiseDatabase['fid_' + fid].name + '" />';
					else if (franchiseDatabase['fid_' + fid].logo !== '')
						return '<img class="franchise_logo" src="' + franchiseDatabase['fid_' + fid].logo + '" title="' + franchiseDatabase['fid_' + fid].name + '" alt="' + franchiseDatabase['fid_' + fid].name + '" />';
					else
						return franchiseDatabase['fid_' + fid].name;
					break;
				case 2:
					if (franchiseDatabase['fid_' + fid].logo !== '')
						return '<img class="franchise_logo" src="' + franchiseDatabase['fid_' + fid].logo + '" title="' + franchiseDatabase['fid_' + fid].name + '" alt="' + franchiseDatabase['fid_' + fid].name + '" />';
					else if (franchiseDatabase['fid_' + fid].icon !== '')
						return '<img class="franchise_icon" src="' + franchiseDatabase['fid_' + fid].icon + '" title="' + franchiseDatabase['fid_' + fid].name + '" alt="' + franchiseDatabase['fid_' + fid].name + '" />';
					else
						return franchiseDatabase['fid_' + fid].name;
					break;
				case 3:
					if (franchiseDatabase['fid_' + fid].icon !== '')
						return '<img class="franchise_icon" src="' + franchiseDatabase['fid_' + fid].icon + '" title="' + franchiseDatabase['fid_' + fid].name + '" alt="' + franchiseDatabase['fid_' + fid].name + '" /> ' + franchiseDatabase['fid_' + fid].name;
					else if (franchiseDatabase['fid_' + fid].logo !== '')
						return '<img class="franchise_logo" src="' + franchiseDatabase['fid_' + fid].logo + '" title="' + franchiseDatabase['fid_' + fid].name + '" alt="' + franchiseDatabase['fid_' + fid].name + '" /> ' + franchiseDatabase['fid_' + fid].name;
					else
						return franchiseDatabase['fid_' + fid].name;
					break;
				case 4:
					if (franchiseDatabase['fid_' + fid].logo !== '')
						return '<img class="franchise_logo" src="' + franchiseDatabase['fid_' + fid].logo + '" title="' + franchiseDatabase['fid_' + fid].name + '" alt="' + franchiseDatabase['fid_' + fid].name + '" /> ' + franchiseDatabase['fid_' + fid].name;
					else if (franchiseDatabase['fid_' + fid].icon !== '')
						return '<img class="franchise_icon" src="' + franchiseDatabase['fid_' + fid].icon + '" title="' + franchiseDatabase['fid_' + fid].name + '" alt="' + franchiseDatabase['fid_' + fid].name + '" /> ' + franchiseDatabase['fid_' + fid].name;
					else
						return franchiseDatabase['fid_' + fid].name;
					break;
			}
		}

		function doIRReport() {
			var injuryRow = 0;
			var htmlCode = '';
			if (irReport_qualifier["Q"])
				if (htmlCode === "") htmlCode += "Q(Questionable)";
				else htmlCode += ", Q(Questionable)";
			if (irReport_qualifier["D"])
				if (htmlCode === "") htmlCode += "D(Doubtful)";
				else htmlCode += ", D(Doubtful)";
			if (irReport_qualifier["O"])
				if (htmlCode === "") htmlCode += "O(Out)";
				else htmlCode += ", O(Out)";
			if (irReport_qualifier["I"])
				if (htmlCode === "") htmlCode += "I(IR)";
				else htmlCode += ", I(IR)";
			if (irReport_qualifier["C"])
				if (htmlCode === "") htmlCode += "C(Covid)";
				else htmlCode += ", C(Covid)";
			if (irReport_qualifier["H"])
				if (htmlCode === "") htmlCode += "H(Holdout)";
				else htmlCode += ", H(Holdout)";
			if (irReport_qualifier["S"])
				if (htmlCode === "") htmlCode += "S(Suspended)";
				else htmlCode += ", S(Suspended)";
			if (htmlCode !== '') jQuery(".eligible-wrapper").html("IR Eligibility - " + htmlCode + "");
			htmlCode = '';
			var extraCol = 0;
			var allInjuriesHTML = '';
			var historyHTML = '';
			var deactivationDateHTML = '';
			var activationDateHTML = '';
			if (irReport_allInjuries) {
				extraCol++;
				var allInjuriesHTML = '<th style="text-align:center">Fantasy IR</th>';
			}
			if (irReport_includeHistory) {
				extraCol++;
				var historyHTML = '<th style="text-align:center">History</th>';
			}
			if (irReport_deactivationDate) {
				extraCol++;
				var deactivationDateHTML = '<th style="text-align:center">Placed on IR</th>';
			}
			if (irReport_activationDate > 0) {
				extraCol++;
				var activationDateHTML = '<th style="text-align:center">Eligible to Return</th>';
			}
			htmlCode += '<tr class="irlegendTh"><th class="eligible-wrapper" colspan="' + (5 + extraCol) + '" style="text-align:center">' + htmlCode + '</th></tr><tr><th style="text-align:left">Franchise</th><th style="text-align:left">Player</th>' + allInjuriesHTML + historyHTML + '<th style="text-align:center">Kickoff</th><th style="text-align:center">Status</th><th style="text-align:center">Details</th>' + deactivationDateHTML + activationDateHTML + '</tr>';

			for (var key in franchiseDatabase) {
				if (franchiseDatabase.hasOwnProperty(key) && parseInt(franchiseDatabase[key].id) > 0) {
					var fid = franchiseDatabase[key].id;
					for (var key1 in mfl_rosters["fid_" + fid]["player"]) {
						if (mfl_rosters["fid_" + fid]["player"].hasOwnProperty(key1)) {
							if (irReport_allInjuries || mfl_rosters["fid_" + fid]["player"][key1].status == "INJURED_RESERVE") {
								injuryRow++;
								var pid = mfl_rosters["fid_" + fid]["player"][key1].id;
								var pName = playerDatabase['pid_' + pid].name;
								var pTeam = playerDatabase['pid_' + pid].team;
								var pPosition = playerDatabase['pid_' + pid].position;
								try {
									if (mfl_liveSchedule.nfl[pTeam] == undefined)
										var kickoffTime = "Bye";
									else if (currentServerTime > parseInt(mfl_liveSchedule.nfl[pTeam].kickoff))
										var kickoffTime = "Locked";
									else
										var kickoffTime = formatMFLDate(new Date(parseInt(mfl_liveSchedule.nfl[pTeam].kickoff) * 1000), "ddd h:mm");
								} catch (er) {
									var kickoffTime = "Bye";
								}
								try {
									var tempDetails = mfl_injuries["player"]["pid_" + pid].details;
									var tempStatus = mfl_injuries["player"]["pid_" + pid].status;
									var tempCode = mfl_injuries["player"]["pid_" + pid].code;
								} catch (er) {
									var tempDetails = "No Injury";
									var tempStatus = "No Injury";
									var tempCode = "N/A";
								}

								if (irReport_allInjuries && tempStatus === "No Injury") continue;
								if (irReport_allInjuries && !irReport_qualifier.hasOwnProperty(tempCode)) continue;

								if (checkStatusIRReport(kickoffTime, tempCode)) {
									var tempTitle = tempStatus;
									var tempClass = '';
								} else if (kickoffTime === "Locked") {
									var tempTitle = irReport_violationAfterPlayerLock;
									var tempClass = " irViolation_AfterPlayerLock";
								} else {
									var tempTitle = irReport_violationBeforePlayerLock;
									var tempClass = " irViolation_BeforePlayerLock";
								}
								if (injuryRow % 2)
									htmlCode += '<tr class="eventablerow">';
								else
									htmlCode += '<tr class="oddtablerow">';

								htmlCode += '<td class="ir_franchise" style="text-align:left">' + getFranchiseIRReport(fid) + '</td>';
								htmlCode += '<td class="player" style="text-align:left"><a href="' + baseURLDynamic + '/' + year + '/player?L=' + league_id + '&P=' + pid + '" class="position_' + playerDatabase['pid_' + pid].position.toLowerCase() + '">' + pName + ' ' + pTeam + ' ' + pPosition + '</a></td>';
								if (irReport_allInjuries)
									if (mfl_rosters["fid_" + fid]["player"][key1].status == "INJURED_RESERVE")
										htmlCode += '<td class="ir_fantasy_ir" style="text-align:center"><i class="fa-regular fa-check" aria-hidden="true"></i></td>';
									else
										htmlCode += '<td class="ir_fantasy_ir" style="text-align:center">&nbsp;</td>';
								if (irReport_includeHistory) htmlCode += '<td class="ir_faicon" style="text-align:center"><i class="fa-regular fa-kit-medical" aria-hidden="true" style="cursor:pointer;color:var(--accent,inherit);font-size:120%;vertical-align:middle" onclick="doIRReport_InjuryHistory(\'' + pid + '\')" title="Click for Injury History"></i></td>';
								htmlCode += '<td class="ir_kickoff" style="text-align:center">' + kickoffTime + '</td>';
								htmlCode += '<td class="ir_status' + tempClass + '" title="' + tempTitle + '" style="text-align:center">' + tempCode + '</td>';
								htmlCode += '<td class="ir_details" style="text-align:center">' + tempDetails + '</td>';
								if (irReport_deactivationDate)
									if (mfl_rosters["fid_" + fid]["player"][key1].status == "INJURED_RESERVE")
										htmlCode += '<td class="ir_deactivation" style="text-align:center">' + formatMFLDate(new Date(irReportPid_ar["pid_" + pid] * 1000), "ddd MMM d") + '</td>';
									else
										htmlCode += '<td class="ir_deactivation" style="text-align:center">n/a</td>';
								if (irReport_activationDate > 0)
									if (mfl_rosters["fid_" + fid]["player"][key1].status == "INJURED_RESERVE")
										htmlCode += '<td class="ir_activation" style="text-align:center">' + formatMFLDate(new Date((irReportPid_ar["pid_" + pid] + irReport_activationDate * 24 * 60 * 60) * 1000), "ddd MMM d") + '<span class="ir-return-time">' + formatMFLDate(new Date((irReportPid_ar["pid_" + pid] + irReport_activationDate * 24 * 60 * 60) * 1000), " h:mmTT") + '</span>' + '</td>';
									else
										htmlCode += '<td class="ir_activation" style="text-align:center">n/a</td>';
								htmlCode += '</tr>';
							}
						}
					}
				}
			}
			document.getElementById("IR_Report").innerHTML = htmlCode;
			try {
				MFLPlayerPopupNewsIcon("irReport");
			} catch (er) {};
			if ($('#irReport tbody td').length == 0) {
				$('#irReport').parent().remove();
			}
			setTimeout(function () {
				if ($('#irReport tbody td').length == 0) {
					$('#irReport').parent().remove();
				}
			}, 100);
		}

		function triggerIrReport() {
			triggerIrReport_ran = true;
			doMFL_liveSchedule()
				.then(function (a1) {
					doIRReportArrays();
					doIRReport();
				})
				.catch(function (error) {
					console.error("Error triggering IR report:", error);
				});
		}

		function irReportListenerCheck() {
			triggerIrReport_count++;
			if (typeof reportFiveMinuteFullyLoaded !== "undefined") {
				if (reportFiveMinuteFullyLoaded) {
					clearInterval(irReportListener);
					if (!triggerIrReport_ran) triggerIrReport();
				}
			}
			if (triggerIrReport_count > 50) {
				clearInterval(irReportListener);
				console.log("Stop trying Playoff report after 5 seconds");
			}
		}
		if (triggerIrReport_ran === undefined) var triggerIrReport_ran = false;
		if (triggerIrReport_count === undefined) var triggerIrReport_count = 0;

		if (irReportListener === undefined) var irReportListener = setInterval("irReportListenerCheck()", 100);
	}
} // END IR REPORT SCRIPT


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// DICE ROLL SCRIPT  https://www.mflscripts.com/mfl-apps/diceRoll/script.js
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

if ((load_diceRoll_script) && ($('#dice_roll').length)) {
	console.log("DICE ROLL SCRIPT LAST UPDATED 11-1-21");
	if (typeof numOfDices === undefined) var numOfDices = 10;
	if (typeof numOfSides === undefined) var numOfSides = 10;
	if (typeof franchise_id !== "undefined") {
		if (typeof diceFranID === "undefined") diceFranID = franchise_id;
	}
	var mflScriptsrcUrl = 'https://www.mflscripts.com/mfl-apps/diceRoll/assets/processDiceRoll.php'; // YOU CAN LINK YOUR OWN HOSTED PHP HERE
	$(function () {
		showLeagueDiceRollResultsForCommish();
		commishRolled = false;
		if (typeof franchise_id !== 'undefined' && franchise_id !== '') {
			if (franchise_id !== '0000') // For owners login
			{
				checkIfDiceRolled();

			} else // For Commish login
			{
				$('<tr class="eventablerow"><td id="resetButton" align="center"><input type="submit" value="Reset All Dice Rolls" id="diceResetButton" name="Reset All Dice Rolls"  onclick="resetLeagueDiceRoll(); return false;" /></td></tr><tr id="commishInsertAfter" class="eventablerow"><td id="diceInputRow" align="center">Roll Dice For Owner</td></tr><tr class="oddtablerow dice_btn_row"><td id="inputButton" align="center"><input style="pointer-events:none;opacity:.5" type="submit" value="Roll Dice For Owner" id="diceRollButton" name="Roll Dice For Owner" onclick="rollDice(); commishRolled=true; return false;" /></td></tr>').insertAfter('#dicebtn_here');

				var dice_select = '';
				dice_select += '<tr class="eventablerow"><td>';
				dice_select += '<select id="diceRollSelect"><option value="" disabled selected hidden>Select Franchise To Roll For:</option>';
				for (var key in franchiseDatabase) {
					if (franchiseDatabase.hasOwnProperty(key) && key !== "fid_0000") {
						dice_select += '<option value="' + franchiseDatabase[key].id + '">' + franchiseDatabase[key].name + '</option>';
					}
				}
				dice_select += '</select></td></tr>';
				$('#diceInputRow').append(dice_select);
				$('#diceRollSelect').on('change', function () {
					diceFranID = $(this).val();
					$('td#inputButton input').css('pointer-events', '');
					$('td#inputButton input').css('opacity', '1');
					$('.commishDiceRollResults').remove();
				});
			}
		}
	});

	function showLeagueDiceRollResultsForCommish() {
		var url = `${mflScriptsrcUrl}?leagueId=${league_id}&getLeagueDataForCommish=Y`;
		fetch(url, {
				method: 'GET',
				async: true
			})
			.then(function (response) {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Network response was not ok.');
				}
			})
			.then(function (data) {
				if (typeof data === 'object') {
					showLeagueResultsTable(data);
				}
			})
			.catch(function (error) {
				console.error('Error:', error);
			});
	}

	function showLeagueResultsTable(leagueData) {
		var contentHTML = '<table " class="homepagemodule report" ><tr>';
		if (typeof franchise_id !== 'undefined' && franchise_id !== '') {
			if (franchise_id !== '0000') {
				contentHTML += '<th>Current Draft Order</th><th>Date of Dice Roll</th><th>Roll Results</th></tr>';
			} else {
				contentHTML += '<th>Current Draft Order</th><th>Date of Dice Roll</th><th>Roll Results</th><th>Reset Roll</th></tr>';
			}
		} else {
			contentHTML += '<th>Current Draft Order</th><th>Date of Dice Roll</th><th>Roll Results</th></tr>';
		}
		leagueDataArray = convertJSONObjectToArray(leagueData);
		var flag = false;
		for (var i = 0; leagueDataArray != null && i < leagueDataArray.length; i++) {
			if (typeof leagueDataArray[i] == 'object') {
				var tempObj = leagueDataArray[i];
				var fdb = franchiseDatabase['fid_' + tempObj.fid];
				var displayName = '';
				if (fdb.icon == null || fdb.icon.trim() == '') {
					displayName = fdb.name;
				} else {
					displayName = '<img src="' + fdb.icon + '"class="franchiseicon" title="' + fdb.name + '" />'
				}
				contentHTML += '<tr data-fId="' + fdb.id + '" data-name="' + fdb.name + '" data-dice="' + tempObj.total + '" class="franchise_rolls"><td><a href="' + window.baseURLDynamic + '/' + window.year + '/options?L=' + window.league_id + '&F=' + fdb.id + '&O=01">' + displayName + '</a></td>';
				contentHTML += '<td>' + tempObj.createdDate + '</td>';
				contentHTML += '<td class="dice_value">' + tempObj.total + '</td>';
				if (typeof franchise_id !== 'undefined' && franchise_id !== '') {
					if (franchise_id !== '0000') {} else {
						contentHTML += '<td><input type="submit" value="Reset" id="diceRemoveBtn" name="Reset" onclick="diceFran_id=$(this).closest(\'tr\').attr(\'data-fId\');diceFran_name=$(this).closest(\'tr\').attr(\'data-name\');resetFranchise()"></td>';
					}
				}
				contentHTML += '</tr>';
				flag = true;
			}
		}
		contentHTML += '</table>';
		if (flag) {
			$('#diceRollResult').html(contentHTML).show();
		} else {
			$('#diceRollResult').html('').show();
		}
	}

	function convertJSONObjectToArray(leagueData) {
		var result = new Array();
		var tempObj = null;
		for (var prop in leagueData) {
			tempObj = leagueData[prop];
			tempObj['fid'] = prop;

			result.push(tempObj);
		}

		result.sort(function (a, b) {
			return b.total - a.total;
		});
		return result;
	}

	function checkIfDiceRolled() {
		var url = `${mflScriptsrcUrl}?leagueId=${league_id}&franchiseId=${diceFranID}&checkIfLeagueExist=Y`;
		fetch(url, {
				method: 'GET',
				async: true
			})
			.then(function (response) {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Network response was not ok.');
				}
			})
			.then(function (data) {
				console.log("checkIfDiceRolled");
				if (commishRolled) {
					if (typeof data === 'object') {
						var tempObj = data;
						$('<tr class="oddtablerow commishDiceRollResults"><td align="center"><span class="warning">Your dice roll results of ' + tempObj.total + ' were submitted on ' + tempObj.createdDate + '</span></td></tr>').insertAfter('#dicebtn_here').show();
					} else {
						// do nothing
					}
				} else {
					if (typeof data === 'object') {
						var tempObj = data;
						$('<tr class="oddtablerow"><td align="center"><span class="warning">Your dice roll results of ' + tempObj.total + ' were submitted on ' + tempObj.createdDate + '</span></td></tr>').insertAfter('#dicebtn_here').show();
						console.log("checkIfDiceRolled2");
					} else {
						$('<tr class="oddtablerow dice_btn_row"><td id="inputButton" align="center"><input type="submit" value="Roll the Dice" id="diceRollButton" name="Roll the Dice"  onclick="rollDice(); return false;" /></td></tr>').insertAfter('#dicebtn_here');
						console.log("checkIfDiceRolled3");
					}
				}
			})
			.catch(function (error) {
				console.error('Error:', error);
			});
	}

	function postDiceDetails(totalValue) {
		var url = `${mflScriptsrcUrl}?leagueId=${league_id}&franchiseId=${diceFranID}&total=${totalValue}&checkIfLeagueExist=N`;
		fetch(url, {
				method: 'GET',
				async: true
			})
			.then(function (response) {
				if (response.ok) {
					if (commishRolled) {
						$('#diceRollSelect').prop('selectedIndex', 0);
						$('td#inputButton input').css('pointer-events', 'none');
						$('td#inputButton input').css('opacity', '.5');
					} else {
						$('.dice_btn_row').remove();
					}
					showLeagueDiceRollResultsForCommish();
					var urlNext = `${mflScriptsrcUrl}?leagueId=${league_id}&franchiseId=${diceFranID}&checkIfLeagueExist=Y`;
					fetch(urlNext, {
							method: 'GET',
							async: true
						})
						.then(function (response) {
							if (response.ok) {
								return response.json();
							} else {
								throw new Error('Network response was not ok.');
							}
						})
						.then(function (data) {
							console.log("checkIfDiceRolled");
							if (commishRolled) {
								if (typeof data === 'object') {
									var tempObj = data;
									$('<tr class="oddtablerow commishDiceRollResults"><td align="center"><span class="warning">Your dice roll results of ' + tempObj.total + ' were submitted on ' + tempObj.createdDate + '</span></td></tr>').insertAfter('#dicebtn_here');
								} else {
									// do nothing
								}
							} else {
								if (typeof data === 'object') {
									var tempObj = data;
									$('<tr class="oddtablerow"><td align="center"><span class="warning">Your dice roll results of ' + tempObj.total + ' were submitted on ' + tempObj.createdDate + '</span></td></tr>').insertAfter('#dicebtn_here');
								} else {
									$('<tr class="oddtablerow dice_btn_row"><td id="inputButton" align="center"><input type="submit" value="Roll the Dice" id="diceRollButton" name="Roll the Dice"  onclick="rollDice(); return false;" /></td></tr>').insertAfter('#dicebtn_here');
								}
							}
						})
						.catch(function (error) {
							console.error('Error:', error);
						});
				} else {
					throw new Error('Network response was not ok.');
				}
			})
			.catch(function (error) {
				console.error('Error:', error);
			});
	}

	function resetLeagueDiceRoll() {
		var txt = "Click 'OK' to reset all dice rolls for your league. Click 'CANCEL' to exit.";
		var r = confirm(txt);
		if (r) {
			var url = `${mflScriptsrcUrl}?leagueId=${league_id}&resetLeagueData=Y`;
			fetch(url, {
					method: 'GET',
					async: true
				})
				.then(function (response) {
					if (response.ok) {
						$('#diceRollSelect').prop('selectedIndex', 0);
						$('.commishDiceRollResults').remove();
						$('#diceRollSelect').prop('selectedIndex', 0);
						$('td#inputButton input').css({
							'pointer-events': 'none',
							'opacity': '.5'
						});
						showLeagueDiceRollResultsForCommish();
					} else {
						throw new Error('Network response was not ok.');
					}
				})
				.catch(function (error) {
					console.error('Error:', error);
				});
		}
	}

	function resetFranchise() {
		var txt = "Click 'OK' to reset " + diceFran_name + " Dice Roll. Click 'CANCEL' to exit.";
		var r = confirm(txt);
		if (r) {
			var url = `${mflScriptsrcUrl}?leagueId=${league_id}&franchiseId=${diceFran_id}&resetFranchise=Y`;
			fetch(url, {
					method: 'GET',
					async: true
				})
				.then(function (response) {
					if (response.ok) {
						showLeagueDiceRollResultsForCommish();
					} else {
						throw new Error('Network response was not ok.');
					}
				})
				.catch(function (error) {
					console.error('Error:', error);
				});
		}
	}

	function rollDice() {
		if ($('#diceRollResult tr[data-fId="' + diceFranID + '"]').length) {
			$('<tr class="oddtablerow commishDiceRollResults"><td align="center"><span class="warning">This Franchise has already rolled!</span></td></tr>').insertAfter('#dicebtn_here');
			$('#diceRollSelect').prop('selectedIndex', 0);
			$('td#inputButton input').css('pointer-events', 'none');
			$('td#inputButton input').css('opacity', '.5');
		} else {
			$('<tr id="diceRollImg" class="eventablerow" style="display:none"><td align="center"><div style="display:none"><img style="-webkit-transform: scaleY(-1);transform: scaleY(-1);width:5rem;height:auto;vertical-align:bottom" align="middle" src="https://www.mflscripts.com//mfl-apps/diceRoll/dice.gif"><img style="width:6.25rem;height:auto;vertical-align:middle" align="middle" src="https://www.mflscripts.com//mfl-apps/diceRoll/dice.gif"><img style="-webkit-transform: scale(-1);transform: scale(-1);width:5rem;height:auto;vertical-align:bottom" align="middle" src="https://www.mflscripts.com//mfl-apps/diceRoll/dice.gif"></div></td></tr>').insertAfter('#dicebtn_here');
			var contentHTML = '';
			var tableHeader = '';
			var diceUnitValue = '';
			var total = 0;
			var tempVal = 0;
			for (var i = 1; i <= numOfDices; i++) {
				tempVal = Math.floor(Math.random() * numOfSides) + 1;
				total += tempVal;
			}
			setTimeout(function () {
				$('#diceRollImg').show();
			}, 200);
			setTimeout(function () {
				$('#diceRollImg div').slideDown("slow", function () {});
			}, 300);
			setTimeout(function () {
				$('#diceRollImg div').slideUp("slow", function () {
					$('#diceRollImg').remove();
					postDiceDetails(total);
				});
			}, 2500);
		}
	}

	$('head').append('<style>#diceRollResult td,#diceRollResult th{text-align:left}#dice_roll .franchiseicon{height:' + diceFranchiseIconHeight + (useREM ? "rem" : "px") + '!important}#dice_roll .franchiseicon{width:' + diceFranchiseIconWidth + (useREM ? "rem" : "px") + '!important}#dice_roll .franchiseicon{vertical-align:middle}</style>');
} // DICE ROLL SCRIPT


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// BACKUP AND RESTORE HPMS
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
$('.myfantasyleague_menu li.mm-league a[href*="commissioner_setup"]').parent().after('<li><a class="no-sub" onclick="restoreHPM()">Backup/Restore HPMs</a></li>');
$('.myfantasyleague_menuMobile li.mm-league a[href*="commissioner_setup"]').parent().after('<li><a class="no-sub" onclick="restoreHPM()">Backup/Restore HPMs</a></li>');

$('body').append('<style>#copyLayout::-webkit-outer-spin-button,#copyLeague::-webkit-outer-spin-button,#copyLeagueYEAR::-webkit-outer-spin-button,#copyLayoutYEAR::-webkit-outer-spin-button,#copyLayout::-webkit-inner-spin-button,#copyLeague::-webkit-inner-spin-button,#copyLeagueYEAR::-webkit-inner-spin-button,#copyLayoutYEAR::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}#copyLayout,#copyLeague,#copyLeagueYEAR,#copyLayoutYEAR{font-size:1rem;margin:0 auto;width:11rem;display:block;outline:none}#copyLeagueYEAR,#copyLayoutYEAR{margin-top:0.3rem}</style>');

function restoreHPM() {
	if (preventDBLClick) {
		preventDBLClick = false;
		$.ajax({
			url: `${baseURLDynamic}/${year}/csetup?L=${league_id}&C=HMPGMSG&SEQNO=501&PRINTER=1`,
			type: "GET",
			dataType: 'html',
			xhrFields: {
				withCredentials: true
			},
			success: function (data) {
				var hpm_hasContent = $(data).find('#MSG').val();
				$.ajax({
					url: `${baseURLDynamic}/${year}//csetup?L=${league_id}&C=HMPGMSG&SEQNO=502&PRINTER=1`,
					type: "GET",
					dataType: 'html',
					xhrFields: {
						withCredentials: true
					},
					success: function (data) {
						var hpm_hasContent2 = $(data).find('#MSG').val();
						$.ajax({
							url: `${baseURLDynamic}/${year}//csetup?L=${league_id}&C=HMPGMSG&SEQNO=503&PRINTER=1`,
							type: "GET",
							dataType: 'html',
							xhrFields: {
								withCredentials: true
							},
							success: function (data) {
								var hpm_hasContent3 = $(data).find('#MSG').val();
								if (hpm_hasContent.length > 0 || hpm_hasContent2.length > 0 || hpm_hasContent3.length > 0) {
									$('body').append('<div class="restoreHPMWrap" style="position:fixed;height:100%;width:100%;background:rgba(0, 0, 0, 0.7);left:0;top:0;z-index:99999"></div><div class="restoreHPMs"><span id="MFLPlayerPopupClose" class="restoreHPMClose">X</span><input style="display:block;margin:0.625rem auto" type="button" onclick="backupHPMs();" value="Backup All Homepage Messages"><input id="HPM_Restore_btn" style="display:block;margin:0.625rem auto" type="button" onclick="restoreHPMs();" value="Restore All Homepage Messages"><input id="HPM_Delete_btn" style="display:block;margin:0.625rem auto" type="button" onclick="deleteHPMs();" value="Delete All Homepage Messages"><h3 style="line-height:2.125rem;">Copy HPMs To Another League</h3><input id="copyLeague" maxlength="5" type="number" placeholder="Enter 5 Digit LeagueID"><h4 style="font-size:0.75rem;color:red;width:80%;margin:0 auto;margin-top:0.625rem">You MUST be logged in as commissioner to the site you are copying HPMs to.</h4><input id="HPM_Copy_btn" style="display:block;margin:0.625rem auto" disabled="disabled" type="button" onclick="copyHPMs();" value="Copy HPMs"><input id="HPTabs_Copy_btn" style="display:block;margin:0.625rem auto" type="button" onclick="copyTabsLayout();" value="Backup Homepage Tabs Layout"><input id="HPTabs_Restore_btn" style="display:block;margin:0.625rem auto" disabled="disabled" type="button" onclick="restoreTabsLayout();" value="Restore Homepage Tabs Layout"><h3 style="line-height:2.125rem;">Copy Tabs Layout To Another League</h3><input id="copyLayout" maxlength="5" type="number" placeholder="Enter 5 Digit LeagueID"><h4 style="font-size:0.75rem;color:red;width:80%;margin:0 auto;margin-top:0.625rem">You MUST be logged in as commissioner to the site you are copying layout to.</h4><input id="HPM_Layout_btn" style="display:block;margin:0.625rem auto" disabled="disabled" type="button" onclick="copyLayout();" value="Copy Tabs Layout"></div>');

									const Input = document.getElementById('copyLeague');
									const InputLayout = document.getElementById('copyLayout');

									function limitDigits(element, amount) {
										element.addEventListener('input', () => {
											if (element.value.length > amount) {
												element.value = Math.floor(element.value / 10);
												//console.log("input not filled out with 5 digits yet");
												$('#HPM_Copy_btn').attr('disabled', 'disabled');
												//$('#copyLeagueYEAR').remove();
											} else if (element.value.length === 5) {
												//console.log("input IS filled out with 5 digits")
												//$('#HPM_Copy_btn').removeAttr('disabled');
												if ($('#copyLeagueYEAR').length === 0) $('#copyLeague').after('<input id="copyLeagueYEAR" maxlength="4" type="number" placeholder="Enter Year">');
												const InputYear = document.getElementById('copyLeagueYEAR');
												limitDigitsYear(InputYear, 4);
											} else if (element.value.length < 5) {
												$('#HPM_Copy_btn').attr('disabled', 'disabled');
												$('#copyLeagueYEAR').remove();
											}
										})
									}
									limitDigits(Input, 5);

									function limitDigitsLayout(element, amount) {
										element.addEventListener('input', () => {
											if (element.value.length > amount) {
												element.value = Math.floor(element.value / 10);
												//console.log("input not filled out with 5 digits yet");
												$('#HPM_Layout_btn').attr('disabled', 'disabled');
												//$('#copyLayoutYEAR').remove();
											} else if (element.value.length === 5) {
												//console.log("input IS filled out with 5 digits")
												//$('#HPM_Layout_btn').removeAttr('disabled');
												if ($('#copyLayoutYEAR').length === 0) $('#copyLayout').after('<input id="copyLayoutYEAR" maxlength="4" type="number" placeholder="Enter Year">');
												const InputLayoutYear = document.getElementById('copyLayoutYEAR');
												limitDigitsLayoutYear(InputLayoutYear, 4);
											} else if (element.value.length < 5) {
												$('#HPM_Layout_btn').attr('disabled', 'disabled');
												$('#copyLayoutYEAR').remove();
											}
										})
									}
									limitDigitsLayout(InputLayout, 5);

									function limitDigitsYear(element, amount) {
										element.addEventListener('input', () => {
											if (element.value.length > amount) {
												element.value = Math.floor(element.value / 10);
											} else if (element.value.length === 4) {
												$('#HPM_Copy_btn').removeAttr('disabled');
											} else if (element.value.length < 4) {
												$('#HPM_Copy_btn').attr('disabled', 'disabled');
											}
										})
									}

									function limitDigitsLayoutYear(element, amount) {
										element.addEventListener('input', () => {
											if (element.value.length > amount) {
												element.value = Math.floor(element.value / 10);
											} else if (element.value.length === 4) {
												$('#HPM_Layout_btn').removeAttr('disabled');
											} else if (element.value.length < 4) {
												$('#HPM_Layout_btn').attr('disabled', 'disabled');
											}
										})
									}
								} else {
									$('body').append('<div class="restoreHPMWrap" style="position:fixed;height:100%;width:100%;background:rgba(0, 0, 0, 0.7);left:0;top:0;z-index:99999"></div><div class="restoreHPMs"><span id="MFLPlayerPopupClose" class="restoreHPMClose">X</span><input style="display:block;margin:0.625rem auto" type="button" onclick="backupHPMs();" value="Backup All Homepage Messages"><input id="HPM_Restore_btn" style="display:block;margin:0.625rem auto" type="button" onclick="restoreHPMs();" disabled="disabled" value="Restore All Homepage Messages"><input id="HPM_Delete_btn" style="display:block;margin:0.625rem auto" type="button" onclick="deleteHPMs();" value="Delete All Homepage Messages"><h3 style="line-height:2.125rem;">Copy HPMs To Another League</h3><input id="copyLeague" maxlength="5" type="number" placeholder="Enter 5 Digit LeagueID"><h4 style="font-size:0.75rem;color:red;width:80%;margin:0 auto;margin-top:0.625rem">You MUST be logged in as commissioner to the site you are copying HPMs to.</h4><input id="HPM_Copy_btn" style="display:block;margin:0.625rem auto" disabled="disabled" type="button" onclick="copyHPMs();" value="Copy HPMs"><input id="HPTabs_Copy_btn" style="display:block;margin:0.625rem auto" type="button" onclick="copyTabsLayout();" value="Backup Homepage Tabs Layout"><input id="HPTabs_Restore_btn" style="display:block;margin:0.625rem auto" disabled="disabled" type="button" onclick="restoreTabsLayout();" value="Restore Homepage Tabs Layout"><h3 style="line-height:2.125rem;">Copy Tabs Layout To Another League</h3><input id="copyLayout" maxlength="5" type="number" placeholder="Enter 5 Digit LeagueID"><h4 style="font-size:0.75rem;color:red;width:80%;margin:0 auto;margin-top:0.625rem">You MUST be logged in as commissioner to the site you are copying layout to.</h4><input id="HPM_Layout_btn" style="display:block;margin:0.625rem auto" disabled="disabled" type="button" onclick="copyLayout();" value="Copy Tabs Layout"></div>');

									const Input = document.getElementById('copyLeague');
									const InputLayout = document.getElementById('copyLayout');

									function limitDigits(element, amount) {
										element.addEventListener('input', () => {
											if (element.value.length > amount) {
												element.value = Math.floor(element.value / 10);
												//console.log("input not filled out with 5 digits yet");
												$('#HPM_Copy_btn').attr('disabled', 'disabled');
												//$('#copyLeagueYEAR').remove();
											} else if (element.value.length === 5) {
												//console.log("input IS filled out with 5 digits")
												//$('#HPM_Copy_btn').removeAttr('disabled');
												if ($('#copyLeagueYEAR').length === 0) $('#copyLeague').after('<input id="copyLeagueYEAR" maxlength="4" type="number" placeholder="Enter Year">');
												const InputYear = document.getElementById('copyLeagueYEAR');
												limitDigitsYear(InputYear, 4);
											} else if (element.value.length < 5) {
												$('#HPM_Copy_btn').attr('disabled', 'disabled');
												$('#copyLeagueYEAR').remove();
											}
										})
									}
									limitDigits(Input, 5);

									function limitDigitsLayout(element, amount) {
										element.addEventListener('input', () => {
											if (element.value.length > amount) {
												element.value = Math.floor(element.value / 10);
												//console.log("input not filled out with 5 digits yet");
												$('#HPM_Layout_btn').attr('disabled', 'disabled');
												//$('#copyLayoutYEAR').remove();
											} else if (element.value.length === 5) {
												//console.log("input IS filled out with 5 digits")
												//$('#HPM_Layout_btn').removeAttr('disabled');
												if ($('#copyLayoutYEAR').length === 0) $('#copyLayout').after('<input id="copyLayoutYEAR" maxlength="4" type="number" placeholder="Enter Year">');
												const InputLayoutYear = document.getElementById('copyLayoutYEAR');
												limitDigitsLayoutYear(InputLayoutYear, 4);
											} else if (element.value.length < 5) {
												$('#HPM_Layout_btn').attr('disabled', 'disabled');
												$('#copyLayoutYEAR').remove();
											}
										})
									}
									limitDigitsLayout(InputLayout, 5);

									function limitDigitsYear(element, amount) {
										element.addEventListener('input', () => {
											if (element.value.length > amount) {
												element.value = Math.floor(element.value / 10);
											} else if (element.value.length === 4) {
												$('#HPM_Copy_btn').removeAttr('disabled');
											} else if (element.value.length < 4) {
												$('#HPM_Copy_btn').attr('disabled', 'disabled');
											}
										})
									}

									function limitDigitsLayoutYear(element, amount) {
										element.addEventListener('input', () => {
											if (element.value.length > amount) {
												element.value = Math.floor(element.value / 10);
											} else if (element.value.length === 4) {
												$('#HPM_Layout_btn').removeAttr('disabled');
											} else if (element.value.length < 4) {
												$('#HPM_Layout_btn').attr('disabled', 'disabled');
											}
										})
									}
								}
								$.ajax({
									url: `${baseURLDynamic}/${year}//csetup?L=${league_id}&C=HMPGMSG&SEQNO=301&PRINTER=1`,
									type: "GET",
									dataType: 'html',
									xhrFields: {
										withCredentials: true
									},
									success: function (data) {
										var hpm_hasContent4 = $(data).find('#MSG').val();
										if (hpm_hasContent4.length > 0) {
											$('#HPTabs_Restore_btn').removeAttr('disabled');
										} else {
											$('#HPTabs_Restore_btn').attr('disabled', 'disabled');
										}
									}
								});
							}
						});
					}
				});
			}
		});
	} else {
		console.log("DBL Click Prevented")
	}
}

function copyTabsLayout() {
	if (confirm("Do you wish to backup your Homepage Layout? This will overwrite your current Homepage Layout backup if you have created one before.")) {
		console.log("Run Backup Tabs Layout");
		copyTabsLayoutRun(); // Start functions to backup tabs Layout
	} else {
		console.log("Do Not Run Backup Tabs Layout")
	}
}

function restoreTabsLayout() {
	if (confirm("Do you wish to restore your saved Homepage Layout? This will overwrite your current Homepage Layout")) {
		console.log("Run Restore Tabs Layout");
		restoreSiteLayout(); // Start functions to restore tabs Layout
	} else {
		console.log("Do Not Run Restore Tabs Layout")
	}
}

function deleteHPMs() {
	if (confirm("Beware !! This will remove all current HPMs. Do you wish to continue? We recommend running a backup of your site before deleting all HPMs. You can then install this script in any HPM and run a restore.")) {
		console.log("Run HPM Backup");
		$('body').css("pointer-events", "none");
		$('.HPMFinished,.HPMWarning').remove();
		$('.restoreHPMs').append('<div style="text-align:center;font-weight:bold" class="HPMWarning">Do not leave this page or close out this box until all messages are deleted and site is refreshed.</br><i style="font-size:1.875rem;margin:1.625rem 0" class="fa-regular fa-spinner fa-spin fa-2xl"></i></div>');
		delete_MFL_HPMs(); // Run Delete All HPM Function
	} else {
		console.log("Do Not Delete HPMs")
	}
}

function backupHPMs() {
	if (confirm("Do you wish to backup all your current HPMs? This will overwrite any existing backups.")) {
		console.log("Run HPM Backup");
		$('body').css("pointer-events", "none");
		$('.HPMFinished,.HPMWarning').remove();
		$('.restoreHPMs').append('<div style="text-align:center;font-weight:bold" class="HPMWarning">Do not leave this page or close out this box until all messages are backed up and site is refreshed.</br><i style="font-size:1.875rem;margin:1.625rem 0" class="fa-regular fa-spinner fa-spin fa-2xl"></i></div>');
		backupSiteHPMs(); // Start functions to copy all HPMs to messages 501-525
	} else {
		console.log("Do Not Run HPM Backup")
	}
}

function restoreHPMs() {
	if (confirm("Do you wish to restore all your HPMs? This will overwrite all current HPMs.")) {
		console.log("Run Restore Backups");
		$('body').css("pointer-events", "none");
		$('.HPMFinished,.HPMWarning').remove();
		$('.restoreHPMs').append('<div style="text-align:center;font-weight:bold;color:red" class="HPMWarning">Do not leave this page or close out this box until all messages are restored up and site is refreshed.</br><i style="font-size:1.875rem;margin:1.625rem 0" class="fa-regular fa-spinner fa-spin fa-2xl"></i></div>');
		restoreSiteHPMs(); // Start functions to restore all HPMs to messages 1-25
	} else {
		console.log("Do Not Run HPM Restore")
	}
}

function HPMfinished() {
	$('body').css("pointer-events", "");
	$('.HPMStatus').remove();
	$('.HPMWarning').replaceWith('<div style="text-align:center;font-weight:bold;color:green" class="HPMFinished">Finished ! Page will reload in 1 second.</div>');
	setTimeout(() => {
		location.reload();
	}, 1000);
}

// HOMEPAGE MESSAGES TRANSFER FUNCTIONS
if (typeof copyinputVal === 'undefined') copyinputVal = league_id;
if (typeof copyinputYearVal === 'undefined') copyinputYearVal = year;

function copyHPMs() {
	if (confirm("You must be signed in as commissioner to both sites you are copying from and to. This will delete all HPMs on the destination site. Are you sure you want to proceed? Attn: Copy over css file before installing HPMs on new site.")) {
		//console.log("Run Copy HPMs To New League");
		$('body').css("pointer-events", "none");
		$('.HPMFinished,.HPMWarning').remove();
		$('.restoreHPMs').append('<div style="text-align:center;font-weight:bold" class="HPMWarning">Do not leave this page or close out this box until all messages are copied to new site and this page is refreshed.</br><i style="font-size:1.875rem;margin:1.625rem 0" class="fa-regular fa-spinner fa-spin fa-2xl"></i></div>');
		copyinputVal = document.getElementById("copyLeague").value;
		copyinputYearVal = document.getElementById("copyLeagueYEAR").value;
		$('#copyLayoutYEAR,#copyLeagueYEAR').remove();
		$('#HPM_Layout_btn,#HPM_Copy_btn').attr('disabled', 'disabled');
		GetServerID();
	} else {
		//console.log("Do Not Copy HPMs To New League");
		copyinputVal = league_id;
		copyinputYearVal = year;
		$('#copyLayout,#copyLeague').val('');
		$('#copyLayoutYEAR,#copyLeagueYEAR').remove();
		$('#HPM_Layout_btn,#HPM_Copy_btn').attr('disabled', 'disabled');
	}
}

// TAB LAYOUT TRANSFER FUNCTIONS
if (typeof copyinputValLayout === 'undefined') copyinputValLayout = league_id;
if (typeof copyinputValYearLayout === 'undefined') copyinputValYearLayout = year;

function copyLayout() {
	if (confirm("You must be signed in as commissioner to both sites you are copying from and to. This will delete tabs layout on the destination site. Are you sure you want to proceed?")) {
		//console.log("Run Copy HPMs To New League");
		$('body').css("pointer-events", "none");
		$('.HPMFinished,.HPMWarning').remove();
		$('.restoreHPMs').append('<div style="text-align:center;font-weight:bold" class="HPMWarning">Do not leave this page or close out this box until layout is copied to new site and this page is refreshed.</br><i style="font-size:1.875rem;margin:1.625rem 0" class="fa-regular fa-spinner fa-spin fa-2xl"></i></div>');
		copyinputValLayout = document.getElementById("copyLayout").value;
		copyinputValYearLayout = document.getElementById("copyLayoutYEAR").value;
		$('#copyLayoutYEAR,#copyLeagueYEAR').remove();
		$('#HPM_Layout_btn,#HPM_Copy_btn').attr('disabled', 'disabled');
		GetServerIDLayout();
	} else {
		//console.log("Do Not Copy Layout To New League");
		copyinputValLayout = league_id;
		copyinputValYearLayout = year;
		$('#copyLayout,#copyLeague').val('');
		$('#copyLayoutYEAR,#copyLeagueYEAR').remove();
		$('#HPM_Layout_btn,#HPM_Copy_btn').attr('disabled', 'disabled');
	}
}

// THIS FUNCTION IS FOR TRANSER TABS LAYOUT TO ANOTHER SITE
function GetServerIDLayout() {
	$.ajax({
		url: `//api.myfantasyleague.com/${copyinputValYearLayout}/export?TYPE=myleagues&JSON=1`,
		type: "GET",
		dataType: 'json',
		xhrFields: {
			withCredentials: true
		},
		success: function (data) {
			var hpm_leagues = data.leagues.league;
			for (var i = 0; i < hpm_leagues.length; i++) {
				if (hpm_leagues[i].league_id === copyinputValLayout) {
					hpm_serverIDLayout = hpm_leagues[i].url.substr(hpm_leagues[i].url.indexOf("www") + 3, 2);
					console.log(hpm_serverIDLayout);
				}
			}
			copyLayouttoNewSite();
		},
		error: function (xhr) {
			transferErrorLayout();
		}

	});
}

// THIS FUNCTION IS FOR TRANSFER HOMEPAGE MESSAGES TO ANOTHER SITE
function GetServerID() {
	$.ajax({
		url: `//api.myfantasyleague.com/${copyinputYearVal}/export?TYPE=myleagues&JSON=1`,
		type: "GET",
		dataType: 'json',
		xhrFields: {
			withCredentials: true
		},
		success: function (data) {
			var hpm_leagues = data.leagues.league;
			for (var i = 0; i < hpm_leagues.length; i++) {
				if (hpm_leagues[i].league_id === copyinputVal) {
					hpm_serverID = hpm_leagues[i].url.substr(hpm_leagues[i].url.indexOf("www") + 3, 2);
					console.log(hpm_serverID);
				}
			}
			copyHPMtoNewSite();
		},
		error: function (xhr) {
			transferError();
		}
	});
}

// CLOSE POPUP
$(document).on('click', '.restoreHPMClose,.restoreHPMWrap', function (e) {
	preventDBLClick = true;
	$('.restoreHPMWrap,.restoreHPMs').remove();
});


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//RESTORE ALL HOMEPAGE MESSAGES//////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
function restoreSiteHPMs() {
	ajaxRestore = true;
	var i = 0;
	var hpmCount = setInterval(function () {
		if (ajaxRestore) {
			ajaxRestore = false;
			if (i <= 26) {
				if (i < 10) {
					urlGET = `${baseURLDynamic}/${year}/csetup?L=${league_id}&C=HMPGMSG&SEQNO=50${i}&PRINTER=1`;
				} else {
					urlGET = `${baseURLDynamic}/${year}/csetup?L=${league_id}&C=HMPGMSG&SEQNO=5${i}&PRINTER=1`;
				}
				$.ajax({
					url: urlGET,
					type: "GET",
					dataType: 'html',
					xhrFields: {
						withCredentials: true
					},
					success: function (data) {
						hpm_txt = $(data).find('#MSG').val();
						hpm_name = $(data).find('form table.report input[name="LABEL"]').val();
						if (hpm_name.indexOf("MARKASFOOTER") >= 0) {
							hpm_name = hpm_name.replace(' MARKASFOOTER', '');
							if (i === 1) {
								urlPOST = `${baseURLDynamic}/${year}/message?LEAGUE_ID=${league_id}&NAME=message&IN_FOOTER=Yes`;
							} else {
								urlPOST = `${baseURLDynamic}/${year}/message?LEAGUE_ID=${league_id}&NAME=message${i}&IN_FOOTER=Yes`;
							}
						} else if (hpm_name.indexOf("MARKASHEADER") >= 0) {
							hpm_name = hpm_name.replace(' MARKASHEADER', '');
							if (i === 1) {
								urlPOST = `${baseURLDynamic}/${year}/message?LEAGUE_ID=${league_id}&NAME=message&IN_HEADER=Yes`;
							} else {
								urlPOST = `${baseURLDynamic}/${year}/message?LEAGUE_ID=${league_id}&NAME=message${i}&IN_HEADER=Yes`;
							}
						} else {
							if (i === 1) {
								urlPOST = `${baseURLDynamic}/${year}/message?LEAGUE_ID=${league_id}&NAME=message`;
							} else {
								urlPOST = `${baseURLDynamic}/${year}/message?LEAGUE_ID=${league_id}&NAME=message${i}`;
							}
						}
						$.ajax({
							url: urlPOST,
							xhrFields: {
								withCredentials: true
							},
							data: {
								MSG: hpm_txt,
								LABEL: hpm_name
							},
							cache: false,
							type: "POST",
							success: function (response) {
								hpm_txt = void 0;
								hpm_name = void 0;
								isFooter = void 0;
								isHeader = void 0;
								urlPOST = void 0;
								ajaxRestore = true;
								console.log("Finished Restoring Up HPM# " + i);
								if ($('.restore_count_' + i).length < 1) $('.restoreHPMs').append('<div class="HPMStatus restore_count_' + i + '">HPM #' + i + ' - Restore Complete</div>');
								$(".restoreHPMs").animate({ scrollTop: $(".restoreHPMs")[0].scrollHeight}, 1);
								i++; // add +1 to counter after success of both ajax calls
							},
							error: function (xhr) {
								console.log("HPM # " + i + " Failed to Restore");
								i++
							}
						});
					},
					error: function (xhr) {
						console.log("HPM # " + i + " Failed to Restore");
						i++
					}
				});
			} else {
				clearInterval(hpmCount);
				HPMfinished(); //FINISH RESTORING MESSAGES & RELOAD PAGE
				ajaxRestore = void 0;
			}
		}
	}, 500);
}
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//END RESTORE ALL HOMEPAGE MESSAGES//////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//BACKUP ALL HOMEPAGE MESSAGES///////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
function backupSiteHPMs() {
	ajaxBackup = true;
	var i = 0;
	var hpmCount = setInterval(function () {
		if (ajaxBackup) {
			ajaxBackup = false;
			if (i <= 26) {
				if (i === 1) {
					urlGET = `${baseURLDynamic}/${year}/csetup?L=${league_id}&C=HMPGMSG&PRINTER=1`;
				} else {
					urlGET = `${baseURLDynamic}/${year}/csetup?L=${league_id}&C=HMPGMSG&SEQNO=${i}&PRINTER=1`;
				}
				$.ajax({
					url: urlGET,
					type: "GET",
					dataType: 'html',
					xhrFields: {
						withCredentials: true
					},
					success: function (data) {
						hpm_txt = $(data).find('#MSG').val();
						hpm_name = $(data).find('form table.report input[name="LABEL"]').val();
						isFooter = $(data).find('#IN_FOOTER_Yes[checked="checked"]');
						isHeader = $(data).find('#IN_HEADER_Yes[checked="checked"]');
						if (isFooter.length > 0) {
							if (i < 10) {
								urlPOST = `${baseURLDynamic}/${year}/message?LEAGUE_ID=${league_id}&NAME=message50${i}`;
							} else {
								urlPOST = `${baseURLDynamic}/${year}/message?LEAGUE_ID=${league_id}&NAME=message5${i}`;
							}
							hpm_name = hpm_name + " MARKASFOOTER";
						} else if (isHeader.length > 0) {
							if (i < 10) {
								urlPOST = `${baseURLDynamic}/${year}/message?LEAGUE_ID=${league_id}&NAME=message50${i}`;
							} else {
								urlPOST = `${baseURLDynamic}/${year}/message?LEAGUE_ID=${league_id}&NAME=message5${i}`;
							}
							hpm_name = hpm_name + " MARKASHEADER";
						} else {
							if (i < 10) {
								urlPOST = `${baseURLDynamic}/${year}/message?LEAGUE_ID=${league_id}&NAME=message50${i}`;
							} else {
								urlPOST = `${baseURLDynamic}/${year}/message?LEAGUE_ID=${league_id}&NAME=message5${i}`;
							}
						}
						$.ajax({
							url: urlPOST,
							xhrFields: {
								withCredentials: true
							},
							data: {
								MSG: hpm_txt,
								LABEL: hpm_name
							},
							cache: false,
							type: "POST",
							success: function (response) {
								hpm_txt = void 0;
								hpm_name = void 0;
								isFooter = void 0;
								isHeader = void 0;
								urlPOST = void 0;
								ajaxBackup = true;
								console.log("Finished Backing Up HPM# " + i);
								if ($('.backup_count_' + i).length < 1) $('.restoreHPMs').append('<div class="HPMStatus backup_count_' + i + '">HPM #' + i + ' - Backup Complete</div>');
								$(".restoreHPMs").animate({ scrollTop: $(".restoreHPMs")[0].scrollHeight}, 1);
								i++;
							},
							error: function (xhr) {
								console.log("HPM # " + i + " Failed to Backup");
								i++
							}
						});
					},
					error: function (xhr) {
						console.log("HPM # " + i + " Failed to Backup");
						i++
					}
				});
			} else {
				clearInterval(hpmCount);
				HPMfinished(); //FINISH DELETING MESSAGES & RELOAD PAGE
				ajaxBackup = void 0;
			}
		}
	}, 500);
}
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//END BACKUP ALL HOMEPAGE MESSAGES///////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//DELETE ALL HOMEPAGE MESSAGES///////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
function delete_MFL_HPMs() {
	ajaxDelete = true;
	var i = 0;
	var hpmCount = setInterval(function () {
		if (ajaxDelete) {
			ajaxDelete = false;
			if (i <= 26) {
				if (i === 1) {
					urlPOST = `${baseURLDynamic}/${year}/message?LEAGUE_ID=${league_id}&NAME=message`;
				} else {
					urlPOST = `${baseURLDynamic}/${year}/message?LEAGUE_ID=${league_id}&NAME=message${i}`;
				}
				$.ajax({
					url: urlPOST,
					xhrFields: {
						withCredentials: true
					},
					cache: false,
					type: "POST",
					success: function (response) {
						ajaxDelete = true;
						console.log("Finished Deleting HPM# " + i)
						if ($('.delete_count_' + i).length < 1) $('.restoreHPMs').append('<div class="HPMStatus delete_count_' + i + '">HPM #' + i + ' - Deleted</div>');
						$(".restoreHPMs").animate({ scrollTop: $(".restoreHPMs")[0].scrollHeight}, 1);
						i++
					},
					error: function (xhr) {
						console.log("HPM # " + i + " Failed to Delete");
						i++
					}
				});
			} else {
				clearInterval(hpmCount);
				HPMfinished(); //FINISH DELETING MESSAGES & RELOAD PAGE
				ajaxDelete = false;
			}
		}
	}, 500);
}
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//END DELETE ALL HOMEPAGE MESSAGES///////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//START TRANSFER HPMS TO ANOTHER SITE////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
function copyHPMtoNewSite() {
	if (typeof hpm_serverID === 'undefined') {
		transferError();
	} else {
		ajaTransfer = true;
		var i = 0;
		var hpmCount = setInterval(function () {
			if (ajaTransfer) {
				ajaTransfer = false;
				if (i <= 26) {
					if (i === 1) {
						urlGET = `${baseURLDynamic}/${year}/csetup?L=${league_id}&C=HMPGMSG&PRINTER=1`;
					} else {
						urlGET = `${baseURLDynamic}/${year}/csetup?L=${league_id}&C=HMPGMSG&SEQNO=${i}&PRINTER=1`;
					}
					$.ajax({
						url: urlGET,
						type: "GET",
						dataType: 'html',
						xhrFields: {
							withCredentials: true
						},
						success: function (data) {
							hpm_txt = $(data).find('#MSG').val();
							hpm_name = $(data).find('form table.report input[name="LABEL"]').val();
							isFooter = $(data).find('#IN_FOOTER_Yes[checked="checked"]');
							isHeader = $(data).find('#IN_HEADER_Yes[checked="checked"]');
							if (isFooter.length > 0) {
								if (i === 1) {
									urlPOST = `https://www${hpm_serverID}.myfantasyleague.com/${copyinputYearVal}/message?LEAGUE_ID=${copyinputVal}&NAME=message&IN_FOOTER=Yes`;
								} else {
									urlPOST = `https://www${hpm_serverID}.myfantasyleague.com/${copyinputYearVal}/message?LEAGUE_ID=${copyinputVal}&NAME=message${i}&IN_FOOTER=Yes`;
								}
							} else if (isHeader.length > 0) {
								if (i === 1) {
									urlPOST = `https://www${hpm_serverID}.myfantasyleague.com/${copyinputYearVal}/message?LEAGUE_ID=${copyinputVal}&NAME=message&IN_HEADER=Yes`;
								} else {
									urlPOST = `https://www${hpm_serverID}.myfantasyleague.com/${copyinputYearVal}/message?LEAGUE_ID=${copyinputVal}&NAME=message${i}&IN_HEADER=Yes`;
								}
							} else {
								if (i === 1) {
									urlPOST = `https://www${hpm_serverID}.myfantasyleague.com/${copyinputYearVal}/message?LEAGUE_ID=${copyinputVal}&NAME=message`;
								} else {
									urlPOST = `https://www${hpm_serverID}.myfantasyleague.com/${copyinputYearVal}/message?LEAGUE_ID=${copyinputVal}&NAME=message${i}`;
								}
							}
							$.ajax({
								url: urlPOST,
								xhrFields: {
									withCredentials: true
								},
								data: {
									MSG: hpm_txt,
									LABEL: hpm_name
								},
								cache: false,
								type: "POST",
								success: function (response) {
									ajaTransfer = true;
									hpm_txt = void 0;
									hpm_name = void 0;
									isFooter = void 0;
									isHeader = void 0;
									urlPOST = void 0;
									console.log("Finished Transferring HPM# " + i);
									if ($('.transfer_count_' + i).length < 1) $('.restoreHPMs').append('<div class="HPMStatus transfer_count_' + i + '">HPM #' + i + ' - Transfer Complete</div>');
									i++; // add +1 to counter after success of both ajax calls
								},
								error: function (xhr) {
									console.log("HPM # " + i + " Failed to Transfer");
									i++
								}
							});
						},
						error: function (xhr) {
							console.log("HPM # " + i + " Failed to Transfer");
							i++
						}
					});
				} else {
					clearInterval(hpmCount);
					$('#copyLayout,#copyLeague').val('');
					HPMfinished(); //FINISH TRANSFERRING MESSAGES & RELOAD PAGE
					ajaTransfer = void 0;
				}
			}
		}, 500);
	}
}

// Error transferring files
function transferError() {
	console.log("Error Transferring Files");
	$('.HPMWarning').remove();
	$('body').css("pointer-events", "");
	if ($('.copy_Error').length < 1) $('.restoreHPMs').append('<div style="text-align:center;font-weight:bold" class="HPMWarning copy_Error">Error. You are not signed in as commissioner to the league your tring to transfer to. Check league details and sign in and try again.</div>');
	$('#copyLayout,#copyLeague').val('');
	$('#copyLayoutYEAR,#copyLeagueYEAR').remove();
	$('#HPM_Layout_btn,#HPM_Copy_btn').attr('disabled', 'disabled');
}
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//END TRANSFER HPMS TO ANOTHER SITE//////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//START BACKUP TABS LAYOUT///////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
function copyTabsLayoutRun() {
	var hpLayoutAR = [];
	$.ajax({
		url: `${baseURLDynamic}/${year}/csetup?L=${league_id}&C=HMPGMOD&PRINTER=1`,
		xhrFields: {
			withCredentials: true
		},
		cache: false,
		type: "GET",
		success: function (data) {
			GetTabsTitles = $(data).find('form#home_page_setup input[id*="hpm_title_val"]');
			GetTabsContent = $(data).find('form#home_page_setup td select').not('#HOME_MODULES_AVAILABLE');
			$(GetTabsTitles).each(function () {
				tabsValuesName = $(this).attr('name');
				tabsValues = $(this).val().split(" ").join("+");
				hpLayoutAR.push(tabsValuesName + '=' + tabsValues);
			});
			$(GetTabsContent).each(function () {
				$(this).find('option').each(function () {
					isValue = $(this).val();
					isName = $(this).parent('select').attr('name')
					hpLayoutAR.push(isName + '=' + isValue);
				});
			});
			hpLayoutAR.push("SUBMIT=Save+Home+Page+Setup");
			var joinhpLayoutAR = hpLayoutAR.join("&");
			hpm_name_tabs = "#301 HPTabs Backup"
			$.ajax({
				url: `${baseURLDynamic}/${year}/message?LEAGUE_ID=${league_id}&NAME=message301`,
				xhrFields: {
					withCredentials: true
				},
				data: {
					MSG: joinhpLayoutAR,
					LABEL: hpm_name_tabs
				},
				beforeSend: function (jqXHR, settings) {
					//console.log(settings.url);
				},
				cache: false,
				type: "POST",
				success: function (response) {
					$('.restoreHPMs').append('<div style="text-align:center;font-weight:bold;color:green" class="HPMFinished">Finished ! Tabs Layout is saved.</div>');
					$('#HPTabs_Restore_btn').removeAttr('disabled');
					setTimeout(() => {
						$('.HPMFinished').remove()
					}, 1500);
				},
				error: function (xhr) {}
			});
		},
		error: function (xhr) {}
	});
}
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//END BACKUP TABS LAYOUT/////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//START RESTORE TABS LAYOUT//////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
function restoreSiteLayout() {
	$('.restoreHPMs').append('<div style="text-align:center;font-weight:bold;color:green" class="HPMWarning">Tabs layout being restored. Page will refresh when completed.</div>');
	urlGET = `${baseURLDynamic}/${year}/csetup?L=${league_id}&C=HMPGMSG&SEQNO=301&PRINTER=1`;
	$.ajax({
		url: urlGET,
		type: "GET",
		dataType: 'html',
		xhrFields: {
			withCredentials: true
		},
		success: function (data) {
			layoutURL = $(data).find('#MSG').val();
			$.ajax({
				url: `${baseURLDynamic}/${year}/csetup?L=${league_id}&C=HMPGMOD&PRINTER=1`,
				xhrFields: {
					withCredentials: true
				},
				data: layoutURL,
				cache: false,
				type: "POST",
				success: function (response) {
					layoutURL = void 0;
					setTimeout(() => {
						HPMfinished();
					}, 1000);
				},
				error: function (xhr) {}
			});
		},
		error: function (xhr) {}
	});
}
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//END RESTORE TABS LAYOUT////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//START COPY LAYOUT TO NEW SITE//////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
function copyLayouttoNewSite() {
	if (typeof hpm_serverIDLayout === 'undefined') {
		transferErrorLayout();
	} else {
		var hpLayoutAR = [];
		$.ajax({
			url: `${baseURLDynamic}/${year}/csetup?L=${league_id}&C=HMPGMOD&PRINTER=1`,
			xhrFields: {
				withCredentials: true
			},
			cache: false,
			type: "GET",
			success: function (data) {
				GetTabsTitles = $(data).find('form#home_page_setup input[id*="hpm_title_val"]');
				GetTabsContent = $(data).find('form#home_page_setup td select').not('#HOME_MODULES_AVAILABLE');
				$(GetTabsTitles).each(function () {
					tabsValuesName = $(this).attr('name');
					tabsValues = $(this).val().split(" ").join("+");
					hpLayoutAR.push(tabsValuesName + '=' + tabsValues);
				});
				$(GetTabsContent).each(function () {
					$(this).find('option').each(function () {
						isValue = $(this).val();
						isName = $(this).parent('select').attr('name')
						hpLayoutAR.push(isName + '=' + isValue);
					});
				});
				hpLayoutAR.push("SUBMIT=Save+Home+Page+Setup");
				var joinhpLayoutAR = hpLayoutAR.join("&");
				$.ajax({
					url: `https://www${hpm_serverIDLayout}.myfantasyleague.com/${copyinputValYearLayout}/csetup?L=${copyinputValLayout}&C=HMPGMOD&PRINTER=1`,
					xhrFields: {
						withCredentials: true
					},
					data: joinhpLayoutAR,
					beforeSend: function (jqXHR, settings) {
						console.log(settings.url);
					},
					cache: false,
					type: "POST",
					success: function (response) {
						$('.restoreHPMs').append('<div style="text-align:center;font-weight:bold;color:green" class="HPMFinished">Finished ! Tabs Layout Transferred.</div>');
						setTimeout(() => {
							$('#copyLayout,#copyLeague').val('');
							$('.HPMWarning').remove();
							$('.HPMFinished').remove();
							$('body').css("pointer-events", "");
						}, 1500);
					},
					error: function (xhr) {
						transferErrorLayout();
					}
				});
			},
			error: function (xhr) {
				transferErrorLayout();
			}
		});
	}
}

// Error transferring files
function transferErrorLayout() {
	console.log("Error Submitting Layout");
	$('.HPMWarning').remove();
	$('body').css("pointer-events", "");
	if ($('.copy_Error').length < 1) $('.restoreHPMs').append('<div style="text-align:center;font-weight:bold" class="HPMWarning copy_Error">Error. You are not signed in as commissioner to the league your tring to transfer to. Check league details and sign in and try again.</div>');
	$('#copyLayout,#copyLeague').val('');
	$('#copyLayoutYEAR,#copyLeagueYEAR').remove();
	$('#HPM_Layout_btn,#HPM_Copy_btn').attr('disabled', 'disabled');
}
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//END COPY LAYOUT TO NEW SITE////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// EDIT HPMS
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

if (typeof franchise_id !== 'undefined') {
	if (franchise_id === '0000') {
		var runAlert;
		var runAlert2;
		const desktopMenuEditHPMItem = document.querySelector('.myfantasyleague_menu li.mm-league a[href*="commissioner_setup"]').parentElement;
		const desktopNewMenuEditHPMItem = document.createElement('li');
		desktopNewMenuEditHPMItem.innerHTML = '<a class="no-sub" onclick="fetchAndAppendData()">Edit HPMs</a>';
		desktopMenuEditHPMItem.after(desktopNewMenuEditHPMItem);
		const mobileMenuEditHPMItem = document.querySelector('.myfantasyleague_menuMobile li.mm-league a[href*="commissioner_setup"]');
		if (mobileMenuEditHPMItem !== null) {
			const mobileNewMenuEditHPMItem = document.createElement('li');
			mobileNewMenuEditHPMItem.innerHTML = '<a class="no-sub" onclick="fetchAndAppendData()">Edit HPMs</a>';
			mobileMenuEditHPMItem.parentElement.after(mobileNewMenuEditHPMItem);
		}
		var selectedOptionUrl;
		document.addEventListener('click', function (e) {
			if (e.target.matches('.editHPMClose, .editHPMWrap')) {
				document.querySelectorAll('.editHPMWrap, .editHPMs').forEach(function (element) {
					element.remove();
					preventDBLClick = true;
				});
			}
		});
	}
}

async function fetchAndAppendData() {
	if (preventDBLClick) {
		preventDBLClick = false;
		const EditHPMhtml = `<div class="editHPMWrap" style="position:fixed;height:100%;width:100%;background:rgba(0, 0, 0, 0.7);left:0;top:0;z-index:99999"></div><div class="editHPMs"><span id="HPMEditCap">Edit Homepage Messages</span><span id="MFLPlayerPopupClose" class="editHPMClose">X</span><div id="appendSelect"></div><div class="edit-wrapper"></div></div>`;
		try {
			const response = await fetch(`${baseURLDynamic}/${year}/csetup?L=${league_id}&C=HMPGMSG&PRINTER=1`);
			const data = await response.text();
			var parser = new DOMParser();
			var htmlDoc = parser.parseFromString(data, 'text/html');
			var h3Element = htmlDoc.querySelector('h3');
			var formElement = htmlDoc.querySelector('form');
			var selectElement = await createSelectElement(h3Element);
			document.querySelector('body').insertAdjacentHTML('beforeend', EditHPMhtml);
			var appendSelectElement = document.querySelector('.editHPMs #appendSelect');
			var helpTextNode = document.createTextNode('Select HPM: ');
			appendSelectElement.appendChild(helpTextNode);
			appendSelectElement.appendChild(selectElement);
			var formWrapperElement = document.querySelector('.editHPMs .edit-wrapper');
			formWrapperElement.appendChild(formElement);
			var inputElement = document.createElement('input');
			inputElement.setAttribute('type', 'hidden');
			inputElement.setAttribute('name', 'PRINTER');
			inputElement.setAttribute('value', '1');
			formElement.appendChild(inputElement);
			var formButtonsElement = document.querySelector('.edit-wrapper .form_buttons');
			formButtonsElement.insertAdjacentHTML('beforeend', '<input type="button" value="Delete Message" onclick="deletEditHPM()">');
			var handleOptionSelection = function () {
				var selectedOption = this.options[this.selectedIndex];
				selectedOptionUrl = selectedOption.value; // Update the global variable
				var selectedOptionText = selectedOption.text;
				selectElement.value = selectedOption.value;
				selectElement.previousSelectedOptionText = selectedOptionText;
				fetchAndReplaceData(selectedOptionUrl);
			};
			selectElement.addEventListener('change', handleOptionSelection);
			selectElement.previousSelectedOptionText = selectElement.options[selectElement.selectedIndex].text;
			var submitButton = formElement.querySelector('input[type="submit"]');
			submitButton.addEventListener('click', submitForm);
			runAlert = false;
			runAlert2 = false;
		} catch (error) {
			console.log(error);
		}
	} else {
		console.log("DBL Click Prevented")
	}
}

function warn_in_header(object) {
	if (object.checked) {
		alert("Inserting invalid HTML into the header of all league pages\ncould prevent anyone in your league from accessing your league.\nUn-check this checkbox if you're not 100% certain that you've entered valid HTML.");
	}
}

function fetchAndReplaceData(url) {
	fetch(url)
		.then(response => response.text())
		.then(data => {
			var parser = new DOMParser();
			var htmlDoc = parser.parseFromString(data, 'text/html');
			var formElement = htmlDoc.querySelector('form');
			var formWrapperElement = document.querySelector('.editHPMs .edit-wrapper');
			formWrapperElement.innerHTML = '';
			formWrapperElement.appendChild(formElement);
			var formButtonsElement = document.querySelector('.edit-wrapper .form_buttons');
			formButtonsElement.insertAdjacentHTML('beforeend', '<input type="button" value="Delete Message" onclick="deletEditHPM()">');
			var selectElement = document.querySelector('.editHPMs select');
			var selectedOption = selectElement.options[selectElement.selectedIndex];
			var inputElement = document.createElement('input');
			inputElement.setAttribute('type', 'hidden');
			inputElement.setAttribute('name', 'PRINTER');
			inputElement.setAttribute('value', '1');
			formElement.appendChild(inputElement);
			if (selectedOption.textContent.trim() === '') {
				var options = selectElement.options;
				var totalOptions = options.length;
				var orderNumber = -1; // To keep track of the order number
				for (var i = 0; i < totalOptions; i++) {
					if (options[i] === selectedOption) {
						orderNumber = i + 1;
						break;
					}
				}
				selectedOption.textContent = "#" + orderNumber.toString();
			}
			var inputElement = formWrapperElement.querySelector('input[name="LABEL"]');
			var inputValue = inputElement.value;
			if (inputValue === selectedOption.textContent) {} else {
				if (inputValue.trim() === '') {
					//console.log("The input value is empty.");
				} else {
					selectedOption.textContent = inputValue;
				}
			}
			var submitButton = formElement.querySelector('input[type="submit"]');
			submitButton.addEventListener('click', submitForm);
			if (runAlert) alert("Form submitted successfully! Refresh page for results.");
			if (runAlert2) alert("Form deleted successfully! Refresh page for results.");
			runAlert = false;
			runAlert2 = false;
		})
		.catch(error => console.log(error));
}

async function createSelectElement(h3Element) {
	var selectElement = document.createElement('select');
	var links = h3Element.querySelectorAll('a');
	for (var i = 0; i < links.length; i++) {
		var option = document.createElement('option');
		var href = links[i].getAttribute('href');

		// Check if the href starts with 'csetup?'
		if (href.startsWith('csetup?')) {
			href = `${baseURLDynamic}/${year}/${href}&PRINTER=1`;
		}

		option.value = href;
		option.text = links[i].innerText;
		selectElement.appendChild(option);
	}
	var additionalOptions = [{
			value: `${baseURLDynamic}/${year}/csetup?L=${league_id}&C=HMPGMSG&SEQNO=21&PRINTER=1`,
			text: '#21'
		},
		{
			value: `${baseURLDynamic}/${year}/csetup?L=${league_id}&C=HMPGMSG&SEQNO=22&PRINTER=1`,
			text: '#22'
		},
		{
			value: `${baseURLDynamic}/${year}/csetup?L=${league_id}&C=HMPGMSG&SEQNO=23&PRINTER=1`,
			text: '#23'
		},
		{
			value: `${baseURLDynamic}/${year}/csetup?L=${league_id}&C=HMPGMSG&SEQNO=24&PRINTER=1`,
			text: '#24'
		},
		{
			value: `${baseURLDynamic}/${year}/csetup?L=${league_id}&C=HMPGMSG&SEQNO=25&PRINTER=1`,
			text: '#25'
		}
	];
	for (var j = 0; j < additionalOptions.length; j++) {
		var option = additionalOptions[j];
		var response = await fetch(option.value);
		var html = await response.text();
		var parser = new DOMParser();
		var doc = parser.parseFromString(html, 'text/html');
		var inputElement = doc.querySelector(`input[type="text"][name="LABEL"]`);
		if (inputElement && inputElement.value.trim() !== '') {
			option.text = inputElement.value.trim();
		}
		var optionElement = document.createElement('option');
		optionElement.value = option.value;
		optionElement.text = option.text;
		selectElement.appendChild(optionElement);
	}
	selectElement.selectedIndex = 0;
	return selectElement;
}

function submitForm(event) {
	event.preventDefault();
	var form = event.target.closest('form');
	var textareaElement = form.querySelector('.editHPMs .edit-wrapper textarea');
	var textareaValue = textareaElement.value.trim();
	var inputElement = form.querySelector('.editHPMs .edit-wrapper input[name="LABEL"]');
	var inputValue = inputElement.value.trim();
	if (textareaValue === '') {
		alert("Form submission failed. The textarea is empty.");
		return;
	}
	if (inputValue.trim() === '') {
		alert("Form submission failed. Fill out the 'Optional Message Label'.");
		return;
	}
	var formData = new FormData(form);
	fetch(form.action, {
			method: form.method,
			body: formData
		})
		.then(response => {
			if (response.ok) {
				runAlert = true;
				var selectElement = document.querySelector('.editHPMs select');
				var selectedOption = selectElement.options[selectElement.selectedIndex];
				selectedOptionUrl = selectedOption.value;
				var formWrapperElement = document.querySelector('.editHPMs .edit-wrapper');
				var inputElement = formWrapperElement.querySelector('input[name="LABEL"]');
				var inputValue = inputElement.value;
				fetchAndReplaceData(selectedOptionUrl);
				selectedOption.textContent = inputValue;
			} else {
				alert("Form submission failed.");
			}
		})
		.catch(error => {
			console.log(error);
			alert("An error occurred during form submission.");
		});
}

function deletEditHPM() {
	var confirmed = confirm("Are you sure you want to delete this homepage message?");
	if (confirmed) {
		var formWrapperElement = document.querySelector('.editHPMs .edit-wrapper');
		var inputElement = formWrapperElement.querySelector('input[name="LABEL"]');
		var inputValue = inputElement.value;
		var textareaElement = document.querySelector('.editHPMs .edit-wrapper textarea');
		inputElement.value = '';
		textareaElement.value = '';
		var form = document.querySelector('.editHPMs .edit-wrapper form');
		var formData = new FormData(form);
		fetch(form.action, {
				method: form.method,
				body: formData
			})
			.then(response => {
				if (response.ok) {
					runAlert2 = true;
					var formWrapperElement = document.querySelector('.editHPMs .edit-wrapper');
					var inputElement = formWrapperElement.querySelector('input[name="LABEL"]');
					var inputValue = inputElement.value;
					var textareaElement = document.querySelector('.editHPMs .edit-wrapper textarea');
					inputElement.value = '';
					textareaElement.value = '';
					var selectElement = document.querySelector('.editHPMs select');
					var selectedOption = selectElement.options[selectElement.selectedIndex];
					selectedOptionUrl = selectedOption.value;
					fetchAndReplaceData(selectedOptionUrl);
					selectedOption.textContent = inputValue;
				} else {
					alert("Form submission failed.");
				}
			})
			.catch(error => {
				console.log(error);
				alert("An error occurred during form submission.");
			});
	}
}

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//END EDIT HPMS//////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// PLAYER ICONS SCRIPT FOR HABMANS SITES
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
if (load_playerIcons) {
	var MFL_pid_fid = []; 
	//console.log("HABMANS PLAYER ICONS SCRIPT LAST UPDATED 11-1-21");
	//SETTINGS FOR FRANCHISE ICON PREPEND TO TEAM
	if (MFL_prependFranchiseIconTeam === undefined) var MFL_prependFranchiseIconTeam = true;
	if (MFL_prependFranchiseIconTeamOmitId === undefined) var MFL_prependFranchiseIconTeamOmitId = new Array("body_options_03", "body_options_08", "body_options_34", "body_options_67", "body_options_79", "body_options_170", "body_trade_offer", "body_trade_response", "transactions", "trade_bait", "body_csetup_revtrad", "body_options_100");

	//SETTINGS FOR FRANCHISE ICON PREPEND TO PLAYER
	if (MFL_prependFranchiseIconPlayer === undefined) var MFL_prependFranchiseIconPlayer = true;
	if (MFL_prependFranchiseIconPlayerOmitId === undefined) var MFL_prependFranchiseIconPlayerOmitId = new Array("body_options_17", "body_options_18", "body_ir", "body_options_133", "body_fantasy_box_score", "body_weekly", "body_options_205", "body_options_06", "body_lineup", "body_options_02", "body_options_03", "body_options_05", "body_options_07", "body_options_67", "body_options_113", "roster", "transactions", "trade_bait", "probowl", "probowl_table", "probowl_team", "body_csetup_revtrad");

	//DEFINE PLAYERS TO FRANCHISE IDs
	fetch(`${baseURLDynamic}/${year}/options?L=${league_id}&O=07`)
		.then(response => response.text())
		.then(rostersData => {
			$(rostersData).find("table .report").each(function () {
				var fid = $(this).find("caption span a").attr("href").substr($(this).find("caption span a").attr("href").indexOf('F=') + 2, 4);
				$(this).find("td.player a").each(function () {
					var pid = $(this).attr("href").substring($(this).attr("href").indexOf('P=') + 2, $(this).attr("href").length);
					MFL_pid_fid["pid_" + pid] = ({
						'id': pid,
						'fid': fid
					});
				});
				if (MFL_prependFranchiseIconPlayer)
					if (!includes(MFL_prependFranchiseIconPlayerOmitId, $('body').attr('id'))) doMFL_prependFranchiseIconPlayer();
			});
		})
		.catch(error => {
			// Handle the error here
			console.error(error);
		});

	///////////////////////////////////////////
	//MFL FRANCHISE ICON PREPEND TO PLAYER FUNCTIONS
	///////////////////////////////////////////
	function doMFL_prependFranchiseIconPlayer(thisId) {
		if (thisId == undefined)
			var target = 'body';
		else
			var target = '#' + thisId;
		$(target).find('a[class*="position_"]').each(function () {
			if (!includes(MFL_prependFranchiseIconPlayerOmitId, $(this).closest("table").attr("id"))) {
				var pid = $(this).attr("href").substring($(this).attr("href").indexOf('P=') + 2, $(this).attr("href").length);
				if (MFL_pid_fid.hasOwnProperty("pid_" + pid)) {
					$(this).removeClass("franPlayerFA").addClass("franPlayer_" + MFL_pid_fid["pid_" + pid].fid);
					$(this).parent().css('white-space', 'nowrap')
				} else {
					$(this).addClass("franPlayerFA");
					$(this).parent().css('white-space', 'nowrap')
				}
			}
		});
	}

	///////////////////////////////////////////
	//MFL FRANCHISE ICON PREPEND TO TEAM FUNCTIONS
	///////////////////////////////////////////
	function doMFL_prependFranchiseIconTeam() {
		$('body').find('a[class*="franchise_"]').each(function () {
			if (!includes(MFL_prependFranchiseIconTeamOmitId, $(this).closest("table").attr("id"))) {
				//var fid = $(this).attr("href").substring($(this).attr("href").indexOf('F=') + 2, $(this).attr("href").indexOf('F=') + 6);
				var fid = $(this).attr("class").substr($(this).attr("class").indexOf('franchise_') + 10, 4);
				try {
					$(this).parent().css('white-space', 'nowrap');
					$(this).parent().prepend("<div class='franTeam_" + fid + "' title='" + franchiseDatabase["fid_" + fid].name + "'></div>");
				} catch (er) {}
			}
		});
	}

	if (MFL_prependFranchiseIconTeam)
		if (!includes(MFL_prependFranchiseIconTeamOmitId, $('body').attr('id'))) doMFL_prependFranchiseIconTeam();
} // DICE PLAYER ICONS SCRIPT


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// Remove MFL Ads - Live scoring page ads
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
jQuery('div[id*="usmg_ad"],#ajax_ls div[style="margin-bottom:5px;"]').remove();
jQuery('[src="/ads/ad-live_scoring_js.html"]').remove();
googletag = null;

// Deftect mobile devices and remove custom scrollbar css that add heights on mobiles
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	var style = document.createElement('style');
	document.head.appendChild(style);
	style.sheet.insertRule('::-webkit-scrollbar{display:none}');
}

// Deftect mobile devices and remove custom scrollbar
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	var style = document.createElement('style');
	document.head.appendChild(style);
	style.sheet.insertRule('.hz-table-scroll table{padding-bottom:0!important}');
}

// Unhide pagebody container after all loads - so all html edits we made dont make reports jumpy - there is CSS in each skin to display none on load

window.addEventListener('load', function () {
	document.querySelectorAll('#MFLBoxWrapper, #tabmenu-wrap, #container-wrap, .ticker-wrapper').forEach(function (element) {
		element.style.visibility = 'visible';
	});
});

const Scoreboardlinks = document.querySelectorAll('#body_ajax_ls a');
Scoreboardlinks.forEach(link => {
	let isTargeted = true;
	let parent = link.parentElement;
	while (parent) {
		if (parent.id === 'ls_setting_drop' || parent.classList.contains('report') || parent.classList.contains('has-sub')) {
			isTargeted = false;
			break;
		}
		parent = parent.parentElement;
	}
	if (isTargeted) {
		link.addEventListener('click', event => {
			event.preventDefault(); // Prevent the default link behavior
			const href = link.getAttribute('href');
			$('ins').remove();
			//alert(`You clicked on a link with href: ${href}`);
			setTimeout(() => {
				window.location.href = href;
			}, 0);
		});
	}
});
	


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// bodyScrollLock
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
// Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
// This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
//const targetElement = document.querySelector('#someElementId');

// 2. ...in some event handler after showing the target element...disable body scroll
//bodyScrollLock.disableBodyScroll(targetElement);

// 3. ...in some event handler after hiding the target element...
//bodyScrollLock.enableBodyScroll(targetElement);

// 4. Useful if we have called disableBodyScroll for multiple target elements,
// and we just want a kill-switch to undo all that.
//bodyScrollLock.clearAllBodyScrollLocks();
(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.bodyScrollLock = mod.exports;
	}
})(this, function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _toConsumableArray(arr) {
		if (Array.isArray(arr)) {
			for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
				arr2[i] = arr[i];
			}

			return arr2;
		} else {
			return Array.from(arr);
		}
	}

	// Older browsers don't support event options, feature detect it.

	// Adopted and modified solution from Bohdan Didukh (2017)
	// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

	var hasPassiveEvents = false;
	if (typeof window !== 'undefined') {
		var passiveTestOptions = {
			get passive() {
				hasPassiveEvents = true;
				return undefined;
			}
		};
		window.addEventListener('testPassive', null, passiveTestOptions);
		window.removeEventListener('testPassive', null, passiveTestOptions);
	}

	var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);


	var locks = [];
	var documentListenerAdded = false;
	var initialClientY = -1;
	var previousBodyOverflowSetting = void 0;
	var previousBodyPosition = void 0;
	var previousBodyPaddingRight = void 0;

	// returns true if `el` should be allowed to receive touchmove events.
	var allowTouchMove = function allowTouchMove(el) {
		return locks.some(function (lock) {
			if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
				return true;
			}

			return false;
		});
	};

	var preventDefault = function preventDefault(rawEvent) {
		var e = rawEvent || window.event;

		// For the case whereby consumers adds a touchmove event listener to document.
		// Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
		// in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
		// the touchmove event on document will break.
		if (allowTouchMove(e.target)) {
			return true;
		}

		// Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
		if (e.touches.length > 1) return true;

		if (e.preventDefault) e.preventDefault();

		return false;
	};

	var setOverflowHidden = function setOverflowHidden(options) {
		// If previousBodyPaddingRight is already set, don't set it again.
		if (previousBodyPaddingRight === undefined) {
			var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
			var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

			if (_reserveScrollBarGap && scrollBarGap > 0) {
				var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'), 10);
				previousBodyPaddingRight = document.body.style.paddingRight;
				document.body.style.paddingRight = computedBodyPaddingRight + scrollBarGap + 'px';
			}
		}

		// If previousBodyOverflowSetting is already set, don't set it again.
		if (previousBodyOverflowSetting === undefined) {
			previousBodyOverflowSetting = document.body.style.overflow;
			document.body.style.overflow = 'hidden';
		}
	};

	var restoreOverflowSetting = function restoreOverflowSetting() {
		if (previousBodyPaddingRight !== undefined) {
			document.body.style.paddingRight = previousBodyPaddingRight;

			// Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
			// can be set again.
			previousBodyPaddingRight = undefined;
		}

		if (previousBodyOverflowSetting !== undefined) {
			document.body.style.overflow = previousBodyOverflowSetting;

			// Restore previousBodyOverflowSetting to undefined
			// so setOverflowHidden knows it can be set again.
			previousBodyOverflowSetting = undefined;
		}
	};

	var setPositionFixed = function setPositionFixed() {
		return window.requestAnimationFrame(function () {
			// If previousBodyPosition is already set, don't set it again.
			if (previousBodyPosition === undefined) {
				previousBodyPosition = {
					position: document.body.style.position,
					top: document.body.style.top,
					left: document.body.style.left,
					right: document.body.style.right
				};

				// Update the dom inside an animation frame
				var _window = window,
					scrollY = _window.scrollY,
					scrollX = _window.scrollX,
					innerHeight = _window.innerHeight;

				document.body.style.position = 'fixed';
				document.body.style.top = -scrollY + 'px';
				document.body.style.left = -scrollX + 'px';
				document.body.style.right = 0;
				setTimeout(function () {
					return window.requestAnimationFrame(function () {
						// Attempt to check if the bottom bar appeared due to the position change
						var bottomBarHeight = innerHeight - window.innerHeight;
						if (bottomBarHeight && scrollY >= innerHeight) {
							// Move the content further up so that the bottom bar doesn't hide it
							document.body.style.top = -(scrollY + bottomBarHeight);
						}
					});
				}, 300);
			}
		});
	};

	var restorePositionSetting = function restorePositionSetting() {
		if (previousBodyPosition !== undefined) {
			// Convert the position from "px" to Int
			var y = -parseInt(document.body.style.top, 10);
			var x = -parseInt(document.body.style.left, 10);

			// Restore styles
			document.body.style.position = previousBodyPosition.position;
			document.body.style.top = previousBodyPosition.top;
			document.body.style.left = previousBodyPosition.left;
			document.body.style.right = previousBodyPosition.right;
			// Restore scroll
			window.scrollTo(x, y);

			previousBodyPosition = undefined;
		}
	};

	// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
	var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
		return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
	};

	var handleScroll = function handleScroll(event, targetElement) {
		var clientY = event.targetTouches[0].clientY - initialClientY;

		if (allowTouchMove(event.target)) {
			return false;
		}

		if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
			// element is at the top of its scroll.
			return preventDefault(event);
		}

		if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
			// element is at the bottom of its scroll.
			return preventDefault(event);
		}

		event.stopPropagation();
		return true;
	};

	var disableBodyScroll = exports.disableBodyScroll = function disableBodyScroll(targetElement, options) {
		// targetElement must be provided
		if (!targetElement) {
			// eslint-disable-next-line no-console
			console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
			return;
		}

		// disableBodyScroll must not have been called on this targetElement before
		if (locks.some(function (lock) {
				return lock.targetElement === targetElement;
			})) {
			return;
		}

		var lock = {
			targetElement: targetElement,
			options: options || {}
		};

		locks = [].concat(_toConsumableArray(locks), [lock]);

		if (isIosDevice) {
			setPositionFixed();
		} else {
			setOverflowHidden(options);
		}

		if (isIosDevice) {
			targetElement.ontouchstart = function (event) {
				if (event.targetTouches.length === 1) {
					// detect single touch.
					initialClientY = event.targetTouches[0].clientY;
				}
			};
			targetElement.ontouchmove = function (event) {
				if (event.targetTouches.length === 1) {
					// detect single touch.
					handleScroll(event, targetElement);
				}
			};

			if (!documentListenerAdded) {
				document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? {
					passive: false
				} : undefined);
				documentListenerAdded = true;
			}
		}
	};

	var clearAllBodyScrollLocks = exports.clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
		if (isIosDevice) {
			// Clear all locks ontouchstart/ontouchmove handlers, and the references.
			locks.forEach(function (lock) {
				lock.targetElement.ontouchstart = null;
				lock.targetElement.ontouchmove = null;
			});

			if (documentListenerAdded) {
				document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
					passive: false
				} : undefined);
				documentListenerAdded = false;
			}

			// Reset initial clientY.
			initialClientY = -1;
		}

		if (isIosDevice) {
			restorePositionSetting();
		} else {
			restoreOverflowSetting();
		}

		locks = [];
	};

	var enableBodyScroll = exports.enableBodyScroll = function enableBodyScroll(targetElement) {
		if (!targetElement) {
			// eslint-disable-next-line no-console
			console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
			return;
		}

		locks = locks.filter(function (lock) {
			return lock.targetElement !== targetElement;
		});

		if (isIosDevice) {
			targetElement.ontouchstart = null;
			targetElement.ontouchmove = null;

			if (documentListenerAdded && locks.length === 0) {
				document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? {
					passive: false
				} : undefined);
				documentListenerAdded = false;
			}
		}

		if (isIosDevice) {
			restorePositionSetting();
		} else {
			restoreOverflowSetting();
		}
	};
});