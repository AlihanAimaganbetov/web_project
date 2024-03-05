import React, {useState, useEffect} from 'react';
import Image from '../Image/Image';
import {Link} from 'react-router-dom';
import './Gallery.css';

const Gallery = ({imagesPerPage}) => {
    const [images, setImages] = useState(
        []
    );
    useEffect(() => {
        // Открыть или создать базу данных "imagesDB" и хранилище "imagesStore"
        const request = indexedDB.open('imagesDB', 1);

        request.onerror = function (event) {
            console.error("IndexedDB error:", event.target.error);
        };

        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            // Создать хранилище "imagesStore", если оно еще не существует
            if (!db.objectStoreNames.contains('imagesStore')) {
                db.createObjectStore('imagesStore', {keyPath: 'id', autoIncrement: true});
            }
        };

        request.onsuccess = function (event) {
            const db = event.target.result;
            const transaction = db.transaction(['imagesStore'], 'readwrite');
            const objectStore = transaction.objectStore('imagesStore');

            // Получить все изображения из хранилища
            const getAllImages = objectStore.getAll();

            getAllImages.onsuccess = function () {
                if (getAllImages.result.length > 0) {
                    // Если есть сохраненные изображения, установить их в state
                    setImages(getAllImages.result.map(image => image.url));
                } else {
                    // Если в хранилище нет изображений, установить изображения по умолчанию
                    setImages([
                        ' /images/P038A040.JPG ',
                        ' /images/P038A045.JPG ',
                        ' /images/P038A050.JPG ',
                        ' /images/P038B108.JPG ',
                        ' /images/P039A011.JPG ',
                        ' /images/P039A018.JPG ',
                        ' /images/P039B061.JPG ',
                        ' /images/P039B074.JPG ',
                        ' /images/P039B075.JPG ',
                        ' /images/P039B076.JPG ',
                        ' /images/P039B086.JPG ',
                        ' /images/P039B090.JPG ',
                        ' /images/P040A012.JPG ',
                        ' /images/P040A047.JPG ',
                        ' /images/P040B067.JPG ',
                        ' /images/P040B068.JPG ',
                        ' /images/P040B069.JPG ',
                        ' /images/P040B070.JPG ',
                        ' /images/P040B072.JPG ',
                        ' /images/P040B073.JPG ',
                        ' /images/P040B074.JPG ',
                        ' /images/P040B075.JPG ',
                        ' /images/P040B084.JPG ',
                        ' /images/P040B088.JPG ',
                        ' /images/P040B091.JPG ',
                        ' /images/P040B097.JPG ',
                        ' /images/P040B098.JPG ',
                        ' /images/P040B099.JPG ',
                        ' /images/P040B100.JPG ',
                        ' /images/P040B101.JPG ',
                        ' /images/P040B102.JPG ',
                        ' /images/P040B105.JPG ',
                        ' /images/P040B106.JPG ',
                        ' /images/P040B107.JPG ',
                        ' /images/P040B108.JPG ',
                        ' /images/P040B109.JPG ',
                        ' /images/P040B110.JPG ',
                        ' /images/P041A010.JPG ',
                        ' /images/P041A011.JPG ',
                        ' /images/P041A012.JPG ',
                        ' /images/P041A017.JPG ',
                        ' /images/P041A023.JPG ',
                        ' /images/P041A037.JPG ',
                        ' /images/P041A040.JPG ',
                        ' /images/P041A041.JPG ',
                        ' /images/P041A042.JPG ',
                        ' /images/P041B065.JPG ',
                        ' /images/P041B071.JPG ',
                        ' /images/P041B076.JPG ',
                        ' /images/P041B077.JPG ',
                        ' /images/P041B078.JPG ',
                        ' /images/P041B100.JPG ',
                        ' /images/P042A030.JPG ',
                        ' /images/P042A033.JPG ',
                        ' /images/P042B070.JPG ',
                        ' /images/P042B074.JPG ',
                        ' /images/P042B095.JPG ',
                        ' /images/P042B106.JPG ',
                        ' /images/P043A015.JPG ',
                        ' /images/P043A031.JPG ',
                        ' /images/P043A046.JPG ',
                        ' /images/P043B052.JPG ',
                        ' /images/P043B056.JPG ',
                        ' /images/P043B067.JPG ',
                        ' /images/P044A006.JPG ',
                        ' /images/P044A033.JPG ',
                        ' /images/P044A038.JPG ',
                        ' /images/P044B053.JPG ',
                        ' /images/P044B054.JPG ',
                        ' /images/P044B096.JPG ',
                        ' /images/P044B097.JPG ',
                        ' /images/P044B099.JPG ',
                        ' /images/P044B101.JPG ',
                        ' /images/P044B105.JPG ',
                        ' /images/P045A008.JPG ',
                        ' /images/P045A009.JPG ',
                        ' /images/P045A013.JPG ',
                        ' /images/P045A016.JPG ',
                        ' /images/P045A017.JPG ',
                        ' /images/P045A018.JPG ',
                        ' /images/P045A019.JPG ',
                        ' /images/P045A020.JPG ',
                        ' /images/P045A022.JPG ',
                        ' /images/P045A023.JPG ',
                        ' /images/P045A024.JPG ',
                        ' /images/P045A026.JPG ',
                        ' /images/P045A030.JPG ',
                        ' /images/P045A034.JPG ',
                        ' /images/P045A037.JPG ',
                        ' /images/P045A043.JPG ',
                        ' /images/P045A050.JPG ',
                        ' /images/P045B052.JPG ',
                        ' /images/P045B053.JPG ',
                        ' /images/P045B057.JPG ',
                        ' /images/P045B059.JPG ',
                        ' /images/P045B061.JPG ',
                        ' /images/P045B065.JPG ',
                        ' /images/P045B068.JPG ',
                        ' /images/P045B091.JPG ',
                        ' /images/P045B100.JPG ',
                        ' /images/P045B105.JPG ',
                        ' /images/P046A010.JPG ',
                        ' /images/P046A029.JPG ',
                        ' /images/P046B096.JPG ',
                        ' /images/P046B102.JPG ',
                        ' /images/P047A020.JPG ',
                        ' /images/P047A046.JPG ',
                        ' /images/P047B094.JPG ',
                        ' /images/P048A014.JPG ',
                        ' /images/P048A035.JPG ',
                        ' /images/P048B067.JPG ',
                        ' /images/P048B071.JPG ',
                        ' /images/P048B096.JPG ',
                        ' /images/P048B097.JPG ',
                        ' /images/P048B098.JPG ',
                        ' /images/P048B099.JPG ',
                        ' /images/P049A002.JPG ',
                        ' /images/P049A003.JPG ',
                        ' /images/P049A005.JPG ',
                        ' /images/P049A048.JPG ',
                        ' /images/P049A049.JPG ',
                        ' /images/P049B055.JPG ',
                        ' /images/P049B063.JPG ',
                        ' /images/P049B070.JPG ',
                        ' /images/P049B071.JPG ',
                        ' /images/P049B081.JPG ',
                        ' /images/P049B084.JPG ',
                        ' /images/P049B091.JPG ',
                        ' /images/P050B060.JPG ',
                        ' /images/P050B065.JPG ',
                        ' /images/P050B075.JPG ',
                        ' /images/P050B093.JPG ',
                        ' /images/P050B105.JPG ',
                        ' /images/P051A048.JPG ',
                        ' /images/P054B058.JPG ',
                        ' /images/P054B059.JPG ',
                        ' /images/P054B060.JPG ',
                        ' /images/P054B061.JPG ',
                        ' /images/P054B062.JPG ',
                        ' /images/P054B063.JPG ',
                        ' /images/P054B064.JPG ',
                        ' /images/P054B065.JPG ',
                        ' /images/P054B066.JPG ',
                        ' /images/P054B067.JPG ',
                        ' /images/P054B068.JPG ',
                        ' /images/P054B069.JPG ',
                        ' /images/P054B070.JPG ',
                        ' /images/P054B071.JPG ',
                        ' /images/P054B072.JPG ',
                        ' /images/P054B073.JPG ',
                        ' /images/P054B074.JPG ',
                        ' /images/P054B075.JPG ',
                        ' /images/P054B076.JPG ',
                        ' /images/P054B077.JPG ',
                        ' /images/P054B078.JPG ',
                        ' /images/P054B079.JPG ',
                        ' /images/P054B080.JPG ',
                        ' /images/P054B081.JPG ',
                        ' /images/P054B082.JPG ',
                        ' /images/P054B083.JPG ',
                        ' /images/P054B084.JPG ',
                        ' /images/P054B085.JPG ',
                        ' /images/P054B086.JPG ',
                        ' /images/P054B087.JPG ',
                        ' /images/P054B088.JPG ',
                        ' /images/P054B089.JPG ',
                        ' /images/P054B090.JPG ',
                        ' /images/P054B091.JPG ',
                        ' /images/P054B092.JPG ',
                        ' /images/P054B093.JPG ',
                        ' /images/P054B094.JPG ',
                        ' /images/P054B095.JPG ',
                        ' /images/P054B096.JPG ',
                        ' /images/P054B097.JPG ',
                        ' /images/P054B098.JPG ',
                        ' /images/P054B099.JPG ',
                        ' /images/P054B100.JPG ',
                        ' /images/P054B101.JPG ',
                        ' /images/P054B102.JPG ',
                        ' /images/P054B103.JPG ',
                        ' /images/P054B104.JPG ',
                        ' /images/P054B105.JPG ',
                        ' /images/P054B106.JPG ',
                        ' /images/P054B107.JPG ',
                        ' /images/P054B108.JPG ',
                        ' /images/P054B109.JPG ',
                        ' /images/P054B110.JPG ',
                        ' /images/P054B111.JPG ',
                        ' /images/P054B112.JPG ',
                        ' /images/P055A001.JPG ',
                        ' /images/P055A002.JPG ',
                        ' /images/P055A003.JPG ',
                        ' /images/P055A004.JPG ',
                        ' /images/P055A005.JPG ',
                        ' /images/P055A006.JPG ',
                        ' /images/P055A007.JPG ',
                        ' /images/P055A008.JPG ',
                        ' /images/P055A009.JPG ',
                        ' /images/P055A010.JPG ',
                        ' /images/P055A011.JPG ',
                        ' /images/P055A012.JPG ',
                        ' /images/P055A013.JPG ',
                        ' /images/P055A014.JPG ',
                        ' /images/P055A015.JPG ',
                        ' /images/P055A016.JPG ',
                        ' /images/P055A017.JPG ',
                        ' /images/P055A018.JPG ',
                        ' /images/P055A019.JPG ',
                        ' /images/P055A020.JPG ',
                        ' /images/P055A022.JPG ',
                        ' /images/P055A032.JPG ',
                        ' /images/P055A035.JPG ',
                        ' /images/P055A037.JPG ',
                        ' /images/P055A039.JPG ',
                        ' /images/P055A040.JPG ',
                        ' /images/P055A045.JPG ',
                        ' /images/P055A047.JPG ',
                        ' /images/P055A048.JPG ',
                        ' /images/P055A049.JPG ',
                        ' /images/P055B051.JPG ',
                        ' /images/P055B055.JPG ',
                        ' /images/P055B056.JPG ',
                        ' /images/P055B057.JPG ',
                        ' /images/P055B059.JPG ',
                        ' /images/P055B060.JPG ',
                        ' /images/P055B061.JPG ',
                        ' /images/P055B062.JPG ',
                        ' /images/P055B063.JPG ',
                        ' /images/P055B064.JPG ',
                        ' /images/P055B065.JPG ',
                        ' /images/P055B066.JPG ',
                        ' /images/P055B067.JPG ',
                        ' /images/P055B069.JPG ',
                        ' /images/P055B072.JPG ',
                        ' /images/P055B073.JPG ',
                        ' /images/P055B074.JPG ',
                        ' /images/P055B076.JPG ',
                        ' /images/P055B082.JPG ',
                        ' /images/P055B083.JPG ',
                        ' /images/P055B084.JPG ',
                        ' /images/P055B085.JPG ',
                        ' /images/P055B086.JPG ',
                        ' /images/P055B087.JPG ',
                        ' /images/P056A034.JPG ',
                        ' /images/P056A035.JPG ',
                        ' /images/P056B080.JPG ',
                        ' /images/P057A009.JPG ',
                        ' /images/P057B068.JPG ',
                        ' /images/P057B085.JPG ',
                        ' /images/P057B100.JPG ',
                        ' /images/P058A013.JPG ',
                        ' /images/P058A018.JPG ',
                        ' /images/P058A019.JPG ',
                        ' /images/P058A042.JPG ',
                        ' /images/P058B058.JPG ',
                        ' /images/P059A047.JPG ',
                        ' /images/P060B085.JPG ',
                        ' /images/P060B092.JPG ',
                        ' /images/P060B093.JPG ',
                        ' /images/P061A039.JPG ',
                        ' /images/P061B078.JPG ',
                        ' /images/P061B079.JPG ',
                        ' /images/P061B080.JPG '
                        // Здесь добавьте остальные изображения по аналогии
                    ]);

                    // Добавить изображения по умолчанию в хранилище
                    const defaultImages = [
                        ' /images/P038A040.JPG ',
                        ' /images/P038A045.JPG ',
                        ' /images/P038A050.JPG ',
                        ' /images/P038B108.JPG ',
                        ' /images/P039A011.JPG ',
                        ' /images/P039A018.JPG ',
                        ' /images/P039B061.JPG ',
                        ' /images/P039B074.JPG ',
                        ' /images/P039B075.JPG ',
                        ' /images/P039B076.JPG ',
                        ' /images/P039B086.JPG ',
                        ' /images/P039B090.JPG ',
                        ' /images/P040A012.JPG ',
                        ' /images/P040A047.JPG ',
                        ' /images/P040B067.JPG ',
                        ' /images/P040B068.JPG ',
                        ' /images/P040B069.JPG ',
                        ' /images/P040B070.JPG ',
                        ' /images/P040B072.JPG ',
                        ' /images/P040B073.JPG ',
                        ' /images/P040B074.JPG ',
                        ' /images/P040B075.JPG ',
                        ' /images/P040B084.JPG ',
                        ' /images/P040B088.JPG ',
                        ' /images/P040B091.JPG ',
                        ' /images/P040B097.JPG ',
                        ' /images/P040B098.JPG ',
                        ' /images/P040B099.JPG ',
                        ' /images/P040B100.JPG ',
                        ' /images/P040B101.JPG ',
                        ' /images/P040B102.JPG ',
                        ' /images/P040B105.JPG ',
                        ' /images/P040B106.JPG ',
                        ' /images/P040B107.JPG ',
                        ' /images/P040B108.JPG ',
                        ' /images/P040B109.JPG ',
                        ' /images/P040B110.JPG ',
                        ' /images/P041A010.JPG ',
                        ' /images/P041A011.JPG ',
                        ' /images/P041A012.JPG ',
                        ' /images/P041A017.JPG ',
                        ' /images/P041A023.JPG ',
                        ' /images/P041A037.JPG ',
                        ' /images/P041A040.JPG ',
                        ' /images/P041A041.JPG ',
                        ' /images/P041A042.JPG ',
                        ' /images/P041B065.JPG ',
                        ' /images/P041B071.JPG ',
                        ' /images/P041B076.JPG ',
                        ' /images/P041B077.JPG ',
                        ' /images/P041B078.JPG ',
                        ' /images/P041B100.JPG ',
                        ' /images/P042A030.JPG ',
                        ' /images/P042A033.JPG ',
                        ' /images/P042B070.JPG ',
                        ' /images/P042B074.JPG ',
                        ' /images/P042B095.JPG ',
                        ' /images/P042B106.JPG ',
                        ' /images/P043A015.JPG ',
                        ' /images/P043A031.JPG ',
                        ' /images/P043A046.JPG ',
                        ' /images/P043B052.JPG ',
                        ' /images/P043B056.JPG ',
                        ' /images/P043B067.JPG ',
                        ' /images/P044A006.JPG ',
                        ' /images/P044A033.JPG ',
                        ' /images/P044A038.JPG ',
                        ' /images/P044B053.JPG ',
                        ' /images/P044B054.JPG ',
                        ' /images/P044B096.JPG ',
                        ' /images/P044B097.JPG ',
                        ' /images/P044B099.JPG ',
                        ' /images/P044B101.JPG ',
                        ' /images/P044B105.JPG ',
                        ' /images/P045A008.JPG ',
                        ' /images/P045A009.JPG ',
                        ' /images/P045A013.JPG ',
                        ' /images/P045A016.JPG ',
                        ' /images/P045A017.JPG ',
                        ' /images/P045A018.JPG ',
                        ' /images/P045A019.JPG ',
                        ' /images/P045A020.JPG ',
                        ' /images/P045A022.JPG ',
                        ' /images/P045A023.JPG ',
                        ' /images/P045A024.JPG ',
                        ' /images/P045A026.JPG ',
                        ' /images/P045A030.JPG ',
                        ' /images/P045A034.JPG ',
                        ' /images/P045A037.JPG ',
                        ' /images/P045A043.JPG ',
                        ' /images/P045A050.JPG ',
                        ' /images/P045B052.JPG ',
                        ' /images/P045B053.JPG ',
                        ' /images/P045B057.JPG ',
                        ' /images/P045B059.JPG ',
                        ' /images/P045B061.JPG ',
                        ' /images/P045B065.JPG ',
                        ' /images/P045B068.JPG ',
                        ' /images/P045B091.JPG ',
                        ' /images/P045B100.JPG ',
                        ' /images/P045B105.JPG ',
                        ' /images/P046A010.JPG ',
                        ' /images/P046A029.JPG ',
                        ' /images/P046B096.JPG ',
                        ' /images/P046B102.JPG ',
                        ' /images/P047A020.JPG ',
                        ' /images/P047A046.JPG ',
                        ' /images/P047B094.JPG ',
                        ' /images/P048A014.JPG ',
                        ' /images/P048A035.JPG ',
                        ' /images/P048B067.JPG ',
                        ' /images/P048B071.JPG ',
                        ' /images/P048B096.JPG ',
                        ' /images/P048B097.JPG ',
                        ' /images/P048B098.JPG ',
                        ' /images/P048B099.JPG ',
                        ' /images/P049A002.JPG ',
                        ' /images/P049A003.JPG ',
                        ' /images/P049A005.JPG ',
                        ' /images/P049A048.JPG ',
                        ' /images/P049A049.JPG ',
                        ' /images/P049B055.JPG ',
                        ' /images/P049B063.JPG ',
                        ' /images/P049B070.JPG ',
                        ' /images/P049B071.JPG ',
                        ' /images/P049B081.JPG ',
                        ' /images/P049B084.JPG ',
                        ' /images/P049B091.JPG ',
                        ' /images/P050B060.JPG ',
                        ' /images/P050B065.JPG ',
                        ' /images/P050B075.JPG ',
                        ' /images/P050B093.JPG ',
                        ' /images/P050B105.JPG ',
                        ' /images/P051A048.JPG ',
                        ' /images/P054B058.JPG ',
                        ' /images/P054B059.JPG ',
                        ' /images/P054B060.JPG ',
                        ' /images/P054B061.JPG ',
                        ' /images/P054B062.JPG ',
                        ' /images/P054B063.JPG ',
                        ' /images/P054B064.JPG ',
                        ' /images/P054B065.JPG ',
                        ' /images/P054B066.JPG ',
                        ' /images/P054B067.JPG ',
                        ' /images/P054B068.JPG ',
                        ' /images/P054B069.JPG ',
                        ' /images/P054B070.JPG ',
                        ' /images/P054B071.JPG ',
                        ' /images/P054B072.JPG ',
                        ' /images/P054B073.JPG ',
                        ' /images/P054B074.JPG ',
                        ' /images/P054B075.JPG ',
                        ' /images/P054B076.JPG ',
                        ' /images/P054B077.JPG ',
                        ' /images/P054B078.JPG ',
                        ' /images/P054B079.JPG ',
                        ' /images/P054B080.JPG ',
                        ' /images/P054B081.JPG ',
                        ' /images/P054B082.JPG ',
                        ' /images/P054B083.JPG ',
                        ' /images/P054B084.JPG ',
                        ' /images/P054B085.JPG ',
                        ' /images/P054B086.JPG ',
                        ' /images/P054B087.JPG ',
                        ' /images/P054B088.JPG ',
                        ' /images/P054B089.JPG ',
                        ' /images/P054B090.JPG ',
                        ' /images/P054B091.JPG ',
                        ' /images/P054B092.JPG ',
                        ' /images/P054B093.JPG ',
                        ' /images/P054B094.JPG ',
                        ' /images/P054B095.JPG ',
                        ' /images/P054B096.JPG ',
                        ' /images/P054B097.JPG ',
                        ' /images/P054B098.JPG ',
                        ' /images/P054B099.JPG ',
                        ' /images/P054B100.JPG ',
                        ' /images/P054B101.JPG ',
                        ' /images/P054B102.JPG ',
                        ' /images/P054B103.JPG ',
                        ' /images/P054B104.JPG ',
                        ' /images/P054B105.JPG ',
                        ' /images/P054B106.JPG ',
                        ' /images/P054B107.JPG ',
                        ' /images/P054B108.JPG ',
                        ' /images/P054B109.JPG ',
                        ' /images/P054B110.JPG ',
                        ' /images/P054B111.JPG ',
                        ' /images/P054B112.JPG ',
                        ' /images/P055A001.JPG ',
                        ' /images/P055A002.JPG ',
                        ' /images/P055A003.JPG ',
                        ' /images/P055A004.JPG ',
                        ' /images/P055A005.JPG ',
                        ' /images/P055A006.JPG ',
                        ' /images/P055A007.JPG ',
                        ' /images/P055A008.JPG ',
                        ' /images/P055A009.JPG ',
                        ' /images/P055A010.JPG ',
                        ' /images/P055A011.JPG ',
                        ' /images/P055A012.JPG ',
                        ' /images/P055A013.JPG ',
                        ' /images/P055A014.JPG ',
                        ' /images/P055A015.JPG ',
                        ' /images/P055A016.JPG ',
                        ' /images/P055A017.JPG ',
                        ' /images/P055A018.JPG ',
                        ' /images/P055A019.JPG ',
                        ' /images/P055A020.JPG ',
                        ' /images/P055A022.JPG ',
                        ' /images/P055A032.JPG ',
                        ' /images/P055A035.JPG ',
                        ' /images/P055A037.JPG ',
                        ' /images/P055A039.JPG ',
                        ' /images/P055A040.JPG ',
                        ' /images/P055A045.JPG ',
                        ' /images/P055A047.JPG ',
                        ' /images/P055A048.JPG ',
                        ' /images/P055A049.JPG ',
                        ' /images/P055B051.JPG ',
                        ' /images/P055B055.JPG ',
                        ' /images/P055B056.JPG ',
                        ' /images/P055B057.JPG ',
                        ' /images/P055B059.JPG ',
                        ' /images/P055B060.JPG ',
                        ' /images/P055B061.JPG ',
                        ' /images/P055B062.JPG ',
                        ' /images/P055B063.JPG ',
                        ' /images/P055B064.JPG ',
                        ' /images/P055B065.JPG ',
                        ' /images/P055B066.JPG ',
                        ' /images/P055B067.JPG ',
                        ' /images/P055B069.JPG ',
                        ' /images/P055B072.JPG ',
                        ' /images/P055B073.JPG ',
                        ' /images/P055B074.JPG ',
                        ' /images/P055B076.JPG ',
                        ' /images/P055B082.JPG ',
                        ' /images/P055B083.JPG ',
                        ' /images/P055B084.JPG ',
                        ' /images/P055B085.JPG ',
                        ' /images/P055B086.JPG ',
                        ' /images/P055B087.JPG ',
                        ' /images/P056A034.JPG ',
                        ' /images/P056A035.JPG ',
                        ' /images/P056B080.JPG ',
                        ' /images/P057A009.JPG ',
                        ' /images/P057B068.JPG ',
                        ' /images/P057B085.JPG ',
                        ' /images/P057B100.JPG ',
                        ' /images/P058A013.JPG ',
                        ' /images/P058A018.JPG ',
                        ' /images/P058A019.JPG ',
                        ' /images/P058A042.JPG ',
                        ' /images/P058B058.JPG ',
                        ' /images/P059A047.JPG ',
                        ' /images/P060B085.JPG ',
                        ' /images/P060B092.JPG ',
                        ' /images/P060B093.JPG ',
                        ' /images/P061A039.JPG ',
                        ' /images/P061B078.JPG ',
                        ' /images/P061B079.JPG ',
                        ' /images/P061B080.JPG '
                        // Здесь добавьте остальные изображения по аналогии
                    ];
                    defaultImages.forEach(url => {
                        objectStore.add({url});
                    });
                }
            };

            transaction.oncomplete = function () {
                db.close();
            };
        };

    }, []); // Пустой массив зависимостей, чтобы эффект запустился только один раз при монтировании



    const shuffleArray = (array) => {
        const newArray = [...array]; // Создаем копию массива
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem('favoriteImages')) || []
    );


    const addToFavorites = (imageUrl) => {
        alert("Сохранено")
        setFavorites((prevFavorites) => [...prevFavorites, imageUrl]);
        localStorage.setItem('favoriteImages', JSON.stringify([...favorites, imageUrl]));
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const uploadedImage = e.target.result;
                setImages((prevImages) => [uploadedImage, ...prevImages]);
            };

            reader.readAsDataURL(file);
        }
    };
    const handleImageDelete = (imageUrl) => {
        const updatedImages = images.filter((image) => image !== imageUrl);
        setImages(updatedImages);
        updateIndexedDB(updatedImages);
    };

    const updateIndexedDB = (updatedImages) => {
        const request = indexedDB.open('imagesDB', 1);

        request.onerror = function(event) {
            console.error("IndexedDB error:", event.target.error);
        };

        request.onsuccess = function(event) {
            const db = event.target.result;
            const transaction = db.transaction(['imagesStore'], 'readwrite');
            const objectStore = transaction.objectStore('imagesStore');

            // Очистить хранилище
            const clearRequest = objectStore.clear();

            clearRequest.onsuccess = function() {
                // Добавить обновленные изображения в хранилище
                updatedImages.forEach(url => {
                    objectStore.add({ url });
                });
                console.log("IndexedDB has been updated.");
            };

            clearRequest.onerror = function() {
                console.error("Error updating IndexedDB:", clearRequest.error);
            };

            transaction.oncomplete = function() {
                db.close();
            };
        };
    };

    useEffect(() => {
        updateIndexedDB(images);
    }, [images]);


    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const nextPage = () => {
        if (currentPage < Math.ceil(images.length / imagesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <header>
                <h1>Gallery</h1>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/aboutUs.html">About Us</a></li>
                        <li><Link to={'/favorites'}>Favorites</Link></li>
                        <li><Link to={'/Api_Photo'}>ApiPhoto</Link></li>
                        <li><Link to={'/pexels'}>API</Link></li>
                    </ul>
                </nav>

            </header>
            <div className='gallery-button'>
                <button onClick={() => setImages(shuffleArray(images))}>Перемешать галерею</button>
                <Link to={'/favorites'}>
                    <button>favorites</button>
                </Link>
                <label className="custom-file-upload">
                    <input type="file" accept="image/*" onChange={handleImageUpload}/>
                    Upload Image
                </label>
            </div>
            <div className="gallery">
                {currentImages.map((image, index) => (
                    <div>
                        <Link key={index} to={`/image-page/${encodeURIComponent(image)}`}>
                            <div className="gallery-image">
                                <Image imageUrl={image}/>
                            </div>
                        </Link>
                        <div className="button-image">
                            <button onClick={() => handleImageDelete(image)}><img src={"../Icons/icons8-удалить-32.png"}
                                                                                  alt={'aaa'}></img></button>
                            <button onClick={() => addToFavorites(image)}><img src={"../Icons/icons8-плюс-32.png"}
                                                                               alt={'mage'}></img></button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>
                    Prev
                </button>
                <button onClick={nextPage} disabled={currentPage === Math.ceil(images.length / imagesPerPage)}>
                    Next
                </button>
            </div>
            <div className="pagination">
                {Array.from({length: Math.ceil(images.length / imagesPerPage)}, (_, i) => i + 1).map(page => (
                    <button key={page} onClick={() => paginate(page)}>
                        {page}
                    </button>
                ))}
            </div>
            <br></br>
            <footer>
                <p>&copy; 2023 Gallery</p>
            </footer>
        </div>
    );
};

export default Gallery;
