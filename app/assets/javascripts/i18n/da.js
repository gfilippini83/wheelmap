I18n.translations || (I18n.translations = {});
I18n.translations["da"] = {"date":{"formats":{"default":"%d.%m.%Y","short":"%e. %b %Y","long":"%d. %B %Y"},"day_names":["s\u00f8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\u00f8rdag"],"abbr_day_names":["s\u00f8n","man","tir","ons","tor","fre","l\u00f8r"],"month_names":[null,"januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"],"abbr_month_names":[null,"jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"],"order":["day","month","year"]},"time":{"formats":{"default":"%e. %B %Y, %H:%M","short":"%e. %b %Y, %H:%M","long":"%A, %e. %B %Y, %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" og ","last_word_connector":" og ","sentence_connector":"og","skip_last_comma":true},"select":{"prompt":"V\u00e6lg"}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"er ikke en gyldig v\u00e6rdi","exclusion":"er reserveret","invalid":"er ikke gyldig","confirmation":"stemmer ikke overens med bekr\u00e6ftelse","accepted":"skal accepteres","empty":"m\u00e5 ikke udelades","blank":"skal udfyldes","too_long":"er for langt (maksimum %{count} tegn)","too_short":"er for kort (minimum %{count} tegn)","wrong_length":"har forkert l\u00e6ngde (skulle v\u00e6re %{count} tegn)","not_a_number":"er ikke et tal","not_an_integer":"er ikke et heltal","greater_than":"skal v\u00e6re st\u00f8rre end %{count}","greater_than_or_equal_to":"skal v\u00e6re st\u00f8rre end eller lig med %{count}","equal_to":"skal v\u00e6re lig med %{count}","less_than":"skal v\u00e6re mindre end %{count}","less_than_or_equal_to":"skal v\u00e6re mindre end eller lig med %{count}","odd":"skal v\u00e6re ulige","even":"skal v\u00e6re lige","carrierwave_processing_error":"failed to be processed","carrierwave_integrity_error":"is not of an allowed file type","carrierwave_download_error":"could not be downloaded","extension_white_list_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","extension_black_list_error":"You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}","rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}","mime_types_processing_error":"Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}","already_confirmed":"var allerede bekr\u00e6ftet, pr\u00f8v at logge ind","expired":"udl\u00f8bet, bed venligst om en ny","not_found":"ikke fundet","not_locked":"var ikke l\u00e5st","not_saved":{"one":"1 fejl gjorde at denne %{resource} ikke kunne gemmes being:","other":"%{count} fejl gjorde at denne %{resource} ikke kunne gemmes:"},"taken":"er allerede blevet taget","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one"},"models":{"node":{"website":{"invalid":"Website address is not valid."},"phone":{"invalid":"Phone number is not valid. It must have the following format: +49 30 234567"}}},"dynamic_format":"%{message}","template":{"body":"Der var problemer med f\u00f8lgende felter:","header":{"one":"1 fejl gjorde at denne %{model} ikke kunne gemmes","other":"%{count} fejl gjorde at denne %{model} ikke kunne gemmes"}}},"activerecord":{"errors":{"messages":{"taken":"er allerede brugt","record_invalid":"Validering fejlede: %{errors}","accepted":"skal accepteres","blank":"skal udfyldes","confirmation":"stemmer ikke overens med bekr\u00e6ftelse","empty":"m\u00e5 ikke udelades","equal_to":"skal v\u00e6re lig med %{count}","even":"skal v\u00e6re lige","exclusion":"er reserveret","greater_than":"skal v\u00e6re st\u00f8rre end %{count}","greater_than_or_equal_to":"skal v\u00e6re st\u00f8rre end eller lig med %{count}","inclusion":"er ikke i listen","invalid":"er ikke gyldig","less_than":"skal v\u00e6re mindre end %{count}","less_than_or_equal_to":"skal v\u00e6re mindre end eller lig med %{count}","not_a_number":"er ikke et tal","not_equal_to":"must not be equal to %{count}","odd":"skal v\u00e6re ulige","too_long":"er for langt (maksimum %{count} tegn)","too_short":"er for kort (minimum %{count} tegn)","wrong_length":"har forkert l\u00e6ngde (skulle v\u00e6re %{count} tegn)"},"full_messages":{"format":"%{attribute} %{message}"},"models":{"user":{"attributes":{"email":{"blank":"Dette felt kan ikke v\u00e6re blankt n\u00e5r der er adgangskode"},"privacy_policy":{"accepted":"skal accepteres"},"terms":{"accepted":"skal accepteres"}}},"user_session":{"email":"E-mail-adresse","password":"Adgangskode","remember_me":"Forbliv logget inde"}},"template":{"body":"Der var problemer med f\u00f8lgende felter:","header":{"one":"En fejl forhindrede %{model} i at blive gemt","other":"%{count} fejl forhindrede %{model} i at blive gemt"}}},"attributes":{"user":{"first_name":"Fornavn","last_name":"Efternavn","privacy_policy":"Privatlivs politik","terms":"Betingelser"},"poi":{"name":"Navn","type":"Type","address":"Adresse","website":"Hjemmeside","phone":"Telefon","note":"Note","address_street":"Vejnavn","address_housenumber":"Housenumber","address_postcode":"Postcode","address_city":"By"}},"models":{"user":"Bruger"}},"number":{"format":{"separator":",","delimiter":".","precision":3,"significant":0,"strip_insignificant_zeros":0},"currency":{"format":{"format":"%u %n","unit":"DKK","separator":",","delimiter":",","precision":2,"significant":0,"strip_insignificant_zeros":0}},"percentage":{"format":{"delimiter":null}},"precision":{"format":{"delimiter":null}},"human":{"format":{"delimiter":null,"precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":null,"thousand":"Tusind","million":"Million","billion":"Milliard","trillion":"Billion","quadrillion":"Billiard"}}}},"datetime":{"distance_in_words":{"half_a_minute":"et halvt minut","less_than_x_seconds":{"one":"mindre end et sekund","other":"mindre end %{count} sekunder"},"x_seconds":{"one":"et sekund","other":"%{count} sekunder"},"less_than_x_minutes":{"one":"mindre end et minut","other":"mindre end %{count} minutter"},"x_minutes":{"one":"et minut","other":"%{count} minutter"},"about_x_hours":{"one":"cirka en time","other":"cirka %{count} timer"},"x_days":{"one":"en dag","other":"%{count} dage"},"about_x_months":{"one":"cirka en m\u00e5ned","other":"cirka %{count} m\u00e5neder"},"x_months":{"one":"en m\u00e5ned","other":"%{count} m\u00e5neder"},"about_x_years":{"one":"cirka et \u00e5r","other":"cirka %{count} \u00e5r"},"over_x_years":{"one":"mere end et \u00e5r","other":"mere end %{count} \u00e5r"},"almost_x_years":{"one":"n\u00e6sten et \u00e5r","other":"n\u00e6sten %{count} \u00e5r"}},"prompts":{"year":"\u00c5r","month":"M\u00e5ned","day":"Dag","hour":"Time","minute":"Minut","second":"Sekund"}},"helpers":{"select":{"prompt":"V\u00e6lg..."},"submit":{"create":"Opret %{model}","update":"Opdater %{model}","submit":"Gem %{model}"},"button":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"},"page_entries_info":{"more_pages":{"display_entries":"Displaying %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> of <b>%{total}</b> in total"},"one_page":{"display_entries":{"one":"Displaying <b>1</b> %{entry_name}","other":"Displaying <b>all %{count}</b> %{entry_name}","zero":"No %{entry_name} found"}}}},"flash":{"actions":{"create":{"notice":"%{resource_name} blev succesfuldt lavet."},"update":{"notice":"%{resource_name}  blev succesfuldt opdateret."},"destroy":{"notice":"%{resource_name} blev succesfuldt slettet.","alert":"%{resource_name} kunne ikke slettes."}},"photos":{"destroy":{"notice":"Billedet blev slettet"}}},"meta_search":{"or":"or","predicates":{"equals":"%{attribute} equals","does_not_equal":"%{attribute} doesn't equal","contains":"%{attribute} contains","does_not_contain":"%{attribute} doesn't contain","starts_with":"%{attribute} starts with","does_not_start_with":"%{attribute} doesn't start with","ends_with":"%{attribute} ends with","does_not_end_with":"%{attribute} doesn't end with","greater_than":"%{attribute} greater than","less_than":"%{attribute} less than","greater_than_or_equal_to":"%{attribute} greater than or equal to","less_than_or_equal_to":"%{attribute} less than or equal to","in":"%{attribute} is one of","not_in":"%{attribute} isn't one of","is_true":"%{attribute} is true","is_false":"%{attribute} is false","is_present":"%{attribute} is present","is_blank":"%{attribute} is blank","is_null":"%{attribute} is null","is_not_null":"%{attribute} isn't null"}},"views":{"pagination":{"first":"&laquo; First","last":"Last &raquo;","next":"Next &rsaquo;","previous":"&lsaquo; Prev","truncate":"&hellip;"}},"active_admin":{"dashboard":"Kontrolpanel","dashboard_welcome":{"welcome":"Velkommen til Active Admin. Dette er standardoversigtssiden.","call_to_action":"Rediger 'app/admin/dashboard.rb' for at tilf\u00f8je nye elementer til oversigtssiden."},"view":"Vis","edit":"Rediger","delete":"Slet","delete_confirmation":"Er du sikker p\u00e5 at du \u00f8nsker at slette?","new_model":"Ny(t) %{model}","create_model":"Opret %{model}","edit_model":"Rediger %{model}","update_model":"Opdater %{model}","delete_model":"Slet %{model}","details":"%{model} detaljer","cancel":"Fortryd","empty":"Tom","previous":"Forrige","next":"N\u00e6ste","download":"Download:","has_many_new":"Tilf\u00f8j ny(t) %{model}","has_many_delete":"Slet","filter":"Filter","clear_filters":"Clear Filters","search_field":"Search %{field}","equal_to":"Equal To","greater_than":"Greater Than","less_than":"Less Than","main_content":"Implementer venligst %{model}#main_content for at vise noget indhold.","logout":"Log ud","powered_by":"Powered by %{active_admin} %{version}","sidebars":{"filters":"Filtre"},"pagination":{"empty":"Ingen %{model} fundet","one":"Viser <b>1</b> %{model}","one_page":"Viser <b>alle %{n}</b> %{model}","multiple":"Viser %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> af <b>%{total}</b> i alt","entry":{"one":"post","other":"poster"},"multiple_without_total":"Viser %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>"},"any":"Alle","blank_slate":{"content":"Der er ingen %{resource_name} endnu.","link":"Opret"},"batch_actions":{"button_label":"Batch Handlinger","delete_confirmation":"Er du sikker p\u00e5 du vil slette disse %{plural_model}? Du vil ikke v\u00e6re i stand til at fortryde dette.","succesfully_destroyed":{"one":"Vellykket \u00f8delagt 1 %{model}","other":"Vellykket \u00f8delagt %{count} %{plural_model}"},"selection_toggle_explanation":"(Skift Selection)","link":"Opret en","action_label":"%{title} Valgte","labels":{"destroy":"Slet"}},"comments":{"body":"krop","author":"forfatter","title":"Kommentar","add":"Tilf\u00f8j Kommentar","resource":"Resource","no_comments_yet":"Ingen kommentarer endnu.","title_content":"Kommentarer (%{count})","errors":{"empty_text":"Kommentar blev ikke gemt, tekst var tom."},"resource_type":"resource type","author_type":"forfatter type"},"devise":{"login":{"title":"Login","remember_me":"Husk mig","submit":"Login"},"reset_password":{"title":"Glemt din adgangskode?","submit":"Nulstille min adgangskode"},"change_password":{"title":"Skift din adgangskode","submit":"Skift min adgangskode"},"links":{"sign_in":"Log ind","forgot_your_password":"Glemt din adgangskode?","sign_in_with_omniauth_provider":"Log ind med %{provider}"},"unlock":{"title":"Send opl\u00e5snings instruktioner igen","submit":"Send opl\u00e5snings instruktioner igen"}},"has_many_remove":"Fjern","filters":{"buttons":{"filter":"Filtrer","clear":"Ryd filtre"},"predicates":{"contains":"Indeholder","equals":"lig","starts_with":"Begynder med","ends_with":"Slutter med","greater_than":"st\u00f8rre end","less_than":"mindre end"}},"access_denied":{"message":"Du har ikke rettigheder til at udf\u00f8re denne handling."},"index_list":{"table":"Tabel","block":"Liste","grid":"Gitter","blog":"Blog"}},"devise":{"confirmations":{"confirmed":"Din konto er nu aktiveret. Og du er nu logget ind.","link":"Ikke modtaget nogen bekr\u00e6ftigelseintrukser?","send_instructions":"I l\u00f8bet af f\u00e5 minutter vil du modtage en e-mail med instrukser om aktivering af din konto.","send_paranoid_instructions":"Hvis din konto findes, s\u00e5 vil du modtage en e-mail i l\u00f8bet af f\u00e5 minutter med instrukser hvordan du bekr\u00e6fter din konto."},"destroy":{"confirm":"Er du sikker?","headline":"Slet konto","link":"Slet nu"},"edit":{"form":{"labels":{"current_password":"Nuv\u00e6rende adgangskode <i>(vi skal bruge dette for at bekr\u00e6fte dine \u00e6ndringer)</i>","email":"E-mail","password":"Adgangskode <i>(lad dette felt v\u00e6re tomt, hvis du ikke \u00f8nsker at \u00e6ndre dette)</i>","password_confirmation":"Gentag adgangskode"},"submit":"Gem \u00e6ndringer"},"headline":"Ret konto"},"failure":{"already_authenticated":"Du er allerede logget p\u00e5.","inactive":"Din konto er ikke arkiveret endnu.","invalid":"E-mail eller adgangskode er ikke gyldig.","invalid_token":"Ugyldig token til autorisering.","locked":"Din konto er l\u00e5st","timeout":"Din session er udl\u00f8bet. Log ind igen for at kunne forts\u00e6tte.","unauthenticated":"Du skal logge ind eller oprette en konto for at kunne forts\u00e6tte","unconfirmed":"Du skal bekr\u00e6fte din konto for at kunne forts\u00e6tte.","not_found_in_database":"Invalid email or password."},"mailer":{"confirmation_instructions":{"landing_page":"Klik venligst p\u00e5 linket vi lige har sendt til din e-mail. Hvis du ikke har modtaget en e-mail fra os, s\u00e5 tjek f\u00f8rst i spam mail mappen, hvis der intet er der, s\u00e5 pr\u00f8v registreringssiden igen.","subject":"Bekr\u00e6ftigelsesinstrukser"},"reset_password_instructions":{"subject":"Nulstil adgangskodeinstrukser"},"unlock_instructions":{"subject":"\u00c5ben l\u00e5ste instrukser"}},"mandatory":"* Skal udfyldes","omniauth_callbacks":{"failure":"Kunne ikke autorisere dig fra %{kind} p\u00e5 grund af \"%{reason}\".","permission_missing":"Du fik ikke de p\u00e5kr\u00e6vede tilladelser.","success":"Succesfuld autorisation fra  %{kind} kontoen."},"password_recovery":{"form":{"labels":{"email":"E-mail"},"submit":"Nulstil adgangskode"},"headline":"Glemt adgangskode?"},"password_reset":{"email":{"comment":"I tilf\u00e6lde af du ikke har bestilt en nulstilling af adgangskoden, s\u00e5 se bort fra denne e-mail.<br/>Din adgangskode vil ikke blive \u00e6ndret f\u00f8r du klikker p\u00e5 linket ovenfor og indstiller en ny adgangskode.","headline":"Velkommen %{email}","link":"\u00c6ndre min adgangskode","text":"Der blev lavet en foresp\u00f8rgsel om at \u00e6ndre din adgangskode. Du kan \u00e6ndre ved at klikke p\u00e5 det f\u00f8lgende link - ellers se bort fra denne her besked!"},"form":{"labels":{"password":"Ny adgangskode","password_confirmation":"Gentag adgangskode"},"submit":"Nulstil adgangskode"},"headline":"Nulstil adgangskode"},"passwords":{"link":"Glemt adgangskode?","send_instructions":"Du vil i l\u00f8bet af f\u00e5 minutter en modtage en e-mail med instrukser hvordan du laver  nulstilling af adgangskode.","send_paranoid_instructions":"Hvis din konto findes, s\u00e5 vil du modtage en e-mail i l\u00f8bet af f\u00e5 minutter med instrukser hvordan du nulstiller din adgangskode","updated":"Din  adgangskode er nu \u00e6ndret, og du er nu logget ind","updated_not_active":"Din adgangskode blev \u00e6ndret med succes","no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided."},"registrations":{"destroyed":"Farvel. Din konto er nu lukket. Vi h\u00e5ber at se dig snart igen.","inactive_signed_up":"Du har oprettet en konto nu. Men vi kunne ikke logge dig ind p.g.a din konto er  \"%{reason}\"","link":"Opret konto","reasons":{"inactive":"inaktiv","locked":"l\u00e5st","unconfirmed":"ubekr\u00e6ftet"},"signed_up":"Din registrering er godkedt. En bekr\u00e6ftigelse er sendt til din e-mail.","updated":"Din profil er opdateret.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please open the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address."},"sessions":{"inactive":"Din konto er endnu ikke blevet aktiveret","invalid":"Ugyldig e-mail eller adgangskode.","invalid_token":"Ugyldig autorisation token","link":"Login","locked":"Din konto er l\u00e5st","new":{"no_osm_account":"Ingen OpenStreetMap konto?","osm_promo_text":"Wheelmap er baseret p\u00e5 geodata fra OpenStreetMap. OpenStreetMap er et verdensomsp\u00e6ndende kort lavet af folk lige som dig. Det er som en Wikipedia for kort. For at rette eller lave nye steder skal du have oprettet en OpenStreeMap konto og samtidigt skal du v\u00e6re logget ind med denne konto.","promo_text_thank_you":"Mange tak for din st\u00f8tte!","sign_in_with":"Log ind med %{kind}","sign_up_with_osm":"Registrer nu.","wheelmap_promo_text":"Din lokale viden om k\u00f8restolstilg\u00e6ngelige steder hj\u00e6lper fysisk handicappede til bedre at organisere deres hverdag. Samtidigt g\u00f8r du ogs\u00e5 OpenStreetMap mere v\u00e6rdifuldt."},"signed_in":"Du er nu logget ind","signed_out":"Du er nu logget ud","timeout":"Din loginsession er udl\u00f8bet, login igen for at forts\u00e6tte.","unauthenticated":"Du skal logge ind eller oprette en konto f\u00f8r du kan forts\u00e6tte","unconfirmed":"Du skal have bekr\u00e6ftet din konto f\u00f8r du kan forts\u00e6tte"},"sign_in":{"form":{"labels":{"email":"E-mail","password":"Adgangskode","remember_me":"Forbliv logget ind?"},"submit":"Login"},"headline":"Login"},"sign_out":{"headline":"Log af"},"sign_up":{"email":{"confirm_my_account":"Bekr\u00e6ft min konto","please_confirm":"Du kan bekr\u00e6fte din konto gennem nedenst\u00e5ende link:","welcome":"Velkommen %{email}!"},"form":{"labels":{"email":"E-mail","password":"Adgangskode","password_confirmation":"Gentag adgangskode","wants_newsletter":"Ja tak, lad mig blive l\u00f8bende orienteret om wheelmap. Men ikke mere end en gang om m\u00e5neden."},"submit":"Opret konto"},"headline":"Opret konto"},"unlocks":{"link":"Ej modtaget nogen \u00e5ben instrukser?","send_instructions":"Om f\u00e5 minutter vil du modtage en email med instrukser om gen\u00e5bning af din konto.","send_paranoid_instructions":"Hvis din konto findes, s\u00e5 vil du modtage en e-mail i l\u00f8bet af f\u00e5 minutter med instrukser, hvordan du \u00e5bner din konto igen","unlocked":"Din konto er gen\u00e5bnet og du er nu logget ind."}},"poi":{"category":{"accommodation":"Overnatning","education":"Uddannelse","food":"Mad","government":"Myndigheder","health":"Sundhed","leisure":"Fritid","misc":"Diverse","money_post":"Bank post","public_transfer":"Offentlig trafik","shopping":"Shopping","sport":"Sport","tourism":"Turisme","unknown":"Ukendt"},"name":{"accommodation":{"beach_resort":"Strandhotel","bed_and_breakfast":"Bed and breakfast","camp_site":"Campingplads","caravan_site":"Caravancamping","chalet":"Chalet","dormitory":"Kollegium","guest_house":"G\u00e6stehus","hostel":"Vandrehjem","hotel":"Hotel","motel":"Motel"},"education":{"college":"Gymnasium","driving_school":"K\u00f8reskole","kindergarten":"B\u00f8rnehave","library":"Bibliotek","museum":"Museum","school":"Skole","university":"Universitet"},"food":{"bar":"Bar","biergarten":"\u00d8lhave","cafe":"Cafe","drinking_water":"Drikkevand","fast_food":"Fast Food","ice_cream":"Isbutik","pub":"V\u00e6rtshus","restaurant":"Restaurant"},"government":{"courthouse":"Retsbygning","embassy":"Ambassade","government":"Statslig organisation","police":"Politi","public_building":"Offentlig bygning","townhall":"R\u00e5dhus"},"health":{"dentist":"Tandl\u00e6ge","doctors":"L\u00e6ge","hearing_aids":"H\u00f8reapparatforhandler","hospital":"Hospital","medical_supply":"H\u00e5ndk\u00f8bsmedicin","pharmacy":" Apotek","social_facility":"Plejehjem","veterinary":"Dyrl\u00e6ge"},"leisure":{"arena":"Sportsarena","brothel":"Bordel","casino":"Kasino","cinema":"Biograf","community_center":"Borgerhus","gallery":"Galleri","nightclub":"Natklub","playground":"Legeplads","sauna":"Sauna","stripclub":"Stripclub","theatre":"Teater","zoo":"Zoo"},"misc":{"company":"Firma (kontor)","estate_agent":"Ejendomsm\u00e6gler","insurance":"Forsikringsselskab","lawyer":"Advokat","place_of_worship":"Religi\u00f8s tilbedelsessted","toilets":"Toiletter"},"money_post":{"atm":"Pengeautomat","bank":"Bank","bureau_de_change":"Valutaveksling","post_box":"Postkasse","post_office":"Postkontor"},"public_transfer":{"aerodrome":"Lufthavn","bicycle_parking":"Cykelparkering","bicycle_rental":"Cykeludlejning","boatyard":"Lystb\u00e5dehavn","bus_station":"Busstation","bus_stop":"Busstop","cable_car":"Sv\u00e6vebane","car_rental":"Biludlejning","car_sharing":"Delebil","chair_lift":"Stolelift","ferry":"F\u00e6rge","ferry_terminal":"F\u00e6rgeterminal","fuel":"Tankstation","halt":"Trinbr\u00e6t","light_rail":"Letbane","parking":"Parkering","parking_aisle":"Parkeringsvej","platform":"Platform","station":"Undergrundsbane","subway_entrance":"Undergrundsbane indgang","terminal":"Lufthavnsterminal","tram_stop":"Sporvognsstop"},"shopping":{"alcohol":"Vinhandler","bakery":"Bager","beauty":"Sk\u00f8nhedssalon","beverages":"Drikkevarer","bicycle":"Cykelforhandler","books":"Boghandler","butcher":"Slagter","car_repair":"Bilv\u00e6rksted","car_shop":"Biludstyrsbutik","chemist":"Materialist","clothes":"T\u00f8jbutik","computer":"Computerbutik","confectionery":"Slikbutik","convenience":"Minimarked","deli":"Deli","department_store":"Stormagasin","doityourself":"Byggemarked","dry_cleaning":"T\u00f8jenseri","electronics":"Elektronikbutik","fabric":"Stofbutik","farm_shop":"G\u00e5rdbutik","florist":"Blomsterhandler","furniture":"M\u00f8belhandler","garden_centre":"Havecenter","gift":"Gavebutik","hairdresser":"Fris\u00f8r","hardware":"V\u00e6rkt\u00f8jsbutik","jewelry":"Smykkeforretning","kiosk":"Kiosk","laundry":"Vaskeri","mall":"Indk\u00f8bscenter","optician":"Optiker","organic":"\u00d8kologisk butik","outdoor":"Friluftudstyrsbutik","pet":"Dyreforhandler","photo":"Foto","second_hand":"Genbrugsbutik","shoes":"Skobutik","sports":"Sportsforretninger","stationery":"Papirartikler","supermarket":"Supermarked","toys":"Leget\u00f8j","travel_agency":"Rejsebureau","video":"Videoudlejning"},"sport":{"pitch":"Sportsplads","sports_centre":"Sportscenter","stadium":"Stadion","swimming":"Sv\u00f8mming","swimming_pool":"Sv\u00f8mmepool"},"tourism":{"archaeological_site":"Ark\u00e6ologisk sted","arts_centre":"Kunstcenter","artwork":"Kunstv\u00e6rk","attraction":"Attraktion","battlefield":"Slagmark","beach":"Strand","beacon":"Fyrt\u00e5rn","castle":"Slot","cave_entrance":"Huleindgang","information":"Turistinformation","memorial":"Mindesm\u00e6rke","theme_park":"Forlystelsespark","tower":"T\u00e5rn","viewpoint":"Udsigtspunkt"},"unknown":{"unknown":"Ukendt"}}},"models":{"category":{"prompt":"Choose a category"},"node_type":{"prompt":"Choose a type"},"node":{"info_edit_position":"The location will appear on the Wheelmap as it is shown above. If the marker is not in the correct spot you can <a href=\"%{url}\">change its position on the OpenStreetMap.</a>","mail":{"subject":"[Wheelmap] Problem with %{headline}","body":"(Please only write in English or German.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:"}}},"actions":{"send":"Send","save":"Gem","cancel":"Fortryd"},"faq":{"answers":{"0":"Du kan altid \u00e6ndre markeringen af et sted selv. V\u00e6lg h\u00f8jre markering og \"Gem\" f\u00e6rdig!","1":"N\u00e5r du er logget p\u00e5 som bruger kan du tilf\u00f8je/rette i alle detaljerne for et sted. Klik p\u00e5 \"Redigerer\" og ret eller tilf\u00f8j information i feltet.","2":"Du kan tilf\u00f8je yderligere information. (fx \"Det sted har en mobil rampe\") i kommentarfeltet. Klik p\u00e5 \"Rediger\" og \"Tilf\u00f8j kommentar\"."},"headline":"Er der et problem med dette sted?","questions":{"0":"Denne markering er forkert.","1":"Detaljerne for dette sted er forkerte eller mangler.","2":"Jeg har mere information om dette sted."}},"header":{"navigation":{"about_wheelmap":"Om Wheelmap","choose_language":"V\u00e6lg sprog","contact":"Kontakt","map":"Kort","projects":"Projekter","blog":"Blog","feedback":"Feedback","home":"Start","how_to_add_a_place":"Hvordan tilf\u00f8jer jeg steder?","imprint":"Om","logged_in_as":"Logget ind som:","login":"Login","logout":"Log ud","newsletter":"Nyhedsbrev","press":"Tryk p\u00e5","profile":"Profil","suggestions":"Forslag","what_is_barrier_free":"Hvad betyder \"k\u00f8restolstilg\u00e6ngeligt\"?","what_is_wheelmap":"Hvad er wheelmap?"},"toolbar":{"categories":"kategorier"},"meta":{"description":"Find k\u00f8restolstilg\u00e6ngelige steder - wheelmap.org","homepage":"Hjemmeside","keywords":"k\u00f8restolstilg\u00e6ngelige steder find s\u00f8gemarkering","search":"S\u00f8g"},"searchbar":{"add_place":"Tilf\u00f8j endnu et sted","find":"Find","label":null,"placeholder":"S\u00f8g efter et sted","title_add_place":"Tilf\u00f8j et nyt sted p\u00e5 denne position nu!"},"tagline":"Wheelmap logo","title":"Find k\u00f8restolstilg\u00e6ngelige steder"},"home":{"index":{"overlay":{"button":"Okay, lad os komme igang!","categories":"Filtrer steder efter kategorier","filter":"Filtrer steder efter k\u00f8restolstilg\u00e6ngelig","headline":"Markerer og find k\u00f8restolstilg\u00e6ngelige steder med Wheelmap.org - verden over og helt gratis. Det er nemt:","lookup":"S\u00f8g efter et bestemt sted","secondary_headline":"Vores trafiklys system til at markerer k\u00f8restolstilg\u00e6ngelighed for offentlige steder:"},"filter":{"category":"V\u00e6lg kategori","deselect_all":"Frav\u00e6lg alle","select_all":"V\u00e6lg alle","wheelchair":"K\u00f8restolstilg\u00e6ngeligt?"},"ie":{"action":{"ignore":"Ignorer","upgrade":"Opdaterer browser"},"warning":{"headline":"Vi undskylder meget!","message":"Det ser ud til at du bruger Internet Explorer. Wheelmap beh\u00f8ver en browser der bedre kan h\u00e5ndtere webstandarder. Overvej at bruge  fx Firefox, Chrome, Safari eller Opera."}},"link":{"node":{"create":"Tilf\u00f8j nyt sted"}},"popup":{"form":{"limited":"delvis k\u00f8restolstilg\u00e6ngeligt","no":"Ikke k\u00f8restolstilg\u00e6ngeligt","save":"Gem","unknown":"ukendt status","yes":"Fuldt k\u00f8restoltilg\u00e6ngeligt"},"help":"K\u00f8restolstilg\u00e6ngeligt? (Hj\u00e6lp)","more":"mere ..."}}},"nodes":{"new":{"form":{"legend":"Lokalitet for stedet","location":"Klik p\u00e5 kortet og placerer mark\u00f8ren p\u00e5 den pr\u00e6cise position."},"header":{"title":"Nyt sted | wheelmap.org"},"link":{"large_map":"&laquo; Fortryd"}},"node_data":{"address":"Adresse:","contact_details":"Kontaktoplysninger:"},"node_edit":{"details":"Detaljer","edit":"Ret"},"node_map":{"map":"Kort:"},"node_note":{"comment":"Kommentar:"},"node_photos":{"add":"Tilf\u00f8j","photos_of_this_place":"Fotografier af dette sted:","upload":"Upload"},"node_similar":{"similar":"Lignende steder: %{name}"},"node_status":{"accessible_toilet":"K\u00f8restolstilg\u00e6ngeligt toilet:","premium":"%{name}  siger: dette sted er","wheelchair_accessibility":"K\u00f8restolstilg\u00e6ngeligt:"},"node_streetview":{"streetview":"Gadevisning:"},"show":{"header":{"meta":{"description":"Find ud af om dette sted er k\u00f8restoltilg\u00e6ngeligt p\u00e5 Wheelmap.org. Eller tilf\u00f8j mere information eller et foto for dette sted.","title":"Dette sted er p\u00e5 Wheelmap.org: %{name}"},"title":"Sted: %{node} | wheelmap.org"},"share":{"email":"E-mail-adresse","facebook":"Facebook","text":"Jeg har fundet dette sted p\u00e5  Wheelmap.org: %{name}","twitter":"Twitter"},"link":{"back":"tilbage","large_map":"Forst\u00f8r","listing":"Alle steder af  kategoren '%{type}' i %{city}","upload":"Opload billede"},"more_data_from":"Der er mere information for dette sted, tjekket af:","show-in-osm":"OpenStreetMap"},"create":{"flash":{"not_successfull":"Ups, dit input var enten ukorrekt eller ufuldst\u00e6ndigt","successfull":"Mange tak, din tilf\u00f8jelse blev gemt og vil snart v\u00e6re online."}},"edit":{"header":{"title":"Ret sted:  %{node} | wheelmap.org"},"link":{"large_map":"&laquo; Fortryd"}},"errors":{"default":"Ups, et eller andet gik galt. Vi er blevet informeret om dette!","not_authorized":"Undskyld, men autorisationen fejlede","not_available":"Undskylder meget, men denne side er midlertidig ikke tilg\u00e6ngelig.","not_existent":"Undskylder meget, dette sted findes ikke mere.","not_found":"Undskylder, men siden blev ikke fundet.","param_missing":"Tilf\u00f8j venligst en s\u00f8geterm"},"flash":{"authorize_wheelmap":"Du beh\u00f8ver en OpenStreetMap konto for at rette i data"},"node":{"link":{"claim":"Arbejder du her?","edit_node":"Ret sted","report_bug":"Fejlrapporterer et problem"}},"update":{"flash":{"not_successfull":"Ups, dit input var ikke korrekt eller ufuldst\u00e6ndigt","successfull":"Mange tak, din \u00e6ndring blev gemt succesfuldt og vil v\u00e6re online snart."}},"update_wheelchair":{"successfull":"Status for \"%{name}\" er blevet \u00e6ndret til \"%{status} k\u00f8restolstilg\u00e6ngeligt\" og vil snart kunne ses online."}},"search":{"index":{"no-results":{"headline":"Sorry, we couldn\u2019t find a place called \"%{query}\".","hint":{"example":"<strong>Eksempel</strong> London, United Kingdom","info":"Vores s\u00f8geservice virker kun med navn eller adresseoplysninger. S\u00f8g kun efter navnet p\u00e5 et sted eller adressen, fx gadenavn og/eller byen. S\u00f8gning efter typen af stederne fx restaurant eller biograf vil ikke virke!","work_in_progress":"Vi arbejder h\u00e5rdt p\u00e5 at g\u00f8re s\u00f8gninger efter steder lettere og mere intuitivt."},"try_this":{"address":"Inds\u00e6t flere <strong>adresseoplysninger</strong>.","intro":"Pr\u00f8v dette:","spell_check":"Tjek <strong>stavningen</strong> af dit s\u00f8geord."}},"results":{"ticker":{"one":"%{count} resultat:","other":"%{count} resultater:"}},"search":{"for":"S\u00f8ger efter \"%{q}\"","not_found":"Ingen steder kunne findes!"}},"timeout":{"headline":"\u00c5h undskyld vores fejl","info":"Vores s\u00f8geservice var midlertidigt nede.","repeat_search":"Pr\u00f8v s\u00f8gningen igen"}},"users":{"profile":{"explanation_text":"This is a simple text that will explain what users see here ...","greeting":{"anonymously":"Hello you","personalized":"Hello %{name}"},"headline":{"edit_profile":"Edit profile","overview":"Your Account","your_photos":"Your photos"}},"tabs":{"account":"Account","images":"Images","overview":"Overview"},"after_signup_edit":{"welcome":{"headline":"Du er n\u00e6sten der! Afslut oprettelsen af din Wheelmap konto her:","set_password_for_mobile":"Du har nu afsluttet din registering med OpenStreetMap.\nV\u00e6lg nu en e-mail adresse og en adgangskode til din Wheelmap konto og dern\u00e6st er du helt f\u00e6rdig! Du beh\u00f8ver denne e-mail adresse og adgangskode for at logge ind p\u00e5 Wheelmap app til iPhone eller Android.","text":"Hvordan kan vi komme i kontakt med dig? Du kan altid \u00e6ndre dette her senere i din profil."}},"edit":{"headline":{"your_images":"Dine oploadede billeder"}}},"application":{"require_no_user":{"notice":"Du er allerede logget p\u00e5 ..."},"require_user":{"notice":"Du skal v\u00e6re logget p\u00e5 for at se denne side."}},"breadcrumbs":{"node":{"create":"Tilf\u00f8j nyt sted","edit":"Ret sted"},"root":"wheelmap"},"common":{"close":"luk","skip":"Spring over"},"form":{"show_fully_accessible_places":"k\u00f8restolstilg\u00e6ngeligt","show_limited_accessible_places":"delvis k\u00f8restolstilg\u00e6ngeligt","show_places_without_status":"ukendt status","show_unaccessible_places":"ikke k\u00f8restolstilg\u00e6ngeligt"},"formtastic":{"hints":{"email":"We treat your address confidentially, no spam. Promise!","lat":"Flyt mark\u00f8ren p\u00e5 kortet til den korrekte position","osm_username":"Ikke medlem endnu?  <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Opret en Openstreetmap konto nu</a>","password":"(efterlad feltet tomt, hvis du ikke \u00f8nsker at \u00e6ndre dette)","phone":"For eksempel: +45 12345678","website":"For eksempel: http://www.example.com"},"labels":{"category":"Kategori:","centralkey":"Centraln\u00f8gle:","city":"By:","create":"Opret sted","email":"E-mail","finish":"F\u00e6rdig","housenumber":"Nr.","lat":"Breddegrad","lon":"L\u00e6ngdegrad","name":"Navn:","osm_password":"OSM adgangskode","osm_username":"OSM kontonavn","password":"Adgangskode","password_confirmation":"Gentag adgangskode","phone":"Telefon:","postcode":"Postnummer:","privacy_policy":"Jeg accepterer paragraf 1 og 2 vedr. data fortrolighedsaftale.","reset":"Nulstil","save":"Gem","street":"Vej:","terms":"Jeg accepterer disse betingelser for brug.","type":"Type:","website":"Hjemmeside:","wheelchair":" K\u00f8restolstilg\u00e6ngeligt?","wheelchair_description":"Tilg\u00e6ngeligheds kommentar:","wheelchair_toilet":"Wheelchair bathroom:"},"titles":{"basic":"Basisinformation","optional":"Mere information <span class=\"addition\">(alle felter er valgfrit)</span>"}},"global":{"form_validation_error":"Bem\u00e6rk fejllisten nedenfor"},"how?":"Hvordan?","landing_pages":{"index":{"wheelchair":{"limit":{"headline":"Alle begr\u00e6nset k\u00f8restolstilg\u00e6ngelige steder %{type} i %{city} (%{count})"},"no":{"headline":"Alle ikke k\u00f8restolstilg\u00e6ngelige steder %{type} i %{city} (%{count})"},"unknown":{"headline":"Alle %{type} i %{city} med ukendt k\u00f8restolstilg\u00e6ngeligs status (%{count})"},"yes":{"headline":"Alle k\u00f8restolstilg\u00e6ngelige steder %{type} i %{city} (%{count})"}}}},"layouts":{"application":{"banner":{"alt":"Et projekt af Sozialhelden.de"}}},"node":{"address":{"city":"%{city} %{postcode}","street":"%{housenumber} %{street}"},"tags":{"phone":"Telefon:","website":"Hjemmeside:"}},"oauth":{"application":{"connect":{"headline":"Du skal forbinde din konto med din OpenStreetMap konto f\u00f8r du kan oprette eller modificere steder p\u00e5 wheelmap.org."}},"callback":{"notice":"Din wheelmap konto er nu forbundet med OpenStreetMap kontoen %{user}."}},"or":"eller","place":{"one":"%{count} sted","other":"%{count} steder"},"profile":{"edit":{"application":{"oauth":{"connected":"Status: forbundet","grant":"Forbind nu","not_connected":"Status: ikke forbundet","revoke":"Afbryd"}},"headline":"Ret din profil"}},"splash":{"countline":"%{count} steder er allerede blevet markeret.","headline":"Alle kan tilf\u00f8je k\u00f8restolstilg\u00e6ngelige steder!","start":"Start","step1":"Klik p\u00e5 et sted du kender","step2":"Markerer den og klik gem","step3":"Det var det hele! Ingen registering er n\u00f8dvendig","what_is_wheelmap":"Hvad er wheelmap?"},"statistics":"Statistik","toiletstatus":{"no":"No wheelchair accessible toilet","unknown":"k\u00f8restolstilg\u00e6ngeligt ukendt status","yes":"Wheelchair accessible toilet"},"user_sessions":{"create":{"activation":{"notice":"Din konto er nu aktiveret!"},"error":{"notice":"E-mail og adgangskode er ikke korrekte."},"notice":"Du er nu inde!"},"destroy":{"notice":"Farvel, kom snart igen!"},"new":{"email":"E-mail-adresse","login":"Login","login_with_twitter":"Login med Twitter","password":"Adgangskode","remember_me":"Forbliv logget ind"}},"wheelchairstatus":{"limited":"delvis k\u00f8restolstilg\u00e6ngeligt","no":"Ikke k\u00f8restolstilg\u00e6ngeligt","unknown":"k\u00f8restolstilg\u00e6ngeligt ukendt status","yes":"Fuldt k\u00f8restoltilg\u00e6ngeligt"},"wheelmap":{"footer":{"a_project_of":"Et projekt fra","based_on":"Baseret p\u00e5","become_a_supporter":"Bliv en st\u00f8tter","main_supporter":"Hovedst\u00f8tter"},"itunes":{"alt":"AppStore logo","title":"Download iPhone App!"},"logo":{"alt":"Wheelmap logo - find k\u00f8restolstilg\u00e6ngelige steder","title":"Wheelmap - find k\u00f8restolstilg\u00e6ngelige steder"},"what_is":{"fully_accessible":"Ingen trapper ved indgang, alle rum ingen trapper, handicaptoilet\n","limited_accessible":"Indgang har et trin (max. h\u00f8jde 7 cm), de fleste rum har ingen trin, ingen handicaptoilet","not_accessible":"Indgangen har et trin eller flere trin, de forskellige rum er ikke tilg\u00e6ngelige","unknown_accessible":"Hj\u00e6lp med at f\u00e5 stedet markeret!"}},"will_paginate":{"next_label":"N\u00e6ste &#8594;","page_entries_info":{"multi_page":"Viser %{model} %{from} - %{to} af  %{count} ialt","multi_page_html":"Viser %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> af <b>%{count}</b> i alt","single_page":{"one":"Viser 1 %{model}","other":"Viser alle %{count} %{model}","zero":"Ingen %{model} fundet"},"single_page_html":{"one":"Viser <b>1</b> %{model}","other":"Viser <b>all&nbsp;%{count}</b> %{model}","zero":"Ingen %{model} fundet"}},"page_gap":"&hellip;","previous_label":"&#8592; Forrige"},"apipie":{"resources":"Resources","resource":"Resource","description":"Description","no_docs_found":"No documentation found","no_docs_found_descr":"We have not found any documentation for your API.","follow_instructions_html":"Follow %{href} on how to describe your controllers.","follow_instructions_href":"further instructions","oops":"Oops!!","resource_not_found_html":"Resource %{res} not found.","method_not_found_html":"Method %{method} not found for resource %{resource}.","goto_homepage_html":"Try going to %{href}","goto_homepage_href":"%{app_name} API documentation homepage","required":"required","optional":"optional","nil_allowed":"nil allowed","param_name":"Param name","params":"Params","examples":"Examples","metadata":"Metadata","errors":"Errors","supported_formats":"Supported Formats","enable_javascript_html":"Please enable JavaScript to view the %{comments_href}.","comments_powered_by_disqus":"comments powered by %{disqus}","api_documentation":"API documentation"}};
