var feedbackThanksForCommentMsg = "Dziękujemy za komentarz!";
var feedbackThanksForRateMsg = "Dziękujemy za ocenę!";
var feedbackThanksForRateAndCommentMsg = "Dziękujemy za ocenę i komentarz!";
var feedbackEmptyCommentMsg = "Pole komentarz nie może być puste";
var feedbackMandatoryCommentBeforeSendRateMsg = "Proszę uzupełnić pole komentarz";
var feedbackMinimumCharCommentMsg = "Komentarz musi zawierać minimum 3 znaki";

document.addEventListener('framework.ready', function() {
    $(".hide-comment").click(function() {
        hideValidationMessages();
    });

    $(document).on('click', '.feedback-component a.show-comment', function() {
        scrollToCommentButtons();
    });
});

// KNOWLEDGE BASE - add comment to article
function addComment(btn) {
    var objectId = btn.dataset.objectid;
    var commentValue = $(btn).prev("textarea").val();
    var commentLabel = $(btn).prev("textarea").prev("label");

    hideValidationMessages();
    if (commentValue === "") {
        // comment is empty validation
        if ($(".feedbackEmptyCommentMsg").length === 0) {
            $("<p class='feedbackEmptyCommentMsg' style='color:#e80000;'>" + feedbackEmptyCommentMsg + "</p>").insertAfter(commentLabel);
        } else {
            $(".feedbackEmptyCommentMsg").css("display", "block");
        }
    } else if (commentValue.length < 3) {
        $("<p class='feedbackMinimumCharCommentMsg' style='color:#e80000;'>" + feedbackMinimumCharCommentMsg + "</p>").insertAfter(commentLabel);
    } else {
        var isSendCommentAndRateValidationMsg = ($(".feedbackMandatoryCommentBeforeSendRateMsg").length > 0) ? true : false;
        $(btn).prev("textarea").prev("p.feedbackMandatoryCommentBeforeSendRateMsg").remove();
        if (isSendCommentAndRateValidationMsg) {
            sendRateAndComment(btn, objectId, commentValue);
        } else {
            sendComment(btn, objectId, commentValue, feedbackThanksForCommentMsg);
        }
    }
}

// KNOWLEDGE BASE - rate article
function addRate(btn) {
    var objectId = btn.dataset.objectid;
    var requireComment = btn.dataset.requirecomment;
    var commentField = $(btn).parents('div[class^="feedback-component"]').children().find("textarea");

    hideValidationMessages();
    if (requireComment === "true") {
        validateRequireComment(commentField, btn, objectId);
    } else {
        commentField.prev("p.feedbackMandatoryCommentBeforeSendRateMsg").remove();
        sendRate(btn, feedbackThanksForRateMsg);
    }
}

function validateRequireComment(commentField, btn, objectId) {
    var commentValue = commentField.val();
    var commentLabel = commentField.prev("label");

    // Jeśli pole komentarza puste system wyświetla komunikat z prośbą o wprowadzenie treści
    if (typeof commentValue != 'undefined' && commentValue === "") {
        if ($(".feedbackMandatoryCommentBeforeSendRateMsg").length === 0) {
            $("<p class='feedbackMandatoryCommentBeforeSendRateMsg' style='color:#e80000;'>" + feedbackMandatoryCommentBeforeSendRateMsg + "</p>").insertAfter(commentLabel);
            $(".feedback-component a.show-comment").next().css("display", "block");
            scrollToCommentButtons();
        } else {
            $(".feedbackMandatoryCommentBeforeSendRateMsg").css("display", "block");
            $(".feedbackEmptyCommentMsg").css("display", "none");
        }
    } else if (typeof commentValue != 'undefined' && commentValue.length < 3) {
        $("<p class='feedbackMinimumCharCommentMsg' style='color:#e80000;'>" + feedbackMinimumCharCommentMsg + "</p>").insertAfter(commentLabel);
    } else {
        var commentSectionVisible = commentField.parent("div").is(":visible");

        if (commentSectionVisible && commentValue !== "") {
            // Jeśli pole komentarza pełne system przesyła ocenę i submit formularza komentarza
            sendRateAndComment(btn, objectId, commentValue);
        } else {
            sendRate(btn, feedbackThanksForRateMsg);
        }
    }
}

function scrollToCommentButtons() {
    var container = $('.opl-omnibook-dashboard__content-box');
    var scrollTo = $('#feedbackComment button');

    container.animate({
        scrollTop: scrollTo.offset().top - container.offset().top + container.scrollTop()
    }, 100);
}

function createFeedbackCookie(pathname, defaultParam, additionalParam) {
    expiry = new Date();
    expiry.setTime(expiry.getTime() + (8000000));
    if ($.cookie('feedbackCookie' + pathname) != null && $.cookie('feedbackCookie' + pathname).indexOf(additionalParam) !== -1) {
        document.cookie = "feedbackCookie" + pathname + "=" + "&Comment&Rate" + ";expires=" + expiry.toGMTString();
    } else {
        document.cookie = "feedbackCookie" + pathname + "=" + defaultParam + ";expires=" + expiry.toGMTString();
    }
}



function sendComment(btn, objectId, commentValue, message) {
    setDisableAddCommentButton(objectId, true);
    $.ajax({
        type: "POST",
        url: "/ajax/knowledgeBaseArticleAction/feedback/addComment",
        dataType: "json",
        data: JSON.stringify({
            source: "ecare",
            target: "KnowledgeBase",
            feedbackTarget: btn.dataset.feedbacktarget,
            objectId: objectId,
            resourcePrimaryKey: btn.dataset.resourceprimarykey,
            comment: commentValue,
            hid: $.cookie("firstvisitsessionid")
        }),
        contentType: "application/json",
        success: function() {
            feedbackHideElement(objectId, "addComment(this);", message);
            createFeedbackCookie(location.pathname, "&Comment", "&Rate");
        },
        error: function(response) {
            setDisableAddCommentButton(objectId, false);
            console.log("Error " + response.status + " " + response.statusText + " " + response.responseText);
        }
    });
}

function sendRate(btn, message) {
    $.ajax({
        type: "POST",
        url: "/ajax/knowledgeBaseArticleAction/feedback/addRate",
        dataType: "json",
        data: JSON.stringify({
            source: "ecare",
            target: "KnowledgeBase",
            feedbackTarget: btn.dataset.feedbacktarget,
            objectId: btn.dataset.objectid,
            resourcePrimaryKey: btn.dataset.resourceprimarykey,
            score: btn.dataset.score,
            hid: $.cookie("firstvisitsessionid")
        }),
        contentType: "application/json",
        success: function() {
            feedbackHideElement(btn.dataset.objectid, "addRate(this);", message);
            createFeedbackCookie(location.pathname, "&Rate", "&Comment");
        },
        error: function(response) {
            console.log("Error " + response.status + " " + response.statusText + " " + response.responseText);
        }
    });
}

function sendRateAndComment(btn, objectId, commentValue) {
    console.log("sendRateAndComment");
    sendRate(btn, "");
    if (typeof commentValue != 'undefined') {
        sendComment(btn, objectId, commentValue, feedbackThanksForRateAndCommentMsg);
    }
}

function hideValidationMessages() {
    // hide validation messages
    $(".feedbackEmptyCommentMsg").css("display", "none");
    $(".feedbackMandatoryCommentMsg").css("display", "none");
    $(".feedbackMinimumCharCommentMsg").css("display", "none");
    $(".feedbackThanksForRateAndCommentMsg").css("display", "none");
    $(".feedbackMandatoryCommentBeforeSendRateMsg").css("display", "none");
}

function setDisableAddCommentButton(objectId, disable) {
    $(".feedback-component").find("[data-objectid=" + objectId + "]").attr("disabled", disable);
}

// KNOWLEDGE BASE - hide rates/comments input on article
function feedbackHideElement(objectId, onclickValue, message) {
    var btnByObjectId = $(".feedback-component").find("[data-objectid=" + objectId + "]");

    if (btnByObjectId.length === 0) {
        feedbackHideElementOnModal(objectId, onclickValue, message); // modal
    } else {
        if (onclickValue === "addComment(this);") {
            // ukrywanie 'zostaw komentarz do oceny' - po kliknieciu w przycisk dodaj komentarz
            $(".feedback-component").find("[data-commentid=" + objectId + "]").each(function() {
                $(this).removeClass("u-block");
            });
            $(".feedback-component").find("[data-commentid=" + objectId + "]").each(function() {
                $(this).css("display", "none");
            });
        }

        feedbackHideRateOrCommentElement(btnByObjectId, onclickValue, message);
    }
}

function feedbackHideRateOrCommentElement(btnByObjectId, onclickValue, message) {
    btnByObjectId.each(function(index, item) {
        if (item.outerHTML.indexOf(onclickValue) > -1 && item.parentNode != null) {
            item.style.display = "none";
            if (item.parentNode.style.display === "none") {
                item.parentNode.style.display = "block";
            }
            if (typeof message != 'undefined' && message !== "") {
                item.parentNode.innerHTML = "<span class='u-font-bold'>" + message + "</span>";
                $(".feedback-component .opl-knowledge-title").css("display", "none");
                $("#feedbackRates").addClass('l-col-12');
            }
        }
    });
}


// KNOWLEDGE BASE - hide rates/comments input on modal
function feedbackHideElementOnModal(objectId, onclickValue, message) {
    var btnByObjectId = $(".opl-modal--content").find("[data-objectid=" + objectId + "]");
    if (onclickValue === "addRate(this);") {
        feedbackHideRateElementOnModal(onclickValue, btnByObjectId, message);
    }
    if (onclickValue === "addComment(this);") {
        // ukrycie formularza komentarza i pokazanie komunikatu
        $(".feedback-component").find("[data-commentid=" + objectId + "]").removeClass("u-block");
        $(".feedback-component").find("[data-commentid=" + objectId + "]").css("display", "none");
        $(".feedback-component a.show-comment").next().css("display", "none");
        $("<span class='u-font-bold'>" + message + "</span>").insertAfter($('.feedback-component a.show-comment'));
    }
}

function feedbackHideRateElementOnModal(onclickValue, btnByObjectId, message) {
    var lastAddRateElem = null;
    for (var i = 0; i < btnByObjectId.length; i++) {
        if (btnByObjectId[i].outerHTML.indexOf(onclickValue) > -1) {
            btnByObjectId[i].style.display = "none";
            lastAddRateElem = btnByObjectId[i];
        }
        if (i === btnByObjectId.length - 1 && lastAddRateElem !== null) {
            lastAddRateElem.parentNode.innerHTML = "<span class='u-font-bold'>" + message + "</span>";
            if (typeof message != 'undefined' && message === "") {
                $(".opl-modal--content").css("display", "none");
                $(".opl-modal--content").next().css("display", "none");
            }
        }
    }
}