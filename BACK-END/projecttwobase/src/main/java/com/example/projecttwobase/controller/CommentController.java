package com.example.projecttwobase.controller;

import com.example.projecttwobase.model.Comment;
import com.example.projecttwobase.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CommentController {

    @Autowired
    private CommentService commentService;

    //ENDPOINT THAT ALLOWS A USER TO CREATE A COMMENT FOR A POST / REFER TO COMMENT SERVICE
    @PostMapping("/{postId}/comment")
    public Comment createComment(@RequestBody Comment comment, @PathVariable Long postId) {
        return commentService.createComment(comment, postId);
    }

    //ENDPOINT THAT ALLOWS A USER TO GET COMMENTS BY POST ID / REFER TO COMMENT SERVICE
    @GetMapping("/post/{postId}/comments")
    public List<Comment> getCommentByPostId(@PathVariable Long postId) { return commentService.getCommentsByPostId(postId);
   }

    // GET COMMENT BY USERNAME
    @GetMapping("/{username}/comments")
    public List<Comment> getCommentByUsername(@PathVariable String username) {
        return commentService.getCommentsByUsername(username);
    }

    //ENDPOINT THAT ALLOWS A USER TO DELETE A COMMENT / REFER TO COMMENT SERVICE
    @DeleteMapping("/comment/{commentId}")
    public ResponseEntity<Object> deleteCommentByCommentId(@PathVariable Long commentId) {
        return commentService.deleteCommentByCommentId(commentId);
    }

}