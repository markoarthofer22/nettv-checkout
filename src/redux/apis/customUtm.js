const customUtmTags = () => {
    let cookieName = getCookie("utm_cookie_nettv");
    if(cookieName){
        let cookie = JSON.parse(cookieName);
        dataLayer.push({
            'event': 'custom_dimensions',
            'transferCD1': cookie.utm_d1,
            'transferCD2': cookie.utm_d2,
            'transferCD3': cookie.utm_d3,
            'transferCD4': cookie.utm_d4,
            'transferCD5': cookie.utm_d5,
            'transferCD6': cookie.utm_d6
        });
    }else{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        let utm1 = urlParams.get('utm_d1'),
            utm2 = urlParams.get('utm_d2'),
            utm3 = urlParams.get('utm_d3'),
            utm4 = urlParams.get('utm_d4'),
            utm5 = urlParams.get('utm_d5'),
            utm6 = urlParams.get('utm_d6');
        if(utm1 || utm2 || utm3 || utm4 || utm5 || utm6){
            if(utm1 === null){
                utm1 = '(not set)';
            }
            if(utm2 === null){
                utm2 = '(not set)';
            }
            if(utm3 === null){
                utm3 = '(not set)';
            }
            if(utm4 === null){
                utm4 = '(not set)';
            }
            if(utm5 === null){
                utm5 = '(not set)';
            }
            if(utm6 === null){
                utm6 = '(not set)';
            }
            dataLayer.push({
                'event': 'custom_dimensions',
                'transferCD1': utm1,
                'transferCD2': utm2,
                'transferCD3': utm3,
                'transferCD4': utm4,
                'transferCD5': utm5,
                'transferCD6': utm6
            });
            //set cookie
            let utmObject = {
                utm_d1: utm1,
                utm_d2: utm2,
                utm_d3: utm3,
                utm_d4: utm4,
                utm_d5: utm5,
                utm_d6: utm6,
            };
            document.cookie = "utm_cookie_nettv=" + JSON.stringify(utmObject) + ";" + "expires=''" + ";path=/";
        }
    }

    function getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
        }
        return "";
    }

};

export {customUtmTags};
