import network from "common/config/network.json";

const FRACTO_DB_URL = network.db_server_url;

export class MediaElementData {
   static fetch_media_element = (media_element_id, cb) => {
      const url = `${FRACTO_DB_URL}/media_element?id=${media_element_id}`
      fetch(url)
         .then(response => response.json())
         .then(result => {
            cb(result)
         })
         .catch(e => {
            console.log('error fetching media element', e.message)
            cb({})
         })
   }

   static save_media_element = (media_element, cb) => {
      const url = media_element.id
         ? `${FRACTO_DB_URL}/update_media_element`
         : `${FRACTO_DB_URL}/new_media_element`;
      const data = {
         type: media_element.type,
         part_of: media_element.part_of,
         meta: media_element.meta,
         data: media_element.data,
      }
      if (media_element.id) {
         data.id = media_element.id
      }
      const data_keys = Object.keys(data)
      const encoded_params = data_keys.map(key => {
         return `${key}=${data[key]}`
      })
      const data_url = `${url}?${encoded_params.join('&')}`
      fetch(data_url, {
         body: JSON.stringify(data), // data you send.
         headers: {'Content-Type': 'application/json'},
         method: 'POST',
      }).then(function (response) {
         // console.log('response', response)
         if (response.body) {
            return response.json();
         }
      }).then(function (json_data) {
         // console.log("save_media_element", url, json_data)
         cb(json_data)
      });
   }

}

export default MediaElementData;
