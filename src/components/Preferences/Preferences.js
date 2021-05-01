import React, { useState, useEffect } from "react";
import { makeAPI } from "../API/api";
import "./Pref.css";
export default function Preferences(props) {
  const [userList, setList] = useState([{ name: "abc" }]);
  useEffect(async () => {
    console.log("good");
    //alert("hi");
    let a = await makeAPI(
      "https://jsonplaceholder.typicode.com/users?id=" + props.id
    );
    console.log(a);
    //alert(a);
    if (a !== null) setList(a);
  }, []);
  return (
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-8 mx-auto">
          <div class="my-4">
            <form>
              <div class="row mt-5 align-items-center">
                <div class="col-md-3 text-center mb-5"></div>
                <div class="col">
                  <div class="row align-items-center">
                    <div class="col-md-7">
                      <h4 class="mb-1">{userList[0].name}</h4>
                      <p class="small mb-3">
                        <span class="badge badge-dark">
                          {userList[0].address?.city}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div class="row mb-4">
                    <div class="col-md-5">
                      <p class="text-muted">
                        Company Name : {userList[0].company?.name}
                      </p>
                    </div>
                    <div class="col-md-7"></div>
                    <div class="col">
                      <p class="text-muted"> {userList[0].phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
