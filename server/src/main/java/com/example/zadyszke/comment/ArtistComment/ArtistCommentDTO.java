package com.example.zadyszke.comment.ArtistComment;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
class ArtistCommentDTO {

    private Long id;
    private String content;
    private String author;
    private LocalDateTime creationDateTime;
    private LocalDateTime modifyDateTime;

    public ArtistComment toComment(){
        return ArtistComment.builder()
                .id(id)
                .content(content)
                .author(author)
                .creationDateTime(creationDateTime)
                .modifyDateTime(modifyDateTime)
                .build();
    }

    public static ArtistCommentDTO of(ArtistComment artistComment){
        return ArtistCommentDTO.builder()
                .id(artistComment.getId())
                .content(artistComment.getContent())
                .author(artistComment.getAuthor())
                .creationDateTime(artistComment.getCreationDateTime())
                .modifyDateTime(artistComment.getModifyDateTime())
                .build();
    }
}