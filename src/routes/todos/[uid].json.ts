import type { RequestHandler } from "@sveltejs/kit"
import { api } from "./_api"

export const del = (request) => {
    return api(request)
}

export const patch = async (request) => {
    const data = await request.request.formData()
    console.log(data);
    
    return api(request, {
        text: data.get("text").toString()
    })
}