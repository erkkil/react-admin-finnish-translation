export default {
    ra: {
        action: {
            delete: 'Poista',
            show: 'Näytä',
            list: 'Listaa',
            save: 'Tallenna',
            create: 'Uusi',
            edit: 'Muokkaa',
            cancel: 'Peruuta',
            refresh: 'Päivitä',
            add_filter: 'Suodata',
            remove_filter: 'Poista suodatin',
            back: 'Takaisin',
            bulk_actions: '%{smart_count} valittu',
        },
        boolean: {
            true: 'Kyllä',
            false: 'Ei',
        },
        page: {
            list: '%{name} Lista',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Uusi %{name}',
            delete: 'Poista %{name} #%{id}',
            dashboard: 'Etusivu',
            not_found: 'Ei löytynyt',
            loading: 'Ladataan',
        },
        input: {
            file: {
                upload_several:
                	'Pudota tiedostoja, tai klikkaa valitaksesi.',
                upload_single: 'Pudota tiedosto, tai klikkaa valitaksesi.',
            },
            image: {
                upload_several:
                	'Pudota kuvatiedostoja, tai klikkaa valitaksesi.',
                upload_single:
                    'Pudota kuvatiedosto, tai klikkaa valitaksesi.',
            },
            references: {
                all_missing: 'Tietoja ei löydy.',
                many_missing:
                    'Ainakin yksi liitetyistä arvoista ei ole saatavilla.',
                single_missing:
                    'Liitettty arvo ei ole enää saatavilla.',
            },
        },
        message: {
            yes: 'Kyllä',
            no: 'Ei',
            are_you_sure: 'Oletko varma?',
            about: 'Tietoja',
            not_found:
                'Kirjoitit joko virheellisen osoitteen, tai seurasit virheellistä linkkiä.',
            loading: 'Sivua ladataan. Ole hyvä ja odota hetki',
            invalid_form: 'Lomakkeella on virheellistä tietoa. Ole hyvä ja korjaa virheet',
            delete_title: 'Poista %{name} #%{id}',
            delete_content: 'OLetko varma että haluat poistaa tämän tiedon?',
            bulk_delete_title:
                'Poista %{name} |||| Poista %{smart_count} %{name} tiedot',
            bulk_delete_content:
                'Oletko varma että haluat poistaa tämän tiedon %{name}? |||| Oletko varma että haluat poistaa nämä %{smart_count} tiedot?',
        },
        navigation: {
            no_results: 'Ei tuloksia',
            page_out_of_boundaries: 'Sivu %{page} rajojen ulkopuolella',
            page_out_from_end: 'Olet jo viimeisellä sivulla',
            page_out_from_begin: 'Olet jo ensimmäisellä sivulla',
            page_range_info: '%{offsetBegin}-%{offsetEnd} / %{total}',
            next: 'Seuraava',
            prev: 'Edellinen',
        },
        auth: {
            username: 'Käyttäjätunnus',
            password: 'Salasana',
            sign_in: 'Kirjaudu',
            sign_in_error: 'Kirjautuminen epäonnistui, yritä uudelleen',
            logout: 'Kirjaudu ulos',
        },
        notification: {
            updated: 'Kohde päivitetty',
            created: 'Kohde luotu',
            deleted: 'Kohde poistettu',
            item_doesnt_exist: 'Kohdetta ei löydy',
            http_error: 'Yhteysvirhe',
            canceled: 'Toiminto keskeytetty',
        },
        validation: {
            required: 'Pakollinen',
            minLength: 'Vähintään %{min} merkkiä pitkä',
            maxLength: 'Maksimissaan %{max} merkkiä',
            minValue: 'Vähintään %{min}',
            maxValue: 'Maksimissaan %{max}',
            number: 'On oltava numero',
            email: 'Oltava oikeanmuotoinen sähköpostiosoite',
            oneOf: 'Arvon täytyy olla jokin näistä: %{options}',
            regex: 'Arvon täytyy olla tässä muodossa (regexp): %{pattern}',
        },
    },
};