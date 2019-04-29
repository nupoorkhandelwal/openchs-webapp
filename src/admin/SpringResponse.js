class SpringResponse {
    static toReactAdminResourceListResponse(json, resource) {
        if(json == null) {
            console.log('json can not be undefined');
        }
        if (json["content"]) {
            return {
                data: json['content'] || [],
                total: json["totalElements"] || 0
            };
        } else if (json['_embedded']) {
            let resources = json['_embedded'][resource] || [];
            let page = json['page'];
            let totalElements = page ? page["totalElements"] : resources.length;
            return {
                data: resources,
                total: totalElements || 0
            };
        } else {
            return {
                data: [],
                total: ([]).length
            };
        }
    }
}

export default SpringResponse;