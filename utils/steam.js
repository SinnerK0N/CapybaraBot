module.exports = {
    steamApiFixInput: function(input) {
        if (input.startsWith("U:"))
            return "[" + input + "]";
        else
            return input;
    },

    steamPersonaStateToString: function(personaState) {
        switch (personaState) {
            case 0:
                return "Offline";
            case 1:
                return "Online";
            case 2:
                return "Busy";
            case 3:
                return "Away";
            case 4:
                return "Snooze";
            case 5:
                return "Looking to trade";
            case 6:
                return "Looking to play";
            case 7:
                return "Invisible";
            default:
                return;
        }
    },

    steamVisibilityStateToString: function(visibilityState) {
        switch (visibilityState) {
            case 1:
                return "Private";
            case 2:
                return "Friends only";
            case 3:
                return "Friends of friends";
            case 4:
                return "Users only";
            case 5:
                return "Public";
            default:
                return;
        }
    },

    steamCommentPermissionToString: function (commentPermission) {
        switch (commentPermission) {
            case 0:
                return "Friends only/Private";
            case 1:
                return "Public";
            default:
                return;
        }
    },

    steamFormatLocation: function (countryCode, stateCode, cityID) {
        //TODO: numbers to words :( json of codes @ data/steam/
        if (countryCode == undefined)
            return "Not set";
        if (stateCode == undefined && cityID == undefined)
            return countryCode;
        if (stateCode == undefined && cityID != undefined) {
            return cityID + ", " + countryCode;
        }
        if (stateCode != undefined && cityID == undefined) {
            return stateCode + ", " + countryCode;
        }
        return cityID + ", " + stateCode + ", " + countryCode;
    }
}