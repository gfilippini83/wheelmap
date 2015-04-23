I18n.translations || (I18n.translations = {});
I18n.translations["pt_PT"] = {"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":["","January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"A.M.","pm":"P.M."},"support":{"array":{"words_connector":",","two_words_connector":"e","last_word_connector":"e","sentence_connector":"e","skip_last_comma":true},"select":{"prompt":"Por favor selecione"}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"n\u00e3o \u00e9 um valor v\u00e1lido","exclusion":"Reservado","invalid":"inv\u00e1lido","confirmation":"a confirma\u00e7\u00e3o n\u00e3o corresponde","accepted":"ter\u00e1 de ser aceite","empty":"preenchimento obrigat\u00f3rio.","blank":"preenchimento obrigat\u00f3rio","too_long":"Demasiado longo (n\u00e3o pode ter mais de %{count} caracteres)","too_short":"Demasiado curto (n\u00e3o pode ter mais de %{count} caracteres)","wrong_length":"Tamanho errado (deve ter %{count} caracteres)","not_a_number":"n\u00e3o \u00e9 um n\u00famero","not_an_integer":"deve ser um n\u00famero inteiro","greater_than":"deve ser superior a %{count}","greater_than_or_equal_to":"deve ser superior ou igual a %{count}","equal_to":"deve ter exatamente %{count}","less_than":"deve ter menos de %{count}","less_than_or_equal_to":"deve ser inferior ou igual a %{count}","odd":"deve ser singular","even":"deve ser plural","carrierwave_processing_error":"failed to be processed","carrierwave_integrity_error":"is not of an allowed file type","carrierwave_download_error":"could not be downloaded","extension_white_list_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","extension_black_list_error":"You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}","rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}","mime_types_processing_error":"Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}","already_confirmed":"confirmado","expired":"Expirou, por favor fa\u00e7a um novo pedido","not_found":"n\u00e3o encontrado","not_locked":"n\u00e3o foi bloqueado","not_saved":{"one":"Um erro impossibilitou guardar %{resource}:","other":"%{count} erros impossibilitaram guardar %{resource}:"},"taken":"J\u00e1 existe","confirmation_period_expired":"needs to be confirmed within %{period}, please request a new one"},"models":{"node":{"website":{"invalid":"O endre\u00e7o da p\u00e1gina internet n\u00e3o \u00e9 v\u00e1lido."},"phone":{"invalid":"O n\u00famero de telefone n\u00e3o \u00e9 v\u00e1lido. Deve ter o formato seguinte: +49 30 234567"}}},"dynamic_format":"%{message}","template":{"body":"Registaram-se problemas com os seguintes campos:","header":{"one":"1 erro impossibilitou o registo de %{model}","other":"%{count} erros impossibilitaram o registo de %{model} "}}},"activerecord":{"errors":{"messages":{"taken":"has already been taken","record_invalid":"Validation failed: %{errors}","accepted":"must be accepted","blank":"can't be blank","confirmation":"doesn't match confirmation","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","not_a_number":"is not a number","not_equal_to":"must not be equal to %{count}","odd":"must be odd","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)"},"full_messages":{"format":"%{attribute} %{message}"},"models":{"user":{"attributes":{"email":{"blank":"can't be blank if password is given"},"privacy_policy":{"accepted":"must be accepted"},"terms":{"accepted":"must be accepted"}}},"user_session":{"email":"Email address","password":"Password","remember_me":"Stay logged in"}},"template":{"body":"There were problems with the following fields:","header":{"one":"1 error prohibited this %{model} from being saved","other":"%{count} errors prohibited this %{model} from being saved"}}},"attributes":{"user":{"first_name":"Given name","last_name":"Last name","privacy_policy":"Privacy policy","terms":"Terms"},"poi":{"name":"Nome","type":"Tipo","address":"Endere\u00e7o","website":"S\u00edtio da Internet","phone":"Telefone","note":"Nota","address_street":"Rua","address_housenumber":"N\u00famero de porta","address_postcode":"C\u00f3digo Postal","address_city":"Cidade"}},"models":{"user":"User"}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":0,"strip_insignificant_zeros":0},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":0,"strip_insignificant_zeros":0}},"percentage":{"format":{"delimiter":null}},"precision":{"format":{"delimiter":null}},"human":{"format":{"delimiter":null,"precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":null,"thousand":"Milhar","million":"Milh\u00e3o","billion":"Bili\u00e3o","trillion":"Trili\u00e3o","quadrillion":"Quadrili\u00e3o"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Por favor escolha"},"submit":{"create":"criar %{model}","update":"atualizar %{model}","submit":"guardar %{model}"},"button":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"},"page_entries_info":{"more_pages":{"display_entries":"Displaying %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> of <b>%{total}</b> in total"},"one_page":{"display_entries":{"one":"Displaying <b>1</b> %{entry_name}","other":"Displaying <b>all %{count}</b> %{entry_name}","zero":"No %{entry_name} found"}}}},"flash":{"actions":{"create":{"notice":"%{resource_name} foi criado com sucesso"},"update":{"notice":"%{resource_name} foi atualizado com sucesso"},"destroy":{"notice":"%{resource_name} foi removido com sucesso","alert":"%{resource_name} n\u00e3o pode ser removido"}},"photos":{"destroy":{"notice":"Imagem removida com sucesso"}}},"meta_search":{"or":"or","predicates":{"equals":"%{attribute} equals","does_not_equal":"%{attribute} doesn't equal","contains":"%{attribute} contains","does_not_contain":"%{attribute} doesn't contain","starts_with":"%{attribute} starts with","does_not_start_with":"%{attribute} doesn't start with","ends_with":"%{attribute} ends with","does_not_end_with":"%{attribute} doesn't end with","greater_than":"%{attribute} greater than","less_than":"%{attribute} less than","greater_than_or_equal_to":"%{attribute} greater than or equal to","less_than_or_equal_to":"%{attribute} less than or equal to","in":"%{attribute} is one of","not_in":"%{attribute} isn't one of","is_true":"%{attribute} is true","is_false":"%{attribute} is false","is_present":"%{attribute} is present","is_blank":"%{attribute} is blank","is_null":"%{attribute} is null","is_not_null":"%{attribute} isn't null"}},"views":{"pagination":{"first":"&laquo; First","last":"Last &raquo;","next":"Next &rsaquo;","previous":"&lsaquo; Prev","truncate":"&hellip;"}},"active_admin":{"dashboard":"Dashboard","dashboard_welcome":{"welcome":"Welcome to Active Admin. This is the default dashboard page.","call_to_action":"To add dashboard sections, checkout 'app/admin/dashboard.rb'"},"view":"View","edit":"Edit","delete":"Delete","delete_confirmation":"Are you sure you want to delete this?","new_model":"New %{model}","create_model":"New %{model}","edit_model":"Edit %{model}","update_model":"Edit %{model}","delete_model":"Delete %{model}","details":"%{model} Details","cancel":"Cancel","empty":"Empty","previous":"Previous","next":"Next","download":"Download:","has_many_new":"Add New %{model}","has_many_delete":"Delete","filter":"Filter","clear_filters":"Clear Filters","search_field":"Search %{field}","equal_to":"Equal To","greater_than":"Greater Than","less_than":"Less Than","main_content":"Please implement %{model}#main_content to display content.","logout":"Logout","powered_by":"Powered by %{active_admin} %{version}","sidebars":{"filters":"Filters"},"pagination":{"empty":"No %{model} found","one":"Displaying <b>1</b> %{model}","one_page":"Displaying <b>all %{n}</b> %{model}","multiple":"Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{total}</b> in total","entry":{"one":"entry","other":"entries"},"multiple_without_total":"Displaying %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>"},"any":"Any","blank_slate":{"content":"There are no %{resource_name} yet.","link":"Create one"},"batch_actions":{"button_label":"Batch Actions","delete_confirmation":"Are you sure you want to delete these %{plural_model}? You won't be able to undo this.","succesfully_destroyed":{"one":"Successfully destroyed 1 %{model}","other":"Successfully destroyed %{count} %{plural_model}"},"selection_toggle_explanation":"(Toggle Selection)","link":"Create one","action_label":"%{title} Selected","labels":{"destroy":"Delete"}},"comments":{"body":"Body","author":"Author","title":"Comment","add":"Add Comment","resource":"Resource","no_comments_yet":"No comments yet.","title_content":"Comments (%{count})","errors":{"empty_text":"Comment wasn't saved, text was empty."},"resource_type":"Resource Type","author_type":"Author Type"},"devise":{"login":{"title":"Login","remember_me":"Remember me","submit":"Login"},"reset_password":{"title":"Forgot your password?","submit":"Reset My Password"},"change_password":{"title":"Change your password","submit":"Change my password"},"links":{"sign_in":"Sign in","forgot_your_password":"Forgot your password?","sign_in_with_omniauth_provider":"Sign in with %{provider}"},"unlock":{"title":"Resend unlock instructions","submit":"Resend unlock instructions"}},"has_many_remove":"Remove","filters":{"buttons":{"filter":"Filter","clear":"Clear Filters"},"predicates":{"contains":"Contains","equals":"Equals","starts_with":"Starts with","ends_with":"Ends with","greater_than":"Greater than","less_than":"Less than"}},"access_denied":{"message":"You are not authorized to perform this action."},"index_list":{"table":"Table","block":"List","grid":"Grid","blog":"Blog"}},"devise":{"confirmations":{"confirmed":"Your account was successfully confirmed. You are now signed in.","link":"Didn't receive confirmation instructions?","send_instructions":"You will receive an email with instructions about how to confirm your account in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive an email with instructions about how to confirm your account in a few minutes."},"destroy":{"confirm":"Are you sure?","headline":"Delete Account","link":"Delete now"},"edit":{"form":{"labels":{"current_password":"Current password <i>(we need it to confirm your changes)</i>","email":"E-mail","password":"Password <i>(leave empty if you don\\'t want to change it)</i>","password_confirmation":"Repetir password"},"submit":"Save changes"},"headline":"Edit account"},"failure":{"already_authenticated":"You are already signed in.","inactive":"Your account was not activated yet.","invalid":"Invalid email or password.","invalid_token":"Invalid authentication token.","locked":"Your account is locked.","timeout":"Your session expired, please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing.","unconfirmed":"You have to confirm your account before continuing.","not_found_in_database":"Invalid email or password."},"mailer":{"confirmation_instructions":{"landing_page":"Please click on the link that we just sent to your email address. If you do not receive an email from us please first check it is not hiding in your spam folder, if it is not there return to the sign up page and try again.","subject":"Confirmation instructions"},"reset_password_instructions":{"subject":"Reset password instructions"},"unlock_instructions":{"subject":"Unlock Instructions"}},"mandatory":"* Required","omniauth_callbacks":{"failure":"Could not authenticate you from %{kind} because \"%{reason}\".","permission_missing":"You did not grant the required permissions.","success":"Successfully authenticated from %{kind} account."},"password_recovery":{"form":{"labels":{"email":"E-mail"},"submit":"Reset password"},"headline":"Forgot Password?"},"password_reset":{"email":{"comment":"If you did not request a password reset, just ignore this email.<br/>Your password won\\'t be changed unless you click on the link above and set a new password.","headline":"Welcome %{email}","link":"Change my password","text":"There was a request to change your password, if it was you click the following link - else ignore!"},"form":{"labels":{"password":"New password","password_confirmation":"Repetir password"},"submit":"Reset password"},"headline":"Reset password"},"passwords":{"link":"Esqueceu palavra-passe?","send_instructions":"You will receive an email with instructions about how to reset your password in a few minutes.","send_paranoid_instructions":"If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.","updated":"Your password was changed successfully. You are now signed in.","updated_not_active":"Your password was changed successfully.","no_token":"You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided."},"registrations":{"destroyed":"Bye! Your account was successfully cancelled. We hope to see you again soon.","inactive_signed_up":"You have signed up successfully, but we could not log you in. Reason: \"%{reason}\"","link":"Sign up","reasons":{"inactive":"inactive","locked":"locked","unconfirmed":"unconfirmed"},"signed_up":"Welcome! You have signed up successfully.","updated":"You updated your account successfully.","signed_up_but_inactive":"You have signed up successfully. However, we could not sign you in because your account is not yet activated.","signed_up_but_locked":"You have signed up successfully. However, we could not sign you in because your account is locked.","signed_up_but_unconfirmed":"A message with a confirmation link has been sent to your email address. Please open the link to activate your account.","update_needs_confirmation":"You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address."},"sessions":{"inactive":"Your account was not activated yet","invalid":"Invalid email or password.","invalid_token":"Invalid authentication token","link":"Sign in","locked":"Your account is locked","new":{"no_osm_account":"No OpenStreetMap account?","osm_promo_text":"The wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must to be logged in with it.","promo_text_thank_you":"Thank you very much for your support!","sign_in_with":"Log in with %{kind}","sign_up_with_osm":"Register now.","wheelmap_promo_text":"With your knowledge about wheelchair accessible places you help people with physical impairments to better organize their everyday live. Furthermore the OpenStreetMap gets considerably richer in detail."},"signed_in":"Signed in successfully.","signed_out":"Signed out successfully.","timeout":"Your session expired, please sign in again to continue.","unauthenticated":"You need to sign in or sign up before continuing","unconfirmed":"You need to confirm your account before continuing"},"sign_in":{"form":{"labels":{"email":"E-mail","password":"Palavra-chave","remember_me":"Stay logged in?"},"submit":"Ligar"},"headline":"Ligar"},"sign_out":{"headline":"Desligar"},"sign_up":{"email":{"confirm_my_account":"Confirm my account","please_confirm":"You can confirm your account through the link below:","welcome":"Welcome %{email}!"},"form":{"labels":{"email":"E-mail","password":"Palavra-chave","password_confirmation":"Repetir password","wants_newsletter":"Yes, keep me up to date about wheelmap - but please not more than once a month."},"submit":"Sign up"},"headline":"Sign up"},"unlocks":{"link":"Didn't receive unlock instructions?","send_instructions":"You will receive an email with instructions about how to unlock your account in a few minutes.","send_paranoid_instructions":"If your account exists, you will receive an email with instructions about how to unlock it in a few minutes.","unlocked":"Your account has been unlocked successfully. Please sign in to continue."}},"poi":{"category":{"accommodation":"Alojamento","education":"Educa\u00e7\u00e3o","food":"Restaura\u00e7\u00e3o","government":"Governamental","health":"Sa\u00fade","leisure":"Lazer","misc":"Outros","money_post":"Banco","public_transfer":"Transportes p\u00fablicos","shopping":"Lojas","sport":"Desporto","tourism":"Turismo","unknown":"Local desconhecido"},"name":{"accommodation":{"beach_resort":"Praia concessionada","bed_and_breakfast":"Bed and breakfast","camp_site":"Campismo","caravan_site":"Parque de caravanas","chalet":"Chalet","dormitory":"Dormit\u00f3rio","guest_house":"Casa de h\u00f3spedes","hostel":"Hostel","hotel":"Hotel","motel":"Motel"},"education":{"college":"Col\u00e9gio","driving_school":"Escola de condu\u00e7\u00e3o","kindergarten":"Infant\u00e1rio","library":"Biblioteca","museum":"Museu","school":"Escola","university":"Universidade"},"food":{"bar":"Bar","biergarten":"Cervejaria ao ar livre","cafe":"Caf\u00e9","drinking_water":"\u00c1gua pot\u00e1vel","fast_food":"Fast Food","ice_cream":"Gelataria","pub":"Pub","restaurant":"Restaurante"},"government":{"courthouse":"Tribunal","embassy":"Embaixada","government":"Ag\u00eancia governamental","police":"Pol\u00edcia","public_building":"Edif\u00edcio p\u00fablico","townhall":"C\u00e2mara Municipal"},"health":{"dentist":"Dentista","doctors":"M\u00e9dicos","hearing_aids":"Loja de aparelhos auditivos","hospital":"Hospital","medical_supply":"Equipamentos m\u00e9dicos","pharmacy":"Farm\u00e1cia","social_facility":"Centro social","veterinary":"Veterin\u00e1rio"},"leisure":{"arena":"Est\u00e1dio","brothel":"Casa de prostitui\u00e7\u00e3o","casino":"Casino","cinema":"Cinema","community_center":"Centro comunit\u00e1rio","gallery":"Galeria","nightclub":"Discoteca","playground":"Parque infantil","sauna":"Sauna","stripclub":"Bar de strip","theatre":"Teatro","zoo":"Jardim zool\u00f3gico"},"misc":{"company":"Escrit\u00f3rio (empresa)","estate_agent":"Ag\u00eancia imobili\u00e1ria","insurance":"Seguradora","lawyer":"Advogado","place_of_worship":"Local de culto","toilets":"WC"},"money_post":{"atm":"Multibanco","bank":"Banco","bureau_de_change":"Casa de c\u00e2mbio","post_box":"Marco de correio","post_office":"Correios"},"public_transfer":{"aerodrome":"Aeroporto","bicycle_parking":"Estacionamento de biclicletas","bicycle_rental":"Aluguer de bicicletas","boatyard":"Estaleiro","bus_station":"Terminal rodovi\u00e1rio","bus_stop":"Paragem de autocarros","cable_car":"Telef\u00e9rico","car_rental":"Rent-a-car","car_sharing":"Partilha de carros","chair_lift":"Telecadeira","ferry":"Ferry","ferry_terminal":"Cais de ferry","fuel":"Bomba de gasolina","halt":"Apeadeiro","light_rail":"Metro ligeiro","parking":"Estacionamento","parking_aisle":"Lugar de estacionamento","platform":"Cais","station":"Esta\u00e7\u00e3o de comboios","subway_entrance":"Entrada de metro","terminal":"Terminal de aeroporto","tram_stop":"Paragem de el\u00e9trico"},"shopping":{"alcohol":"Licor","bakery":"Padaria","beauty":"Sal\u00e3o de beleza","beverages":"Bebidas","bicycle":"Loja de bicicletas","books":"Livros","butcher":"Talho","car_repair":"Oficina autom\u00f3vel","car_shop":"Stand autom\u00f3vel","chemist":"Ervan\u00e1ria","clothes":"Loja de roupa","computer":"Loja de inform\u00e1tica","confectionery":"Loja de doces","convenience":"Loja de conveni\u00eancia","deli":"Loja gourmet","department_store":"Armaz\u00e9ns (lojas)","doityourself":"Bricolage","dry_cleaning":"Limpeza a seco","electronics":"Electr\u00f3nica","fabric":"Loja de confe\u00e7\u00f5es","farm_shop":"Loja do produtor","florist":"Florista","furniture":"Mobili\u00e1rio","garden_centre":"Centro de jardinagem","gift":"Loja de recorda\u00e7\u00f5es","hairdresser":"Cabeleireiro","hardware":"Drogaria","jewelry":"Ourivesaria","kiosk":"Quisque","laundry":"Lavandaria","mall":"Centro comercial","optician":"\u00d3ptica","organic":"Loja de produtos biol\u00f3gicos","outdoor":"Produtos de atividades ao ar livre","pet":"Loja de animais","photo":"Loja de fotografia","second_hand":"Cash converter","shoes":"Sapataria","sports":"Loja de desporto","stationery":"Material de escrit\u00f3rio","supermarket":"Supermercado","toys":"Loja de brinquedos","travel_agency":"Ag\u00eancia de viagens","video":"Clube de v\u00eddeo"},"sport":{"pitch":"Campo desportivo","sports_centre":"Centro desportivo","stadium":"Est\u00e1dio","swimming":"Nata\u00e7\u00e3o","swimming_pool":"Piscina"},"tourism":{"archaeological_site":"S\u00edtio arqueol\u00f3gico","arts_centre":"Centro de arte","artwork":"Est\u00e1tua","attraction":"Atra\u00e7\u00e3o","battlefield":"Campo de batalha","beach":"Praia","beacon":"Farol","castle":"Castelo","cave_entrance":"Gruta","information":"Informa\u00e7\u00e3o tur\u00edstica","memorial":"Memorial","theme_park":"Parque tem\u00e1tico","tower":"Torre","viewpoint":"Miradouro"},"unknown":{"unknown":"Local desconhecido"}}},"models":{"category":{"prompt":"Escolha uma categoria"},"node_type":{"prompt":"Escolha um tipo"},"node":{"info_edit_position":"A localiza\u00e7\u00e3o vai aparecer Wheelmap como est\u00e1 acima. Se o marcados n\u00e3o est\u00e1 no local correto, pode <a href=\"%{url}\">alterar a sua localiza\u00e7\u00e3o no OpenStreetMap</a>.","mail":{"subject":"[Wheelmap] Problema com %{headline}","body":"(Por favor, escreca apenas em Ingl\u00eas ou Alem\u00e3o).\n\nOl\u00e1 Sozialhelden,\nest\u00e1 alguma coisa errada com a localiza\u00e7\u00e3o: %{url}\n\nO problema \u00e9:"}}},"actions":{"send":"Enviar","save":"Gravar","cancel":"Cancelar"},"faq":{"answers":{"0":"Pode sempre altear o marcador de um lugar por si. Escolha apenas o marcador correto e \"Guardar\".","1":"Enquanto um utilizador, pode adicionar / corrigir todos os detalhes de um lugar. Clique em \"Editar\" e corrija ou adicione a informa\u00e7\u00e3o na janela.","2":"Pode adicionar mais informa\u00e7\u00e3o (ex. \"Este lugar tem rampa\") na sec\u00e7\u00e3o dos coment\u00e1rios. Clique em \"Editar\" e \"Adicionar coment\u00e1rio\"."},"headline":"H\u00e1 algum problema com este lugar?","questions":{"0":"Marca\u00e7\u00e3o errada.","1":"N\u00e3o existem informa\u00e7\u00f5es do lugar ou est\u00e3o incorretas.","2":"Tenho mais informa\u00e7\u00e3o sobre este lugar."}},"header":{"navigation":{"about_wheelmap":"Sobre o Wheelmap","choose_language":"Escolher l\u00edngua","contact":"Contacto","map":"Mapa","projects":"Projetos","blog":"Not\u00edcias","feedback":"Feedback","home":"Come\u00e7ar","how_to_add_a_place":"Como posso adicionar lugares?","imprint":"Imprimir","logged_in_as":"Ligado como:","login":"Ligar","logout":"Desligar","newsletter":"Newsletter","press":"Imprensa","profile":"Perfil","suggestions":"Sugest\u00f5es","what_is_barrier_free":"O que significa \"acess\u00edvel a cadeiras de rodas\"?","what_is_wheelmap":"O que \u00e9 um wheelmap?"},"toolbar":{"categories":"Categorias"},"meta":{"description":"Encontrar lugares acess\u00edveis a cadeiras de rodas - wheelmap.org","homepage":"P\u00e1gina inicial","keywords":"encontrar marcador de locais acess\u00edveis a cadeiras de rodas","search":"Pesquisar"},"searchbar":{"add_place":"Adicionar outro lugar","find":"Encontrar","label":null,"placeholder":"Pesquisar outro lugar","title_add_place":"Adicionar um novo lugar a esta posi\u00e7\u00e3o agora!"},"tagline":"Logo Wheelmap ","title":"encontrar lugares acess\u00edveis a cadeiras de rodas"},"home":{"index":{"overlay":{"button":"Ok, vamos!","categories":"Filtrar lugares por categorias","filter":"Filtrar lugares por acessibilidade a cadeiras de rodas","headline":"Encontrar e marcar lugares acess\u00edveis a pessoas de cadeiras de rodas com Wheelmap.org - em todo o mundo e sem custos. \u00c9 f\u00e1cil:","lookup":"Pesquisar um lugar espec\u00edfico","secondary_headline":"Sistema luminoso para indicar a acessibilidade de lugares p\u00fablicos: "},"filter":{"category":"Escolha a categoria","deselect_all":"Remover sele\u00e7\u00e3o","select_all":"Selecionar todos","wheelchair":"Acess\u00edvel a cadeiras de rosas?"},"ie":{"action":{"ignore":"Ignorar","upgrade":"Atualizar p\u00e1gina"},"warning":{"headline":"Pedimos desculpa!","message":"Parece estar a usar o Internet Explorer. O Wheelmap exige outro browser para funcionar corretamente, por favor considere utiliza Firefox, Chrome, Safari ou Opera."}},"link":{"node":{"create":"Adicionar novo lugar"}},"popup":{"form":{"limited":"parcialmente acess\u00edvel a cadeiras de rodas","no":"n\u00e3o acess\u00edvel a cadeiras de rodas","save":"Atualizar","unknown":"estado desconhecido","yes":"acess\u00edvel a cadeiras de rodas"},"help":"Acess\u00edvel a cadeiras de rodas? (Ajuda)","more":"mais..."}}},"nodes":{"new":{"form":{"legend":"Localiza\u00e7\u00e3o do lugar","location":"Por favor clique no mapa e coloque o marcado na posi\u00e7\u00e3o exata."},"header":{"title":"Lugar novo  | wheelmap.org"},"link":{"large_map":"&laquo; Cancelar"}},"node_data":{"address":"Morada:","contact_details":"Detalhes do contato:"},"node_edit":{"details":"Detalhes","edit":"Editar"},"node_map":{"map":"Mapa:"},"node_note":{"comment":"Adicionar coment\u00e1rio:"},"node_photos":{"add":"Adicionar","photos_of_this_place":"Fotografias deste lugar:","upload":"Upload"},"node_similar":{"similar":"Lugares semelhantes: %{name}"},"node_status":{"accessible_toilet":"WC acess\u00edvel a cadeiras de rodas:","premium":"%{name} diz: este lugar \u00e9","wheelchair_accessibility":"Acessibilidade a cadeiras de rodas:"},"node_streetview":{"streetview":"Streetview:"},"show":{"header":{"meta":{"description":"Confirme se este lugar \u00e9 acess\u00edvel a cadeiras de rodas em Wheelmap.org. Ou adicione mais informa\u00e7\u00f5es e fotografias do lugar.","title":"Este s\u00edtio no Wheelmap.org: %{name}"},"title":"Lugar: %{node} | wheelmap.org"},"share":{"email":"E-mail","facebook":"Facebook","text":"Encontrei isto em Wheelmap.org: %{name}","twitter":"Twitter"},"link":{"back":"voltar","large_map":"Aumentar","listing":"Todos os lugares do tipo '%{type}' em %{city}","upload":"Carregar imagem"},"more_data_from":"H\u00e1 mais dados para este lugar, confirmado por:","show-in-osm":"OpenStreetMap"},"create":{"flash":{"not_successfull":"Desculpe, a sua introdu\u00e7\u00e3o estava incorreta ou incompleta","successfull":"Obrigado, a sua submiss\u00e3o foi guardade com sucesso e estar\u00e1 online em breve."}},"edit":{"header":{"title":"Editar lugar: %{node} | wheelmap.org"},"link":{"large_map":"&laquo; Cancelar"}},"errors":{"default":"Desculpa, algo correu mal. Fomo informados desta situa\u00e7\u00e3o.","not_authorized":"Desculpe, falha na autentifica\u00e7\u00e3o","not_available":"Pedimos desculpa, p\u00e1gina temporariamente indispon\u00edvel.","not_existent":"Pedimos desculpa, o lugar j\u00e1 n\u00e3o se encontra indispon\u00edvel.","not_found":"Desculpe, p\u00e1gina n\u00e3o encontrada.","param_missing":"Por favor indique uma palavra de pesquisa"},"flash":{"authorize_wheelmap":"Precisa de ter uma conta OpenStreetMap a modificar dados"},"node":{"link":{"claim":"Trabalha aqui?","edit_node":"Editar lugar","report_bug":"Reportar um problema"}},"update":{"flash":{"not_successfull":"Desculpe, a sua introdu\u00e7\u00e3o estava incorreta ou incompleta","successfull":"Obrigado, a sua submiss\u00e3o foi guardada com sucesso e estar\u00e1 online em breve."}},"update_wheelchair":{"successfull":"O estado para \"%{name}\" foi modificado para \"%{status}\" e estar\u00e1 online em breve."}},"search":{"index":{"no-results":{"headline":"Sorry, we couldn\u2019t find a place called \"%{query}\".","hint":{"example":"<strong>Exemplo:</strong> Londres, Reino Unido","info":"A nossa pesquisa s\u00f3 funciona com a informa\u00e7\u00e3o do nome e/ou endere\u00e7o. Desta forma, preencha um dos campos para o nome do lugar ou o endere\u00e7o (por ex., nome da rua e/ou cidade). A pesquina pelo tipo de lugar (ex. restaurante ou cinema), n\u00e3o funciona!","work_in_progress":"Tentamos veemente tornar a pesquisa de lugares mais f\u00e1cil e intuitiva no futuro."},"try_this":{"address":"Por favor, forne\u00e7a mais <strong>detalhes do endere\u00e7o</strong>.","intro":"Tente isto:","spell_check":"Confirme o <strong>texto</strong> inserido."}},"results":{"ticker":{"one":"%{count} resultado:","other":"%{count} resultados:"}},"search":{"for":"A pesquisar \"%{q}\"","not_found":"N\u00e3o foram encontrados lugares!"}},"timeout":{"headline":"Desculpe, enganou-se.","info":"O nosso servi\u00e7o de pesquisa est\u00e1 temporariamente indispon\u00edvel.","repeat_search":"Volte a tentar"}},"users":{"profile":{"explanation_text":"This is a simple text that will explain what users see here ...","greeting":{"anonymously":"Hello you","personalized":"Hello %{name}"},"headline":{"edit_profile":"Edit profile","overview":"Your Account","your_photos":"Your photos"}},"tabs":{"account":"Account","images":"Images","overview":"Overview"},"after_signup_edit":{"welcome":{"headline":"Est\u00e1 quase! Termine o registo da sua conta Wheelmap aqui:","set_password_for_mobile":"Completou o seu registo com OpenStreetMap.\nAgora escolha um endre\u00e7o de e-mail e passwor para a sua conta Wheelmap e estar\u00e1 conclu\u00eddo! Precisa deste endere\u00e7o de e-mail e a password para se ligar nas aplica\u00e7\u00f5es Wheelmap para iPhone ou Android.","text":"Como \u00e9 que o podemos contactar? Pode editar esta informa\u00e7\u00e3o mais tarde no seu perfil."}},"edit":{"headline":{"your_images":"As suas imagens carregadas"}}},"application":{"require_no_user":{"notice":"J\u00e1 est\u00e1 ligado..."},"require_user":{"notice":"Deve fazer login para ver esta p\u00e1gina."}},"breadcrumbs":{"node":{"create":"Adicionar novo lugar","edit":"Editar lugar"},"root":"wheelmap"},"common":{"close":"fechar","skip":"saltar"},"form":{"show_fully_accessible_places":"Acess\u00edvel a cadeiras de rodas","show_limited_accessible_places":"parcialmente acess\u00edvel a cadeiras de rodas","show_places_without_status":"estado desconhecido","show_unaccessible_places":"n\u00e3o acess\u00edvel a cadeiras de rodas"},"formtastic":{"hints":{"email":"We treat your address confidentially, no spam. Promise!","lat":"Mova o marcado no mapa para a posi\u00e7\u00e3o correta","osm_username":"Ainda n\u00e3o \u00e9 membro? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Crie uma conta OpenStreetMap agora</a>","password":"(deixe em branco se n\u00e3o pretende alterar)","phone":"Por exemplo: +49 30 123456-78","website":"Por exemplo: http://www.example.com"},"labels":{"category":"Categoria:","centralkey":"Chave central:","city":"Cidade:","create":"Criar lugar","email":"E-mail","finish":"Terminar","housenumber":"N\u00e3o:","lat":"Latitude","lon":"Longitude","name":"Nome:","osm_password":"Password OSM ","osm_username":"Nome de conta OSM ","password":"Palavra-passe","password_confirmation":"Repetir password","phone":"Telefone:","postcode":"C\u00f3digo postal:","privacy_policy":"Eu aceito os par\u00e1grafos 1 e 2 do acordo de privacidade.","reset":"Reset","save":"Gravar","street":"Rua:","terms":"Aceito as condi\u00e7\u00f5es de uso.","type":"Tipo:","website":"P\u00e1gina internet:","wheelchair":"Acess\u00edvel a cadeiras de rodas?","wheelchair_description":"Coment\u00e1rio \u00e0 acessibilidade:","wheelchair_toilet":"Wheelchair bathroom:"},"titles":{"basic":"Dados b\u00e1sicos","optional":"Mais informa\u00e7\u00e3o  <span class=\"addition\">(todos os campos s\u00e3o opcionais)</span>"}},"global":{"form_validation_error":"Por favor reveja os erros listados abaixo"},"how?":"Como?","landing_pages":{"index":{"wheelchair":{"limit":{"headline":"Todos os locais  %{type} com acesso limitado a cadeiras de rodas em %{city} (%{count})"},"no":{"headline":"Todos os locais  %{type} n\u00e3o acess\u00edveis a cadeiras de rodas em %{city} (%{count})"},"unknown":{"headline":"Todos os %{type} em %{city}  com acessibilidade a cadeiras de rodas desconhecida (%{count})"},"yes":{"headline":"Todos os locais  %{type} acess\u00edveis a cadeiras de rodas em %{city} (%{count})"}}}},"layouts":{"application":{"banner":{"alt":"Um projeto de Sozialhelden.de"}}},"node":{"address":{"city":"%{city} %{postcode}","street":"%{housenumber} %{street}"},"tags":{"phone":"Telefone:","website":"P\u00e1gina internet:"}},"oauth":{"application":{"connect":{"headline":"Precisa de ligar esta conta com a conta  'open street map' antes de poder criar ou modificar lugares em wheelmap.org."}},"callback":{"notice":"A sua conta wheelmap est\u00e1 agora ligado \u00e0 conta %{user} do OpenStreetMap ."}},"or":"ou","place":{"one":"%{count} lugar","other":"%{count} lugares"},"profile":{"edit":{"application":{"oauth":{"connected":"Estado: ligado","grant":"Ligar agora","not_connected":"Estado: N\u00e3o ligado","revoke":"Desligar"}},"headline":"Editar perfil"}},"splash":{"countline":"%{count} lugares que j\u00e1 foram marcados.","headline":"Qualquer um pode adicionar lugares acess\u00edveis a cadeiras de rodas!","start":"Come\u00e7ar","step1":"Clique num lugar que conhe\u00e7a","step2":"Marque-o e clique guardar","step3":"\u00c9 isto! N\u00e3o \u00e9 preciso registo","what_is_wheelmap":"O que \u00e9 um Wheelmap?"},"statistics":"Estat\u00edsticas","toiletstatus":{"no":"No wheelchair accessible toilet","unknown":"estado desconhecido","yes":"Wheelchair accessible toilet","what_is":{"no":"Doorway's inner width min. 90 cm, clear space min. 150 x 150 cm, wheelchair-height toilet seat, folding grab rails and accessible hand basin.","yes":"Doorway's inner width min. 90 cm, clear space min. 150 x 150 cm, wheelchair-height toilet seat, folding grab rails and accessible hand basin.","unknown":"Help by marking the toilet status!"}},"user_sessions":{"create":{"activation":{"notice":"A sua conta est\u00e1 ativa!"},"error":{"notice":"O e-mail e a password n\u00e3o correspondem."},"notice":"Est\u00e1 ligado!"},"destroy":{"notice":"Adeus, volte em breve!"},"new":{"email":"Endere\u00e7o de e-mail","login":"Ligar","login_with_twitter":"Ligar com o Twitter","password":"Palavra-passe","remember_me":"Permanecer ligado"}},"wheelchairstatus":{"limited":"parcialmente acess\u00edvel a cadeiras de rodas","no":"n\u00e3o acess\u00edvel a cadeiras de rodas","unknown":"estado desconhecido","yes":"acess\u00edvel a cadeiras de rodas"},"wheelmap":{"footer":{"a_project_of":"Um projeto de","based_on":"Baseado em","become_a_supporter":"Torne-se num patrocinador","main_supporter":"Patrocinador principal"},"itunes":{"alt":"AppStore Logo","title":"Fa\u00e7a o download da iPhone App agora!"},"logo":{"alt":"Wheelmap Logo - encontre lugares acess\u00edveis a cadeiras de rodas","title":"Wheelmap - encontre lugares acess\u00edveis a cadeiras de rodas"},"what_is":{"fully_accessible":"Entrada e todos os espa\u00e7os sem degraus, se houver WC \u00e9 acess\u00edvel.","limited_accessible":"Entrada com degrau (altura m\u00e1xima 7 cm), nenhum dos espa\u00e7os tem degraus, WC n\u00e3o acess\u00edvel","not_accessible":"Entrada inclinada ou com v\u00e1rios degraus, espa\u00e7os n\u00e3o acess\u00edveis.","unknown_accessible":"Ajude a marcar lugares!"}},"will_paginate":{"next_label":"Pr\u00f3ximo &#8594;","page_entries_info":{"multi_page":"A apresentar %{model} %{from} - %{to} de %{count} no total","multi_page_html":"A apresentar %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> de <b>%{count}</b> no total","single_page":{"one":"A apresentar 1 %{model}","other":"A apresentar todos os %{count} %{model}","zero":"%{model} n\u00e3o encontrado"},"single_page_html":{"one":"A apresentar <b>1</b> %{model}","other":"A apresentar <b>all&nbsp;%{count}</b> %{model}","zero":"%{model} n\u00e3o encontrado"}},"page_gap":"&hellip;","previous_label":"&#8592; Anterior"},"apipie":{"resources":"Resources","resource":"Resource","description":"Description","no_docs_found":"No documentation found","no_docs_found_descr":"We have not found any documentation for your API.","follow_instructions_html":"Follow %{href} on how to describe your controllers.","follow_instructions_href":"further instructions","oops":"Oops!!","resource_not_found_html":"Resource %{res} not found.","method_not_found_html":"Method %{method} not found for resource %{resource}.","goto_homepage_html":"Try going to %{href}","goto_homepage_href":"%{app_name} API documentation homepage","required":"required","optional":"optional","nil_allowed":"nil allowed","param_name":"Param name","params":"Params","examples":"Examples","metadata":"Metadata","errors":"Errors","supported_formats":"Supported Formats","enable_javascript_html":"Please enable JavaScript to view the %{comments_href}.","comments_powered_by_disqus":"comments powered by %{disqus}","api_documentation":"API documentation"}};
