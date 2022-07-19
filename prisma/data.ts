/* 

https://randomapi.com/code/api/bar0hz9n

const faker = require('faker')

const results = []
for (let i = 0; i < 10; i++) {
    const Name = faker.name.findName();
    const Email = (faker.internet.userName()).toLowerCase().replace("_", "") + "@gmail.com";
    const Image = faker.image.avatar()
    const posts = []
    for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
        const Title = faker.lorem.sentence();
        const Content = faker.lorem.paragraphs()
        posts.push({
            title: Title,
            content: Content,
            published: true
        })
    }
    results.push({
        name: Name,
        email: Email,
        image: Image,
        posts: { create: posts } 
    })
}
api.results = results
*/

export const users = [
{
  name: "Bethel Runolfsson",
  email: "carlie.lockman@gmail.com",
  image: "https://s3.amazonaws.com/uifaces/faces/twitter/thomasschrijer/128.jpg",
  posts: {
    create: [
      {
        title: "Aut esse nostrum distinctio ea alias dignissimos.",
        content: "Quia facere aliquam perspiciatis ex. Est et voluptas nulla. Rerum officiis quia eos dolorem quos incidunt et.\n \rQuia earum quia minus animi voluptates. Porro tempore alias aut fugit in. Dolorem eaque ea quibusdam ex aut voluptas. Quo doloribus odio doloribus aut. Autem odio est natus odio.\n \rDolorum neque odit ab quas debitis a dolorem consequatur necessitatibus. Quibusdam dolor sapiente in distinctio nam enim. Magni facere quas dolorum enim at quia.",
        published: true
      },
      {
        title: "In est quia laboriosam voluptatem repudiandae et.",
        content: "Impedit asperiores quod aliquid dolor aspernatur dolor. Et alias delectus illum incidunt occaecati illo totam id ea. Accusamus qui facere ab quibusdam sapiente voluptas quia voluptatem. Repudiandae eum fuga sit doloribus quasi. Error dolorum ex est ad facilis officiis est. Magni adipisci aspernatur neque blanditiis.\n \rNeque non dolorum voluptatibus suscipit doloremque qui. Esse quod aut enim aut error enim molestiae quisquam sit. Cupiditate vel atque quod dolores eos. Consequatur perferendis et. Aut harum ducimus quia blanditiis.\n \rUt consequatur corrupti enim officiis laborum earum maiores illum ipsa. Praesentium magni in aut. Et ullam voluptatem. Sequi non quibusdam aut. Qui dolor accusamus. Eum ullam consequatur id non.",
        published: true
      }
    ]
  }
},
{
  name: "Sylvester Gislason",
  email: "nathen.wilkinson@gmail.com",
  image: "https://s3.amazonaws.com/uifaces/faces/twitter/keryilmaz/128.jpg",
  posts: {
    create: [
      {
        title: "Dolores nihil quae ut non accusantium illum.",
        content: "Laudantium ipsam est culpa perspiciatis. Natus a voluptatem itaque et mollitia. A id veritatis quasi voluptatem vel consequuntur nulla. Et itaque enim nam nostrum quis veniam assumenda. Iste quidem architecto qui est odio molestiae repudiandae.\n \rModi voluptate reprehenderit aliquam quis ut reprehenderit. Voluptatem in totam pariatur qui dolorum provident. Sit fugit recusandae minus accusamus quasi ullam. Saepe sequi quis in provident possimus.\n \rImpedit error odio maiores error officia qui et. Veniam enim inventore nihil at. Saepe dolores et quia quis maxime rerum fugit dolorem placeat.",
        published: true
      }
    ]
  }
},
{
  name: "Crystal Barton",
  email: "vincenzo4@gmail.com",
  image: "https://s3.amazonaws.com/uifaces/faces/twitter/nyancecom/128.jpg",
  posts: {
    create: [
      {
        title: "Sint similique dolor ut molestiae impedit molestiae officia iure.",
        content: "Consequuntur similique amet repudiandae sit quia quo eveniet praesentium aut. Delectus qui nihil. Voluptatum nihil ea rerum libero voluptates consectetur accusamus. Dolores dolor veniam voluptatem dolorem rerum tempore veritatis. Aut adipisci quidem pariatur nobis repellendus. Officia aut qui facilis corporis numquam error repellendus qui expedita.\n \rSimilique officia delectus eum. Ipsa qui possimus aliquid sint dolor. Quasi exercitationem dolor et a corporis aliquam nihil voluptatem.\n \rSuscipit occaecati magni veniam odit id laborum quo est eligendi. Explicabo ut debitis nam laborum doloremque repudiandae sunt sapiente commodi. Tempora sit natus rerum ea quis voluptatem. Qui et veritatis quo.",
        published: true
      },
      {
        title: "Voluptatem distinctio excepturi occaecati non quod aut eligendi.",
        content: "Recusandae molestias voluptas molestiae doloribus commodi expedita assumenda molestiae. Dolorum qui voluptatem sapiente. Sit harum est rerum soluta molestiae. Quos facere ipsam ea nobis. Architecto qui dolore eligendi asperiores nobis distinctio et placeat consequatur. Qui delectus cumque est accusantium non vel perspiciatis.\n \rIllum modi sapiente quia quod dolores blanditiis sed. Nihil eligendi facere a possimus enim id. Voluptatem sunt consequatur quisquam ut minus illum possimus. Voluptatum et laborum voluptate est voluptatem nihil.\n \rQuibusdam molestias sint voluptate eaque dolorem repellendus quasi non nam. Nihil debitis est quis aperiam est at veritatis nihil. Velit quaerat repellat minima. Maxime et et consequuntur ab dignissimos nisi magnam.",
        published: true
      }
    ]
  }
},
{
  name: "Dr. Mozell Schaefer",
  email: "havenhaley@gmail.com",
  image: "https://s3.amazonaws.com/uifaces/faces/twitter/canapud/128.jpg",
  posts: {
    create: [
      {
        title: "Fugit harum sit qui provident laboriosam autem id velit.",
        content: "Quibusdam dolorum fuga et architecto asperiores ratione consequatur modi. Quas fuga aut mollitia saepe quas eum nisi. Dolorum incidunt qui laborum cum excepturi libero ut. Aliquam incidunt et voluptas rerum voluptates numquam voluptate numquam. Beatae qui soluta quam corporis distinctio dolorum veniam iure. Consequatur assumenda magni itaque amet beatae.\n \rVelit dolorem dolor sed. Non illo doloremque asperiores voluptate et quae ab veniam. Est molestiae placeat repellendus dicta rem aperiam aspernatur. Velit omnis ipsum deleniti ipsam temporibus perferendis laborum eum. Aspernatur laudantium aliquam commodi voluptatum consequatur qui.\n \rMaxime sequi et. Iure eveniet rerum sint vitae corrupti. Nobis dolores laboriosam nisi cum quisquam enim autem excepturi eligendi. Culpa fuga nulla necessitatibus sed omnis nulla dolor cupiditate cumque. Sit reiciendis non culpa dolorum est soluta reprehenderit. Nemo in quisquam ut dicta.",
        published: true
      },
      {
        title: "Sunt impedit vitae similique.",
        content: "Vero et est voluptas voluptatem voluptas facilis modi voluptates. Eum deserunt aut quia sed explicabo minus vitae ducimus voluptates. Quia odio quo necessitatibus et facilis. Id aut ab dolorum.\n \rAut libero consequuntur et quia consequatur vitae eos aut inventore. Et aperiam exercitationem tenetur quia aut eius est consequatur rerum. Pariatur natus est qui laudantium in.\n \rAspernatur dolores quia laboriosam soluta ipsum est eius nihil quis. Dolores eligendi sed omnis doloribus asperiores nulla commodi sapiente earum. Ab nobis sit distinctio. Accusamus neque eum nemo assumenda non dolorum eligendi eligendi. Voluptas id eius.",
        published: true
      }
    ]
  }
},
{
  name: "Bridget Jones",
  email: "tyrel.mclaughlin@gmail.com",
  image: "https://s3.amazonaws.com/uifaces/faces/twitter/safrankov/128.jpg",
  posts: {
    create: [
      {
        title: "Illum vero mollitia nam.",
        content: "Eos esse consequatur voluptatum quibusdam. Mollitia impedit necessitatibus nemo fugit voluptas reprehenderit. Ducimus eos et. Dicta corporis veritatis fugiat deserunt aut ducimus quas sequi perspiciatis. Itaque aut veniam rerum suscipit autem voluptatem suscipit in qui.\n \rEt architecto placeat. Alias esse occaecati similique sit repudiandae voluptas quidem et. Inventore laudantium aut ea inventore quos repellendus. Consectetur sequi sed impedit cupiditate dignissimos repellat. Corporis nihil omnis eligendi. Nihil non libero maiores quis.\n \rSint fugit esse mollitia in id. Voluptatem sunt tempora non. Deleniti et ut excepturi sunt quis. Sunt consequatur enim nisi omnis tenetur ut voluptates eius. Quidem corporis dolores culpa impedit dolores.",
        published: true
      },
      {
        title: "Tenetur perferendis saepe ipsam sit vel.",
        content: "Incidunt voluptate voluptatem animi ut itaque magnam unde laboriosam repellendus. Natus qui possimus. Eum qui suscipit vitae. Ipsum et voluptates ratione omnis.\n \rQui provident quasi nostrum et doloribus. Consequuntur quia blanditiis mollitia non qui ut nostrum totam. Ut accusantium error ea sed voluptas exercitationem ut ab.\n \rSed maiores quis rerum eum. Omnis ipsum nemo consequatur. At non omnis ut.",
        published: true
      }
    ]
  }
},
{
  name: "Dominique Haley",
  email: "destiny52@gmail.com",
  image: "https://s3.amazonaws.com/uifaces/faces/twitter/ky/128.jpg",
  posts: {
    create: [
      {
        title: "Cumque est mollitia similique laudantium omnis excepturi voluptas voluptate neque.",
        content: "Et ducimus voluptas recusandae aut qui alias. Dolore pariatur accusantium qui aspernatur neque quasi dolores. Consequuntur atque aut cum quia enim officia.\n \rAut quo eos facere dolor. Commodi consequatur et ipsam sequi tempora. Dolor beatae error perspiciatis quas repellendus et.\n \rSoluta voluptate molestias corporis tempore omnis inventore ipsam. Reiciendis qui eum repudiandae eos sunt. Dolorem vel rerum ratione sequi veritatis rerum et necessitatibus ea.",
        published: true
      },
      {
        title: "Nihil est officia quia facere eveniet.",
        content: "Repellendus facilis labore aspernatur. Qui sed nostrum sunt repellat similique consequatur omnis aliquam. Sed consectetur doloremque quisquam quam quia dolore est quae ipsum.\n \rQuasi deleniti at ut corporis amet. Et et ut officiis earum autem. Qui maxime quas officiis adipisci qui esse.\n \rEaque odio sunt repellat occaecati aut facilis totam in error. Molestiae minima et aliquam. Voluptatem eos magnam ut quis vitae sint. Et quidem nesciunt sed consequuntur dignissimos et optio voluptatem quam.",
        published: true
      }
    ]
  }
},
{
  name: "Luis Lynch",
  email: "rooseveltrath@gmail.com",
  image: "https://s3.amazonaws.com/uifaces/faces/twitter/chatyrko/128.jpg",
  posts: {
    create: [
      {
        title: "Suscipit illo facere ut corrupti similique est.",
        content: "Expedita mollitia ipsa numquam omnis magni error dolorem. Neque eaque soluta. Facilis earum praesentium. Minima officia laboriosam commodi nam rerum esse accusamus. Dolor vel dolores atque architecto dolorum quis eius. Qui nostrum nesciunt est dolores voluptatibus ut tempora.\n \rLaboriosam aliquid qui laborum voluptatem. Voluptatum placeat maiores. Reiciendis architecto mollitia in id est dolorem sint. Dolor velit dolores quas adipisci aperiam sed omnis. Voluptate perspiciatis in.\n \rMaxime ea voluptatem enim quaerat explicabo amet omnis. Porro laborum et quisquam veritatis velit. Ut debitis aliquid similique. Sapiente qui illum quia. Doloribus veniam qui sint voluptates.",
        published: true
      },
      {
        title: "Voluptatem quidem autem veritatis eos.",
        content: "Rerum quos consequatur earum veniam beatae voluptas rem id accusamus. Cumque aut porro fuga dolorem. Non est corrupti consequatur numquam sunt suscipit hic iure et. Incidunt omnis fugit voluptatum fugit ratione fuga repellat et aut. Tempore consequuntur optio consequatur voluptatem.\n \rCum quaerat quia. Rem dolores libero dignissimos. Laudantium neque natus vero autem temporibus dolorem pariatur tempora.\n \rVoluptates at quis quos fugiat omnis fugit omnis. Assumenda omnis cumque accusamus beatae ipsam optio. Qui in ex impedit id et repudiandae officiis. Ratione et quos earum temporibus quos et modi. Id nemo et deserunt quo ipsum perferendis molestiae.",
        published: true
      },
      {
        title: "Quas est eius quibusdam sapiente voluptatum.",
        content: "In dicta necessitatibus sunt. Laudantium aut deleniti fugiat excepturi qui voluptates ratione repellat et. Tenetur eveniet eligendi et necessitatibus molestiae accusamus est. Omnis distinctio sed magni eaque atque et voluptatem.\n \rIllo et autem facilis. Laborum dolorem nesciunt. Laborum omnis ut iusto ut earum totam molestiae omnis.\n \rAsperiores rem ad. Et tenetur libero sit sint dolor nesciunt qui rerum amet. Incidunt numquam minus occaecati ut eos molestiae reiciendis.",
        published: true
      }
    ]
  }
},
{
  name: "Sven Reichert IV",
  email: "tyrelpagac@gmail.com",
  image: "https://s3.amazonaws.com/uifaces/faces/twitter/petebernardo/128.jpg",
  posts: {
    create: [
      {
        title: "Adipisci rerum rerum omnis.",
        content: "Iusto facilis velit. Et quod illum deserunt. Nisi ut facilis quibusdam odio explicabo nobis.\n \rPlaceat ipsum officiis nulla quia illo natus. Aut sint et vel sed. Quod dolorum quod temporibus laboriosam voluptatem assumenda odio. Explicabo numquam aut quia doloribus. Ut voluptatem ut officia velit nihil architecto illum esse reiciendis. Vero voluptatem aut doloremque aspernatur eveniet tenetur ut.\n \rDoloribus eos non facere molestiae eum. Ab sint sunt magnam in nostrum. Sed nobis officiis aut consectetur. Minus reiciendis sunt ut. Nihil nam quis voluptatibus odit nam fugiat ut qui.",
        published: true
      },
      {
        title: "Possimus cupiditate recusandae maiores.",
        content: "Sequi voluptatem quia adipisci. Incidunt accusantium est velit reiciendis velit. Atque quis eius quasi neque. Sit voluptate ipsam illum.\n \rA necessitatibus commodi. Et nobis recusandae veritatis ut qui praesentium cumque praesentium. Et corporis enim numquam modi. Rem praesentium quidem.\n \rSimilique molestias laboriosam. Ullam culpa consequatur. Laborum est quia. Eos omnis nisi eum eligendi. Aut veritatis aspernatur sint quasi sequi.",
        published: true
      }
    ]
  }
},
{
  name: "Marcelo Ziemann",
  email: "levi.rodriguez90@gmail.com",
  image: "https://s3.amazonaws.com/uifaces/faces/twitter/snowshade/128.jpg",
  posts: {
    create: [
      {
        title: "Ipsam ut ipsa maxime consequatur ut autem.",
        content: "Qui nemo odio accusantium esse delectus officia exercitationem enim sunt. Beatae molestias aliquid veritatis molestiae quia et odit magnam magni. Officia dolorum temporibus nulla possimus architecto quisquam. Nostrum fugit optio voluptas corporis natus. A deleniti ipsam quis minus doloribus cupiditate at quibusdam fuga. Exercitationem deserunt culpa cum officiis ut.\n \rEt omnis eum. Aspernatur doloribus voluptate dolores porro non beatae culpa. Quae quia qui et quod occaecati recusandae amet.\n \rDelectus est possimus recusandae error ex nobis. Delectus ipsa quia unde aut deleniti. Minus eos repudiandae optio voluptatem et laudantium delectus.",
        published: true
      },
      {
        title: "Quia assumenda non libero quibusdam nobis voluptatem.",
        content: "Doloribus accusamus fugit. Corrupti qui et numquam voluptatem. Qui rem assumenda commodi magni explicabo dolor. Corrupti quis quaerat facilis dolorem et. Dolore qui laborum qui similique ab ipsam velit.\n \rTemporibus perspiciatis molestiae aliquid aspernatur quidem corrupti. Ipsum suscipit sed et placeat. Qui adipisci tenetur aut dolor rerum ut quis qui quia. Ut eum in esse maxime qui. Consequatur ipsam distinctio cupiditate soluta occaecati qui quis libero.\n \rNatus voluptatem voluptatem sed qui et voluptatibus. Quia hic at numquam. Aspernatur qui id enim quibusdam voluptatem sunt eius aut quia. Accusamus voluptatum eos aut. Sed ex ex vitae quia eligendi tenetur porro ratione. Tenetur laboriosam dignissimos autem nisi officia expedita illo corporis molestias.",
        published: true
      },
      {
        title: "Architecto asperiores ut perspiciatis praesentium odit cumque culpa.",
        content: "Id ut ea est asperiores et quam blanditiis debitis. Occaecati id placeat nihil perferendis quasi id. Repellat maiores consequatur rem dolorum aut culpa. Reiciendis impedit excepturi error et non labore.\n \rLaboriosam magni vero. Minus animi officiis et. Quia consectetur similique eveniet. Praesentium eum ipsa explicabo aut qui repellat molestiae laboriosam ipsam. Omnis eligendi culpa asperiores.\n \rAd est facilis quia recusandae in. Consequatur sapiente deleniti tempore sit. Sit laboriosam minus quos neque. Molestiae non culpa quia magni velit dolorem voluptates cupiditate.",
        published: true
      }
    ]
  }
},
{
  name: "Thea Lowe",
  email: "yesenia90@gmail.com",
  image: "https://s3.amazonaws.com/uifaces/faces/twitter/grahamkennery/128.jpg",
  posts: {
    create: [
      {
        title: "Omnis ex ad modi harum ex aspernatur repudiandae.",
        content: "Eos cumque repellendus esse fugit deleniti. Ea saepe animi voluptas voluptas esse quam sequi delectus porro. Qui id et.\n \rAd distinctio quis quibusdam. Distinctio beatae dolorem doloribus omnis quo culpa et amet sint. Dicta harum ut non omnis ut nihil. Optio enim unde distinctio qui. Et officiis eligendi ad dignissimos expedita explicabo. Nulla nobis veniam assumenda ea dolores nihil eius a.\n \rPerferendis voluptas iusto consequatur libero nostrum. Perspiciatis et distinctio. Reiciendis soluta voluptatem fuga voluptatibus eius. Illum voluptatibus deleniti architecto eius distinctio.",
        published: true
      }
    ]
  }
}
]
