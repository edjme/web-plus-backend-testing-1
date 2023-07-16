import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  it('должен добавить новый пост', () => {
    const post: Omit<Post, 'id' | 'date'> = {
      text: 'Mocked post',
    };

    postsService.create(post);

    // Проверяем, что пост был успешно добавлен
    const addedPost = postsService.find(post.text);
    expect(addedPost).toBeDefined();
    expect(addedPost.text).toBe(post.text);
  });

  it('должен найти пост', () => {
    const preExistingPost: Omit<Post, 'id' | 'date'> = {
      text: 'Some pre-existing post',
    };
    postsService.create(preExistingPost);

    const foundPost = postsService.find(preExistingPost.text);

    // Проверяем, что пост был успешно найден
    expect(foundPost).toBeDefined();
    expect(foundPost.text).toBe(preExistingPost.text);
  });
});
