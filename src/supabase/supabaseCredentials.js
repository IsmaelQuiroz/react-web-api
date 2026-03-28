import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pxwqlalghxooofkzsght.supabase.co";
const supabaseKey = "sb_publishable_dC4ugrBYXQkGkstzAyVLrA_8Hg2WSFo";
//const supabaseAnonPublic = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB4d3FsYWxnaHhvb29ma3pzZ2h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQzMDkzNjUsImV4cCI6MjA4OTg4NTM2NX0.peCX82jVEOywhQucOWvhjxqSAfi7i5AIZ39tj2ub4ds";

const supabase = createClient(supabaseUrl,supabaseKey);

//export const uploadImage = async (file, bucket = "EcommerceStorage" ) => {
export const uploadImage = async (file, bucket = "EcommerceStorage" ) => {
    try{
        console.log('creacion cliente',supabase);
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()
        .toString(36)
        .substring(2,15)}_${Date.now()}.${fileExt}`;

        //const filePath = `${folder}/${fileName}`;
        const filePath = `${fileName}`;
      

        //const {error} = await supabase.storage
        const {error} = await  supabase.storage
            .from(bucket)
            .upload(filePath,file,{
            cachecontrol: "3600",
            upsert: false
        })

        const { data:urlData} = supabase.storage
            .from(bucket)
            .getPublicUrl(filePath);

            console.log("urlData_",urlData);
        return urlData.publicURL;


        // const { publicUrl } = supabase.storage
        // .from(bucket)
        // .getPublicUrl(filePath).data;

    }catch(error){
        console.error("Error al subir imagen", error);
        throw error;
    }
}