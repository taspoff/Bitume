import {Traversal} from "./traversal.js";

export class UpdateUtils {

    static updatePacks() {
        return Traversal.getIndex().then(index => {
            return Promise.all([
                // PATHS
                Traversal.getEntitiesOfType(["path"]).then(paths => {
                    paths.forEach(path => {
                        let data = duplicate(path.data);
                        data.data.capacities = data.data.capacities.map(cid => {
                            if (typeof cid === "string") {
                                // not updated
                                return index[cid];
                            } else {
                                // updated
                                return index[cid._id];
                            }
                        });
                        return path.update(data);
                    })
                }),
                // PROFILES
                Traversal.getEntitiesOfType(["profile"]).then(profiles => {
                    profiles.forEach(profile => {
                        let data = duplicate(profile.data);
                        data.data.paths = data.data.paths.map(pid => {
                            if (typeof pid === "string") {
                                // not updated
                                return index[pid];
                            } else {
                                // updated
                                return index[pid._id];
                            }
                        });
                        return profile.update(data);
                    })
                }),
            ]);
        });
    }
}