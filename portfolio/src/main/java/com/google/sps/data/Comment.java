// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.data;

public class Comment {

  private String name = new String();
  private String text = new String();
  private Boolean like = new Boolean(false);

  public void setComment(String inputName, String inputText, Boolean inputLike){
    name = inputName;
    text = inputText;
    like = inputLike;
  }

  public String getName(){
    return name;
  }

  public String getText(){
    return text;
  }

  public Boolean getLike(){
    return like;
  }
}