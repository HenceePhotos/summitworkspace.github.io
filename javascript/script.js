		const blanchoffice = [53.391881, -6.390868];
        const oconnelhoffice = [53.349334, -6.261075];
        const tallaghtoffice = [53.286353, -6.377379];
		const dundrumoffice = [53.28611, -6.24167];
		const finglasoffice = [53.390325, -6.298401];
		const ballsbridgeoffice = [53.329353, -6.231379];

        var map = L.map('map').setView([53.350, -6.253], 11);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        // Create markers for each office
        var blanchMarker = L.marker(blanchoffice).addTo(map);
        blanchMarker.bindPopup("<b>Blanchardstown Office</b>");

        var oconnelMarker = L.marker(oconnelhoffice).addTo(map);
        oconnelMarker.bindPopup("<b>O Connel Office</b>");

        var tallaghtMarker = L.marker(tallaghtoffice).addTo(map);
        tallaghtMarker.bindPopup("<b>Tallaght Office</b>");
		
		var dundrumMarker = L.marker(dundrumoffice).addTo(map);
        dundrumMarker.bindPopup("<b>Dundrum Office</b>");

		var finglasMarker = L.marker(finglasoffice).addTo(map);
        finglasMarker.bindPopup("<b>Finglas Office</b>");

		var ballsbridgeMarker = L.marker(ballsbridgeoffice).addTo(map);
        ballsbridgeMarker.bindPopup("<b>Ballsbridge Office</b>");

        // Center map on Office when button is clicked
        document.getElementById('blanchButton').addEventListener('click', function() {
            map.setView([53.391881, -6.390868], 5);
        });

        document.getElementById('oconnelButton').addEventListener('click', function() {
            map('map').setView(oconnelhoffice, 10);
        });

        document.getElementById('tallaghtButton').addEventListener('click', function() {
            map('map').setView(tallaghtoffice, 10);
        });
		
		document.getElementById(ballsbridgeButton).addEventListener('click', function() {
            ballsbridgeMarker.bindPopup("<b>Ballsbridge Office</b>");
        });
